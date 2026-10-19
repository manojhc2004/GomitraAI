"""Generate professional, on-demand Gomitra AI prediction reports."""

from __future__ import annotations

import logging
from datetime import datetime
from io import BytesIO
from pathlib import Path
from typing import Any, Iterable

from PIL import Image
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfgen.canvas import Canvas
from reportlab.platypus import Image as ReportImage
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

from app.reports.breed_catalog import BREED_FIELDS, get_breed_information

logger = logging.getLogger(__name__)

PAGE_MARGIN = 14 * mm
CONTENT_WIDTH = A4[0] - PAGE_MARGIN * 2
GREEN = colors.HexColor("#15803D")
GREEN_DARK = colors.HexColor("#166534")
LIGHT_GREEN = colors.HexColor("#DCFCE7")
PALE_GREEN = colors.HexColor("#F0FDF4")
DARK = colors.HexColor("#0F172A")
MUTED = colors.HexColor("#475569")
LINE = colors.HexColor("#D7E4D9")
AMBER = colors.HexColor("#B45309")
RED = colors.HexColor("#B91C1C")
NOT_AVAILABLE = "Not Available"

def _styles() -> dict[str, ParagraphStyle]:
    """Return consistent typography styles for the report."""
    base = getSampleStyleSheet()
    return {
        "brand": ParagraphStyle("brand", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=22, leading=25, textColor=DARK),
        "green": ParagraphStyle("green", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=22, leading=25, textColor=GREEN),
        "subtitle": ParagraphStyle("subtitle", parent=base["Normal"], fontName="Helvetica", fontSize=8.5, leading=11, textColor=MUTED),
        "title": ParagraphStyle("title", parent=base["Heading1"], fontName="Helvetica-Bold", fontSize=23, leading=27, textColor=DARK),
        "section": ParagraphStyle("section", parent=base["Heading2"], fontName="Helvetica-Bold", fontSize=10.5, leading=12, textColor=GREEN_DARK, spaceBefore=7, spaceAfter=4),
        "body": ParagraphStyle("body", parent=base["BodyText"], fontName="Helvetica", fontSize=8, leading=9.4, textColor=DARK),
        "label": ParagraphStyle("label", parent=base["BodyText"], fontName="Helvetica-Bold", fontSize=7.6, leading=8.8, textColor=MUTED),
        "small": ParagraphStyle("small", parent=base["BodyText"], fontName="Helvetica", fontSize=7.1, leading=8.3, textColor=MUTED),
        "footer": ParagraphStyle("footer", parent=base["Normal"], fontName="Helvetica", fontSize=7.2, leading=8.5, textColor=MUTED, alignment=TA_CENTER),
        "badge_high": ParagraphStyle("badge_high", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=8.5, textColor=GREEN_DARK, alignment=TA_CENTER),
        "badge_medium": ParagraphStyle("badge_medium", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=8.5, textColor=AMBER, alignment=TA_CENTER),
        "badge_low": ParagraphStyle("badge_low", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=8.5, textColor=RED, alignment=TA_CENTER),
    }


def _paragraph(value: Any, style: ParagraphStyle) -> Paragraph:
    """Render optional data safely, using Not Available for missing values."""
    text = str(value).strip() if value is not None and str(value).strip() else NOT_AVAILABLE
    return Paragraph(text.replace("&", "&amp;"), style)


def _table(rows: list[list[Any]], widths: list[float], *, header: bool = False) -> Table:
    """Create a consistent table with readable padding and green accents."""
    table = Table(rows, colWidths=widths, repeatRows=1 if header else 0, hAlign="LEFT")
    commands: list[tuple[Any, ...]] = [("GRID", (0, 0), (-1, -1), 0.35, LINE), ("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 7), ("RIGHTPADDING", (0, 0), (-1, -1), 7), ("TOPPADDING", (0, 0), (-1, -1), 4), ("BOTTOMPADDING", (0, 0), (-1, -1), 4)]
    if header:
        commands.extend([("BACKGROUND", (0, 0), (-1, 0), GREEN), ("TEXTCOLOR", (0, 0), (-1, 0), colors.white), ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold")])
    else:
        commands.append(("BACKGROUND", (0, 0), (0, -1), PALE_GREEN))
    table.setStyle(TableStyle(commands))
    return table


def _section_bar(title: str, style: ParagraphStyle) -> Table:
    """Create a compact green section heading bar."""
    return Table(
        [[Paragraph(title, style)]],
        colWidths=[CONTENT_WIDTH],
        style=TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), LIGHT_GREEN),
            ("LINEBELOW", (0, 0), (-1, -1), 0.8, GREEN),
            ("LEFTPADDING", (0, 0), (-1, -1), 6),
            ("RIGHTPADDING", (0, 0), (-1, -1), 6),
            ("TOPPADDING", (0, 0), (-1, -1), 3),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
        ]),
    )


def _image_flowable(image_path: str | Path | None) -> ReportImage | None:
    """Load and proportionally resize an uploaded image when available."""
    if not image_path:
        return None
    path = Path(image_path)
    if not path.is_file():
        logger.info("Report image path does not exist: %s", path)
        return None
    try:
        with Image.open(path) as image:
            width, height = image.size
        scale = min((155 * mm) / width, (82 * mm) / height)
        return ReportImage(str(path), width=width * scale, height=height * scale, hAlign="CENTER")
    except Exception:
        logger.exception("Unable to load report image: %s", path)
        return None


def _confidence_level(confidence: float) -> str:
    """Convert confidence percentage into the report's tier label."""
    return "High" if confidence >= 80 else "Medium" if confidence >= 50 else "Low"


def _draw_header_footer(canvas_obj: Canvas, document: Any) -> None:
    """Draw a simple Gomitra mark and page footer on every page."""
    canvas_obj.saveState()
    x = PAGE_MARGIN
    y = A4[1] - PAGE_MARGIN + 2
    canvas_obj.setFillColor(MUTED)
    canvas_obj.setFont("Helvetica", 7.2)
    canvas_obj.drawCentredString(A4[0] / 2, 12 * mm, "Generated by Gomitra AI  |  Version 2.0")
    canvas_obj.setFont("Helvetica", 6.8)
    canvas_obj.drawCentredString(A4[0] / 2, 8 * mm, f"Powered by ResNet18  |  FastAPI  |  Gemini AI  |  Page {document.page}")
    canvas_obj.restoreState()


def _top_rows(top_predictions: Iterable[Any] | None, styles: dict[str, ParagraphStyle]) -> list[list[Any]]:
    """Normalize optional Top-3 prediction objects or dictionaries."""
    rows: list[list[Any]] = []
    if top_predictions:
        for rank, item in enumerate(top_predictions, 1):
            breed = item.get("breed") if isinstance(item, dict) else getattr(item, "breed", None)
            confidence = item.get("confidence") if isinstance(item, dict) else getattr(item, "confidence", None)
            if breed is not None and confidence is not None:
                rows.append([_paragraph(rank, styles["body"]), _paragraph(breed, styles["body"]), _paragraph(f"{float(confidence):.2f}%", styles["body"])])
    return rows[:3]


def generate_prediction_report(*, prediction: Any, user: Any, image_path: str | Path | None = None, ai_summary: str | None = None, top_predictions: Iterable[Any] | None = None, report_id: str | None = None) -> BytesIO:
    """Generate a professional PDF in memory without persisting a file."""
    styles = _styles()
    buffer = BytesIO()
    document = SimpleDocTemplate(buffer, pagesize=A4, rightMargin=PAGE_MARGIN, leftMargin=PAGE_MARGIN, topMargin=PAGE_MARGIN, bottomMargin=PAGE_MARGIN, title="Gomitra AI Prediction Report", author="Gomitra AI")
    created_at: datetime | None = getattr(prediction, "created_at", None)
    confidence = float(getattr(prediction, "confidence", 0) or 0)
    breed_name = getattr(prediction, "breed_name", NOT_AVAILABLE)
    level = _confidence_level(confidence)
    date_text = created_at.strftime("%d %b %Y") if created_at else NOT_AVAILABLE
    time_text = created_at.strftime("%I:%M %p") if created_at else NOT_AVAILABLE
    report_key = report_id or getattr(prediction, "id", None)

    metadata = _table([[_paragraph("Report ID", styles["label"]), _paragraph(report_key, styles["body"])], [_paragraph("Generated Date", styles["label"]), _paragraph(date_text, styles["body"])], [_paragraph("Generated Time", styles["label"]), _paragraph(time_text, styles["body"])]], [32 * mm, 50 * mm])
    header = Table([[[Paragraph('Gomitra <font color="#15803D">AI</font>', styles["brand"]), Paragraph("Indian Cattle Breed Identification System", styles["subtitle"]), Paragraph("AI Prediction Report", styles["subtitle"])]]], colWidths=[CONTENT_WIDTH], style=TableStyle([("VALIGN", (0, 0), (-1, -1), "MIDDLE"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0), ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 0)]))
    title_row = Table([[Paragraph("Prediction Report", styles["title"]), metadata]], colWidths=[98 * mm, 82 * mm], style=TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0), ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 3), ("LINEBELOW", (0, 0), (-1, -1), 1.2, GREEN)]))

    story: list[Any] = [header, Spacer(1, 8), title_row, _section_bar("User Information", styles["section"]), _table([[_paragraph("Name", styles["label"]), _paragraph(getattr(user, "name", None), styles["body"])], [_paragraph("Email", styles["label"]), _paragraph(getattr(user, "email", None), styles["body"])], [_paragraph("Prediction Date", styles["label"]), _paragraph(date_text, styles["body"])], [_paragraph("Prediction Time", styles["label"]), _paragraph(time_text, styles["body"])]] , [45 * mm, 135 * mm])]
    image = _image_flowable(image_path)
    if image:
        story.extend([_section_bar("Uploaded Image", styles["section"]), image, Spacer(1, 3)])

    story.extend([_section_bar("Prediction Result", styles["section"]), _table([[_paragraph("Predicted Breed", styles["label"]), _paragraph(breed_name, styles["body"])], [_paragraph("Prediction Confidence", styles["label"]), _paragraph(f"{confidence:.2f}%", styles["body"])], [_paragraph("Confidence Level", styles["label"]), Paragraph(level, styles.get(f"badge_{level.lower()}", styles["badge_low"]))]], [45 * mm, 135 * mm]), _section_bar("Top 3 Predictions", styles["section"])])
    top_rows = _top_rows(top_predictions, styles)
    story.append(_table([[Paragraph("Rank", styles["body"]), Paragraph("Breed", styles["body"]), Paragraph("Confidence %", styles["body"])] , *top_rows], [22 * mm, 100 * mm, 52 * mm], header=True) if top_rows else Paragraph("Top-3 prediction probabilities are not available for this saved report.", styles["small"]))

    breed_info = get_breed_information(str(breed_name)) or {}
    if breed_info:
        logger.info("Using breed encyclopedia catalog for report breed=%s", breed_name)
    else:
        logger.warning("No breed encyclopedia data found for report breed=%s", breed_name)
    breed_rows = [[_paragraph(field, styles["label"]), _paragraph(breed_info.get(field), styles["body"])] for field in BREED_FIELDS]
    compact_breed_rows: list[list[Any]] = []
    for index in range(0, len(breed_rows), 2):
        left = breed_rows[index]
        right = breed_rows[index + 1] if index + 1 < len(breed_rows) else [_paragraph("", styles["label"]), _paragraph("", styles["body"])]
        compact_breed_rows.append([left[0], left[1], right[0], right[1]])
    story.extend([_section_bar("Breed Information", styles["section"]), _table(compact_breed_rows, [31 * mm, 59 * mm, 31 * mm, 59 * mm])])
    if ai_summary and ai_summary.strip():
        story.extend([_section_bar("AI Summary", styles["section"]), _paragraph(ai_summary.strip(), styles["body"])])

    story.extend([_section_bar("Model Information", styles["section"]), _table([[_paragraph("Prediction Model", styles["label"]), _paragraph("ResNet18", styles["body"])], [_paragraph("Framework", styles["label"]), _paragraph("PyTorch", styles["body"])], [_paragraph("Backend", styles["label"]), _paragraph("FastAPI", styles["body"])], [_paragraph("AI Assistant", styles["label"]), _paragraph("Gemini AI", styles["body"])]], [45 * mm, 135 * mm]), Spacer(1, 7), Table([[Paragraph("Disclaimer", styles["section"])], [_paragraph("This report was generated using Gomitra AI. Predictions are AI-assisted and intended for educational and informational purposes only. They should not replace professional veterinary advice.", styles["small"])]], colWidths=[CONTENT_WIDTH], style=TableStyle([("BACKGROUND", (0, 0), (-1, -1), PALE_GREEN), ("BOX", (0, 0), (-1, -1), 0.6, LINE), ("LEFTPADDING", (0, 0), (-1, -1), 8), ("RIGHTPADDING", (0, 0), (-1, -1), 8), ("TOPPADDING", (0, 0), (-1, -1), 5), ("BOTTOMPADDING", (0, 0), (-1, -1), 5)]))])
    document.build(story, onFirstPage=_draw_header_footer, onLaterPages=_draw_header_footer)
    buffer.seek(0)
    return buffer

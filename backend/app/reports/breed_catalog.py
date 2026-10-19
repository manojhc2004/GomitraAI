"""Breed encyclopedia data used by generated prediction reports.

This catalog is isolated from PDF layout code so other report or encyclopedia
surfaces can reuse the same structured breed information.
"""

from __future__ import annotations

import logging
import re

logger = logging.getLogger(__name__)

BREED_FIELDS = [
    "Breed Name", "Scientific Classification", "Origin", "Native State",
    "Primary Purpose", "Average Milk Production", "Average Adult Weight",
    "Coat Color", "Horn Shape", "Temperament", "Climate Adaptability",
    "Disease Resistance", "Average Lifespan", "Special Characteristics",
    "Economic Importance", "Typical Uses", "Conservation Status",
]

BREED_INFORMATION: dict[str, dict[str, str]] = {
    "Amrithmahal": {"Breed Name":"Amrithmahal","Scientific Classification":"Bos indicus","Origin":"India","Native State":"Karnataka","Primary Purpose":"Draught cattle","Average Milk Production":"Low; primarily maintained for work traits","Average Adult Weight":"Approximately 350-500 kg","Coat Color":"Grey to dark grey with darker shading","Horn Shape":"Long horns sweeping backward and upward","Temperament":"Active, spirited, and hardy","Climate Adaptability":"Well adapted to dry and semi-arid regions","Disease Resistance":"Good indigenous resilience under local management","Average Lifespan":"Approximately 15-20 years","Special Characteristics":"Fast-moving draught breed with strong legs and compact body","Economic Importance":"Valued for farm work, transport, and indigenous germplasm","Typical Uses":"Draught work, breeding, and rural farm operations","Conservation Status":"Indigenous breed requiring continued conservation"},
    "Deoni": {"Breed Name":"Deoni","Scientific Classification":"Bos indicus","Origin":"India","Native State":"Maharashtra","Primary Purpose":"Dual-purpose milk and draught cattle","Average Milk Production":"Approximately 1,100-1,500 kg per lactation","Average Adult Weight":"Approximately 400-500 kg","Coat Color":"White with black markings","Horn Shape":"Medium-length horns with a gentle outward curve","Temperament":"Calm and manageable","Climate Adaptability":"Adapted to semi-arid Indian conditions","Disease Resistance":"Good local adaptation","Average Lifespan":"Approximately 15-20 years","Special Characteristics":"Sturdy build and useful milk production","Economic Importance":"Supports milk production and farm operations","Typical Uses":"Milk, draught work, and crossbreeding programs","Conservation Status":"Indigenous breed requiring continued conservation"},
    "Gir": {"Breed Name":"Gir","Scientific Classification":"Bos indicus","Origin":"India","Native State":"Gujarat","Primary Purpose":"Dairy cattle","Average Milk Production":"Approximately 1,200-2,000 kg per lactation; higher under improved care","Average Adult Weight":"Approximately 385-545 kg","Coat Color":"Red, white, or speckled red-and-white","Horn Shape":"Distinctive curved horns turning outward, downward, and upward","Temperament":"Docile, alert, and good for managed dairy systems","Climate Adaptability":"Well adapted to hot and dry tropical climates","Disease Resistance":"Strong heat tolerance and good local disease resilience","Average Lifespan":"Approximately 15-20 years","Special Characteristics":"Convex forehead, pendulous ears, and strong dairy aptitude","Economic Importance":"Important indigenous dairy breed and crossbreeding resource","Typical Uses":"Milk production, breeding, and genetic improvement programs","Conservation Status":"Recognized indigenous breed with active conservation interest"},
    "Hallikar": {"Breed Name":"Hallikar","Scientific Classification":"Bos indicus","Origin":"India","Native State":"Karnataka","Primary Purpose":"Draught and dual-purpose cattle","Average Milk Production":"Modest; varies by line and management","Average Adult Weight":"Approximately 350-450 kg","Coat Color":"Grey to dark grey","Horn Shape":"Long, upward and backward-curving horns","Temperament":"Hardy, active, and responsive","Climate Adaptability":"Well adapted to dry tropical conditions","Disease Resistance":"Good indigenous resilience","Average Lifespan":"Approximately 15-20 years","Special Characteristics":"Compact frame, strong limbs, and prominent forehead","Economic Importance":"Valued draught breed for small and marginal farms","Typical Uses":"Farm work, transport, and breeding improvement","Conservation Status":"Locally conserved indigenous breed"},
    "Holstein Friesian": {"Breed Name":"Holstein Friesian","Scientific Classification":"Bos taurus","Origin":"Netherlands","Native State":"Introduced dairy breed","Primary Purpose":"High-yield dairy production","Average Milk Production":"Approximately 6,000-10,000+ kg per lactation","Average Adult Weight":"Approximately 580-680 kg","Coat Color":"Distinctive black and white markings","Horn Shape":"Usually naturally polled or dehorned in dairy systems","Temperament":"Generally docile and manageable","Climate Adaptability":"Performs best with heat management and balanced nutrition","Disease Resistance":"Management-dependent; needs strong herd care","Average Lifespan":"Approximately 15-20 years","Special Characteristics":"Large frame and exceptional milk yield potential","Economic Importance":"Major commercial dairy production breed","Typical Uses":"Commercial milk production and crossbreeding","Conservation Status":"Commercially established dairy breed"},
    "Jersey": {"Breed Name":"Jersey","Scientific Classification":"Bos taurus","Origin":"Jersey, Channel Islands","Native State":"Introduced dairy breed","Primary Purpose":"Dairy cattle","Average Milk Production":"Approximately 4,000-6,000 kg per lactation under good management","Average Adult Weight":"Approximately 350-450 kg","Coat Color":"Light fawn to dark brown, often with black points","Horn Shape":"Usually short horns when present; often dehorned in dairy systems","Temperament":"Docile, curious, and efficient dairy temperament","Climate Adaptability":"Moderate heat tolerance; performs best with shade and balanced nutrition","Disease Resistance":"Management-dependent; generally hardy for a dairy breed","Average Lifespan":"Approximately 15-20 years","Special Characteristics":"High butterfat milk, compact body, and strong feed efficiency","Economic Importance":"Popular dairy breed for rich milk and crossbreeding programs","Typical Uses":"Milk production, butterfat-rich dairy products, and crossbreeding","Conservation Status":"Commercially established dairy breed"},
    "Khillari": {"Breed Name":"Khillari","Scientific Classification":"Bos indicus","Origin":"India","Native State":"Maharashtra and Karnataka","Primary Purpose":"Draught cattle","Average Milk Production":"Low to modest; valued mainly for draught ability","Average Adult Weight":"Approximately 350-500 kg","Coat Color":"White to grey with possible darker muzzle and extremities","Horn Shape":"Long pointed horns curving upward and backward","Temperament":"Energetic, hardy, and responsive to handling","Climate Adaptability":"Adapted to dry plateau and semi-arid farming regions","Disease Resistance":"Good local hardiness in low-input systems","Average Lifespan":"Approximately 15-20 years","Special Characteristics":"Compact body, strong feet, and excellent working stamina","Economic Importance":"Supports ploughing, carting, and smallholder farm power","Typical Uses":"Farm work, transport, and breeding of draught cattle","Conservation Status":"Indigenous draught breed needing sustained conservation"},
    "Krishna Valley": {"Breed Name":"Krishna Valley","Scientific Classification":"Bos indicus","Origin":"India","Native State":"Karnataka and Maharashtra","Primary Purpose":"Draught and dual-purpose cattle","Average Milk Production":"Moderate; varies by management","Average Adult Weight":"Approximately 400-550 kg","Coat Color":"White to grey with darker shading","Horn Shape":"Medium horns with an outward sweep","Temperament":"Steady and hardworking","Climate Adaptability":"Suitable for warm, dry farming regions","Disease Resistance":"Good indigenous hardiness","Average Lifespan":"Approximately 15-20 years","Special Characteristics":"Large frame, broad forehead, and strong shoulders","Economic Importance":"Useful for farm power and rural livelihoods","Typical Uses":"Draught work, breeding, and limited milk production","Conservation Status":"Regional indigenous breed"},
    "Malnad Gidda": {"Breed Name":"Malnad Gidda","Scientific Classification":"Bos indicus","Origin":"India","Native State":"Karnataka","Primary Purpose":"Hardy indigenous dual-purpose cattle","Average Milk Production":"Low to moderate; valued for resilience","Average Adult Weight":"Approximately 200-300 kg","Coat Color":"Dark brown to black","Horn Shape":"Short to medium horns with varied curvature","Temperament":"Alert, hardy, and docile with handling","Climate Adaptability":"Highly adapted to hilly, wet environments","Disease Resistance":"Strong local resilience","Average Lifespan":"Approximately 15-20 years","Special Characteristics":"Small stature and adaptation to difficult terrain","Economic Importance":"Low-input livestock option for hill farmers","Typical Uses":"Household milk, manure, and small-farm support","Conservation Status":"Conservation-priority indigenous breed"},
    "Ongole": {"Breed Name":"Ongole","Scientific Classification":"Bos indicus","Origin":"India","Native State":"Andhra Pradesh","Primary Purpose":"Draught and dual-purpose cattle","Average Milk Production":"Moderate; varies by line and management","Average Adult Weight":"Approximately 450-650 kg","Coat Color":"White to light grey with darker shading on neck and hump","Horn Shape":"Short to medium horns growing outward and backward","Temperament":"Hardy, strong, and generally manageable","Climate Adaptability":"Excellent adaptation to hot tropical and semi-arid climates","Disease Resistance":"Known for heat tolerance and robust indigenous resilience","Average Lifespan":"Approximately 15-20 years","Special Characteristics":"Large frame, prominent hump, and strong draught power","Economic Importance":"Important indigenous breed used locally and internationally as Nellore cattle","Typical Uses":"Draught work, breeding, and beef/dairy crossbreeding contexts","Conservation Status":"Recognized indigenous breed with broad breeding importance"},
    "Red Sindhi": {"Breed Name":"Red Sindhi","Scientific Classification":"Bos indicus","Origin":"Sindh region of the Indian subcontinent","Native State":"Introduced and maintained in several Indian dairy regions","Primary Purpose":"Dairy cattle","Average Milk Production":"Approximately 1,500-2,500 kg per lactation under good care","Average Adult Weight":"Approximately 300-450 kg","Coat Color":"Deep red to reddish brown","Horn Shape":"Short, thick horns curving outward and upward","Temperament":"Docile, heat tolerant, and suitable for smallholder dairying","Climate Adaptability":"Well adapted to hot, humid, and semi-arid tropical conditions","Disease Resistance":"Good tick, heat, and tropical disease tolerance compared with many exotic breeds","Average Lifespan":"Approximately 15-20 years","Special Characteristics":"Compact dairy type with reliable milk production in warm climates","Economic Importance":"Valuable tropical dairy breed and crossbreeding resource","Typical Uses":"Milk production and dairy crossbreeding programs","Conservation Status":"Important zebu dairy breed maintained through breeding programs"},
}


def normalize_breed_name(value: str | None) -> str:
    """Normalize model class-name formatting for encyclopedia lookup."""
    raw_value = (value or "").replace("_", " ").strip()
    raw_value = re.sub(r"(?<=[a-z])(?=[A-Z])", " ", raw_value)
    return " ".join(raw_value.split()).casefold()


def get_breed_information(value: str | None) -> dict[str, str] | None:
    """Return catalog data for a prediction label, logging lookup failures."""
    normalized = normalize_breed_name(value)
    available_keys = list(BREED_INFORMATION)
    logger.info(
        "Breed report lookup predicted_breed=%r lookup_key=%r available_keys=%s",
        value,
        normalized,
        available_keys,
    )
    for name, information in BREED_INFORMATION.items():
        if normalize_breed_name(name) == normalized:
            logger.info(
                "Breed report lookup succeeded predicted_breed=%r matched_key=%r",
                value,
                name,
            )
            return information
    logger.warning(
        "Breed report lookup failed predicted_breed=%r lookup_key=%r reason=no normalized key matched available_keys=%s",
        value,
        normalized,
        available_keys,
    )
    return None

import React from "react";

interface FormattedMarkdownProps {
  content: string;
  className?: string;
}

export default function FormattedMarkdown({ content, className = "" }: FormattedMarkdownProps) {
  if (!content) return null;

  const blocks = content.split(/\n\n+/);

  const renderInline = (text: string): React.ReactNode[] => {
    const parts = text.split(/(\*\*.*?\*\*|`.*?`|\*.*?\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
        return (
          <strong key={i} className="font-bold text-[#0f172a]">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
        return (
          <code key={i} className="bg-gray-100 text-green-700 px-1.5 py-0.5 rounded text-xs font-mono">
            {part.slice(1, -1)}
          </code>
        );
      }
      if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
        return (
          <em key={i} className="italic">
            {part.slice(1, -1)}
          </em>
        );
      }
      return part;
    });
  };

  return (
    <div className={`space-y-2.5 font-inter leading-relaxed ${className}`}>
      {blocks.map((block, bIdx) => {
        const lines = block.split("\n");

        const isBulletList = lines.length > 0 && lines.every((line) => /^\s*[*•-]\s+/.test(line));
        const isNumberedList = lines.length > 0 && lines.every((line) => /^\s*\d+\.\s+/.test(line));

        if (isBulletList) {
          return (
            <ul key={bIdx} className="list-disc list-inside space-y-1 pl-1">
              {lines.map((line, lIdx) => {
                const cleanLine = line.replace(/^\s*[*•-]\s+/, "");
                return <li key={lIdx}>{renderInline(cleanLine)}</li>;
              })}
            </ul>
          );
        }

        if (isNumberedList) {
          return (
            <ol key={bIdx} className="list-decimal list-inside space-y-1 pl-1">
              {lines.map((line, lIdx) => {
                const cleanLine = line.replace(/^\s*\d+\.\s+/, "");
                return <li key={lIdx}>{renderInline(cleanLine)}</li>;
              })}
            </ol>
          );
        }

        if (block.startsWith("### ")) {
          return (
            <h3 key={bIdx} className="font-poppins font-bold text-[#0f172a] text-base mt-2">
              {renderInline(block.slice(4))}
            </h3>
          );
        }

        if (block.startsWith("## ")) {
          return (
            <h2 key={bIdx} className="font-poppins font-bold text-[#0f172a] text-lg mt-3">
              {renderInline(block.slice(3))}
            </h2>
          );
        }

        if (block.startsWith("# ")) {
          return (
            <h1 key={bIdx} className="font-poppins font-bold text-[#0f172a] text-xl mt-3">
              {renderInline(block.slice(2))}
            </h1>
          );
        }

        return (
          <p key={bIdx}>
            {lines.map((line, lIdx) => (
              <React.Fragment key={lIdx}>
                {lIdx > 0 && <br />}
                {renderInline(line)}
              </React.Fragment>
            ))}
          </p>
        );
      })}
    </div>
  );
}

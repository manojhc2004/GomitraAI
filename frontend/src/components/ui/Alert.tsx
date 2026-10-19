interface AlertProps {
  tone?: "error" | "success" | "warning";
  title?: string;
  message: string;
}

const styles = {
  error: {
    wrap: "bg-[#fef2f2] border-[#fecaca] text-[#991b1b]",
    body: "text-[#b91c1c]",
  },
  success: {
    wrap: "bg-[#f0fdf4] border-[#bbf7d0] text-[#166534]",
    body: "text-[#15803d]",
  },
  warning: {
    wrap: "bg-[#fffbeb] border-[#fde68a] text-[#92400e]",
    body: "text-[#b45309]",
  },
};

export default function Alert({ tone = "error", title, message }: AlertProps) {
  const palette = styles[tone];

  return (
    <div className={`rounded-xl border px-4 py-3 ${palette.wrap}`} role="alert">
      {title ? <p className="font-poppins font-semibold text-sm mb-1">{title}</p> : null}
      <p className={`font-inter text-sm leading-relaxed ${palette.body}`}>{message}</p>
    </div>
  );
}

interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
}

export function SectionTitle({ title, subtitle, align = "center" }: SectionTitleProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }

  return (
    <div className={`mb-10 ${alignmentClasses[align]}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-[#02153D] mb-2">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
      <div className="w-24 h-1 bg-[#FF6A5C] mt-4 mx-auto rounded-full"></div>
    </div>
  )
}

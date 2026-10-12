type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  markAs?: "div" | "h2" | "h3" | "h4";
  id?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  markAs = "div",
  id,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const TitleTag = markAs;
  const titleClassName = `font-display text-3xl font-extrabold tracking-tight sm:text-4xl ${
    light ? "text-on-dark" : "text-secondary"
  }`;

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <p
          className={`mb-3 inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase ${
            light ? "text-accent-light" : "text-primary"
          }`}
        >
          <span aria-hidden="true" className="h-0.5 w-6 rounded-full bg-current" />
          {eyebrow}
        </p>
      )}
      <TitleTag id={id} className={titleClassName}>{title}</TitleTag>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-on-dark/80" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

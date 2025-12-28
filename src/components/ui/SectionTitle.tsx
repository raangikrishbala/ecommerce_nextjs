interface SectionTitleProps {
  title: string;
  className?: string;
}

export default function SectionTitle({ title, className = '' }: SectionTitleProps) {
  return (
    <h2 className={`section-title heading-border ls-20 border-0 ${className}`}>
      {title}
    </h2>
  );
}

export default function SectionLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`section-label ${className}`}>
      <span>{children}</span>
    </div>
  );
}

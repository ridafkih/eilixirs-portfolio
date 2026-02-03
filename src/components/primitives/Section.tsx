import { cn } from "@/lib/utils";

type SectionPadding = "default" | "extended";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  padding?: SectionPadding;
}

const paddingStyles: Record<SectionPadding, string> = {
  default: "py-20",
  extended: "py-20 pb-60",
};

export function Section({
  children,
  className,
  padding = "default",
}: SectionProps) {
  return (
    <section
      className={cn(
        paddingStyles[padding],
        "relative z-10",
        className
      )}
    >
      {children}
    </section>
  );
}

import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3 | 4;

interface HeadingProps {
  children: React.ReactNode;
  level: HeadingLevel;
  className?: string;
}

const levelStyles: Record<HeadingLevel, string> = {
  1: "font-serif text-4xl md:text-5xl font-light tracking-[-0.08em] italic",
  2: "font-serif text-5xl font-light mb-6 tracking-[-0.08em] italic text-left",
  3: "font-sans text-xl font-light mb-4 tracking-tight",
  4: "font-sans text-lg font-light mb-2 tracking-tight",
};

export function Heading({ children, level, className }: HeadingProps) {
  const Component = `h${level}` as const;

  return (
    <Component className={cn(levelStyles[level], className)}>
      {children}
    </Component>
  );
}

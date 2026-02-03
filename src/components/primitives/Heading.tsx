import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3 | 4;

interface HeadingProps {
  children: React.ReactNode;
  level: HeadingLevel;
  className?: string;
}

const levelStyles: Record<HeadingLevel, string> = {
  1: "font-serif text-4xl md:text-5xl font-semibold tracking-tight",
  2: "font-serif text-5xl font-semibold mb-6 tracking-tight text-left",
  3: "font-serif text-xl font-medium mb-4 tracking-tight",
  4: "font-serif text-lg font-medium mb-2 tracking-tight",
};

export function Heading({ children, level, className }: HeadingProps) {
  const Component = `h${level}` as const;

  return (
    <Component className={cn(levelStyles[level], className)}>
      {children}
    </Component>
  );
}

"use client";

import type { PortfolioItem } from "@/data/portfolio";
import { usePortfolio } from "./context";
import { Text, Heading } from "@/components/primitives";
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  item: PortfolioItem;
  className?: string;
}

export function PortfolioCard({ item, className }: PortfolioCardProps) {
  const { actions } = usePortfolio();

  return (
    <div
      className={cn("cursor-pointer hover:opacity-50 transition-opacity", className)}
      onClick={() => actions.openModal(item)}
    >
      <Heading level={4}>{item.title}</Heading>
      <Text variant="small">{item.description}</Text>
    </div>
  );
}

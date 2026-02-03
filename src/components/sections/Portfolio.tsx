"use client";

import { Portfolio } from "@/components/portfolio";
import { SectionHeading, Section } from "@/components/primitives";
import { portfolioItems } from "@/data/portfolio";

export function PortfolioSection() {
  return (
    <Section>
      <Portfolio.Provider items={portfolioItems}>
        <SectionHeading>My projects</SectionHeading>
        <Portfolio.Grid />

        <Portfolio.Modal />
      </Portfolio.Provider>
    </Section>
  );
}

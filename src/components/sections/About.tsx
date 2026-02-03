"use client";

import Image from "next/image";
import { FadeIn, Text, Heading, Section, Grid, ScaleIn } from "@/components/primitives";

export function About() {
  return (
    <Section className="pt-0 sm:pb-20 pb-0">
      <FadeIn duration={0.6}>
        <Grid className="pt-12" columns="2-1" gap="lg">
          <div>
            <div className="relative w-fit">
              <div className="absolute inset-y-0 left-0 origin-left select-none pointer-events-none">
                <Heading className="font-chinese opacity-15 text-nowrap text-3xl md:text-6xl lg:-translate-x-8 -translate-y-2/3" level={2}>嗨～我是思睿</Heading>
              </div>
              <Heading level={2}>Hi! I&apos;m Iris</Heading>
            </div>
            <Text className="mb-5">
              I&apos;m a strategic marketer and creative problem-solver with a
              passion for building brands that resonate. Currently pursuing a
              Bachelor of Commerce at Queen&apos;s University, Canada.
            </Text>
            <Text className="mb-5">
              Beyond marketing, I love when technology and design collide.
              I&apos;m fond of photography, UX/UI design, and efficiency.
              I&apos;ve traveled to 26 countries, and can hold a conversation
              with anyone in Mandarin Chinese.
            </Text>
            <Text>
              I thrive on turning vague ideas into compelling visuals, whether
              through slide-driven presentations, brand guidelines, or content
              that drives engagement.
            </Text>
          </div>

          <ScaleIn delay={0.2}>
            <Image
              src="/images/lil-border.webp"
              alt="Iris Xie"
              width={800}
              height={1198}
              className="aspect-square object-cover rounded-xl sm:w-[unset] w-1/2 justify-self-center"
              draggable={false}
              priority
            />
          </ScaleIn>
        </Grid>
      </FadeIn>
    </Section>
  );
}

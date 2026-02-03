import type { Metadata } from "next";
import { DM_Sans, Fraunces, Long_Cang } from "next/font/google";
import { PaperTexture } from "@/components/primitives";
import { cn } from "@/lib/utils";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  style: "italic",
  weight: ["400", "500", "600", "700"],
});

const longCang = Long_Cang({
  variable: "--font-long-cang",
  weight: "400"
})

export const metadata: Metadata = {
  title: "Iris Xie - Portfolio",
  description:
    "Strategic marketer and creative problem-solver with a passion for building brands that resonate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        dmSans.variable,
        fraunces.variable,
        longCang.variable,
        "antialiased relative bg-bg-light text-text-dark font-sans leading-relaxed overflow-x-hidden"
      )}>
        <PaperTexture />
        {children}
      </body>
    </html>
  );
}

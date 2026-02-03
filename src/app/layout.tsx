import type { Metadata } from "next";
import { DM_Sans, Allura, Fraunces } from "next/font/google";
import { PaperTexture } from "@/components/primitives";
import { FloraIllustrationBottom } from "@/components/sections/FloraIllustration";
import { cn } from "@/lib/utils";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: "400",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
      <body className={cn(dmSans.variable, allura.variable, fraunces.variable, "antialiased")}>
        <div className="page-grid relative min-h-screen">
          <PaperTexture />
          {children}
          <FloraIllustrationBottom />
        </div>
      </body>
    </html>
  );
}

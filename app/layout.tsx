import type { Metadata } from "next";
import { Inter, Doto, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/** Pixel display face — one word per headline, teal, never below ~40px. */
const doto = Doto({
  variable: "--font-doto",
  weight: "900",
  subsets: ["latin"],
  display: "swap",
});

/** Prompts and code only. */
const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://briandoai.com"),
  title: {
    default: "Brian Do · Practical AI for everyday professionals",
    template: "%s · Brian Do",
  },
  description:
    "Practical AI workflows you can use at work this week. Save time, communicate better, and become the person your team goes to for AI.",
  openGraph: {
    title: "Brian Do · Practical AI for everyday professionals",
    description:
      "Practical AI workflows you can use at work this week.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${doto.variable} ${jetbrains.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

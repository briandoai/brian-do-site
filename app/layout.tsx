import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://briando.com"),
  title: {
    default: "Brian Do — Practical AI for everyday professionals",
    template: "%s · Brian Do",
  },
  description:
    "Practical AI workflows you can use at work this week. Save time, communicate better, and become the person your team goes to for AI.",
  openGraph: {
    title: "Brian Do — Practical AI for everyday professionals",
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
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

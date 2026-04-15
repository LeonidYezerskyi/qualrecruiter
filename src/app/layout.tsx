import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "QualRecruiter",
  description: "Qualitative research recruitment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <svg
          aria-hidden
          className="pointer-events-none absolute h-0 w-0"
          focusable="false"
        >
          <defs>
            <linearGradient
              id="qualrecruiter-accent-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#8b6914" />
              <stop offset="28%" stopColor="#c9a042" />
              <stop offset="50%" stopColor="#f0d080" />
              <stop offset="72%" stopColor="#c9a042" />
              <stop offset="100%" stopColor="#8b6914" />
            </linearGradient>
          </defs>
        </svg>
        <Header />
        {children}
      </body>
    </html>
  );
}

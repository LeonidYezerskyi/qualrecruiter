import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

function siteOrigin(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  if (process.env.NODE_ENV === "production") {
    return "https://qualrecruiter.us";
  }
  return "http://localhost:3000";
}

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin()),
  title: "QualRecruiter",
  description: "Qualitative research recruitment",
  icons: {
    apple: [{ url: "/logo.png", type: "image/png" }],
  },
  openGraph: {
    title: "QualRecruiter",
    description: "Qualitative research recruitment",
    images: [{ url: "/logo.png", type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "QualRecruiter",
    description: "Qualitative research recruitment",
    images: ["/logo.png"],
  },
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

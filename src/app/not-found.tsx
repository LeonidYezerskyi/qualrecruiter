import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SiteFooter } from "@/components/SiteFooter";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Page not found | QualRecruiter",
  description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <>
      <main className="min-h-screen bg-page pb-20 pt-28 md:pb-24 md:pt-32">
        <Container>
          <div className="mx-auto max-w-[640px] text-left">
            <p className="text-sm font-medium tabular-nums tracking-wide text-muted">
              404
            </p>
            <h1
              className={`${playfair.className} text-accent-gradient mt-3 text-pretty text-[2.75rem] font-medium leading-tight tracking-tight md:text-[3rem]`}
            >
              Page not found
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              The link may be broken or the page may have been removed. Use the
              button below to return to the homepage.
            </p>
            <div className="mt-8">
              <Button variant="primary" href="/">
                Back to home
              </Button>
            </div>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}

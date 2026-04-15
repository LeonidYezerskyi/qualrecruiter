import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Container } from "./Container";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const bullets = [
  "In-depth interviews & focus groups",
  "Ethnographic, IHUT & diary studies",
  "B2B & B2C, online & in-person",
] as const;

const footerMutedLink =
  "font-medium text-muted underline decoration-muted underline-offset-[5px] transition-colors duration-200 hover:text-white";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-page pt-10 md:pt-14">
      <Container>
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 md:items-start">
          <div className="rounded-[4px] p-px accent-ring-bg">
            <div className="rounded-[3px] bg-page p-6">
            <h2
              className={`${playfair.className} text-accent-gradient text-lg font-semibold leading-snug`}
            >
              Contact QualRecruiter
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              <span className="mr-1.5" aria-hidden>
                ✉️
              </span>
              <a href="mailto:recruiter@qualrecruiter.us" className={footerMutedLink}>
                recruiter@qualrecruiter.us
              </a>
            </p>
            </div>
          </div>

          <div className="space-y-4 pb-8 text-left md:pb-10">
            <Link
              href="/"
              className="inline-block rounded-[4px] bg-white p-[2px] shadow-sm ring-1 ring-black/10 leading-none transition-opacity duration-200 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a042]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-page"
            >
              <Image
                src="/logo.png"
                alt="QualRecruiter"
                width={800}
                height={220}
                sizes="(max-width: 768px) min(100vw, 320px), 280px"
                className="block h-auto max-h-10 w-auto max-w-[min(100%,320px)] object-contain object-left sm:max-h-11"
              />
            </Link>
            <h3 className="sr-only">QualRecruiter</h3>
            <p className="text-base font-normal leading-relaxed text-muted">
              Qualitative research recruitment for agencies, brands, and insights
              teams across the U.S.
            </p>
            <ul className="list-none space-y-2 pl-0 text-base leading-relaxed text-muted">
              {bullets.map((line) => (
                <li key={line} className="flex gap-2.5">
                  <span className="text-accent-gradient shrink-0" aria-hidden>
                    •
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <div className="mx-auto w-full max-w-site px-6 py-5 text-center sm:px-8 md:py-7 lg:px-10 xl:px-12">
          <Link
            href="/privacypolicy"
            className={`text-sm ${footerMutedLink}`}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

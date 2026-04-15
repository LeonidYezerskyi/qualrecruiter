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

const linkClass =
  "link font-medium underline-offset-2 transition-opacity duration-200 hover:opacity-[0.85] hover:underline";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-page py-10 md:py-14">
      <Container>
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 md:items-start">
          <div className="rounded-[4px] p-px accent-ring-bg">
            <div className="rounded-[3px] bg-page p-6">
            <h2
              className={`${playfair.className} text-accent-gradient text-[20px] font-semibold leading-snug`}
            >
              Contact QualRecruiter
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              <span className="mr-1.5" aria-hidden>
                ✉️
              </span>
              <a href="mailto:qualrecruiter@qualrecruiter.us" className={linkClass}>
                qualrecruiter@qualrecruiter.us
              </a>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              <span className="mr-1.5" aria-hidden>
                🌐
              </span>
              <a
                href="https://qualrecruiter.us"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                qualrecruiter.us
              </a>
            </p>
            </div>
          </div>

          <div className="space-y-4 text-left">
            <h3
              className={`${playfair.className} text-accent-gradient text-[20px] font-semibold leading-snug`}
            >
              QualRecruiter
            </h3>
            <p className="text-sm font-normal leading-relaxed text-muted">
              Qualitative research recruitment for agencies, brands, and insights
              teams across the U.S.
            </p>
            <ul className="list-none space-y-2 pl-0 text-sm leading-relaxed text-muted">
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
    </footer>
  );
}

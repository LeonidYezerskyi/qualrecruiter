import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { AccentPill } from "./AccentPill";
import { Section } from "./Section";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const audiences = [
  {
    image: "/images/who-serve-agencies.jpg",
    imageAlt: "Team collaborating around a table in a meeting",
    title: "Research Agencies",
    description:
      "Full-service recruitment support so your team delivers flawlessly for every client engagement.",
  },
  {
    image: "/images/who-serve-brands.jpg",
    imageAlt: "Professional working at a laptop in an office",
    title: "Brands & In-House Teams",
    description:
      "Fast, reliable access to the right consumers — so you can move from question to insight with confidence.",
  },
  {
    image: "/images/who-serve-ux.jpg",
    imageAlt: "Colleagues reviewing product work together",
    title: "UX & Product Teams",
    description:
      "Recruit precisely targeted users for usability testing, concept evaluation, and product feedback studies.",
  },
] as const;

export function WhoWeServeSection() {
  return (
    <Section tone="muted">
      <div className="mx-auto w-full max-w-[1100px] text-left">
        <div className="space-y-5 md:space-y-6">
          <AccentPill tone="surface">WHO WE SERVE</AccentPill>
          <h2
            className={`${playfair.className} text-accent-gradient max-w-4xl text-pretty text-[2.75rem] font-medium leading-tight tracking-tight md:text-[3rem]`}
          >
            Built for Agencies, Brands, and Insights Teams
          </h2>
          <p className="max-w-[75%] text-pretty text-base font-semibold leading-relaxed text-white md:text-lg">
            QualRecruiter partners with organizations across the U.S. that depend on
            high-quality qualitative research — from boutique research agencies to
            in-house insights teams at major brands.
          </p>
        </div>

        <ul className="mt-10 grid list-none grid-cols-1 gap-8 md:mt-12 md:grid-cols-3 md:gap-6 lg:gap-8">
          {audiences.map((item) => (
            <li key={item.title} className="min-w-0">
              <div className="flex flex-col items-stretch text-left">
                <div className="relative h-[140px] w-full overflow-hidden rounded-[4px]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm font-normal leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

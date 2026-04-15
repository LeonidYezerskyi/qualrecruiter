import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { AccentPill } from "./AccentPill";
import { Container } from "./Container";
import { FadeInView } from "./motion/FadeInView";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const BG_IMAGE = "/images/bg-results-expect.jpg";

const items = [
  {
    title: "Participants Who Fit",
    description:
      "Every recruit meets your screener — no stretching criteria, no settling for close-enough.",
  },
  {
    title: "Fewer No-Shows",
    description:
      "Rigorous confirmation and reminder protocols keep your sessions fully attended.",
  },
  {
    title: "Smoother Fieldwork",
    description:
      "Less time managing logistics means more time focused on the conversation.",
  },
  {
    title: "Richer Insights",
    description:
      "The right participants lead to more genuine, nuanced responses — and stronger findings.",
  },
] as const;

export function ResultsYouCanExpectSection() {
  return (
    <section className="relative overflow-hidden py-20">
      <Image
        src={BG_IMAGE}
        alt="Professionals collaborating in a workplace setting"
        fill
        className="object-cover object-center saturate-[0.88] contrast-[0.98]"
        sizes="100vw"
      />
      <div className="photo-scrim absolute inset-0" aria-hidden />
      <div className="relative z-10">
        <Container>
          <FadeInView>
          <div className="mx-auto w-full max-w-[1100px] text-left">
            <div className="space-y-5 md:space-y-6">
              <AccentPill variant="solid">RESULTS YOU CAN EXPECT</AccentPill>
              <h2
                className={`${playfair.className} text-accent-gradient max-w-5xl text-pretty text-[2.75rem] font-medium leading-tight tracking-tight md:text-[3rem] xl:whitespace-nowrap`}
              >
                Smoother Fieldwork. More Meaningful Insights.
              </h2>
              <p className="max-w-[70%] text-pretty text-base font-normal leading-relaxed text-white md:text-lg">
                When recruitment is done right, everything downstream improves.
                Here&apos;s what clients consistently experience when they work with
                QualRecruiter.
              </p>
            </div>

            <ul className="mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 md:gap-4">
              {items.map((item) => (
                <li key={item.title}>
                  <div className="card-accent-left flex h-full flex-col space-y-2 rounded-[4px] border border-white/[0.15] bg-neutral-950/70 p-6 pl-[calc(1.5rem+3px)] shadow-none">
                    <h3 className="text-lg font-semibold leading-snug text-accent-gradient">
                      {item.title}
                    </h3>
                    <p className="text-base font-normal leading-relaxed text-white">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          </FadeInView>
        </Container>
      </div>
    </section>
  );
}

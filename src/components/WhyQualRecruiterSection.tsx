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

const BG_IMAGE = "/images/bg-why-qualrecruiter.jpg";

const features = [
  {
    title: "Precise Targeting",
    description:
      "We recruit to your exact screener — demographics, behaviors, attitudes, and more.",
  },
  {
    title: "Rigorous Screening",
    description:
      "Multi-step vetting ensures only qualified, engaged participants make it through.",
  },
  {
    title: "Reliable Show Rates",
    description:
      "Our confirmation process and experienced team drive consistently high attendance.",
  },
  {
    title: "Clear Communication",
    description:
      "You'll always know where your project stands — no guesswork, no surprises.",
  },
] as const;

export function WhyQualRecruiterSection() {
  return (
    <section className="relative overflow-hidden py-20">
      <Image
        src={BG_IMAGE}
        alt="Professionals in a meeting"
        fill
        className="object-cover object-center saturate-[0.88] contrast-[0.98]"
        sizes="100vw"
      />
      <div className="photo-scrim absolute inset-0" aria-hidden />
      <div className="relative z-10">
        <Container>
          <FadeInView>
          <div className="mx-auto w-full max-w-[1100px] space-y-10 text-left md:space-y-12">
            <div className="space-y-5 md:space-y-6">
              <AccentPill>WHY QUALRECRUITER</AccentPill>
              <h2
                className={`${playfair.className} text-accent-gradient max-w-4xl text-pretty text-[2.75rem] font-medium leading-tight tracking-tight md:text-[3rem]`}
              >
                Fewer no-shows. Better conversations. Stronger insights.
              </h2>
              <p className="max-w-[60%] text-pretty text-base font-normal leading-relaxed text-white md:text-lg">
                We don&apos;t just fill quotas. We carefully match participants to your
                research goals, using rigorous screening and a commitment to clear
                communication at every stage of the project.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {features.map((feature) => (
                <li key={feature.title}>
                  <div className="flex h-full flex-col space-y-3 rounded-[4px] border border-white/[0.08] bg-[#333333] p-6 shadow-none">
                    <h3 className="text-lg font-semibold leading-snug text-accent-gradient">
                      {feature.title}
                    </h3>
                    <p className="text-base font-normal leading-relaxed text-muted">
                      {feature.description}
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

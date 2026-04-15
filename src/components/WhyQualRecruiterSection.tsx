import { Section } from "./Section";

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
    <Section tone="muted">
      <div className="flex flex-col space-y-10 md:space-y-12">
        <div className="mx-auto max-w-3xl space-y-4 text-center md:space-y-5">
          <p className="text-sm font-medium tracking-[0.12em] text-primary/90">
            Why QualRecruiter
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
            Fewer no-shows. Better conversations. Stronger insights.
          </h2>
          <p className="mx-auto max-w-[44rem] text-pretty text-base font-normal leading-relaxed text-gray-500 md:text-lg">
            We don&apos;t just fill quotas. We carefully match participants to your
            research goals, using rigorous screening and a commitment to clear
            communication at every stage of the project.
          </p>
        </div>
        <ul className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:gap-6 lg:gap-10">
          {features.map((feature) => (
            <li key={feature.title} className="flex min-h-0">
              <div className="card flex h-full w-full flex-col space-y-3">
                <h3 className="text-lg font-semibold text-gray-950 md:text-xl">
                  {feature.title}
                </h3>
                <p className="text-base font-normal leading-relaxed text-gray-500">
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

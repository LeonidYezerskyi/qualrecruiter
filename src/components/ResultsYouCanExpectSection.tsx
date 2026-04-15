import { Section } from "./Section";

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
    <Section>
      <div className="flex flex-col space-y-10 md:space-y-12">
        <div className="mx-auto max-w-3xl space-y-4 text-center md:space-y-5">
          <p className="text-sm font-medium tracking-[0.12em] text-primary/90">
            Results You Can Expect
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
            Smoother Fieldwork. More Meaningful Insights.
          </h2>
          <p className="mx-auto max-w-[44rem] text-pretty text-base font-normal leading-relaxed text-gray-500 md:text-lg">
            When recruitment is done right, everything downstream improves.
            Here&apos;s what clients consistently experience when they work with
            QualRecruiter.
          </p>
        </div>
        <ul className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:gap-6 lg:gap-10">
          {items.map((item) => (
            <li key={item.title} className="flex min-h-0">
              <div className="card flex h-full w-full flex-col space-y-3">
                <h3 className="text-lg font-semibold text-gray-950 md:text-xl">
                  {item.title}
                </h3>
                <p className="text-base font-normal leading-relaxed text-gray-500">
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

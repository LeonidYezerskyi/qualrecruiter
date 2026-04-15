import { Section } from "./Section";

const items = [
  {
    title: "Digital Recruitment",
    description:
      "Targeted outreach across social platforms, panels, and digital communities.",
  },
  {
    title: "Traditional Sourcing",
    description:
      "Phone-based recruitment and referral networks for hard-to-reach audiences.",
  },
  {
    title: "Research Partner Network",
    description:
      "Access to a vetted ecosystem of field partners across the U.S.",
  },
] as const;

export function OurApproachSection() {
  return (
    <Section tone="muted">
      <div className="flex flex-col space-y-10 md:space-y-12">
        <div className="mx-auto max-w-3xl space-y-4 text-center md:space-y-5">
          <p className="text-sm font-medium tracking-[0.12em] text-primary/90">
            Our Approach
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
            Modern Methods. Proven Results.
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 md:text-2xl">
            How We Source
          </h3>
          <p className="mx-auto max-w-[44rem] text-pretty text-base font-normal leading-relaxed text-gray-500 md:text-lg">
            We combine modern digital recruitment methods with proven traditional
            sourcing techniques and a trusted network of research partners —
            ensuring consistent quality across every project type and audience.
          </p>
        </div>
        <ul className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3 md:gap-6 lg:gap-10">
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

import { Section } from "./Section";

const audiences = [
  {
    title: "Research Agencies",
    description:
      "Full-service recruitment support so your team delivers flawlessly for every client engagement.",
  },
  {
    title: "Brands & In-House Teams",
    description:
      "Fast, reliable access to the right consumers — so you can move from question to insight with confidence.",
  },
  {
    title: "UX & Product Teams",
    description:
      "Recruit precisely targeted users for usability testing, concept evaluation, and product feedback studies.",
  },
] as const;

export function WhoWeServeSection() {
  return (
    <Section>
      <div className="flex flex-col space-y-10 md:space-y-12">
        <div className="mx-auto max-w-3xl space-y-4 text-center md:space-y-5">
          <p className="text-sm font-medium tracking-[0.12em] text-primary/90">
            Who We Serve
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
            Built for Agencies, Brands, and Insights Teams
          </h2>
          <p className="mx-auto max-w-[44rem] text-pretty text-base font-normal leading-relaxed text-gray-500 md:text-lg">
            QualRecruiter partners with organizations across the U.S. that depend on
            high-quality qualitative research — from boutique research agencies to
            in-house insights teams at major brands.
          </p>
        </div>
        <ul className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3 md:gap-6 lg:gap-10">
          {audiences.map((item) => (
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

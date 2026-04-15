import { Section } from "./Section";

const services = [
  "In-depth interviews (IDIs)",
  "Focus groups",
  "Ethnographic studies",
  "Online communities & diary studies",
  "Mystery shopping",
  "In-home usage tests (IHUTs)",
  "Shop-alongs",
] as const;

export function ServicesSection() {
  return (
    <Section id="services" tone="muted">
      <div className="flex flex-col space-y-10 md:space-y-12">
        <div className="mx-auto max-w-3xl space-y-4 text-center md:space-y-5">
          <p className="text-sm font-medium tracking-[0.12em] text-primary/90">
            What we do
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
            We recruit participants for every type of qualitative research
          </h2>
          <p className="mx-auto max-w-[44rem] text-pretty text-base font-normal leading-relaxed text-gray-500 md:text-lg">
            From everyday consumers to hard-to-reach audiences, we deliver
            participants that match your exact criteria.
          </p>
        </div>
        <ul className="grid grid-cols-2 items-stretch gap-5 md:grid-cols-3 md:gap-6 lg:gap-10">
          {services.map((label) => (
            <li key={label} className="flex min-h-0">
              <div className="card flex h-full min-h-[4.5rem] w-full items-center md:min-h-[5rem]">
                <span className="text-left text-base font-medium leading-snug text-gray-900">
                  {label}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

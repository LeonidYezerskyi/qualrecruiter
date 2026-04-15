import { Section } from "./Section";

const steps = [
  {
    number: "01",
    title: "Share your brief",
    description: "Tell us who you need and what you're researching.",
  },
  {
    number: "02",
    title: "We recruit & screen",
    description: "We find and vet participants using proven methods.",
  },
  {
    number: "03",
    title: "You run the research",
    description: "Get qualified participants ready to engage.",
  },
] as const;

export function HowItWorksSection() {
  return (
    <Section>
      <div className="flex flex-col space-y-10 md:space-y-14">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
            How it works
          </h2>
        </div>
        <ol className="grid list-none items-stretch gap-0 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className={`flex h-full flex-col space-y-3 py-10 first:pt-0 last:pb-0 md:space-y-4 md:py-0 ${
                index > 0
                  ? "border-t border-gray-100/90 pt-10 md:border-t-0 md:border-l md:border-gray-200/60 md:pl-10 md:pt-0 lg:pl-12"
                  : ""
              }`}
            >
              <span className="text-sm font-medium tabular-nums tracking-[0.2em] text-gray-400">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold text-gray-950 md:text-xl">
                {step.title}
              </h3>
              <p className="max-w-[42rem] text-base font-normal leading-relaxed text-gray-500 md:max-w-none">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

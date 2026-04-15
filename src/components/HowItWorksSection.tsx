import { Fragment } from "react";
import { FileText, Filter, UserPlus } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import { AccentPill } from "./AccentPill";
import { Container } from "./Container";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const steps: { icon: LucideIcon; label: string }[] = [
  { icon: FileText, label: "Share Brief" },
  { icon: Filter, label: "Recruit & Screen" },
  { icon: UserPlus, label: "Run Research" },
];

function StepCircle({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex w-[200px] flex-col items-center">
      <div className="step-circle flex items-center justify-center">
        <Icon className="text-muted" size={56} strokeWidth={1.5} aria-hidden />
      </div>
      <p className="mt-4 text-center text-lg font-semibold leading-snug text-white">
        {label}
      </p>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section className="bg-page py-20">
      <Container>
        <div className="mx-auto w-full max-w-[1100px] text-left">
          <div className="space-y-5 md:space-y-6">
            <AccentPill variant="solid">HOW IT WORKS</AccentPill>
            <h2
              className={`${playfair.className} text-accent-gradient max-w-4xl text-pretty text-[2.75rem] font-medium leading-tight tracking-tight md:text-[3rem]`}
            >
              From Brief to Fieldwork in Three Steps
            </h2>
            <p className="max-w-3xl text-pretty text-base font-normal leading-relaxed text-muted md:text-lg">
              Our streamlined process gets your study off the ground quickly —
              without sacrificing quality.
            </p>
          </div>

          <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-10 md:max-w-none md:flex-row md:justify-center md:gap-0">
            {steps.map((step, index) => (
              <Fragment key={step.label}>
                {index > 0 && (
                  <>
                    <span
                      className="block text-2xl leading-none text-accent-gradient md:hidden"
                      aria-hidden
                    >
                      ↓
                    </span>
                    <span
                      className="hidden h-[200px] shrink-0 items-center self-center px-2 text-2xl leading-none text-accent-gradient md:inline-flex lg:px-3"
                      aria-hidden
                    >
                      →
                    </span>
                  </>
                )}
                <StepCircle icon={step.icon} label={step.label} />
              </Fragment>
            ))}
          </div>

          <p className="mt-12 text-pretty text-base font-normal leading-relaxed text-muted md:text-lg">
            Most projects move from briefing to confirmed participants within days.
            We handle the complexity so your team can focus on what matters —
            running great research.
          </p>
        </div>
      </Container>
    </section>
  );
}

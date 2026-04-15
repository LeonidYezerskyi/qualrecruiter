"use client";

import { Fragment } from "react";
import { FileText, Filter, UserPlus } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { scrollStaggerVariants, scrollStaggerViewport } from "@/lib/motion";
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
  const reduceMotion = useReducedMotion() === true;
  const { container, item } = scrollStaggerVariants(reduceMotion);

  return (
    <section className="bg-page py-20">
      <Container>
        <motion.div
          className="mx-auto w-full max-w-[1100px] text-left"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={scrollStaggerViewport}
        >
          <div className="space-y-5 md:space-y-6">
            <motion.div variants={item}>
              <AccentPill variant="solid">HOW IT WORKS</AccentPill>
            </motion.div>
            <motion.h2
              variants={item}
              className={`${playfair.className} text-accent-gradient max-w-4xl text-pretty text-[2.75rem] font-medium leading-tight tracking-tight md:text-[3rem]`}
            >
              From Brief to Fieldwork in Three Steps
            </motion.h2>
            <motion.p
              variants={item}
              className="max-w-3xl text-pretty text-base font-normal leading-relaxed text-muted md:text-lg"
            >
              Our streamlined process gets your study off the ground quickly —
              without sacrificing quality.
            </motion.p>
          </div>

          <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-10 md:max-w-none md:flex-row md:justify-center md:gap-0">
            {steps.map((step, index) => (
              <Fragment key={step.label}>
                {index > 0 && (
                  <>
                    <motion.span
                      variants={item}
                      className="block text-2xl leading-none text-accent-gradient md:hidden"
                      aria-hidden
                    >
                      ↓
                    </motion.span>
                    <motion.span
                      variants={item}
                      className="hidden h-[200px] shrink-0 items-center self-center px-2 text-2xl leading-none text-accent-gradient md:inline-flex lg:px-3"
                      aria-hidden
                    >
                      →
                    </motion.span>
                  </>
                )}
                <motion.div variants={item}>
                  <StepCircle icon={step.icon} label={step.label} />
                </motion.div>
              </Fragment>
            ))}
          </div>

          <motion.p
            variants={item}
            className="mt-12 text-pretty text-base font-normal leading-relaxed text-muted md:text-lg"
          >
            Most projects move from briefing to confirmed participants within days.
            We handle the complexity so your team can focus on what matters —
            running great research.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}

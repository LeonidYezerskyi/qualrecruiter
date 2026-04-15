"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import { scrollStaggerVariants, scrollStaggerViewport } from "@/lib/motion";
import { AccentPill } from "./AccentPill";
import { Container } from "./Container";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

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
              <AccentPill>OUR APPROACH</AccentPill>
            </motion.div>
            <motion.h2
              variants={item}
              className={`${playfair.className} text-accent-gradient max-w-4xl text-pretty text-[2.75rem] font-medium leading-tight tracking-tight md:text-[3rem]`}
            >
              Modern Methods. Proven Results.
            </motion.h2>
          </div>

          <div className="mt-10 flex flex-col gap-10 lg:mt-12 lg:flex-row lg:items-start lg:gap-12">
            <motion.div
              variants={item}
              className="w-full shrink-0 lg:w-[40%] lg:max-w-[40%]"
            >
              <div className="rounded-[4px] p-px accent-ring-bg">
                <div className="rounded-[3px] bg-page p-6">
                  <h3
                    className={`${playfair.className} text-accent-gradient text-lg font-semibold leading-snug`}
                  >
                    How We Source
                  </h3>
                  <p className="mt-4 text-base font-normal leading-relaxed text-muted">
                    We combine modern digital recruitment methods with proven traditional
                    sourcing techniques and a trusted network of research partners —
                    ensuring consistent quality across every project type and audience.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="min-w-0 flex-1 space-y-8">
              <ul className="list-none space-y-8">
                {items.map((row) => (
                  <motion.li key={row.title} variants={item}>
                    <div className="flex gap-3">
                      <ArrowRight
                        className="mt-0.5 shrink-0"
                        size={20}
                        stroke="url(#qualrecruiter-accent-gradient)"
                        strokeWidth={2}
                        aria-hidden
                      />
                      <div className="min-w-0">
                        <p className="text-lg font-semibold leading-snug text-accent-gradient">
                          {row.title}
                        </p>
                        <p className="mt-1.5 text-base font-normal leading-relaxed text-muted">
                          {row.description}
                        </p>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { scrollStaggerVariants, scrollStaggerViewport } from "@/lib/motion";
import { Container } from "./Container";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const stats = [
  {
    value: "100%",
    label: "Screener Match",
    description:
      "Every participant meets your exact criteria before confirmation.",
  },
  {
    value: "B2B+B2C",
    label: "Audience Range",
    description:
      "From niche professionals to mass-market consumers.",
  },
  {
    value: "U.S.",
    label: "National Reach",
    description:
      "Recruitment coverage across all major U.S. markets.",
  },
] as const;

export function TestimonialStatsSection() {
  const reduceMotion = useReducedMotion() === true;
  const { container, item } = scrollStaggerVariants(reduceMotion);

  return (
    <section className="bg-page py-[80px]">
      <Container>
        <motion.div
          className="mx-auto w-full max-w-[1100px]"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={scrollStaggerViewport}
        >
          <motion.div variants={item} className="flex items-stretch gap-8">
            <div className="accent-bar-y shrink-0" aria-hidden />
            <blockquote className="min-w-0 flex-1 m-0 border-0 p-0">
              <p
                className={`${playfair.className} text-accent-gradient text-pretty text-[2.75rem] font-normal italic leading-tight tracking-tight md:text-[3rem]`}
              >
                &quot;Great partner throughout the entire project — flexible,
                responsive, and delivered exactly the participants we
                needed.&quot;
              </p>
              <footer className="mt-4 text-sm font-normal leading-normal text-muted">
                — Research Director, Insights Agency
              </footer>
            </blockquote>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={item}
                className={`stat-col-divider flex flex-col items-center text-center md:px-4 ${
                  index < stats.length - 1
                    ? "border-b border-[rgba(201,160,66,0.3)] pb-10 md:border-b-0 md:pb-0 md:pr-6 lg:pr-8"
                    : ""
                }`}
              >
                <p
                  className={`${playfair.className} text-[2.75rem] font-bold leading-none tracking-tight text-white md:text-[3rem]`}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-base font-medium leading-snug text-muted">
                  {stat.label}
                </p>
                <p className="mt-2 max-w-[200px] text-center text-sm font-normal leading-relaxed text-muted/80">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

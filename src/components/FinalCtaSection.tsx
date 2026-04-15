"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { scrollStaggerVariants, scrollStaggerViewport } from "@/lib/motion";
import { AccentPill } from "./AccentPill";
import { Button } from "./Button";
import { Container } from "./Container";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const mailtoHello = "mailto:hello@qualrecruiter.us";

export function FinalCtaSection() {
  const reduceMotion = useReducedMotion() === true;
  const { container, item } = scrollStaggerVariants(reduceMotion);

  return (
    <section className="border-t border-white/10 bg-page py-24 md:py-32 lg:py-40">
      <Container>
        <motion.div
          className="mx-auto w-full max-w-[1100px] space-y-5 text-left md:space-y-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={scrollStaggerViewport}
        >
          <motion.div variants={item}>
            <AccentPill variant="solid">GET STARTED</AccentPill>
          </motion.div>
          <motion.h2
            variants={item}
            className={`${playfair.className} text-accent-gradient max-w-4xl text-pretty text-[2.75rem] font-medium leading-tight tracking-tight md:text-[3rem]`}
          >
            Ready to Find the Right Participants?
          </motion.h2>
          <motion.p
            variants={item}
            className="max-w-3xl text-pretty text-base font-normal leading-relaxed text-muted md:text-lg"
          >
            Tell us about your next study and we&apos;ll get to work. Whether you
            have a detailed screener ready or just a rough idea, we&apos;re here to
            help scope your project and make it happen — reliably and on time.
          </motion.p>
          <motion.div
            variants={item}
            className="flex flex-col gap-4 pt-2 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Button variant="primary" href={mailtoHello}>
              Start your recruitment
            </Button>
            <Button variant="secondary" href={mailtoHello}>
              Start a Conversation
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

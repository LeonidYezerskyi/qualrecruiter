"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { easePremium } from "@/lib/motion";
import { Button } from "./Button";
import { Container } from "./Container";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const HERO_IMAGE = "/images/hero-bg.jpg";
const MAILTO = "mailto:hello@qualrecruiter.us";

export function Hero() {
  const reduceMotion = useReducedMotion() === true;

  const heroContentContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.2,
        delayChildren: reduceMotion ? 0 : 0.12,
      },
    },
  };

  const heroContentItem = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.68,
        ease: easePremium,
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: reduceMotion ? 1 : 1.15 }}
        animate={{ scale: 1 }}
        transition={{
          duration: reduceMotion ? 0 : 1.5,
          ease: "easeOut",
        }}
      >
        <Image
          src={HERO_IMAGE}
          alt="Professionals collaborating in a meeting"
          fill
          priority
          className="object-cover object-center saturate-[0.88] contrast-[0.98]"
          sizes="100vw"
        />
      </motion.div>
      <div className="photo-scrim absolute inset-0" aria-hidden />
      <div className="relative z-10 flex min-h-screen items-center pt-24 pb-16 md:pt-28 md:pb-20">
        <Container>
          <div className="mx-auto w-full max-w-[1100px]">
            <motion.div
              className="max-w-2xl space-y-6 text-left md:max-w-3xl lg:max-w-5xl lg:space-y-8"
              variants={heroContentContainer}
              initial={reduceMotion ? "visible" : "hidden"}
              animate="visible"
            >
              <motion.h1
                variants={heroContentItem}
                className={`${playfair.className} text-accent-gradient text-pretty text-[3.25rem] font-medium leading-[1.05] tracking-tight md:text-[3.75rem] lg:text-[4.125rem]`}
              >
                Recruit qualified research participants in days, not weeks
              </motion.h1>
              <motion.p
                variants={heroContentItem}
                className="max-w-2xl text-pretty text-base font-normal leading-relaxed text-white md:text-lg"
              >
                We recruit high-quality participants for qualitative research, so you
                can focus on insights, not sourcing. From hard-to-reach audiences to
                everyday consumers, we deliver participants who match your exact
                criteria — reliably and on time.
              </motion.p>
              <motion.div variants={heroContentItem} className="pt-2">
                <Button variant="primary" href={MAILTO}>
                  Start a Conversation
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}

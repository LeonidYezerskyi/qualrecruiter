"use client";

import {
  BriefcaseBusiness,
  Home,
  MessagesSquare,
  Mic,
  UserSearch,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { scrollStaggerVariants, scrollStaggerViewport } from "@/lib/motion";
import { AccentPill } from "./AccentPill";
import { Section } from "./Section";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const services: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Mic,
    title: "In-Depth Interviews",
    description:
      "IDIs with carefully screened participants who meet your exact profile — every time.",
  },
  {
    icon: Users,
    title: "Focus Groups",
    description:
      "Recruit engaged, qualified participants for in-person or online group sessions.",
  },
  {
    icon: Home,
    title: "Ethnographic & IHUTs",
    description:
      "Ethnographic studies, in-home usage tests, and shop-alongs with real-world participants.",
  },
  {
    icon: MessagesSquare,
    title: "Online Communities & Diaries",
    description:
      "Recruit members for longitudinal diary studies and online communities that deliver depth.",
  },
  {
    icon: UserSearch,
    title: "Mystery Shopping",
    description:
      "Identify and place the right mystery shoppers for retail, service, and brand experience research.",
  },
  {
    icon: BriefcaseBusiness,
    title: "B2B Recruitment",
    description:
      "Hard-to-reach professionals, executives, and niche business audiences — we find them.",
  },
];

export function ServicesSection() {
  const reduceMotion = useReducedMotion() === true;
  const { container, item } = scrollStaggerVariants(reduceMotion);

  return (
    <Section id="services" tone="default">
      <motion.div
        className="mx-auto w-full max-w-[1100px]"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={scrollStaggerViewport}
      >
        <div className="flex flex-col space-y-12 md:space-y-14">
          <div className="max-w-3xl space-y-5 text-left md:space-y-6">
            <motion.div variants={item}>
              <AccentPill variant="solid">WHAT WE DO</AccentPill>
            </motion.div>
            <motion.h2
              variants={item}
              className={`${playfair.className} text-accent-gradient max-w-3xl text-pretty text-[2.75rem] font-medium leading-tight tracking-tight md:text-[3rem]`}
            >
              Qualitative Recruitment,
              <br />
              Across Every Method
            </motion.h2>
            <motion.p
              variants={item}
              className="max-w-2xl text-pretty text-base font-normal leading-relaxed text-muted md:text-lg"
            >
              Whether B2C or B2B, online or in-person — we specialize in recruiting
              participants for all types of qualitative research.
            </motion.p>
          </div>

          <ul className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-12 lg:gap-y-14">
            {services.map(({ icon: Icon, title, description }) => (
              <motion.li
                key={title}
                variants={item}
                className="flex flex-col items-start space-y-4 text-left"
              >
                <Icon
                  className="shrink-0"
                  size={36}
                  stroke="url(#qualrecruiter-accent-gradient)"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold leading-snug text-accent-gradient">
                    {title}
                  </h3>
                  <p className="text-base font-normal leading-relaxed text-muted">
                    {description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Section>
  );
}

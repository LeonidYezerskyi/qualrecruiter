"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { easePremium } from "@/lib/motion";

export type FadeInViewProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay before this block’s animation starts (s) */
  delay?: number;
  /** Initial vertical offset (px) */
  y?: number;
  duration?: number;
  /** Passed to `viewport.margin` (IntersectionObserver-style) */
  viewportMargin?: string;
} & Omit<
  HTMLMotionProps<"div">,
  "children" | "initial" | "whileInView" | "transition" | "viewport"
>;

/**
 * Scroll-triggered fade + slide up. Use inside sections below the fold.
 */
export function FadeInView({
  children,
  className,
  delay = 0,
  y = 20,
  duration = 0.72,
  viewportMargin = "0px 0px -10% 0px",
  ...rest
}: FadeInViewProps) {
  const reduceMotion = useReducedMotion() === true;

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: viewportMargin }}
      transition={{
        duration: reduceMotion ? 0 : duration,
        delay: reduceMotion ? 0 : delay,
        ease: easePremium,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Alias for teams that prefer the name `MotionWrapper` */
export const MotionWrapper = FadeInView;

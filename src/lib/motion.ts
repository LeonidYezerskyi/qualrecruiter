import type { Variants } from "framer-motion";

/** Premium easing — smooth deceleration, no overshoot */
export const easePremium = [0.16, 1, 0.3, 1] as const;

/** `whileInView` — один раз, трохи раніше за нижній край вікна */
export const scrollStaggerViewport = {
  once: true,
  margin: "0px 0px -10% 0px",
} as const;

/**
 * Як у Hero: по черзі fade + slide up. Для секцій під скролом (whileInView).
 */
export function scrollStaggerVariants(reduceMotion: boolean): {
  container: Variants;
  item: Variants;
} {
  const stagger = reduceMotion ? 0 : 0.2;
  const delayChildren = reduceMotion ? 0 : 0.08;
  const y = reduceMotion ? 0 : 24;
  const duration = reduceMotion ? 0 : 0.64;

  return {
    container: {
      hidden: {},
      visible: {
        transition: { staggerChildren: stagger, delayChildren },
      },
    },
    item: {
      hidden: { opacity: reduceMotion ? 1 : 0, y },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration, ease: easePremium },
      },
    },
  };
}

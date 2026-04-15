import type { ReactNode } from "react";

type GradientTone = "page" | "surface" | "dark";

const innerTone: Record<GradientTone, string> = {
  page: "bg-page/95 backdrop-blur-sm",
  surface: "bg-surface/95 backdrop-blur-sm",
  dark: "bg-neutral-950/86 backdrop-blur-sm",
};

type AccentPillProps = {
  children: ReactNode;
  /**
   * `solid` — drab gold fill (only: What We Do, How It Works, Results, Get Started).
   * `gradient` — gold sweep ring + gradient text (all other section kickers).
   */
  variant?: "solid" | "gradient";
  /** Inner fill behind gradient text when `variant="gradient"` */
  tone?: GradientTone;
  className?: string;
  innerClassName?: string;
};

export function AccentPill({
  children,
  variant = "gradient",
  tone = "page",
  className = "",
  innerClassName = "",
}: AccentPillProps) {
  if (variant === "solid") {
    return (
      <span className={`section-pill ${innerClassName} ${className}`.trim()}>
        {children}
      </span>
    );
  }

  return (
    <span className={`inline-block rounded-[4px] p-px accent-ring-bg ${className}`.trim()}>
      <span
        className={`block rounded-[3px] px-[12px] py-[4px] text-[11px] font-medium uppercase leading-none tracking-wide sm:text-xs ${innerTone[tone]} ${innerClassName}`.trim()}
      >
        <span className="text-accent-gradient">{children}</span>
      </span>
    </span>
  );
}

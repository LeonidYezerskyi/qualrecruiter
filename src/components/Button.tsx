import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary";

type SharedButtonProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
};

export type ButtonProps = SharedButtonProps &
  (
    | ({ href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children">)
    | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
  );

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a042]";

const primaryClasses =
  `inline-flex items-center justify-center rounded-[4px] text-center accent-btn-primary ` +
  `px-[28px] py-[14px] text-base font-semibold leading-none text-ink shadow-none ` +
  `active:scale-[0.98] ${focusRing}`;

/** Ghost / outline — flat gold border + gold text (distinct from gradient primary) */
const secondaryClasses =
  `inline-flex items-center justify-center rounded-[4px] border-2 border-solid border-gold ` +
  `bg-transparent px-[28px] py-[14px] text-center text-base font-semibold leading-none text-gold ` +
  `shadow-none transition-colors duration-200 ease-out hover:bg-gold/[0.08] ` +
  `active:scale-[0.98] ${focusRing}`;

export function Button(props: ButtonProps) {
  const { variant = "primary", className = "", children, ...rest } = props;
  const base = "text-center disabled:pointer-events-none disabled:opacity-50";
  const variantCn =
    variant === "secondary"
      ? `${base} ${secondaryClasses}`
      : `${base} ${primaryClasses}`;
  const cn = `${variantCn} ${className}`.trim();

  if ("href" in rest && rest.href) {
    const { href, ...anchorProps } = rest;
    return (
      <a href={href} className={cn} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={type} className={cn} {...buttonProps}>
      {children}
    </button>
  );
}

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

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "rounded-xl bg-primary px-7 py-3.5 text-base text-white shadow-soft ring-1 ring-white/10 transition-all duration-200 ease-out hover:bg-primary/92 hover:shadow-soft-lg active:scale-[0.98] active:bg-[#172554] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
  secondary:
    "rounded-xl border border-gray-200/90 bg-white/90 px-7 py-3.5 text-base text-gray-800 shadow-soft transition-all duration-200 ease-out hover:border-gray-300 hover:bg-white hover:shadow-soft-lg active:scale-[0.98] active:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", className = "", children, ...rest } = props;
  const base =
    "inline-flex items-center justify-center text-center font-semibold disabled:pointer-events-none disabled:opacity-50";
  const cn = `${base} ${variantClasses[variant]} ${className}`.trim();

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

import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary";

type SharedProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type LinkButtonProps = SharedProps & {
  href: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
};

const styles: Record<ButtonVariant, string> = {
  primary: "border-accent bg-accent text-background hover:bg-accent-strong",
  secondary: "border-border bg-surface/80 text-text hover:border-accent/70",
};

export function Button(props: ButtonProps | LinkButtonProps) {
  const { children, className = "", variant = "primary" } = props;
  const base =
    "inline-flex min-h-11 items-center justify-center rounded-full border px-5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-accent/50";

  if (typeof props.href === "string") {
    const { "aria-label": ariaLabel, href, rel, target } = props;
    return (
      <Link
        aria-label={ariaLabel}
        to={href}
        rel={rel}
        target={target}
        className={`${base} ${styles[variant]} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      {...props}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

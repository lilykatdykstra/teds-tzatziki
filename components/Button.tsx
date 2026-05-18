import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-aegean text-white hover:bg-aegean-dark shadow-md shadow-aegean/20",
  secondary:
    "bg-olive text-cream hover:bg-olive-dark shadow-md shadow-olive/15",
  outline:
    "border-2 border-aegean text-aegean hover:bg-aegean hover:text-white",
};

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = BaseProps & {
  href: string;
};

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  ...props
}: ButtonProps | LinkProps) {
  const classes = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-all duration-200 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonProps)}>
      {children}
    </button>
  );
}

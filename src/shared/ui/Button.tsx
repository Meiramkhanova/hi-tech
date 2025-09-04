// components/ui/Button.tsx
import clsx from "clsx";
import type { ReactNode } from "react";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outlined";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "flex w-fit items-center justify-center tracking-wide cursor-pointer transition-all ease-in-out duration-300 rounded-2xl";

  const variants: Record<Variant, string> = {
    primary:
      "bg-thesecondary hover:brightness-110 border border-thesecondary text-white",
    secondary:
      "bg-transparent border border-white hover:bg-thesecondary hover:border-thesecondary text-white",
    outlined:
      "bg-white border border-thesecondary text-thesecondary hover:bg-thesecondary hover:text-white",
  };

  const sizes: Record<Size, string> = {
    sm: "px-4 py-2.5",
    md: "px-6 h-14",
    lg: "px-10 py-4",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}>
      {children}
    </button>
  );
}

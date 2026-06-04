"use client";

import Link from "next/link";
import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-500 focus-visible:ring-offset-concrete-50 disabled:opacity-50 disabled:pointer-events-none rounded-full select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-500 text-navy-900 hover:bg-accent-400 shadow-[0_8px_24px_-12px_rgba(245,184,46,0.6)]",
  secondary:
    "bg-navy-900 text-white hover:bg-navy-700",
  ghost:
    "bg-transparent text-navy-900 hover:bg-navy-900/5",
  outline:
    "border border-navy-900/15 text-navy-900 hover:bg-navy-900 hover:text-white",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-6 text-[0.95rem]",
  lg: "h-14 px-8 text-base",
};

const MotionLink = motion.create(Link);

const motionProps = {
  whileHover: { y: -2 },
  whileTap: { scale: 0.97 },
  transition: { type: "spring" as const, stiffness: 400, damping: 28 },
};

type ButtonProps = CommonProps & Omit<HTMLMotionProps<"button">, "children">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = "primary", size = "md", className, children, ...props },
    ref,
  ) {
    return (
      <motion.button
        ref={ref}
        {...motionProps}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  },
);

type LinkButtonProps = CommonProps & {
  href: string;
  external?: boolean;
};

export function LinkButton({
  href,
  external,
  variant = "primary",
  size = "md",
  className,
  children,
}: LinkButtonProps) {
  const cls = cn(base, variants[variant], sizes[size], className);
  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...motionProps}
        className={cls}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <MotionLink href={href} className={cls} {...motionProps}>
      {children}
    </MotionLink>
  );
}

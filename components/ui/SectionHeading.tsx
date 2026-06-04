import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  tone = "light",
}: SectionHeadingProps) {
  const isDark = tone === "dark";
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]",
            isDark ? "text-accent-400" : "text-accent-600",
          )}
        >
          <span className="h-px w-8 bg-accent-500" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-balance text-3xl font-bold sm:text-4xl lg:text-5xl",
          isDark ? "text-white" : "text-navy-900",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-pretty text-base leading-relaxed sm:text-lg",
            isDark ? "text-steel-200" : "text-steel-500",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

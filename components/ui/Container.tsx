import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  size?: "default" | "narrow" | "wide";
};

export function Container({
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) {
  const sizes = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[88rem]",
  };
  return (
    <div
      className={cn("mx-auto w-full px-5 sm:px-8 lg:px-12", sizes[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}

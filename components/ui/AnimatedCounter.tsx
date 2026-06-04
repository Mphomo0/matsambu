"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
  format?: (n: number) => string;
};

function formatNumber(n: number): string {
  if (n >= 1_000_000) {
    return (n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1) + "M";
  }
  if (n >= 1_000) {
    return (n / 1_000).toFixed(0) + "K";
  }
  return n.toString();
}

export function AnimatedCounter({
  value,
  suffix,
  duration = 1.6,
  className,
  format = formatNumber,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motion = useMotionValue(0);
  const spring = useSpring(motion, { duration: duration * 1000, bounce: 0 });
  const display = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (inView) motion.set(value);
  }, [inView, motion, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (display.current) {
        display.current.textContent = format(Math.round(latest)) + (suffix ?? "");
      }
    });
  }, [spring, format, suffix]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      <span ref={display}>0{suffix ?? ""}</span>
    </span>
  );
}

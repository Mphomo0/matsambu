"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { ServiceIcon } from "@/components/ui/Icons";
import { services, type Service } from "@/lib/content";
import { cn } from "@/lib/utils";

type ServiceTabsNavProps = {
  current: Service;
};

export function ServiceTabsNav({ current }: ServiceTabsNavProps) {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("service-tabs-sentinel");
    if (!sentinel || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { rootMargin: "-80px 0px 0px 0px", threshold: 0 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div id="service-tabs-sentinel" aria-hidden className="h-px w-full" />
      <div
        className={cn(
          "sticky top-20 z-30 transition-shadow duration-300",
          stuck
            ? "bg-white/90 shadow-[0_1px_0_0_rgba(11,27,43,0.08)] backdrop-blur-md"
            : "bg-white",
        )}
      >
        <Container>
          <div
            role="tablist"
            aria-label="Switch between services"
            className="flex items-center gap-2 overflow-x-auto py-3"
          >
            <span className="hidden shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-steel-500 sm:inline">
              Services
            </span>
            <span className="hidden h-4 w-px shrink-0 bg-steel-200 sm:inline-block" />
            {services.map((service) => {
              const isActive = service.slug === current.slug;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  role="tab"
                  aria-selected={isActive}
                  className={cn(
                    "inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-navy-900 text-white shadow-soft"
                      : "text-steel-600 hover:bg-navy-900/5 hover:text-navy-900",
                  )}
                >
                  <ServiceIcon
                    name={service.icon}
                    className={cn(
                      "h-4 w-4",
                      isActive ? "text-accent-400" : "text-accent-600",
                    )}
                  />
                  <span className="whitespace-nowrap">{service.title}</span>
                </Link>
              );
            })}
          </div>
        </Container>
        <div className="h-px w-full bg-steel-200/60" />
      </div>
    </>
  );
}

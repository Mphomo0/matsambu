"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { projects, type Project } from "@/lib/content";
import { cn } from "@/lib/utils";

type ProjectNavProps = {
  current: Project;
};

export function ProjectNav({ current }: ProjectNavProps) {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [filter, setFilter] = useState<"all" | Project["category"]>("all");
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = document.getElementById("project-nav-sentinel");
    if (!sentinel || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { rootMargin: "-80px 0px 0px 0px", threshold: 0 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        !panelRef.current?.contains(target) &&
        !triggerRef.current?.contains(target)
      ) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const currentIndex = projects.findIndex((p) => p.slug === current.slug);
  const prev = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];

  const visibleProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <>
      <div id="project-nav-sentinel" aria-hidden className="h-px w-full" />
      <div
        className={cn(
          "sticky top-20 z-30 transition-shadow duration-300",
          stuck
            ? "bg-white/90 shadow-[0_1px_0_0_rgba(11,27,43,0.08)] backdrop-blur-md"
            : "bg-white",
        )}
      >
        <Container>
          <div className="flex items-center justify-between gap-3 py-3">
            <Link
              href={`/projects/${prev.slug}`}
              className="group flex min-w-0 flex-1 items-center gap-3 rounded-full px-3 py-2 text-left text-sm text-navy-900 transition-colors hover:bg-navy-900/5 sm:flex-none sm:px-4"
              aria-label={`Previous project: ${prev.title}`}
            >
              <span className="relative h-10 w-12 shrink-0 overflow-hidden rounded-md">
                <Image
                  src={prev.image}
                  alt=""
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </span>
              <span className="hidden min-w-0 flex-col leading-tight sm:flex">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-steel-500">
                  Previous
                </span>
                <span className="truncate font-semibold">{prev.title}</span>
              </span>
            </Link>

            <div className="relative shrink-0">
              <button
                ref={triggerRef}
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-haspopup="listbox"
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                  open
                    ? "border-navy-900 bg-navy-900 text-white"
                    : "border-steel-200 bg-white text-navy-900 hover:border-navy-900/30",
                )}
              >
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] opacity-70">
                  Viewing
                </span>
                <span className="max-w-[140px] truncate sm:max-w-[200px]">
                  {current.title}
                </span>
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-transform",
                    open ? "rotate-45 bg-accent-400" : "bg-accent-500",
                  )}
                />
              </button>

              <AnimatePresence>
                {open && (
                  <motion.div
                    ref={panelRef}
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    role="listbox"
                    aria-label="Jump to project"
                    className="absolute right-0 top-full z-50 mt-3 w-[min(360px,calc(100vw-2.5rem))] overflow-hidden rounded-2xl border border-steel-200 bg-white shadow-premium"
                  >
                    <div className="flex items-center gap-1 border-b border-steel-200/60 p-2">
                      {(["all", "residential", "commercial", "industrial"] as const).map(
                        (value) => {
                          const isActive = filter === value;
                          return (
                            <button
                              key={value}
                              type="button"
                              onClick={() => setFilter(value)}
                              className={cn(
                                "flex-1 rounded-full px-2 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.1em] transition-colors",
                                isActive
                                  ? "bg-navy-900 text-white"
                                  : "text-steel-500 hover:bg-navy-900/5 hover:text-navy-900",
                              )}
                            >
                              {value === "all" ? "All" : value}
                            </button>
                          );
                        },
                      )}
                    </div>
                    <ul className="max-h-[60vh] overflow-y-auto p-2">
                      {visibleProjects.map((project) => {
                        const isCurrent = project.slug === current.slug;
                        return (
                          <li key={project.slug}>
                            <Link
                              href={`/projects/${project.slug}`}
                              onClick={() => setOpen(false)}
                              role="option"
                              aria-selected={isCurrent}
                              className={cn(
                                "flex items-center gap-3 rounded-xl p-2 transition-colors",
                                isCurrent
                                  ? "bg-accent-500/10"
                                  : "hover:bg-navy-900/5",
                              )}
                            >
                              <span className="relative h-12 w-16 shrink-0 overflow-hidden rounded-md">
                                <Image
                                  src={project.image}
                                  alt=""
                                  fill
                                  sizes="64px"
                                  className="object-cover"
                                />
                              </span>
                              <span className="flex min-w-0 flex-1 flex-col leading-tight">
                                <span
                                  className={cn(
                                    "truncate text-sm font-semibold",
                                    isCurrent ? "text-accent-700" : "text-navy-900",
                                  )}
                                >
                                  {project.title}
                                </span>
                                <span className="truncate text-xs text-steel-500">
                                  {project.category} · {project.year} ·{" "}
                                  {project.location}
                                </span>
                              </span>
                              {isCurrent && (
                                <span className="shrink-0 rounded-full bg-accent-500 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-navy-900">
                                  Current
                                </span>
                              )}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href={`/projects/${next.slug}`}
              className="group flex min-w-0 flex-1 items-center justify-end gap-3 rounded-full px-3 py-2 text-right text-sm text-navy-900 transition-colors hover:bg-navy-900/5 sm:flex-none sm:px-4"
              aria-label={`Next project: ${next.title}`}
            >
              <span className="hidden min-w-0 flex-col leading-tight sm:flex">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-steel-500">
                  Next
                </span>
                <span className="truncate font-semibold">{next.title}</span>
              </span>
              <span className="relative h-10 w-12 shrink-0 overflow-hidden rounded-md">
                <Image
                  src={next.image}
                  alt=""
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </span>
            </Link>
          </div>
        </Container>
        <div className="h-px w-full bg-steel-200/60" />
      </div>
    </>
  );
}

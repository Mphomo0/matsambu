"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { projects, type Project, type ProjectCategory } from "@/lib/content";

const filters: { value: "all" | ProjectCategory; label: string }[] = [
  { value: "all", label: "All projects" },
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "industrial", label: "Industrial" },
];

export function ProjectGrid() {
  const [active, setActive] = useState<"all" | ProjectCategory>("all");

  const visible = useMemo<Project[]>(() => {
    if (active === "all") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="mb-10 flex flex-wrap gap-2"
        >
          {filters.map((f) => {
            const isActive = f.value === active;
            return (
              <button
                key={f.value}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(f.value)}
                className={cn(
                  "relative inline-flex h-11 items-center rounded-full px-5 text-sm font-medium transition-colors",
                  isActive
                    ? "text-navy-900"
                    : "text-steel-500 hover:text-navy-900",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-white shadow-soft ring-1 ring-steel-200"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{f.label}</span>
              </button>
            );
          })}
        </div>

        <motion.div
          layout
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-navy-900"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent transition-opacity duration-300 group-hover:from-navy-900/95" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent-400">
                      {project.category} · {project.year}
                    </span>
                    <h3 className="mt-2 text-xl font-bold">
                      {project.title}
                    </h3>
                    <p className="text-sm text-steel-200">{project.location}</p>
                    <p className="mt-3 overflow-hidden text-sm leading-relaxed text-steel-200 transition-all duration-500 max-sm:max-h-40 max-sm:opacity-100 sm:max-h-0 sm:opacity-0 sm:group-hover:max-h-40 sm:group-hover:opacity-100">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}

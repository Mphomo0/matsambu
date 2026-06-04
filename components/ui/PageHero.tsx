import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 pb-20 pt-32 sm:pb-24 sm:pt-44 lg:pb-28 lg:pt-52">
      <div className="absolute inset-0 concrete-texture opacity-50" />
      <div
        aria-hidden
        className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
      />
      <Container>
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
            <span className="h-px w-8 bg-accent-500" />
            {eyebrow}
          </span>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-steel-200">
              {description}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}

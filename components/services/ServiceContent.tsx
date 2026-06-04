import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CheckIcon } from "@/components/ui/Icons";
import type { Service } from "@/lib/content";

type ServiceContentProps = {
  service: Service;
};

export function ServiceContent({ service }: ServiceContentProps) {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                <span className="h-px w-8 bg-accent-500" />
                What we do
              </span>
              <h2 className="mt-4 text-balance text-3xl font-bold text-navy-900 sm:text-4xl">
                Scope of work
              </h2>
              <p className="mt-6 text-pretty text-base leading-relaxed text-steel-600 sm:text-lg">
                {service.description}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-navy-900 p-8 sm:p-12">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
                  <span className="h-px w-8 bg-accent-500" />
                  What&apos;s included
                </span>
                <h3 className="mt-4 text-balance text-2xl font-bold text-white sm:text-3xl">
                  Everything you can expect.
                </h3>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm leading-relaxed text-steel-200 sm:text-base"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-accent-400">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

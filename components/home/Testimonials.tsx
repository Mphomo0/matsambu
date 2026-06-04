import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What clients say"
            title="Trusted by developers, owners and QSs."
            description="Real words from the people we've built for."
            align="center"
          />
        </Reveal>

        <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="flex h-full flex-col rounded-2xl border border-steel-200 bg-white p-8 shadow-soft">
                <svg
                  className="h-7 w-7 text-accent-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M9 7H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v1a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5V9a2 2 0 0 0 0-2zm10 0h-4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v1a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5V9a2 2 0 0 0 0-2z" />
                </svg>
                <blockquote className="mt-5 flex-1 text-pretty text-base leading-relaxed text-steel-600">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-steel-100 pt-4">
                  <p className="text-sm font-semibold text-navy-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-steel-500">{t.role}</p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

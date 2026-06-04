import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ValueIcon } from "@/components/ui/Icons";
import { values } from "@/lib/content";

export function ValuesGrid() {
  return (
    <section className="bg-concrete-100 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we stand for"
            title="Four values that run every site."
            description="These aren't posters on a wall. They're the rules we hire, build and hand over by."
          />
        </Reveal>
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <div className="group h-full rounded-2xl border border-steel-200 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-premium">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-accent-500 transition-colors group-hover:bg-accent-500 group-hover:text-navy-900">
                  <ValueIcon name={v.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-500">
                  {v.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

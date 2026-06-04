import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { processSteps } from "@/lib/content";

export function ProcessBand() {
  return (
    <section className="bg-concrete-100 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we work"
            title="A clear, four-step process."
            description="No surprises, no scope creep. Every project follows the same proven process from first contact to handover."
          />
        </Reveal>

        <Stagger className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-steel-200 to-transparent lg:block"
          />
          {processSteps.map((step) => (
            <StaggerItem key={step.step}>
              <div className="relative flex flex-col">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-accent-500 shadow-premium ring-8 ring-concrete-100">
                  <span className="text-base font-bold">{step.step}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-500">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

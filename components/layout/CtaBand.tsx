import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRightIcon } from "@/components/ui/Icons";

type CtaBandProps = {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBand({
  title = "Ready to build? Let's talk.",
  description = "Tell us about your project — we respond to every enquiry within one business day.",
  primaryHref = "/contact",
  primaryLabel = "Start a conversation",
  secondaryHref = "/projects",
  secondaryLabel = "See our work",
}: CtaBandProps) {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl navy-gradient p-10 sm:p-16">
            <div className="absolute inset-0 concrete-texture opacity-60" />
            <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  {title}
                </h2>
                <p className="mt-4 text-pretty text-base text-steel-200 sm:text-lg">
                  {description}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <LinkButton href={primaryHref} size="lg" variant="primary">
                  {primaryLabel}
                  <ArrowRightIcon className="h-4 w-4" />
                </LinkButton>
                <LinkButton href={secondaryHref} size="lg" variant="outline">
                  <span className="text-white">{secondaryLabel}</span>
                </LinkButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

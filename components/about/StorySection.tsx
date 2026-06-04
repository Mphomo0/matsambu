import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function StorySection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
              <span className="h-px w-8 bg-accent-500" />
              Our story
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold text-navy-900 sm:text-4xl">
              Built by builders, for people who need things to actually get
              built.
            </h2>
            <div className="mt-6 space-y-5 text-pretty leading-relaxed text-steel-600">
              <p>
                Matsambu Projects started on a small residential plot in
                Johannesburg with one crew, one bakkie and an unwavering
                commitment to doing the job properly. Nearly two decades later,
                we operate across Gauteng with a permanent team of site
                managers, foremen and trusted sub-trades — and the same
                commitment.
              </p>
              <p>
                We&apos;ve delivered apartments, office parks, warehouses and
                family homes. We&apos;ve installed kilometres of rib-and-block
                flooring. And we&apos;ve done it by treating every project as
                if our name was still on the bakkie: on time, on budget, and
                built to last.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 border-t border-steel-200 pt-8 sm:grid-cols-3">
              {[
                { v: "2007", l: "Founded" },
                { v: "45+", l: "Permanent staff" },
                { v: "0", l: "Safety stoppages" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-bold text-navy-900 sm:text-3xl">
                    {s.v}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-steel-500">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-premium">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
                alt="Matsambu Projects team on site"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

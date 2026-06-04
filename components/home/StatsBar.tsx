import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { stats } from "@/lib/content";

export function StatsBar() {
  return (
    <section className="bg-navy-900 py-20 sm:py-24">
      <Container>
        <Stagger className="grid gap-y-12 sm:grid-cols-2 sm:gap-y-0 lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem
              key={stat.label}
              className="sm:border-l sm:border-white/10 sm:pl-10 sm:[&:nth-child(odd)]:border-l-0 sm:[&:nth-child(odd)]:pl-0 lg:[&:nth-child(odd)]:border-l lg:[&:nth-child(odd)]:pl-10 lg:first:border-l-0 lg:first:pl-0"
            >
              <Reveal as="div" y={0}>
                <div className="text-5xl font-bold text-accent-400 sm:text-6xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-3 text-sm font-medium uppercase tracking-wider text-steel-300">
                  {stat.label}
                </p>
              </Reveal>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

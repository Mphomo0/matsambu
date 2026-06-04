import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { team } from "@/lib/content";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function TeamSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The team"
            title="Senior people on every project."
            description="You'll deal directly with the people running your build — not a junior account manager."
          />
        </Reveal>
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <div className="group h-full rounded-2xl border border-steel-200 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-premium">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-navy-700 to-navy-900 text-lg font-bold text-accent-400 ring-4 ring-concrete-50">
                  {initials(member.name)}
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-900">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-600">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-steel-500">
                  {member.bio}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

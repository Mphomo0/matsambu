import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ArrowRightIcon, ServiceIcon } from "@/components/ui/Icons";
import { services, type Service } from "@/lib/content";

type OtherServicesProps = {
  current: Service;
};

export function OtherServices({ current }: OtherServicesProps) {
  const others = services.filter((s) => s.slug !== current.slug);
  if (others.length === 0) return null;

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Other services"
            title="Explore what else we do."
            description="Most clients start with one service — many end up using all three."
          />
        </Reveal>

        <Stagger className="mt-14 grid gap-6 lg:grid-cols-2">
          {others.map((service) => (
            <StaggerItem key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-steel-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-premium sm:flex-row"
              >
                <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-auto sm:w-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-navy-900/10 to-transparent" />
                  <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-navy-900 shadow-soft backdrop-blur">
                    <ServiceIcon name={service.icon} className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-navy-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-500">
                    {service.short}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-600 transition-transform duration-300 group-hover:translate-x-1">
                    Learn more
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

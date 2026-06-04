import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  ArrowRightIcon,
  ServiceIcon,
} from "@/components/ui/Icons";
import { services } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ServicesOverview() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="Three services. One accountable team."
            description="From the first site visit to the final handover, Matsambu Projects runs every project with a single point of contact and a fixed-price contract."
          />
        </Reveal>

        <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-steel-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-premium"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/20 to-transparent" />
                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 text-navy-900 shadow-soft backdrop-blur">
                    <ServiceIcon
                      name={service.icon}
                      className="h-6 w-6"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-navy-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-500">
                    {service.short}
                  </p>
                  <span
                    className={cn(
                      "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-600",
                      "transition-transform duration-300 group-hover:translate-x-1",
                    )}
                  >
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

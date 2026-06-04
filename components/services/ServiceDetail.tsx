import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { ArrowRightIcon, CheckIcon, ServiceIcon } from "@/components/ui/Icons";
import type { Service } from "@/lib/content";
import { cn } from "@/lib/utils";

type ServiceDetailProps = {
  service: Service;
  index: number;
};

export function ServiceDetail({ service, index }: ServiceDetailProps) {
  const reversed = index % 2 === 1;
  return (
    <section
      id={service.slug}
      className={cn(
        "py-20 sm:py-24",
        index % 2 === 1 && "bg-concrete-100",
      )}
    >
      <Container>
        <div
          className={cn(
            "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
            reversed && "lg:[&>*:first-child]:order-2",
          )}
        >
          <Reveal>
            <Link
              href={`/services/${service.slug}`}
              aria-label={`View ${service.title} details`}
              className="group relative block aspect-[4/3] overflow-hidden rounded-2xl shadow-premium"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-navy-900/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-navy-900 shadow-soft backdrop-blur transition-transform duration-300 group-hover:-translate-y-1">
                View details
                <ArrowRightIcon className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-accent-500 shadow-soft">
              <ServiceIcon name={service.icon} className="h-7 w-7" />
            </div>
            <h2 className="mt-5 text-balance text-3xl font-bold text-navy-900 sm:text-4xl">
              {service.title}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-steel-600">
              {service.description}
            </p>
            <ul className="mt-7 space-y-3">
              {service.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 text-sm text-steel-700"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-accent-600">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <LinkButton
                href={`/services/${service.slug}`}
                variant="secondary"
                size="md"
              >
                Explore {service.title}
                <ArrowRightIcon className="h-4 w-4" />
              </LinkButton>
              <Link
                href={`/services/${service.slug}`}
                className="text-sm font-semibold text-accent-600 transition-colors hover:text-accent-500"
              >
                See projects & process →
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

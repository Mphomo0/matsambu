import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRightIcon, ServiceIcon } from "@/components/ui/Icons";
import { services, type Service } from "@/lib/content";

type ServiceHeroProps = {
  service: Service;
};

export function ServiceHero({ service }: ServiceHeroProps) {
  const index = services.findIndex((s) => s.slug === service.slug);
  const position = index >= 0 ? `${index + 1} of ${services.length}` : null;

  return (
    <section className="relative isolate -mt-20 overflow-hidden pt-20">
      <div className="relative h-[55vh] min-h-[420px] w-full sm:h-[64vh] sm:min-h-[460px] lg:h-[72vh]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/60 to-navy-900/30" />
        <div className="absolute inset-0 concrete-texture opacity-30" />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 pb-12 sm:pb-16">
        <Container>
          <Reveal>
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium uppercase tracking-[0.14em] text-white/60">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-accent-400"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden className="text-white/30">/</li>
                <li>
                  <Link
                    href="/services"
                    className="transition-colors hover:text-accent-400"
                  >
                    Services
                  </Link>
                </li>
                <li aria-hidden className="text-white/30">/</li>
                <li className="text-accent-400" aria-current="page">
                  {service.title}
                </li>
              </ol>
            </nav>
            <div className="mt-6 flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-accent-400 ring-1 ring-white/15 backdrop-blur">
                <ServiceIcon name={service.icon} className="h-7 w-7" />
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-400 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                {position ? `${position} services` : "Service"}
              </span>
            </div>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-base text-steel-200 sm:text-lg">
              {service.short}
            </p>
            <Link
              href="/services"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-accent-400"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15 transition-colors group-hover:border-accent-500/60">
                <ArrowRightIcon className="h-3.5 w-3.5 -rotate-180" />
              </span>
              View all services
            </Link>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}

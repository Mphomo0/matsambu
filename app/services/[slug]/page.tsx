import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceTabsNav } from "@/components/services/ServiceTabsNav";
import { ServiceContent } from "@/components/services/ServiceContent";
import { ServiceProjects } from "@/components/services/ServiceProjects";
import { OtherServices } from "@/components/services/OtherServices";
import { CtaBand } from "@/components/layout/CtaBand";
import { services, siteConfig } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} · ${siteConfig.name}`,
      description: service.description,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <ServiceHero service={service} />
      <ServiceTabsNav current={service} />
      <ServiceContent service={service} />
      <ServiceProjects service={service} />
      <OtherServices current={service} />
      <CtaBand
        title={`Ready to talk about ${service.title.toLowerCase()}?`}
        description="Tell us about your project — we'll come back with a fixed-price proposal and a clear programme, usually within five business days."
        primaryLabel="Start a conversation"
        secondaryLabel="See all services"
        secondaryHref="/services"
      />
    </>
  );
}

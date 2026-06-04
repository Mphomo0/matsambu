import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Matsambu Projects about your building, contracting or rib-and-block project. We respond to every enquiry within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project."
        description="Tell us a little about your build — scope, site, timeline — and we'll come back with next steps, a site visit, and a transparent quote."
      />
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            <Reveal className="lg:col-span-3">
              <div className="rounded-2xl border border-steel-200 bg-white p-7 shadow-soft sm:p-10">
                <h2 className="text-2xl font-bold text-navy-900">
                  Send us a message
                </h2>
                <p className="mt-2 text-sm text-steel-500">
                  All fields marked with <span className="text-accent-600">*</span>{" "}
                  are required.
                </p>
                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

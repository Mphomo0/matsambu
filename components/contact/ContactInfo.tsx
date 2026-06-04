import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MailIcon, PhoneIcon, PinIcon, ClockIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/lib/content";

export function ContactInfo() {
  return (
    <div className="rounded-2xl border border-steel-200 bg-white p-7 shadow-soft sm:p-9">
      <Reveal>
        <h2 className="text-2xl font-bold text-navy-900">
          Get in touch directly
        </h2>
        <p className="mt-2 text-sm text-steel-500">
          Prefer to chat? Our team is available during business hours.
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <ul className="mt-7 space-y-5">
          <li className="flex gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-accent-500">
              <PinIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-navy-900">Office</p>
              <p className="mt-0.5 text-sm text-steel-500">
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
                <br />
                {siteConfig.address.line3}
              </p>
            </div>
          </li>

          <li className="flex gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-accent-500">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-navy-900">Phone</p>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="mt-0.5 text-sm text-steel-500 transition-colors hover:text-accent-600"
              >
                {siteConfig.phone}
              </a>
            </div>
          </li>

          <li className="flex gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-accent-500">
              <MailIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-navy-900">Email</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-0.5 text-sm text-steel-500 transition-colors hover:text-accent-600"
              >
                {siteConfig.email}
              </a>
            </div>
          </li>

          <li className="flex gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-accent-500">
              <ClockIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-navy-900">Hours</p>
              <ul className="mt-0.5 space-y-0.5 text-sm text-steel-500">
                {siteConfig.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-6">
                    <span>{h.day}</span>
                    <span className="text-steel-600">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 overflow-hidden rounded-xl border border-steel-200">
          <div className="relative aspect-[16/9] bg-concrete-100">
            <svg
              viewBox="0 0 400 225"
              className="h-full w-full"
              role="img"
              aria-label="Map of Johannesburg office location"
            >
              <defs>
                <pattern
                  id="grid"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 20 0 L 0 0 0 20"
                    fill="none"
                    stroke="#d3dce5"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="400" height="225" fill="#e8edf2" />
              <rect width="400" height="225" fill="url(#grid)" />
              <path
                d="M0 140 Q 80 100, 160 130 T 320 110 T 400 130"
                stroke="#c9d2dc"
                strokeWidth="6"
                fill="none"
              />
              <path
                d="M0 170 Q 100 150, 200 165 T 400 160"
                stroke="#c9d2dc"
                strokeWidth="4"
                fill="none"
              />
              <path
                d="M120 0 L 130 225"
                stroke="#c9d2dc"
                strokeWidth="4"
                fill="none"
              />
              <path
                d="M260 0 L 270 225"
                stroke="#c9d2dc"
                strokeWidth="4"
                fill="none"
              />
              <circle
                cx="200"
                cy="112"
                r="8"
                fill="#f5b82e"
                stroke="#0b1b2b"
                strokeWidth="2"
              />
              <circle
                cx="200"
                cy="112"
                r="20"
                fill="none"
                stroke="#f5b82e"
                strokeWidth="1.5"
                opacity="0.5"
              />
            </svg>
          </div>
          <p className="border-t border-steel-200 bg-concrete-50 px-4 py-2.5 text-xs text-steel-500">
            Map placeholder — embed your Google Maps iframe here.
          </p>
        </div>
      </Reveal>

      <Container className="hidden" aria-hidden>
        {siteConfig.name}
      </Container>
    </div>
  );
}

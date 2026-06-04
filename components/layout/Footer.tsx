import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig, navLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-32 bg-navy-900 text-steel-200">
      <Container>
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-700 text-accent-500">
                <svg
                  viewBox="0 0 32 32"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                >
                  <path d="M7 24V11l9-5 9 5v13h-6v-8h-6v8H7z" />
                </svg>
              </span>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-bold tracking-tight text-white">
                  MATSAMBU
                </span>
                <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-steel-300">
                  Projects
                </span>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-steel-300">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                aria-label="LinkedIn"
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-700 text-steel-200 transition-colors hover:bg-accent-500 hover:text-navy-900"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001zM3 9.5h4V21H3V9.5zM10 9.5h3.8v1.55h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.2c0-1.24-.02-2.83-1.73-2.83-1.73 0-2 1.35-2 2.74V21h-4V9.5z" />
                </svg>
              </a>
              <a
                aria-label="Facebook"
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-700 text-steel-200 transition-colors hover:bg-accent-500 hover:text-navy-900"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94z" />
                </svg>
              </a>
              <a
                aria-label="Instagram"
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-700 text-steel-200 transition-colors hover:bg-accent-500 hover:text-navy-900"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.42 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.42-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.42a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.42-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.42C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.86 5.86 0 0 0-2.12 1.38A5.86 5.86 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.73 1.46 1.38 2.12.66.66 1.33 1.07 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.73 2.12-1.38.66-.66 1.07-1.33 1.38-2.12.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.38-2.12A5.86 5.86 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-steel-300 transition-colors hover:text-accent-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex gap-2 text-steel-300">
                <span className="font-medium text-white">A:</span>
                <span>
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                </span>
              </li>
              <li className="flex gap-2 text-steel-300">
                <span className="font-medium text-white">T:</span>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="transition-colors hover:text-accent-400"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex gap-2 text-steel-300">
                <span className="font-medium text-white">E:</span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-accent-400"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-navy-700 py-6 text-xs text-steel-400 sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p>Built with care in Johannesburg.</p>
        </div>
      </Container>
    </footer>
  );
}

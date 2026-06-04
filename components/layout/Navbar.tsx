"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { CloseIcon, MenuIcon } from "@/components/ui/Icons";
import { siteConfig, navLinks } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(11,27,43,0.06)]"
          : "bg-transparent",
      )}
    >
      <Container>
        <nav
          className="flex h-20 items-center justify-between"
          aria-label="Primary"
        >
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            aria-label={`${siteConfig.name} home`}
          >
            <span
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-xl transition-colors",
                scrolled
                  ? "bg-navy-900 text-accent-500"
                  : "bg-white/10 text-accent-500 ring-1 ring-white/15 backdrop-blur",
              )}
            >
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
            <span
              className={cn(
                "flex flex-col leading-none transition-colors",
                scrolled ? "text-navy-900" : "text-white",
              )}
            >
              <span className="text-sm font-bold tracking-tight">
                MATSAMBU
              </span>
              <span
                className={cn(
                  "text-[0.65rem] font-medium uppercase tracking-[0.18em]",
                  scrolled ? "text-steel-500" : "text-white/60",
                )}
              >
                Projects
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative inline-flex h-10 items-center rounded-full px-4 text-sm font-medium transition-colors",
                      scrolled
                        ? isActive
                          ? "text-navy-900"
                          : "text-steel-600 hover:text-navy-900"
                        : isActive
                          ? "text-white"
                          : "text-white/75 hover:text-white",
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className={cn(
                          "absolute inset-x-3 -bottom-px h-0.5 rounded-full",
                          scrolled ? "bg-accent-500" : "bg-accent-400",
                        )}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:block">
            <LinkButton href="/contact" size="sm" variant="primary">
              Get a quote
            </LinkButton>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden",
              scrolled
                ? "text-navy-900 hover:bg-navy-900/5"
                : "text-white hover:bg-white/10",
            )}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="border-t border-navy-900/5 bg-white shadow-premium">
              <Container>
                <ul className="flex flex-col py-4">
                  {navLinks.map((link) => {
                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href);
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "flex h-12 items-center text-base font-medium",
                            isActive ? "text-accent-600" : "text-navy-900",
                          )}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                  <li className="mt-3">
                    <LinkButton
                      href="/contact"
                      variant="primary"
                      className="w-full"
                    >
                      Get a quote
                    </LinkButton>
                  </li>
                </ul>
              </Container>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

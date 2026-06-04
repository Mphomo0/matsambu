"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/Icons";

const titleWords = ["We", "build", "structures.", "We", "build", "trust."];

const titleContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const titleWord: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden navy-gradient pb-20 pt-32 sm:pb-28 sm:pt-44 lg:pb-36 lg:pt-52">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-navy-900/70 to-navy-900" />
        <div className="absolute inset-0 concrete-texture opacity-60" />
      </div>

      <Container>
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-400 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Building · Contracting · Rib & Block
          </motion.div>

          <motion.h1
            variants={titleContainer}
            initial="hidden"
            animate="show"
            className="mt-6 text-balance text-4xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
          >
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                variants={titleWord}
                className="inline-block pr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-steel-200 sm:text-xl"
          >
            Matsambu Projects is a Johannesburg-based construction company
            delivering buildings, full general contracting, and rib-and-block
            floor systems across South Africa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <LinkButton href="/contact" size="lg" variant="primary">
              Get a quote
              <ArrowRightIcon className="h-4 w-4" />
            </LinkButton>
            <LinkButton href="/services" size="lg" variant="outline">
              <span className="text-white">Our services</span>
            </LinkButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-12 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:mt-20 sm:grid-cols-4 sm:p-8"
        >
          {[
            { v: "18+", l: "Years building" },
            { v: "240+", l: "Projects delivered" },
            { v: "98%", l: "On-time handover" },
            { v: "Single", l: "Point of contact" },
          ].map((item) => (
            <div key={item.l} className="flex flex-col">
              <span className="text-2xl font-bold text-white sm:text-3xl">
                {item.v}
              </span>
              <span className="mt-1 text-xs uppercase tracking-wider text-steel-300 sm:text-sm">
                {item.l}
              </span>
            </div>
          ))}
        </motion.div>
      </Container>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <div className="h-10 w-6 rounded-full border-2 border-white/30">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-500"
          />
        </div>
      </motion.div>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/Icons";

export default function NotFound() {
  return (
    <section className="relative isolate flex flex-1 items-center overflow-hidden navy-gradient py-20 sm:py-32">
      <div className="absolute inset-0 concrete-texture opacity-50" />
      <Container>
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
            404
          </p>
          <h1 className="mt-4 text-balance text-5xl font-bold text-white sm:text-7xl">
            Off the plan.
          </h1>
          <p className="mt-5 text-pretty text-lg text-steel-200">
            The page you&apos;re looking for doesn&apos;t exist — or it&apos;s
            been moved. Let&apos;s get you back to solid ground.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <LinkButton href="/" size="lg" variant="primary">
              Back to home
              <ArrowRightIcon className="h-4 w-4" />
            </LinkButton>
            <LinkButton href="/contact" size="lg" variant="outline">
              <span className="text-white">Contact us</span>
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

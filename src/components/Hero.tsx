import Link from "next/link";
import { Button } from "./Button";
import { Container } from "./Container";

function HeroVisual() {
  return (
    <div
      className="relative aspect-[4/3] w-full max-w-sm overflow-hidden rounded-2xl border border-gray-100/90 bg-white/90 shadow-soft backdrop-blur-sm transition-all duration-200 ease-out hover:border-gray-200/90 hover:shadow-soft-lg"
      aria-hidden
    >
      <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-accent/20 blur-2xl" />
      <div className="absolute -bottom-16 -left-8 h-56 w-56 rounded-full bg-primary/15 blur-2xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 via-white to-accent/[0.06]" />
      <div className="absolute inset-8 rounded-xl border border-gray-100/70 bg-gradient-to-tr from-primary/[0.04] to-transparent" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100/80 bg-gradient-to-b from-slate-50/90 via-white to-white py-28 md:py-36 lg:py-44">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[min(100vw,52rem)] -translate-x-1/2 rounded-full bg-primary/[0.07] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 translate-x-1/4 translate-y-1/4 rounded-full bg-accent/[0.08] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-0 top-1/3 h-48 w-48 -translate-x-1/3 rounded-full bg-slate-200/40 blur-2xl"
        aria-hidden
      />
      <Container>
        <div className="relative z-[1] mx-auto flex w-full max-w-5xl flex-col items-center gap-14 lg:flex-row lg:justify-center lg:gap-16 xl:gap-20">
          <div className="flex w-full max-w-[44rem] flex-col items-center space-y-12 text-center md:space-y-14">
            <div className="flex w-full flex-col items-center space-y-5 md:space-y-7">
              <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-gray-950 sm:text-5xl md:text-6xl lg:text-[3.35rem] lg:leading-[1.06]">
                Find the right people for your research — fast.
              </h1>
              <p className="mx-auto max-w-[40rem] text-pretty text-base font-normal leading-relaxed text-gray-500 md:text-lg md:leading-relaxed">
                We recruit high-quality participants for qualitative research, so
                you can focus on insights, not sourcing.
              </p>
            </div>
            <div className="flex w-full flex-col items-center space-y-5">
              <Button variant="primary" className="w-full sm:w-auto sm:min-w-[12.5rem]">
                Request a Quote
              </Button>
              <Link
                href="#services"
                className="text-sm font-medium text-gray-500 underline-offset-[5px] transition-colors duration-200 hover:text-primary hover:underline md:text-base"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="relative z-[1] hidden shrink-0 lg:block">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}

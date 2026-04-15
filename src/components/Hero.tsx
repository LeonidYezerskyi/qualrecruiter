import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { Button } from "./Button";
import { Container } from "./Container";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

/** Local asset — avoids broken/removed Unsplash IDs and dev optimizer 404s */
const HERO_IMAGE = "/images/hero-bg.jpg";

const MAILTO = "mailto:hello@qualrecruiter.us";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Image
        src={HERO_IMAGE}
        alt="Professionals collaborating in a meeting"
        fill
        priority
        className="object-cover object-center saturate-[0.88] contrast-[0.98]"
        sizes="100vw"
      />
      <div className="photo-scrim absolute inset-0" aria-hidden />
      <div className="relative z-10 flex min-h-screen items-center pt-24 pb-16 md:pt-28 md:pb-20">
        <Container>
          <div className="mx-auto w-full max-w-[1100px]">
            <div className="max-w-xl space-y-6 text-left lg:max-w-2xl lg:space-y-8">
              <h1
                className={`${playfair.className} text-accent-gradient text-balance text-[2.75rem] font-medium leading-[1.12] tracking-tight sm:text-5xl md:text-[3.25rem] lg:text-[4rem] lg:leading-[1.08]`}
              >
                Recruit qualified research participants in days, not weeks
              </h1>
              <p className="max-w-2xl text-pretty text-base font-normal leading-relaxed text-white md:text-lg">
                We recruit high-quality participants for qualitative research, so you
                can focus on insights, not sourcing. From hard-to-reach audiences to
                everyday consumers, we deliver participants who match your exact
                criteria — reliably and on time.
              </p>
              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:flex-wrap sm:items-center">
                <Button variant="primary" href={MAILTO}>
                  Start your recruitment
                </Button>
                <Button variant="secondary" href={MAILTO}>
                  Start a Conversation
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

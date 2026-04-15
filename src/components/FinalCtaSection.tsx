import { Playfair_Display } from "next/font/google";
import { AccentPill } from "./AccentPill";
import { Button } from "./Button";
import { Container } from "./Container";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const mailtoHello = "mailto:hello@qualrecruiter.us";

export function FinalCtaSection() {
  return (
    <section className="border-t border-white/10 bg-page py-24 md:py-32 lg:py-40">
      <Container>
        <div className="mx-auto w-full max-w-[1100px] space-y-5 text-left md:space-y-6">
          <AccentPill variant="solid">GET STARTED</AccentPill>
          <h2
            className={`${playfair.className} text-accent-gradient max-w-4xl text-pretty text-[2.75rem] font-medium leading-tight tracking-tight md:text-[3rem]`}
          >
            Ready to Find the Right Participants?
          </h2>
          <p className="max-w-3xl text-pretty text-base font-normal leading-relaxed text-muted md:text-lg">
            Tell us about your next study and we&apos;ll get to work. Whether you
            have a detailed screener ready or just a rough idea, we&apos;re here to
            help scope your project and make it happen — reliably and on time.
          </p>
          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:flex-wrap sm:items-center">
            <Button variant="primary" href={mailtoHello}>
              Start your recruitment
            </Button>
            <Button variant="secondary" href={mailtoHello}>
              Start a Conversation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

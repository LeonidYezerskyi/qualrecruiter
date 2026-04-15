import { Button } from "./Button";
import { Container } from "./Container";

const trustItems = [
  {
    title: "Screener Match",
    description:
      "Every participant meets your exact criteria before confirmation.",
  },
  {
    title: "Audience Range",
    description: "From niche professionals to mass-market consumers.",
  },
  {
    title: "National Reach",
    description: "Recruitment coverage across all major U.S. markets.",
  },
] as const;

const email = "qualrecruiter@qualrecruiter.us";
const website = "https://qualrecruiter.us";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-gray-200/80 py-24 md:py-32 lg:py-40">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-100 via-gray-100/95 to-slate-100"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[22rem] w-[min(90vw,48rem)] -translate-x-1/2 bg-gradient-to-b from-primary/[0.14] via-primary/[0.05] to-transparent blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 translate-x-1/3 rounded-full bg-accent/[0.06] blur-3xl"
        aria-hidden
      />
      <Container>
        <div className="relative z-[1] flex flex-col space-y-14 md:space-y-16">
          <div className="mx-auto max-w-2xl space-y-7 text-center md:max-w-3xl md:space-y-9">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
              Ready to Find the Right Participants?
            </h2>
            <p className="mx-auto max-w-[44rem] text-pretty text-base font-normal leading-relaxed text-gray-500 md:text-lg">
              Tell us about your next study and we&apos;ll get to work. Whether you
              have a detailed screener ready or just a rough idea, we&apos;re here
              to help scope your project and make it happen — reliably and on time.
            </p>
            <div className="flex justify-center">
              <Button
                variant="primary"
                href={`mailto:${email}?subject=QualRecruiter%20inquiry`}
                className="w-full shadow-soft-lg ring-white/25 sm:w-auto sm:min-w-[15rem]"
              >
                Contact QualRecruiter
              </Button>
            </div>
            <div className="space-y-2.5 text-sm text-gray-500">
              <p>
                <span className="text-gray-400">Email: </span>
                <a
                  href={`mailto:${email}`}
                  className="font-medium text-primary/90 underline-offset-2 transition-colors duration-200 hover:text-primary hover:underline"
                >
                  {email}
                </a>
              </p>
              <p>
                <span className="text-gray-400">Website: </span>
                <a
                  href={website}
                  className="font-medium text-primary/90 underline-offset-2 transition-colors duration-200 hover:text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  qualrecruiter.us
                </a>
              </p>
            </div>
          </div>

          <div className="relative z-[1] border-t border-gray-200/70 pt-12 md:pt-14">
            <ul className="grid grid-cols-1 items-stretch gap-10 text-center md:grid-cols-3 md:gap-8 md:text-left lg:gap-10">
              {trustItems.map((item) => (
                <li key={item.title} className="flex flex-col space-y-2">
                  <p className="text-sm font-medium text-gray-800">{item.title}</p>
                  <p className="text-sm font-normal leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

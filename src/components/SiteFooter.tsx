import { Container } from "./Container";

const bullets = [
  "In-depth interviews & focus groups",
  "Ethnographic, IHUT & diary studies",
  "B2B & B2C, online & in-person",
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white py-10 md:py-14">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col gap-8 text-center text-sm font-normal leading-relaxed text-gray-500 md:grid md:grid-cols-2 md:gap-12 md:text-left">
          <div className="space-y-2">
            <p className="font-medium text-gray-600">QualRecruiter</p>
            <p>
              Qualitative research recruitment for agencies, brands, and insights
              teams across the U.S.
            </p>
          </div>
          <ul className="mx-auto max-w-xs list-disc space-y-1.5 pl-5 text-left md:mx-0 md:justify-self-end">
            {bullets.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

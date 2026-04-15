import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionTone = "default" | "muted";

type SectionProps = {
  children: ReactNode;
  tone?: SectionTone;
  id?: string;
};

const toneClasses: Record<SectionTone, string> = {
  default: "bg-white",
  muted: "bg-gray-50",
};

export function Section({ children, tone = "default", id }: SectionProps) {
  return (
    <section id={id} className={`py-24 md:py-32 lg:py-36 ${toneClasses[tone]}`}>
      <Container>{children}</Container>
    </section>
  );
}

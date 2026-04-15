import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Container } from "@/components/Container";
import { SiteFooter } from "@/components/SiteFooter";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Privacy Policy | QualRecruiter",
  description:
    "How QualRecruiter collects, uses, and protects your information when you use our website and research recruitment services.",
};

const linkClass =
  "link font-medium underline-offset-2 transition-opacity duration-200 hover:opacity-[0.85] hover:underline";

export default function PrivacyPolicyPage() {
  return (
    <>
      <main className="min-h-screen bg-page pb-16 pt-28 md:pb-20 md:pt-32">
        <Container>
          <article className="mx-auto max-w-[720px] text-left">
            <h1
              className={`${playfair.className} text-accent-gradient text-pretty text-[2.75rem] font-medium leading-tight tracking-tight md:text-[3rem]`}
            >
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm font-medium text-muted">
              Effective Date: January 2025
            </p>

            <p className="mt-8 text-base leading-relaxed text-muted md:text-lg">
              At QualRecruiter, we are committed to protecting your privacy. This Privacy
              Policy outlines how we collect, use, and safeguard your personal information
              when you visit our website and participate in our market research and
              recruitment activities.
            </p>

            <section className="mt-10 space-y-4">
              <h2
                className={`${playfair.className} text-lg font-semibold leading-snug tracking-tight text-white`}
              >
                1. Information We Collect
              </h2>
              <p className="text-base leading-relaxed text-muted md:text-lg">
                We may collect the following types of information:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted md:text-lg">
                <li>
                  <span className="font-semibold text-white">Personal Information: </span>
                  This includes your name, email address, phone number, and any other
                  information you provide when you contact us or participate in our
                  research.
                </li>
                <li>
                  <span className="font-semibold text-white">Demographic Information: </span>
                  Information such as age, gender, location, and other characteristics
                  relevant to our research.
                </li>
                <li>
                  <span className="font-semibold text-white">Usage Data: </span>
                  We collect data on how you use our website, including your IP address,
                  browser type, pages visited, and the time spent on our site.
                </li>
              </ul>
              <div className="rounded-[4px] border border-white/[0.1] bg-surface/60 p-5 text-base leading-relaxed text-muted md:text-lg">
                <p className="font-semibold uppercase tracking-wide text-white">
                  Please note
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>
                    <span className="font-semibold text-white">Data Security: </span>
                    We protect your data with secure storage measures to prevent unauthorized
                    access.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Data Retention: </span>
                    We retain your information as long as you are subscribed to our SMS
                    service. You may request deletion at any time.
                  </li>
                  <li>
                    MESSAGE AND DATA RATES MAY APPLY. Your mobile carrier may charge fees
                    for sending or receiving text messages, especially if you do not have an
                    unlimited texting or data plan. Messages are recurring, and message
                    frequency varies.
                  </li>
                  <li>
                    Contact QualRecruiter at{" "}
                    <a href="mailto:hello@qualrecruiter.app" className={linkClass}>
                      hello@qualrecruiter.app
                    </a>{" "}
                    for HELP or to STOP receiving messages.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Opt-Out: </span>
                    You can opt out of the SMS list at any time by texting, emailing, or
                    replying STOP or UNSUBSCRIBE to QualRecruiter or the contact address
                    above. After unsubscribing, we will remove your number from our list
                    within 24 hours.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Non-Sharing Clause: </span>
                    We do not share your data with third parties for marketing purposes.
                    QualRecruiter will not sell, rent, or share the collected mobile numbers.
                  </li>
                </ul>
              </div>
            </section>

            <section className="mt-10 space-y-4">
              <h2
                className={`${playfair.className} text-lg font-semibold leading-snug tracking-tight text-white`}
              >
                2. How We Use Your Information
              </h2>
              <p className="text-base leading-relaxed text-muted md:text-lg">
                <span className="font-semibold text-white">Data Retention: </span>
                We retain your information as long as you are subscribed to our SMS service.
                You may request deletion at any time.
              </p>
              <p className="text-base leading-relaxed text-muted md:text-lg">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted md:text-lg">
                <li>
                  <span className="font-semibold text-white">To Conduct Research: </span>
                  Your information helps us analyze market trends and consumer behavior.
                </li>
                <li>
                  <span className="font-semibold text-white">To Improve Our Services: </span>
                  We use feedback and data to enhance our research methodologies and user
                  experience.
                </li>
                <li>
                  <span className="font-semibold text-white">To Communicate with You: </span>
                  We may contact you regarding your participation in research activities or to
                  provide updates about our services.
                </li>
                <li>
                  <span className="font-semibold text-white">To Comply with Legal Obligations: </span>
                  We may use your information to meet legal requirements or respond to legal
                  requests.
                </li>
              </ul>
            </section>

            <section className="mt-10 space-y-4">
              <h2
                className={`${playfair.className} text-lg font-semibold leading-snug tracking-tight text-white`}
              >
                3. Data Sharing and Disclosure
              </h2>
              <p className="text-base leading-relaxed text-muted md:text-lg">
                We do not sell, trade, or otherwise transfer your personal information to
                outside parties except in the following circumstances:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted md:text-lg">
                <li>
                  <span className="font-semibold text-white">With Service Providers: </span>
                  We may share information with trusted third-party service providers who
                  assist us in operating our website and conducting research, subject to
                  confidentiality agreements.
                </li>
                <li>
                  <span className="font-semibold text-white">For Legal Reasons: </span>
                  We may disclose your information if required by law or in response to
                  legal requests.
                </li>
              </ul>
            </section>

            <section className="mt-10 space-y-4">
              <h2
                className={`${playfair.className} text-lg font-semibold leading-snug tracking-tight text-white`}
              >
                4. Data Security
              </h2>
              <p className="text-base leading-relaxed text-muted md:text-lg">
                We implement appropriate security measures to protect your personal
                information from unauthorized access, disclosure, alteration, or destruction.{" "}
                <span className="font-semibold text-white">Data Security: </span>
                We protect your data with secure storage measures to prevent unauthorized
                access. However, please be aware that no method of transmission over the
                internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2
                className={`${playfair.className} text-lg font-semibold leading-snug tracking-tight text-white`}
              >
                5. Your Rights
              </h2>
              <p className="text-base leading-relaxed text-muted md:text-lg">
                You have the right to:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted md:text-lg">
                <li>
                  <span className="font-semibold text-white">Access Your Information: </span>
                  You can request a copy of the personal information we hold about you.
                </li>
                <li>
                  <span className="font-semibold text-white">Request Corrections: </span>
                  If you believe your information is inaccurate or incomplete, you can request
                  corrections.
                </li>
                <li>
                  <span className="font-semibold text-white">Opt-Out: </span>
                  You can opt out of receiving communications from us at any time by following
                  the unsubscribe instructions in our emails or text messages.
                </li>
              </ul>
            </section>

            <section className="mt-10 space-y-4">
              <h2
                className={`${playfair.className} text-lg font-semibold leading-snug tracking-tight text-white`}
              >
                6. Cookies and Tracking Technologies
              </h2>
              <p className="text-base leading-relaxed text-muted md:text-lg">
                Our website uses cookies and similar technologies to enhance user experience.
                You can manage your cookie preferences through your browser settings. Please
                note that disabling cookies may affect your ability to use certain features of
                our site.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2
                className={`${playfair.className} text-lg font-semibold leading-snug tracking-tight text-white`}
              >
                7. Changes to This Privacy Policy
              </h2>
              <p className="text-base leading-relaxed text-muted md:text-lg">
                We may update this Privacy Policy from time to time. We will notify you of any
                changes by posting the new Privacy Policy on our website with an updated
                effective date. We encourage you to review this policy periodically for any
                changes.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2
                className={`${playfair.className} text-lg font-semibold leading-snug tracking-tight text-white`}
              >
                8. Children
              </h2>
              <p className="text-base leading-relaxed text-muted md:text-lg">
                Our website is not designed for children, and we do not seek to collect
                personal information from anyone below the age of consent, typically age 13.
                We ask that children do not provide any personal data. Furthermore, we will
                not gather, use, or share information from children under 13 without obtaining
                explicit consent from a parent or guardian, in accordance with legal
                requirements.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2
                className={`${playfair.className} text-lg font-semibold leading-snug tracking-tight text-white`}
              >
                9. Contact Us
              </h2>
              <p className="text-base leading-relaxed text-muted md:text-lg">
                If you have any questions about this Privacy Policy or our practices, please
                contact us at:
              </p>
              <address className="not-italic">
                <p className="mt-4 text-base font-semibold text-white">QualRecruiter</p>
                <p className="mt-2 text-base leading-relaxed text-muted md:text-lg">
                  United States
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted md:text-lg">
                  <a href="mailto:hello@qualrecruiter.app" className={linkClass}>
                    hello@qualrecruiter.app
                  </a>
                </p>
                <p className="mt-2 text-base leading-relaxed text-muted md:text-lg">
                  <a href="mailto:privacy@qualrecruiter.app" className={linkClass}>
                    privacy@qualrecruiter.app
                  </a>
                  {" — "}
                  privacy inquiries
                </p>
              </address>
            </section>
          </article>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}

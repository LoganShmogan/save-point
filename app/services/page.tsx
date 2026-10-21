import Navbar from "@/app/navigation/navBar";
import Footer from "@/app/footer/footer";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/shared/page.module.css";
import serviceStyles from "@/app/services/services.module.css";
import PageHero from "@/app/shared/pageHero";
import buttons from "@/app/shared/button.module.css";
import { services } from "@/app/services/servicesData";
import { starters } from "@/app/pricing/packages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Business automation, AI, self-service kiosks, custom apps and software, and websites from Save Point, all built to connect to each other. New Zealand based.",
  alternates: {
    canonical: "/services",
  },
};

const steps = [
  {
    title: "Free chat",
    text: "Tell us what's slowing you down. We listen first and explain options in plain English.",
  },
  {
    title: "Map it out",
    text: "We map your current workflow and systems, then agree a written scope, timeline and price.",
  },
  {
    title: "Build & connect",
    text: "We build in small steps, show you progress along the way and connect everything together.",
  },
  {
    title: "Hand over & support",
    text: "You get training, full documentation and a warranty, with ongoing support if you want it.",
  },
];

export default function Services() {
  const starterFor = (id?: string) => starters.find((s) => s.id === id);

  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          title="Services"
          lead="Automation first, with the apps, kiosks, software and websites to back it up. Everything we build is designed to connect."
        />

        <div className={styles.content}>
          {/* Quick jump list */}
          <nav className={styles.section} aria-labelledby="services-contents">
            <h2 id="services-contents" className={styles.sectionTitle}>
              What we do
            </h2>
            <ul className={serviceStyles.jumpList}>
              {services.map((service) => (
                <li key={service.id}>
                  <a href={`#${service.id}`} className={serviceStyles.jumpLink}>
                    <span className={serviceStyles.jumpTitle}>
                      {service.title}
                    </span>
                    <span className={serviceStyles.jumpSummary}>
                      {service.summary}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* One section per service */}
          {services.map((service) => (
            <section
              key={service.id}
              id={service.id}
              className={styles.section}
              aria-labelledby={`${service.id}-title`}
            >
              <div className={serviceStyles.serviceHead}>
                <div className={serviceStyles.serviceArt}>
                  <Image
                    src={service.image}
                    alt={service.alt}
                    width={160}
                    height={160}
                  />
                </div>
                <h2
                  id={`${service.id}-title`}
                  className={serviceStyles.serviceTitle}
                >
                  {service.title}
                </h2>
              </div>

              <div className={styles.sectionBody}>
                {service.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className={serviceStyles.columns}>
                <div>
                  <h3 className={styles.subHeadPart}>What we can build</h3>
                  <ul className={serviceStyles.checkList}>
                    {service.examples.map((example) => (
                      <li key={example}>{example}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className={styles.subHeadPart}>A good fit if</h3>
                  <ul className={serviceStyles.checkList}>
                    {service.goodFit.map((fit) => (
                      <li key={fit}>{fit}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pricing: ready-made starter (if any) and custom builds */}
              <dl className={serviceStyles.pricing}>
                {starterFor(service.starterId) && (
                  <div className={serviceStyles.priceRow}>
                    <dt>
                      Ready-made:{" "}
                      <a
                        href={`/pricing#${service.starterId}`}
                        className={styles.inlineLink}
                      >
                        {starterFor(service.starterId)!.name}
                      </a>
                    </dt>
                    <dd className={serviceStyles.priceValue}>
                      {starterFor(service.starterId)!.price}
                    </dd>
                  </div>
                )}
                <div className={serviceStyles.priceRow}>
                  <dt>Custom-built for you</dt>
                  <dd className={serviceStyles.priceValue}>
                    From {service.customFrom}
                  </dd>
                </div>
              </dl>
              <p className={serviceStyles.priceNote}>
                Starting prices only. Final price depends on your project.{" "}
                <Link href="/legal#terms" className={styles.inlineLink}>
                  Terms and conditions apply
                </Link>
                .
              </p>

              <div className={serviceStyles.actions}>
                <Link href="/contact" className={buttons.buttonDark}>
                  Talk to us
                  <span className="visually-hidden"> about {service.title}</span>
                </Link>
                <Link href="/pricing" className={styles.inlineLink}>
                  See all pricing
                </Link>
              </div>
            </section>
          ))}

          {/* Process */}
          <section className={styles.section} aria-labelledby="process-title">
            <h2 id="process-title" className={styles.sectionTitle}>
              How we work
            </h2>
            <ol className={serviceStyles.steps}>
              {steps.map((step) => (
                <li key={step.title} className={serviceStyles.step}>
                  <h3 className={serviceStyles.stepTitle}>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Closing call to action */}
          <section className={styles.section} aria-labelledby="unsure-title">
            <h2 id="unsure-title" className={styles.sectionTitle}>
              Not sure where to start?
            </h2>
            <div className={styles.sectionBody}>
              <p>
                Most projects start with one job you&apos;d love to never do
                again. Tell us what it is and we&apos;ll show you how it could
                be automated, and what it could connect to next.
              </p>
            </div>
            <Link href="/contact" className={buttons.button}>
              Book a free chat
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

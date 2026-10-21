import Navbar from "@/app/navigation/navBar";
import Footer from "@/app/footer/footer";
import Link from "next/link";
import styles from "@/app/shared/page.module.css";
import PageHero from "@/app/shared/pageHero";
import buttons from "@/app/shared/button.module.css";
import { starters } from "@/app/pricing/packages";
import { services } from "@/app/services/servicesData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Fixed-price, ready-made starter packages for automation, websites and kiosks, plus clear starting prices for custom-built projects from Save Point, New Zealand.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function Pricing() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          title="Pricing"
          lead="Ready-made starters at a fixed price, or something custom-built around you. Prices are in New Zealand dollars."
        />

        <div className={styles.content}>
          {/* Intro */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Two ways to start</h2>
            <div className={styles.sectionBody}>
              <p>
                <strong>Starter packages</strong> are pre-built solutions we
                have already designed and tested. We set them up for your
                business, add your branding and connect them to your tools, so
                they cost less and are live in days, not months.
              </p>
              <p>
                <strong>Custom projects</strong> are built from scratch around
                the way you work. They are scoped in a free consultation and
                quoted individually. Many clients begin with a starter and grow
                into custom work later.
              </p>
            </div>
          </div>

          {/* Starter packages */}
          <h2 className={styles.groupTitle}>Starter packages</h2>
          <div className={styles.priceGrid}>
            {starters.map((pkg) => (
              <div key={pkg.id} id={pkg.id} className={styles.priceCard}>
                <p className={styles.priceTag}>Ready-made</p>
                <h3 className={styles.priceCardTitle}>{pkg.name}</h3>
                <p className={styles.priceAmount}>
                  {pkg.price}
                  <span className={styles.priceUnit}> one-off</span>
                </p>
                <p className={styles.priceTurnaround}>{pkg.turnaround}</p>
                <p className={styles.priceDesc}>{pkg.description}</p>
                <ul className={styles.priceList}>
                  {pkg.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`${buttons.buttonDark} ${styles.priceBtn}`}
                >
                  Get started
                  <span className="visually-hidden"> with {pkg.name}</span>
                </Link>
              </div>
            ))}
          </div>

          {/* Custom projects by service */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Custom projects</h2>
            <div className={styles.sectionBody}>
              <p>
                When a starter isn&apos;t enough, we design and build
                something just for you. These are typical starting prices.
                Your final quote depends on the size of the project.{" "}
                <Link href="/legal#terms" className={styles.inlineLink}>
                  Terms and conditions apply
                </Link>
                .
              </p>
            </div>
            <dl className={styles.contactList}>
              {services.map((service) => (
                <div key={service.id} className={styles.customRow}>
                  <dt>
                    <Link
                      href={`/services#${service.id}`}
                      className={styles.inlineLink}
                    >
                      {service.title}
                    </Link>
                  </dt>
                  <dd className={styles.customPrice}>
                    From {service.customFrom}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Add-ons */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Add-ons and ongoing support</h2>
            <div className={styles.sectionBody}>
              <p>
                Any starter or custom project can be extended. These are quoted
                alongside your package, so you only pay for what you need.
              </p>
              <ul className={styles.list}>
                <li>Extra automations and integrations as your business grows</li>
                <li>Hosting, maintenance and monitoring of your systems</li>
                <li>Kiosk hardware supply, mounting and on-site installation</li>
                <li>AI features such as document reading and enquiry sorting</li>
                <li>Staff training and extended support after your warranty</li>
              </ul>
            </div>
          </div>

          {/* Note */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>A note on pricing</h2>
            <div className={styles.sectionBody}>
              <p>
                We cannot guarantee the cheapest pricing, but we can guarantee
                the best quality. Starter prices are fixed for the setup
                described. Hardware,
                third-party subscriptions and anything beyond the listed
                inclusions are quoted separately before any work begins.
              </p>
              <p>
                <Link href="/contact" className={styles.inlineLink}>
                  Book a free consultation
                </Link>{" "}
                and we will provide a detailed quote within 2 working days.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

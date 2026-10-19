import Navbar from "@/app/navigation/navBar";
import Footer from "@/app/footer/footer";
import Link from "next/link";
import styles from "@/app/shared/page.module.css";
import PageHero from "@/app/shared/pageHero";
import buttons from "@/app/shared/button.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, project-based pricing for custom software, web applications, and IoT integration from Save Point, New Zealand.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function Pricing() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Pricing"
          lead="Clear starting prices. Every quote is tailored to you after a free consultation."
        />

        <div className={styles.content}>
          {/* Intro */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Transparent pricing</h2>
            <div className={styles.sectionBody}>
              <p>
                All pricing is project-based and scoped during your free
                consultation. The tiers below give a general guide — final quotes
                are tailored to your specific needs.
              </p>
            </div>
          </div>

          {/* Price cards */}
          <div className={styles.grid3}>
            <div className={styles.priceCard}>
              <h2 className={styles.priceCardTitle}>Online IoT Starter</h2>
              <p className={styles.priceAmount}>$200 - $750</p>
              <p className={styles.priceDesc}>
                Perfect for small businesses or sole traders looking to upgrade
                their systems and give themselves a better online presence.
                Let us help shape your ideas and aspirations.
              </p>
              <ul className={styles.priceList}>
                <li>1x Small-scale application or software</li>
                <li>1x Small-scale website</li>
                <li>Small-scale IoT setup</li>
                <li>1 month warranty</li>
              </ul>
              <Link href="/contact" className={`${buttons.buttonDark} ${styles.priceBtn}`}>
                Enquire
              </Link>
            </div>

            <div className={styles.priceCard}>
              <h2 className={styles.priceCardTitle}>Business Foundation</h2>
              <p className={styles.priceAmount}>$1000 ++</p>
              <p className={styles.priceDesc}>
                More focus on large scale applications and large multi-page
                websites, as well as software to manage all your working
                requirements and devices to help you interact.
              </p>
              <ul className={styles.priceList}>
                <li>Large scale multi-page web app</li>
                <li>Custom software</li>
                <li>Advanced IoT integration</li>
                <li>3+ months warranty</li>
              </ul>
              <Link href="/contact" className={`${buttons.buttonDark} ${styles.priceBtn}`}>
                Enquire
              </Link>
            </div>

            <div className={styles.priceCard}>
              <h2 className={styles.priceCardTitle}>Custom Enterprise</h2>
              <p className={styles.priceAmount}>$3000 ++</p>
              <p className={styles.priceDesc}>
                Full-scale systems, software and device integration for enterprise
                organisations with complex requirements. Save Point offers full
                upgrade and integration with pre-established hardware & software.
              </p>
              <ul className={styles.priceList}>
                <li>Full systems architecture</li>
                <li>IoT devices built with you</li>
                <li>On-site support and in-house IT</li>
                <li>Ongoing contract + 5 year warranty</li>
              </ul>
              <Link href="/contact" className={`${buttons.buttonDark} ${styles.priceBtn}`}>
                Enquire
              </Link>
            </div>
          </div>

          {/* Note */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>A note on pricing</h2>
            <div className={styles.sectionBody}>
              <p>
                All projects are scoped individually. We cannot guarantee the
                cheapest pricing, but we can guarantee the best quality.
              </p>
              <p>
                <Link href="/contact" className={styles.inlineLink}>
                  Book a free consultation
                </Link>{" "}
                and we will provide a detailed quote within 2 business days.
              </p>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}

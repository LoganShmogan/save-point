import Navbar from "@/app/navigation/navBar";
import Footer from "@/app/footer/footer";
import Link from "next/link";
import styles from "@/app/pricing/page.module.css";

export default function Pricing() {
  return (
    <main>
      <Navbar />

      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Pricing</h1>
      </div>

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
              their systems and/or to give themselves a better online pressence.
              Let us help shape your ideas and asperations.
            </p>
            <ul className={styles.priceList}>
              <li>1x Small-scale application or software</li>
              <li>1x Small-scale website</li>
              <li>Small-scale IoT setup</li>
              <li>1 month warrenty</li>
            </ul>
            <Link href="/contact" className={styles.priceBtn}>
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
              <li>3 ++ months warrenty</li>
            </ul>
            <Link href="/contact" className={styles.priceBtn}>
              Enquire
            </Link>
          </div>

          <div className={styles.priceCard}>
            <h2 className={styles.priceCardTitle}>Custom Enterprise</h2>
            <p className={styles.priceAmount}>$3000 ++</p>
            <p className={styles.priceDesc}>
              Full-scale systems, software and device integration for enterprise
              organisations with complex requirements. Save Point offers full
              upgrade and intergration with pre established hardware & software.
            </p>
            <ul className={styles.priceList}>
              <li>Full systems architecture</li>
              <li>IoT devices built with you</li>
              <li>On-site support and in house iT</li>
              <li>Ongoing contract + 5 year warrenty</li>
            </ul>
            <Link href="/contact" className={styles.priceBtn}>
              Enquire
            </Link>
          </div>
        </div>

        {/* Note */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>A note on pricing</h2>
          <div className={styles.sectionBody}>
            <p>
              All projects are scoped individually. We cannot garentee the
              cheapest pricing but can garenntee the best quality.{" "}
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

      <Footer />
    </main>
  );
}

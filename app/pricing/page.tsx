import Navbar from "@/app/navigation/navBar";
import Footer from "@/app/footer/footer";
import Link from "next/link";
import styles from "@/app/innerPage.module.css";

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. All pricing is project-based
              and scoped during your free consultation. The tiers below give a general guide — final
              quotes are tailored to your specific needs.
            </p>
          </div>
        </div>

        {/* Price cards */}
        <div className={styles.grid3}>

          <div className={styles.priceCard}>
            <h2 className={styles.priceCardTitle}>Starter</h2>
            <p className={styles.priceAmount}>POA</p>
            <p className={styles.priceDesc}>
              Perfect for individuals or small businesses getting started with automation or a
              simple web presence.
            </p>
            <ul className={styles.priceList}>
              <li>Single-page web app</li>
              <li>Basic IoT setup</li>
              <li>1 month support</li>
              <li>Email support</li>
            </ul>
            <Link href="/contact" className={styles.priceBtn}>Enquire</Link>
          </div>

          <div className={styles.priceCard}>
            <h2 className={styles.priceCardTitle}>Business</h2>
            <p className={styles.priceAmount}>POA</p>
            <p className={styles.priceDesc}>
              For established businesses needing custom software, multi-page web apps or expanded
              automation systems.
            </p>
            <ul className={styles.priceList}>
              <li>Multi-page web app</li>
              <li>Custom software (CRM / POS)</li>
              <li>Advanced IoT integration</li>
              <li>3 months support</li>
            </ul>
            <Link href="/contact" className={styles.priceBtn}>Enquire</Link>
          </div>

          <div className={styles.priceCard}>
            <h2 className={styles.priceCardTitle}>Enterprise</h2>
            <p className={styles.priceAmount}>POA</p>
            <p className={styles.priceDesc}>
              Full-scale systems, software and device integration for larger organisations with
              complex requirements.
            </p>
            <ul className={styles.priceList}>
              <li>Full systems architecture</li>
              <li>DBMS / ERM solutions</li>
              <li>On-site setup available</li>
              <li>Ongoing support contract</li>
            </ul>
            <Link href="/contact" className={styles.priceBtn}>Enquire</Link>
          </div>

        </div>

        {/* Note */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>A note on pricing</h2>
          <div className={styles.sectionBody}>
            <p>
              All projects are scoped individually. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              <Link href="/contact" className={styles.inlineLink}>Book a free consultation</Link>{" "}
              and we will provide a detailed quote within 2 business days.
            </p>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}

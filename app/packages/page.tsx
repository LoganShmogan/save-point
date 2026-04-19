import Navbar from "@/app/navigation/navBar";
import Footer from "@/app/footer/footer";
import Link from "next/link";
import styles from "@/app/innerPage.module.css";

export default function Packages() {
  return (
    <main>
      <Navbar />

      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Packages</h1>
      </div>

      <div className={styles.content}>

        {/* Intro */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>What we offer</h2>
          <div className={styles.sectionBody}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. We offer a range of packages
              across our three core service areas — Automation, Custom Software, and Web
              Applications. Each package can be tailored to your business size and budget.
            </p>
            <p>
              Not sure which package is right for you?{" "}
              <Link href="/contact" className={styles.inlineLink}>Get in touch</Link> and we will
              help you find the best fit.
            </p>
          </div>
        </div>

        {/* Automation packages */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Automation</h2>
          <div className={styles.sectionBody}>
            <p>
              Home and business internet of things (IoT). Arduino, Raspberry Pi, Elegoo and more.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>

        {/* Custom Software packages */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Custom Software</h2>
          <div className={styles.sectionBody}>
            <p>
              All areas of advanced systems and software — DBMS, CRM, ERM, POS and more. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum. Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>

        {/* Web Apps packages */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Web Applications</h2>
          <div className={styles.sectionBody}>
            <p>
              Mobile and desktop support. Startup or established business support and more. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Ready to get started?</h2>
          <div className={styles.sectionBody}>
            <p>
              <Link href="/contact" className={styles.inlineLink}>Contact us</Link> to discuss
              your project or{" "}
              <Link href="/pricing" className={styles.inlineLink}>view pricing</Link> for more
              detail on costs.
            </p>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}

import Navbar from "@/app/navigation/navBar";
import Footer from "@/app/footer/footer";
import Link from "next/link";
import styles from "@/app/contact/page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Save Point for custom software, web development, and IoT projects across New Zealand.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return (
    <main>
      <Navbar />

      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Contact</h1>
      </div>

      <div className={styles.content}>
        {/* Get in touch */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Get in touch</h2>
          <div className={styles.sectionBody}>
            <p>
              Get in touch with Save Point today! We are ready to hear from you
              about small to large projects. Startups or established businesses.
              Nothing is too big or small. Reach out today!
            </p>

            <div className={styles.contactRow}>
              <span className={styles.contactLabel}>Email</span>
              <Link
                href="mailto:contact@savepoint.cc"
                className={styles.inlineLink}
              >
                contact@savepoint.cc
              </Link>
            </div>

            <div className={styles.contactRow}>
              <span className={styles.contactLabel}>Facebook</span>
              <Link
                href="https://www.facebook.com/profile.php?id=61584633437200"
                target="_blank"
                className={styles.inlineLink}
              >
                @Save Point Limited
              </Link>
            </div>

            <div className={styles.contactRow}>
              <span className={styles.contactLabel}>Location</span>
              <span>New Zealand</span>
            </div>
          </div>
        </div>

        {/* Two col — response times + what to expect */}
        <div className={styles.grid2}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Response Times</h2>
            <div className={styles.sectionBody}>
              <p>
                One of Save Point&apos;s core values is availability &
                communication.
              </p>
              <p>
                Our typical response time is within 11 hours, but this can
                take up to 25 hours depending on current workload. Not to
                worry, we will never forget about you! Please email, call, or
                message us on Facebook and we can discuss your project(s).
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>What to expect</h2>
            <div className={styles.sectionBody}>
              <p>
                Once you have reached out to Save Point, please expect a
                waiting period of up to 24 hours.
              </p>
              <p>
                We will book in an initial consultation with you to discover
                and better understand your project. From there, we&apos;ll
                determine the deliverables and constraints, then give you an
                estimate. An estimate is not a definite or exact figure, but
                an approximate one.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

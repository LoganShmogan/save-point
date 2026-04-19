import Navbar from "@/app/navigation/navBar";
import Footer from "@/app/footer/footer";
import Link from "next/link";
import styles from "@/app/innerPage.module.css";

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. We would love to hear from
              you — whether you have a question about our services, want to discuss a project, or
              just want to say hello.
            </p>

            <div className={styles.contactRow}>
              <span className={styles.contactLabel}>Email</span>
              <Link href="mailto:contact@savepoint.cc" className={styles.inlineLink}>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                We aim to respond to all enquiries within 1–2 business days. For urgent matters
                please reach out via Facebook messenger.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>What to expect</h2>
            <div className={styles.sectionBody}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant
                morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              </p>
              <p>
                After your initial enquiry we will set up a free consultation to understand your
                needs and recommend the best path forward.
              </p>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}

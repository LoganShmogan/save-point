import Navbar from "@/app/navigation/navBar";
import Footer from "@/app/footer/footer";
import Link from "next/link";
import styles from "@/app/contact/page.module.css";

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
                One of Save Points core values is availability & communication.
              </p>
              <p>
                Our typial responce time is within 11 hours but this can take
                uup to 25 hours depending on current work load. Not to worry we
                will never forget about you! Please email, call, or message us
                on facebook and we can discuss your project/s.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>What to expect</h2>
            <div className={styles.sectionBody}>
              <p>
                Once you have reached out to Save Point please expect a waiting
                period of up to 24 hours.
              </p>
              <p>
                We will book in an inital consultation with you to look discover
                and better understand your project. Then from there we will find
                all our deleveriables and constrants then give to you our
                estimate. An estimate is not a definite or exact idea but
                "around about".
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

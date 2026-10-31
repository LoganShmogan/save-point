import Image from "next/image";
import Link from "next/link";
import styles from "@/app/footer/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.outer}>
      <div className={styles.container}>
        {/* Column 1: Brand */}
        <div className={styles.brandColumn}>
          <Image
            src="/logo-wordmark.png"
            width={1400}
            height={272}
            alt="Save Point logo"
            className={styles.logo}
          />
          <p className={styles.brandTagline}>
            Automation, kiosks and software that connect, built with you.
          </p>
        </div>

        {/* Column 2: Contact */}
        <div className={styles.column}>
          <h2 className={styles.columnHeader}>Contact</h2>
          <a href="mailto:contact@savepoint.co.nz" className={styles.link}>
            contact@savepoint.co.nz
          </a>
          <a href="tel:+64210653792" className={styles.link}>
            +64 21 065 3792
          </a>
          <Link
            href="https://www.facebook.com/profile.php?id=61584633437200"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Save Point on Facebook
            <span className="visually-hidden"> (opens in a new tab)</span>
          </Link>
        </div>

        {/* Column 3: Legal */}
        <div className={styles.column}>
          <h2 className={styles.columnHeader}>Legal</h2>
          <Link href="/legal#privacy" className={styles.link}>
            Privacy Policy
          </Link>
          <Link href="/legal#cookies" className={styles.link}>
            Cookie Policy
          </Link>
          <Link href="/legal#terms" className={styles.link}>
            Terms and Conditions
          </Link>
          <Link href="/legal#refunds" className={styles.link}>
            Refunds and Warranty
          </Link>
          <Link href="/legal#support" className={styles.link}>
            Support
          </Link>
        </div>
      </div>
      <p className={styles.copyright}>
        © 2026 Save Point Limited
        <span className={styles.credit}>Brand design by Emily Jacobs</span>
      </p>
    </footer>
  );
};

export default Footer;

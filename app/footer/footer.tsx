import Image from "next/image";
import Link from "next/link";
import styles from "@/app/footer/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.outer}>
      <div className={styles.container}>

        {/* Column 1 — Legal */}
        <div className={styles.column}>
          <p className={styles.columnHeader}>Legal</p>
          <Link href="/legal" className={styles.link}>Our Policy</Link>
          <Link href="/legal" className={styles.link}>Terms of Service</Link>
          <Link href="/legal" className={styles.link}>Support</Link>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Column 2 — Contact */}
        <div className={styles.column}>
          <p className={styles.columnHeader}>Contact</p>
          <p className={styles.text}>contact@savepoint.cc</p>
          <Link
            href="https://www.facebook.com/profile.php?id=61584633437200"
            target="_blank"
            className={styles.link}
          >
            Facebook — @Save Point Limited
          </Link>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Column 3 — Brand */}
        <div className={styles.brandColumn}>
          <p className={styles.brandTagline}>Intelligent connected systems built with you.</p>
          <p className={styles.copyright}>© 2026 Save Point Limited</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

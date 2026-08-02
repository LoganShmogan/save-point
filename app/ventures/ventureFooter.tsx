import Link from "next/link";
import styles from "@/app/ventures/ventures.module.css";

const VentureFooter = ({ title }: { title: string }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumn}>
          <p className={styles.footerHeader}>Legal</p>
          <Link href="#legal" className={styles.footerLink}>
            Privacy &amp; Terms
          </Link>
          <Link href="/legal" className={styles.footerLink}>
            Full Save Point Legal
          </Link>
        </div>

        <div className={styles.footerColumn}>
          <p className={styles.footerHeader}>Contact</p>
          <Link
            href="mailto:contact@savepoint.cc"
            className={styles.footerLink}
          >
            contact@savepoint.cc
          </Link>
          <Link href="/contact" className={styles.footerLink}>
            Save Point Contact page
          </Link>
        </div>

        <div className={styles.footerBrandColumn}>
          <p className={styles.footerBrand}>{title}</p>
          <p className={styles.footerTagline}>
            A Save Point Limited venture.
          </p>
          <p className={styles.footerCopyright}>© 2026 Save Point Limited</p>
        </div>
      </div>
    </footer>
  );
};

export default VentureFooter;

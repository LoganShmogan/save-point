import Link from "next/link";
import styles from "@/app/ventures/ventures.module.css";

const VentureNav = ({ title }: { title: string }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <Link href="/" className={styles.navBrand}>
          Save Point
        </Link>
        <span className={styles.navDivider}>/</span>
        <span className={styles.navTitle}>{title}</span>
        <div className={styles.navLinks}>
          <Link href="#about" className={styles.navLink}>
            About
          </Link>
          <Link href="#contact" className={styles.navLink}>
            Contact
          </Link>
          <Link href="#legal" className={styles.navLink}>
            Legal
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default VentureNav;

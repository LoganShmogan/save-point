import Link from "next/link";
import styles from "@/app/navigation/navBar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.outer}>
      <div className={styles.container}>
        <div className={styles.home}>
          <Link href="/">
            <u>Home</u>
          </Link>
        </div>
        <div className={styles.about}>
          <Link href="/about">
            <u>About</u>
          </Link>
        </div>
        <div className={styles.contact}>
          <Link href="/contact">
            <u>Contact</u>
          </Link>
        </div>
        <div className={styles.price}>
          <Link href="/pricing">
            <u>Pricing</u>
          </Link>
        </div>
        <div className={styles.legal}>
          <Link href="/legal">
            <u>Legal</u>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

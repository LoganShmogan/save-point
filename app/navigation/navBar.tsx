import Link from "next/link";
import styles from "@/app/navigation/navBar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.outer}>
      {/*Navbar container*/}
      <div className={styles.container}>
        <div className={styles.home}>
          <Link href="/home">
            <u>Home</u>
          </Link>
        </div>
        <div className={styles.about}>
          <Link href="/error">
            <u>About</u>
          </Link>
        </div>
        <div className={styles.contact}>
          <Link href="/error">
            <u>Contact</u>
          </Link>
        </div>
        <div className={styles.package}>
          <Link href="/error">
            <u>Packages</u>
          </Link>
        </div>
        <div className={styles.price}>
          <Link href="/error">
            <u>Pricing</u>
          </Link>
        </div>
        <div className={styles.legal}>
          <Link href="/error">
            <u>Legal</u>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

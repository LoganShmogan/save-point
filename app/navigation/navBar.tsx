import Link from 'next/link';
import styles from '@/app/navigation/navBar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.outer}>
    {/*Navbar container*/}
    <div className={styles.container}>
      <div className={styles.home}>
        <Link href="/">
          <u>Home</u>
        </Link>
      </div>
      <div className={styles.about}>
        <Link href="/err">
          <u>About</u>
        </Link>
      </div>
      <div className={styles.contact}>
        <Link href="/err">
          <u>Contact</u>
        </Link>
      </div>
      <div className={styles.package}>
        <Link href="/err">
          <u>Packages</u>
        </Link>
      </div>
      <div className={styles.price}>
        <Link href="/err">
          <u>Pricing</u>
        </Link>
      </div>
      <div className={styles.legal}>
        <Link href="/err">
          <u>Legal</u>
        </Link>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
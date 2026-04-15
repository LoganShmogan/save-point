import Link from "next/link";
import styles from "@/app/footer/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.outer}>
      {/*Footer container*/}
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.privacy}>
            <Link href="/Legal">
              <u>Legal</u>
            </Link>
          </div>
          <div className={styles.contacts}>
            <p>content</p>
          </div>
          <div className={styles.company}>
            <p>content</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

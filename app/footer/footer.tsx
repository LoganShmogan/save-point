import Image from "next/image";
import Link from "next/link";
import styles from "@/app/footer/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.outer}>
      {/*Footer container*/}
      <div className={styles.container}>
        <div className={styles.privacy}>
          <div className={styles.privacyHeader}>
            <Link href="/Legal">
              <u>Legal</u>
            </Link>
          </div>
          <Link href="/legal">
            <u>Our Policy</u>
          </Link>
          <Link href="/legal">
            <u>Terms of Service</u>
          </Link>
          <Link href="/legal">
            <u>Support</u>
          </Link>
        </div>
        <div className={styles.contacts}>
          <div className={styles.contactHeader}>
            <Link href="/contact">
              <u>Contact</u>
            </Link>
          </div>
          <p>Email: contact@savepoint.cc</p>
          <p> Message us on Facebook: </p>
          <Link
            href="https://www.facebook.com/profile.php?id=61584633437200"
            target="_black"
          >
            <u>@Save Point Limited</u>
          </Link>
          {/*<p>Instagram: @ Save Point</p>
            <p>Linkedin: @ Save Point</p>
            <p>TikTok: @ Save Point</p>*/}
        </div>
        <div className={styles.company}>
          <div className={styles.companyHeader}>
            <p>Intellegent connect systems built with you.</p>
          </div>
          <div className={styles.siteLinks}></div>
          <p>© 2026 Save Point Limited</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

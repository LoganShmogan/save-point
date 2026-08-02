import styles from "@/app/ourVentures/ourVentures.module.css";
import Link from "next/link";

const OurVentures = () => {
  return (
    <section>
      {/*Our Ventures logo*/}
      <div className={styles.venturesLogo}>
        <div className={styles.venturesLogoText}>
          <h2>Our Ventures</h2>
        </div>
      </div>
      {/*Venture cards*/}
      <div className={styles.venturesContainer}>
        {/*Home Automation card*/}
        <div className={styles.venturesCard}>
          <div className={styles.venturesHeader}>
            <h3>Save Point Home Automation</h3>
          </div>
          <div className={styles.venturesContent}>
            <div className={styles.venturesSubheading}>
              <p>
                Selling, designing, programming, installing, troubleshooting
                and maintaining home AI automation devices.
              </p>
            </div>
            <div className={styles.venturesCardLink}>
              <Link href="/automation">
                <u>Visit site</u>
              </Link>
            </div>
          </div>
        </div>
        {/*Job Search card*/}
        <div className={styles.venturesCard}>
          <div className={styles.venturesHeader}>
            <h3>Save Point Job Search</h3>
          </div>
          <div className={styles.venturesContent}>
            <div className={styles.venturesSubheading}>
              <p>
                An AI agent that searches and applies to jobs for you based
                on your resume and preferences. Coming soon.
              </p>
            </div>
            <div className={styles.venturesCardLink}>
              <Link href="/job-search">
                <u>Visit site</u>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVentures;

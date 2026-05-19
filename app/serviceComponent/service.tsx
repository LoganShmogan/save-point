import styles from "@/app/serviceComponent/service.module.css";
import Image from "next/image";
import Link from "next/link";

const Service = () => {
  return (
    <main>
      {/*Servics*/}
      {/*Services Logo*/}
      <div className={styles.servicesLogo}>
        <div className={styles.servicesLogoText}>
          <h1>Services</h1>
        </div>
      </div>
      {/*Servics cards*/}
      <div className={styles.servicesContainer}>
        {/*Automation card*/}
        <div className={styles.servicesCard}>
          <div className={styles.servicesHeader}>
            <h1>Automation</h1>
          </div>
          <div className={styles.servicesContent}>
            <div className={styles.servicesSubheading}>
              <h2>
                Home and business internet of things (ioT). Arduino,
                Raspberrorory Pi, Elegoo ++ more.
              </h2>
            </div>
            <div className={styles.servicesImage}>
              <Image
                src="/ads/Hourglass (1250 x 1250).png"
                alt="Pixelated hourglass illistration"
                width={250}
                height={250}
              />
            </div>
            <div className={styles.servicesCardLink}>
              <Link href="/pricing">
                <u>View Packages</u>
              </Link>
            </div>
          </div>
        </div>
        {/*Custom software card*/}
        <div className={styles.servicesCard}>
          <div className={styles.servicesHeader}>
            <h1>Custom Software</h1>
          </div>
          <div className={styles.servicesContent}>
            <div className={styles.servicesSubheading}>
              <h2>
                All areas of advanced systems and software. DBMS, CRM, ERM, POS
                ++ more.
              </h2>
            </div>
            <div className={styles.servicesImage}>
              <Image
                src="/ads/Lightbulb (1250 x 1250).png"
                alt="Pixelated lightbulb illistration"
                width={250}
                height={250}
              />
            </div>
            <div className={styles.servicesCardLink}>
              <Link href="/pricing">
                <u>View Packages</u>
              </Link>
            </div>
          </div>
        </div>
        {/*Web apps card*/}
        <div className={styles.servicesCard}>
          <div className={styles.servicesHeader}>
            <h1>Web applications</h1>
          </div>
          <div className={styles.servicesContent}>
            <div className={styles.servicesSubheading}>
              <h2>
                Mobile and desktop support. Startup or established business
                support ++ more.
              </h2>
            </div>
            <div className={styles.servicesImage}>
              <Image
                src="/ads/Coin (1250 x 1250).png"
                alt="Pixelated coin illistration"
                width={250}
                height={250}
              />
            </div>
            <div className={styles.servicesCardLink}>
              <Link href="/pricing">
                <u>View Packages</u>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Service;

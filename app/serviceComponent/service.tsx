import styles from "@/app/serviceComponent/service.module.css";
import Image from "next/image";
import Link from "next/link";

const Service = () => {
  return (
    <section>
      {/*Servics*/}
      {/*Services Logo*/}
      <div className={styles.servicesLogo}>
        <div className={styles.servicesLogoText}>
          <h2>Services</h2>
        </div>
      </div>
      {/*Servics cards*/}
      <div className={styles.servicesContainer}>
        {/*Automation card*/}
        <div className={styles.servicesCard}>
          <div className={styles.servicesHeader}>
            <h3>Automation</h3>
          </div>
          <div className={styles.servicesContent}>
            <div className={styles.servicesSubheading}>
              <p>
                Home and business internet of things (IoT). Arduino,
                Raspberry Pi, Elegoo ++ more.
              </p>
            </div>
            <div className={styles.servicesImage}>
              <Image
                src="/ads/Hourglass (1250 x 1250).png"
                alt="Pixelated hourglass illustration"
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
            <h3>Custom Software</h3>
          </div>
          <div className={styles.servicesContent}>
            <div className={styles.servicesSubheading}>
              <p>
                All areas of advanced systems and software. DBMS, CRM, ERM, POS
                ++ more.
              </p>
            </div>
            <div className={styles.servicesImage}>
              <Image
                src="/ads/Lightbulb (1250 x 1250).png"
                alt="Pixelated lightbulb illustration"
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
            <h3>Web applications</h3>
          </div>
          <div className={styles.servicesContent}>
            <div className={styles.servicesSubheading}>
              <p>
                Mobile and desktop support. Startup or established business
                support ++ more.
              </p>
            </div>
            <div className={styles.servicesImage}>
              <Image
                src="/ads/Coin (1250 x 1250).png"
                alt="Pixelated coin illustration"
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
    </section>
  );
};

export default Service;

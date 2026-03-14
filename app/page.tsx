import Image from "next/image";
import styles from "@/app/page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/*Logo*/}
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            width={470.7525}
            height={91.51}
            alt="Save Point Logo"
          />
        </div>
        {/*Logo sub-headinhg*/}
        <div className={styles.logoSubHeading}>
          <h1>Intelligent connected systems built by you.</h1>
          <h2>Please scroll down for services.</h2>
        </div>
      </div>
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
                Home and business internet of things (ioT). Arduino, Raspberry
                Pi, Elegoo ++
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
              <Link href="/err">View Packages</Link>
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
                ++
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
              <Link href="/err">View Packages</Link>
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
                Mobile and desktop support. Large and small scale business
                support ++
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
              <Link href="/err">View Packages</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";
import styles from "@/app/page.module.css";
import Link from "next/link";
import Navbar from "@/app/navigation/navBar";
import Service from "@/app/serviceComponent/service";

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
		  <Navbar />
		  <Service/>
      {/*About section
      <div className={styles.aboutLogo}>
        <div className={styles.aboutLogoText}>
          <h1>About us</h1>
        </div>
      </div>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutImage}>
          <Image
            src="/logo/logoFlag (800 x 800).jpg"
            alt="Save Point flag logo"
            width={500}
            height={500}
          />
        </div>
        <div className={styles.aboutCard}>
          <div className={styles.aboutHeader}>
            <h1>Making your Save Point</h1>
          </div>
          <div className={styles.aboutSubheader}>
            <h2>Hoursehold and business software ++ more.</h2>
          </div>
          <div className={styles.aboutBodyText}>
            <p>paragraph</p>
          </div>
          <div className={styles.aboutLink}>
            <Link href="/err">
              <u>View more</u>
            </Link>
          </div>
        </div>
		  </div>
		  
				About section*/}
    </main>
  );
}

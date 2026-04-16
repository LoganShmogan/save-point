import Image from "next/image";
import styles from "@/app/home/page.module.css";
import Link from "next/link";
import Navbar from "@/app/navigation/navBar";
import Service from "@/app/serviceComponent/service";
import Footer from "@/app/footer/footer";

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
          <h1>Intelligent connected systems built with you.</h1>
          <h2>Please scroll down for services.</h2>
        </div>
      </div>
      <Navbar />
      <Service />
      {/*About section*/}
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
            <h1>How we started making your Save Point</h1>
          </div>
          <div className={styles.aboutBodyText}>
            <p>
              Save Point started as a tiny startup by a Software Engineering
              student Logan Young. Logan saw a major failure in business
              software that exist today and whitnessed various ways buisnesses
              and their staff could better enjoy their day to day work rather
              than being brought down by slow, uncoropritive software.
            </p>
            <p>
              This lead to rigerus marketing and demotivating failures to build
              the company Save Point is today. But there was another issue out
              there.
            </p>
            <p>
              The software was not the only problem but also the devices and
              connecting systems the software was used by. This lead to a big
              explosion in research and exploration into computing and devices.
              Not only did Logan move into an amazing software space helping
              companys better produce their products and services through their
              inhouse technology, he also changed how companys today use devices
              and systems
            </p>
            <p>
              Thats when Save Point earned its true name. Being the one place
              where systems, software and devices all work in one cohesive
              space, making businesses their own Save Point.
            </p>
          </div>
          <div className={styles.aboutLink}>
            <Link href="/error">
              <u>View more</u>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

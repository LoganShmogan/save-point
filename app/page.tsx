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
        {/*Logo sub-heading*/}
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
          <h2>About us</h2>
        </div>
      </div>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutImage}>
          <Image
            src="/logo/logoFlag (800 x 800).jpg"
            alt="Save Point flag logo"
            width={500}
            height={500}
            loading="eager"
          />
        </div>
        <div className={styles.aboutCard}>
          <div className={styles.aboutHeader}>
            <h3>How we started making your Save Point</h3>
          </div>
          <div className={styles.aboutBodyText}>
            <p>
              Save Point started as a tiny startup by a Software Engineering
              student, Logan Young. Logan saw a major failure in business
              software that exists today and witnessed various ways businesses
              and their staff could better enjoy their day-to-day work rather
              than being brought down by slow, uncooperative software.
            </p>
            <p>
              This led to rigorous marketing and plenty of demotivating
              failures on the way to building the company Save Point is today.
              But there was another issue out there.
            </p>
            <p>
              The software wasn&apos;t the only problem — so were the devices
              and connecting systems it ran on. This led to a big expansion in
              research and exploration into computing and devices. Not only
              did Logan move into an amazing software space helping companies
              better produce their products and services through their
              in-house technology, he also changed how companies today use
              devices and systems.
            </p>
            <p>
              That&apos;s when Save Point earned its true name — the one place
              where systems, software and devices all work in one cohesive
              space, making businesses their own Save Point.
            </p>
          </div>
          <div className={styles.aboutLink}>
            <Link href="/about">
              <u>View more</u>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

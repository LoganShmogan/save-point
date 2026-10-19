import Image from "next/image";
import styles from "@/app/home/page.module.css";
import buttons from "@/app/shared/button.module.css";
import Link from "next/link";
import Navbar from "@/app/navigation/navBar";
import Service from "@/app/serviceComponent/service";
import Footer from "@/app/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/*Hero*/}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <p className={styles.eyebrow}>New Zealand software &amp; IoT</p>
              <h1 className={styles.heroTitle}>
                Intelligent connected systems built with you.
              </h1>
              <p className={styles.heroLead}>
                Custom software, websites and smart devices for small
                businesses through to enterprise — explained in plain
                English, built around the way you already work.
              </p>
              <div className={styles.heroActions}>
                <Link href="#services" className={buttons.button}>
                  See our services
                </Link>
                <Link href="/contact" className={buttons.buttonOutline}>
                  Book a free chat
                </Link>
              </div>
            </div>
            <div className={styles.heroArt}>
              <Image
                src="/logo-flag.png"
                width={600}
                height={743}
                alt=""
                priority
              />
            </div>
          </div>
        </section>

        <Service />

        {/*About section*/}
        <section className={styles.about}>
          <div className={styles.aboutImage}>
            <Image
              src="/logo/logoFlag (800 x 800).jpg"
              alt="Save Point pixel flag logo"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.aboutText}>
            <p className={styles.sectionEyebrow}>About us</p>
            <h2 className={styles.aboutHeader}>
              How we started making your Save Point
            </h2>
            <p>
              Save Point started as a tiny startup by a Software Engineering
              student, Logan Young. Logan saw a major failure in business
              software that exists today and witnessed various ways businesses
              and their staff could better enjoy their day-to-day work rather
              than being brought down by slow, uncooperative software.
            </p>
            <p>
              The software wasn&apos;t the only problem — so were the devices
              and connecting systems it ran on. That&apos;s when Save Point
              earned its true name — the one place where systems, software
              and devices all work in one cohesive space, making businesses
              their own Save Point.
            </p>
            <Link href="/about" className={buttons.buttonDark}>
              Read our full story
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Image from "next/image";
import styles from "@/app/home/page.module.css";
import buttons from "@/app/shared/button.module.css";
import Link from "next/link";
import Navbar from "@/app/navigation/navBar";
import Service from "@/app/serviceComponent/service";
import Footer from "@/app/footer/footer";

const automationExamples = [
  { label: "Invoices sent without lifting a finger", colour: "var(--purple)" },
  { label: "Bookings confirmed and reminded", colour: "var(--yellow)" },
  { label: "Stock and sales synced across systems", colour: "var(--blue)" },
  { label: "Reports built and emailed every morning", colour: "var(--green)" },
  { label: "Enquiries sorted and routed by AI", colour: "var(--purple)" },
  { label: "Kiosk check-ins straight into your records", colour: "var(--yellow)" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        {/*Hero*/}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <p className={styles.eyebrow}>Automation · Kiosks · Software</p>
              <h1 className={styles.heroTitle}>
                Automate the busywork. Connect everything else.
              </h1>
              <p className={styles.heroLead}>
                Save Point builds automation, AI, self-service kiosks, apps
                and websites for New Zealand businesses, all designed to talk
                to each other. Explained in plain English, built around the
                way you already work.
              </p>
              <div className={styles.heroActions}>
                <Link href="/services" className={buttons.button}>
                  Explore our services
                </Link>
                <Link href="/contact" className={buttons.buttonOutline}>
                  Book a free chat
                </Link>
              </div>
            </div>
            <div className={styles.heroArt}>
              <Image
                src="/brand/blocks-logo.png"
                width={864}
                height={429}
                alt="Save Point blocks logo: coloured pixel blocks fitting together"
                priority
              />
            </div>
          </div>
        </section>

        {/*Automation band*/}
        <section className={styles.automate} aria-labelledby="automate-title">
          <div className={styles.automateText}>
            <p className={styles.sectionEyebrow}>Automation first</p>
            <h2 id="automate-title" className={styles.aboutHeader}>
              What could your business stop doing by hand?
            </h2>
            <p>
              Every week, small repetitive jobs quietly eat hours of your
              team&apos;s time. We find them, automate them, and connect the
              systems behind them so information only ever has to be entered
              once.
            </p>
            <Link href="/services#automation" className={buttons.buttonDark}>
              How automation works
            </Link>
          </div>
          <ul className={styles.automateList}>
            {automationExamples.map((example) => (
              <li key={example.label} className={styles.automateItem}>
                <span
                  className={styles.automateDot}
                  style={{ background: example.colour }}
                  aria-hidden="true"
                />
                {example.label}
              </li>
            ))}
          </ul>
        </section>

        <Service />

        {/*About section*/}
        <section className={styles.about}>
          <div className={styles.aboutImage}>
            <Image
              src="/brand/logo-flag-square.jpg"
              alt="Save Point logo: a pixel-art purple flag on a black background"
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
              The software wasn&apos;t the only problem. So were the devices
              and connecting systems it ran on. That&apos;s when Save Point
              earned its true name: the one place where systems, software
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

import Navbar from "@/app/navigation/navBar";
import Footer from "@/app/footer/footer";
import styles from "@/app/innerPage.module.css";
import Link from "next/link";

export default function About() {
  return (
    <main>
      <Navbar />

      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>About Us</h1>
      </div>

      <div className={styles.content}>
        {/* Origin story */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>How Save Point started</h2>
          <div className={styles.sectionBody}>
            <p>
              Save Point started as a tiny startup by a Software Engineering
              student. Logan saw a major failure in business software that
              exists today and witnessed various ways businesses and their staff
              could better enjoy their day-to-day work rather than being brought
              down by slow, uncooperative software.
            </p>
            <p>
              This led to rigorous marketing and demotivating failures to build
              the company Save Point is today. But there was another issue out
              there.
            </p>
            <p>
              The software was not the only problem but also the devices and
              connecting systems the software was used by. This led to a big
              explosion in research and exploration into computing and devices.
              Not only did Logan move into an amazing software space helping
              companies better produce their products and services through their
              in-house technology, he also changed how companies today use
              devices and systems.
            </p>
            <p>
              Thats when Save Point earned its true name — being the one place
              where systems, software and devices all work in one cohesive
              space, making businesses their own Save Point.
            </p>
          </div>
        </div>

        {/* Two col — mission + values */}
        <div className={styles.grid2}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Mission</h2>
            <div className={styles.sectionBody}>
              <p>
                Save Points misson is to build intelligent conntected systems
                with our clients.
              </p>
              <p></p>
              We will strive to create a cohesive expereince for your business
              at the front with the customer and behind the scenes with the
              staff. There is no right way of doing anything so we strive to
              build with you using our vast expertiese and expereince to build
              your ideal workflow. Your biggest concerns are ours and we will do
              our best to acompany and work through them.
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Values</h2>
            <div className={styles.sectionBody}>
              <h1 className={styles.subHeadPart}>
                Strong documentation & Future proofing
              </h1>
              <p>
                We beleveive that even after youve worked with Save Point there
                should be no reason your system/s shouldnt work without us.
                Depending on your package and needs we put everything in your
                facinity and make as much information about your system
                available to you. So even without Save Point your systems will
                work as amazing as they were with us.
              </p>
              <p>
                * Disclaimer. Some servives dependant on contract may require
                continued service with Save Point. See our{" "}
                <Link href="/legal">
                  <u>Legal page.</u>
                </Link>
              </p>
              <h1 className={styles.subHeadPart}>
                Communication & Availability
              </h1>
              <p>
                At Save Point communication and our availability to you is a
                priority we take seriously.
              </p>
              <p>
                Depended on contract constraints we will have strong ongoing
                communication throughout our contract together. We prioritise
                your calender availability over ours and, we will work around
                your time to make sure our services are on track.{" "}
              </p>
              <p>
                * Disclaimer. Depenendant on contract constraints and when both
                parties are in agreeance. See our{" "}
                <Link href="/legal">
                  <u>Legal page.</u>
                </Link>
              </p>
              <h1 className={styles.subHeadPart}>Privacy & Transparencty</h1>
              <p>
                Privacy & Transparency is somthing that isant talked about
                enough in todays world.
              </p>
              <p>
                At Save Point we only take / share / sell information if our
                contract together allows it. If it does we tell you exactly what
                we are taking/storing/selling and how its being stored/sold per
                agreement. We arnt here to take/use/steal anything that isant
                ours and we want to push this onto our clients as well.
              </p>
              <p>
                * Disclaimer. Depenendant on contract constraints and when both
                parties are in agreeance. See our{" "}
                <Link href="/legal">
                  <u>Legal page.</u>
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>The Team</h2>
          <div className={styles.sectionBody}>
            <p>Save Point started off with just one member being Logan.</p>
            <p>
              Now Save Point is a bigger but still small group of likeminded
              individuals with a passion for technology. We contract and
              outsource work when agreed apon if contracts require a larger
              team. Save Point is a very well tasked team ready to brind their
              expertiese into action for every project.
            </p>
            <p>
              * Disclaimer. Depenendant on contract constraints and when both
              parties are in agreeance. See our{" "}
              <Link href="/legal">
                <u>Legal page.</u>
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

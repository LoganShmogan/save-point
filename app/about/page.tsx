import Navbar from "@/app/navigation/navBar";
import Footer from "@/app/footer/footer";
import styles from "@/app/innerPage.module.css";
import Image from "next/image";

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
              Save Point started as a tiny startup by a Software Engineering student Logan Young.
              Logan saw a major failure in business software that exists today and witnessed various
              ways businesses and their staff could better enjoy their day-to-day work rather than
              being brought down by slow, uncooperative software.
            </p>
            <p>
              This led to rigorous marketing and demotivating failures to build the company Save
              Point is today. But there was another issue out there.
            </p>
            <p>
              The software was not the only problem but also the devices and connecting systems the
              software was used by. This led to a big explosion in research and exploration into
              computing and devices. Not only did Logan move into an amazing software space helping
              companies better produce their products and services through their in-house technology,
              he also changed how companies today use devices and systems.
            </p>
            <p>
              That's when Save Point earned its true name — being the one place where systems,
              software and devices all work in one cohesive space, making businesses their own
              Save Point.
            </p>
          </div>
        </div>

        {/* Two col — mission + values */}
        <div className={styles.grid2}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Mission</h2>
            <div className={styles.sectionBody}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Values</h2>
            <div className={styles.sectionBody}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant
                morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              </p>
              <p>
                Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
                Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>The Team</h2>
          <div className={styles.sectionBody}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan
              tortor. Nulla facilisi. Mauris vel urna in dolor tempus auctor. Curabitur dapibus
              enim sit amet elit pharetra tincidunt feugiat nisl imperdiet.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
              libero. Sed cursus ante dapibus diam.
            </p>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}

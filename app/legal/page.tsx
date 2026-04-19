import Navbar from "@/app/navigation/navBar";
import Footer from "@/app/footer/footer";
import styles from "@/app/innerPage.module.css";

export default function Legal() {
  return (
    <main>
      <Navbar />

      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Legal</h1>
      </div>

      <div className={styles.content}>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Policy</h2>
          <div className={styles.sectionBody}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
              libero. Sed cursus ante dapibus diam. Sed nisi.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Terms of Service</h2>
          <div className={styles.sectionBody}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor
              quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
            </p>
            <p>
              Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
            </p>
            <p>
              Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean
              fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
              lacus enim ac dui.
            </p>
          </div>
        </div>

        <div className={styles.grid2}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Privacy</h2>
            <div className={styles.sectionBody}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <p>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Support</h2>
            <div className={styles.sectionBody}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant
                morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              </p>
              <p>
                For all support enquiries please email{" "}
                <a href="mailto:contact@savepoint.cc" style={{ color: "var(--white)", textDecoration: "underline" }}>
                  contact@savepoint.cc
                </a>.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Disclaimer</h2>
          <div className={styles.sectionBody}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus.
              Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur
              ante hendrerit.
            </p>
            <p>
              Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae
              augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.
            </p>
            <p>© 2026 Save Point Limited. All rights reserved.</p>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}

import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faCheckCircle,
  faCogs,
  faShoppingCart,
  faLaptopCode,
  faShieldAlt,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.companyName}>Save Point Limited</h1>
          <p className={styles.tagline}>Transforming Your Digital Presence</p>
          <p className={styles.heroDescription}>
            Professional IT solutions and software development tailored to your
            business needs. We bridge the gap between your current systems and
            future potential.
          </p>
          <a href="#contact" className={styles.ctaButton}>
            Get Started Today
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>About Save Point</h2>
          <p className={styles.sectionText}>
            At Save Point (Limited), we specialize in modernizing and optimizing
            your digital infrastructure. We understand that every business has
            unique needs, and we're here to provide customized solutions that
            drive growth and efficiency.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <FontAwesomeIcon
                icon={faCheckCircle}
                className={styles.featureIcon}
              />
              <span>Tailored Solutions</span>
            </div>
            <div className={styles.feature}>
              <FontAwesomeIcon
                icon={faCheckCircle}
                className={styles.featureIcon}
              />
              <span>Expert Development</span>
            </div>
            <div className={styles.feature}>
              <FontAwesomeIcon
                icon={faCheckCircle}
                className={styles.featureIcon}
              />
              <span>Ongoing Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <FontAwesomeIcon icon={faCogs} className={styles.serviceIcon} />
              <h3>Software Customization</h3>
              <p>
                Upgrade and personalize your current in-house software to better
                fit your company's unique requirements and workflows.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <FontAwesomeIcon
                icon={faLaptopCode}
                className={styles.serviceIcon}
              />
              <h3>Web Development</h3>
              <p>
                Create responsive, modern websites and web applications that
                deliver exceptional user experiences.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <FontAwesomeIcon
                icon={faShoppingCart}
                className={styles.serviceIcon}
              />
              <h3>E-commerce Development</h3>
              <p>
                Build robust online stores with secure payment systems and
                seamless shopping experiences.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <FontAwesomeIcon
                icon={faShieldAlt}
                className={styles.serviceIcon}
              />
              <h3>Software Maintenance</h3>
              <p>
                Ensure your applications run smoothly with regular updates,
                security patches, and performance optimization.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <FontAwesomeIcon
                icon={faHeadset}
                className={styles.serviceIcon}
              />
              <h3>General IT Support</h3>
              <p>
                Comprehensive IT services including system administration,
                troubleshooting, and technical consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <p className={styles.sectionText}>
            Ready to transform your digital infrastructure? Contact us today for
            a free consultation.
          </p>

          <div className={styles.contactMethods}>
            <div className={styles.contactMethod}>
              <FontAwesomeIcon
                icon={faEnvelope}
                className={styles.contactIcon}
              />
              <h3>Email Us</h3>
              <a
                href="mailto:contact@savepoint.com"
                className={styles.contactLink}
              >
                contact@savepoint.cc
              </a>
              <p>We typically respond within 24 hours</p>
            </div>

            <div className={styles.contactMethod}>
              <FontAwesomeIcon icon={faPhone} className={styles.contactIcon} />
              <h3>Call Us</h3>
              <a href="tel:+640210653792" className={styles.contactLink}>
                +64 021 065 3792
              </a>
              <p>Monday to Friday, 6:30am - 10:30pm GMT</p>
            </div>
          </div>

          {/*<div className={styles.contactForm}>
            <h3>Send us a message</h3>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={styles.formInput}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  placeholder="Your Email"
                  className={styles.formInput}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className={styles.formTextarea}
                  required
                />
              </div>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>*/}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <h3>Save Point Limited</h3>
            <p>Your Partner in Digital Transformation</p>
          </div>
          <div className={styles.footerInfo}>
            <p>
              &copy; {new Date().getFullYear()} Save Point Limited. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

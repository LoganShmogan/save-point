import Navbar from "@/app/navigation/navBar";
import Footer from "@/app/footer/footer";
import Link from "next/link";
import styles from "@/app/shared/page.module.css";
import PageHero from "@/app/shared/pageHero";
import ContactForm from "@/app/contact/contactForm";
import type { Metadata } from "next";
import { JsonLd, breadcrumbJsonLd, pageMetadata } from "@/app/shared/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Talk to Save Point about automation, kiosks, apps, software or a new website. Free consultation and a detailed quote within 2 working days. New Zealand.",
  path: "/contact",
});

export default function Contact() {
  return (
    <>
      <Navbar />
      <main id="main">
        <JsonLd data={breadcrumbJsonLd("Contact", "/contact")} />
        <PageHero
          title="Contact"
          lead="Questions, quotes or just a chat? We'd love to hear from you."
        />

        <div className={styles.content}>
          {/* Contact form */}
          <section className={styles.section} aria-labelledby="form-title">
            <h2 id="form-title" className={styles.sectionTitle}>
              Send us a message
            </h2>
            <div className={styles.sectionBody}>
              <p>
                We are ready to hear from you about projects of any size, from
                startups to established businesses. Fill in the form below and
                we&apos;ll be in touch.
              </p>
            </div>
            <ContactForm />
          </section>

          {/* Other ways to get in touch */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Other ways to reach us</h2>
            <div className={styles.sectionBody}>
              <dl className={styles.contactList}>
                <div className={styles.contactRow}>
                  <dt className={styles.contactLabel}>Email</dt>
                  <dd>
                    <a
                      href="mailto:contact@savepoint.co.nz"
                      className={styles.inlineLink}
                    >
                      contact@savepoint.co.nz
                    </a>
                  </dd>
                </div>

                <div className={styles.contactRow}>
                  <dt className={styles.contactLabel}>Phone</dt>
                  <dd>
                    <a href="tel:+64210653792" className={styles.inlineLink}>
                      +64 21 065 3792
                    </a>
                  </dd>
                </div>

                <div className={styles.contactRow}>
                  <dt className={styles.contactLabel}>Facebook</dt>
                  <dd>
                    <Link
                      href="https://www.facebook.com/profile.php?id=61584633437200"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.inlineLink}
                    >
                      Save Point Limited
                      <span className="visually-hidden"> (opens in a new tab)</span>
                    </Link>
                  </dd>
                </div>

                <div className={styles.contactRow}>
                  <dt className={styles.contactLabel}>Location</dt>
                  <dd>New Zealand</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Two col: response times + what to expect */}
          <div className={styles.grid2}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Response Times</h2>
              <div className={styles.sectionBody}>
                <p>
                  One of Save Point&apos;s core values is availability &
                  communication.
                </p>
                <p>
                  We aim to reply within 1 working day, and often sooner. Not
                  to worry, we will never forget about you! Send us a message,
                  email, call, or message us on Facebook and we can talk about
                  your project.
                </p>
              </div>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>What to expect</h2>
              <div className={styles.sectionBody}>
                <p>
                  Once you have reached out to Save Point, we aim to get back
                  to you within 1 working day.
                </p>
                <p>
                  We will book in an initial consultation with you to discover
                  and better understand your project. From there, we&apos;ll
                  determine the deliverables and constraints, then give you an
                  estimate. An estimate is not a definite or exact figure, but
                  an approximate one.
                </p>
              </div>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}

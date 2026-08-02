import Link from "next/link";
import type { Metadata } from "next";
import VentureNav from "@/app/ventures/ventureNav";
import VentureFooter from "@/app/ventures/ventureFooter";
import styles from "@/app/ventures/ventures.module.css";

export const metadata: Metadata = {
  title: "Save Point Home Automation",
  description:
    "Save Point Home Automation designs, installs, programs, and maintains smart home and AI automation systems across New Zealand.",
  alternates: {
    canonical: "/automation",
  },
};

export default function Automation() {
  return (
    <main className={styles.page}>
      <VentureNav title="Home Automation" />

      {/* Hero */}
      <div className={styles.hero}>
        <p className={styles.heroEyebrow}>Save Point Home Automation</p>
        <h1 className={styles.heroTitle}>
          Smart homes, <span>done properly.</span>
        </h1>
        <p className={styles.heroSubtitle}>
          We sell, design, program, install, troubleshoot, and maintain home
          AI automation devices, so your smart home actually stays smart,
          long after installation day.
        </p>
        <div className={styles.heroActions}>
          <Link href="#contact" className={styles.ctaPrimary}>
            Book a consultation
          </Link>
          <Link href="#about" className={styles.ctaSecondary}>
            How it works
          </Link>
        </div>
      </div>

      {/* Services */}
      <div className={styles.sectionAlt}>
        <div className={styles.section}>
          <p className={styles.sectionEyebrow}>What we do</p>
          <h2 className={styles.sectionTitle}>End-to-end automation</h2>
          <p className={styles.sectionLead}>
            Whether you&apos;re starting from scratch or fixing a system
            someone else left half-finished, we cover every stage of your
            home automation setup.
          </p>
          <div className={styles.grid3}>
            <div className={styles.card}>
              <p className={styles.cardNumber}>01</p>
              <h3 className={styles.cardTitle}>Sell &amp; source</h3>
              <p className={styles.cardBody}>
                We help you choose the right devices for your home and
                budget. Lighting, security, climate, entry, and voice
                control, rather than locking you into one ecosystem.
              </p>
            </div>
            <div className={styles.card}>
              <p className={styles.cardNumber}>02</p>
              <h3 className={styles.cardTitle}>Design</h3>
              <p className={styles.cardBody}>
                We plan how your devices connect, communicate, and
                automate together, so the system feels like one home, not a
                pile of separate gadgets.
              </p>
            </div>
            <div className={styles.card}>
              <p className={styles.cardNumber}>03</p>
              <h3 className={styles.cardTitle}>Program</h3>
              <p className={styles.cardBody}>
                Custom automations and routines tailored to how you actually
                live. Not generic presets pulled from a manual.
              </p>
            </div>
            <div className={styles.card}>
              <p className={styles.cardNumber}>04</p>
              <h3 className={styles.cardTitle}>Install</h3>
              <p className={styles.cardBody}>
                Clean, professional installation of hardware and wiring,
                done safely and tidily, in and around your existing home.
              </p>
            </div>
            <div className={styles.card}>
              <p className={styles.cardNumber}>05</p>
              <h3 className={styles.cardTitle}>Troubleshoot</h3>
              <p className={styles.cardBody}>
                When something stops talking to something else, we find out
                why and fix it. Instead of leaving you to reset devices at
                2am.
              </p>
            </div>
            <div className={styles.card}>
              <p className={styles.cardNumber}>06</p>
              <h3 className={styles.cardTitle}>Maintain</h3>
              <p className={styles.cardBody}>
                Ongoing support and maintenance plans to keep firmware,
                automations, and integrations working as your home and
                devices change.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div id="about" className={styles.section}>
        <p className={styles.sectionEyebrow}>About</p>
        <h2 className={styles.sectionTitle}>
          A focused venture from Save Point
        </h2>
        <div className={styles.grid2}>
          <p className={styles.aboutText}>
            Save Point Home Automation is a dedicated venture of Save Point
            Limited, built on the same IoT and systems expertise behind our
            business software and device integration work, now focused
            entirely on residential smart homes.
          </p>
          <ul className={styles.factList}>
            <li>Vendor-agnostic. We work across ecosystems, not just one.</li>
            <li>
              Backed by Save Point Limited&apos;s wider software and IoT
              experience.
            </li>
            <li>Based in New Zealand, working with homes across the country.</li>
            <li>
              Every install is documented, so your system keeps working even
              without us.
            </li>
          </ul>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className={styles.sectionAlt}>
        <div className={styles.section}>
          <p className={styles.sectionEyebrow}>Contact</p>
          <h2 className={styles.sectionTitle}>Book a consultation</h2>
          <p className={styles.sectionLead}>
            Tell us about your home and what you&apos;re hoping to automate,
            we&apos;ll take it from there.
          </p>
          <div className={styles.contactCard}>
            <div className={styles.contactRow}>
              <span className={styles.contactLabel}>Email</span>
              <Link
                href="mailto:contact@savepoint.cc"
                className={styles.inlineLink}
              >
                contact@savepoint.cc
              </Link>
            </div>
            <div className={styles.contactRow}>
              <span className={styles.contactLabel}>Location</span>
              <span>New Zealand</span>
            </div>
            <div className={styles.contactRow}>
              <span className={styles.contactLabel}>More</span>
              <Link href="/contact" className={styles.inlineLink}>
                Visit the main Save Point contact page
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Legal */}
      <div id="legal" className={styles.section}>
        <p className={styles.sectionEyebrow}>Legal</p>
        <h2 className={styles.sectionTitle}>Privacy &amp; terms</h2>
        <div className={styles.legalBox}>
          <p>
            <strong>Same company, same protections.</strong>{" "}
            Save Point Home Automation is operated by Save Point Limited, so
            all work is covered by Save Point&apos;s standard Privacy Policy,
            Terms of Service, and Warranty &amp; Refund Policy.
          </p>
          <p>
            Any information you share with us, including details about your
            home, devices, or preferences, is used only to plan, quote, and
            deliver your project, and is never sold to third parties.
          </p>
          <p>
            Installation and automation work is covered by a warranty period
            confirmed in your project agreement, in line with the Consumer
            Guarantees Act 1993 (NZ).
          </p>
          <p>
            <Link href="/legal" className={styles.inlineLink}>
              Read the full Save Point Legal page
            </Link>{" "}
            for the complete Privacy Policy, Terms of Service, Disclaimer,
            Support, and Refund &amp; Warranty Policy.
          </p>
        </div>
      </div>

      <VentureFooter title="Save Point Home Automation" />
    </main>
  );
}

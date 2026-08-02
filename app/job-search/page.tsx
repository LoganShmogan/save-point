import Link from "next/link";
import type { Metadata } from "next";
import VentureNav from "@/app/ventures/ventureNav";
import VentureFooter from "@/app/ventures/ventureFooter";
import WaitlistForm from "@/app/job-search/waitlistForm";
import styles from "@/app/ventures/ventures.module.css";

export const metadata: Metadata = {
  title: "Save Point Job Search",
  description:
    "Save Point Job Search is an upcoming AI-powered job application service. Set your preferences and let an AI agent search and apply on your behalf.",
  alternates: {
    canonical: "/job-search",
  },
};

export default function JobSearch() {
  return (
    <main className={styles.page}>
      <VentureNav title="Job Search" />

      {/* Hero */}
      <div className={styles.hero}>
        <p className={styles.badge}>In development, join the waitlist</p>
        <p className={styles.heroEyebrow}>Save Point Job Search</p>
        <h1 className={styles.heroTitle}>
          Let an AI agent <span>apply for you.</span>
        </h1>
        <p className={styles.heroSubtitle}>
          A subscription service that takes your resume and job preferences,
          then searches the web and applies to matching roles on your
          behalf, filling out forms automatically, so you can focus on
          interviews instead of applications.
        </p>
        <div className={styles.heroActions}>
          <Link href="#contact" className={styles.ctaPrimary}>
            Join the waitlist
          </Link>
          <Link href="#about" className={styles.ctaSecondary}>
            How it works
          </Link>
        </div>
      </div>

      {/* How it works */}
      <div className={styles.sectionAlt}>
        <div className={styles.section}>
          <p className={styles.sectionEyebrow}>How it works</p>
          <h2 className={styles.sectionTitle}>Set it up once, apply always</h2>
          <p className={styles.sectionLead}>
            You stay in control of what you apply for, the agent handles the
            repetitive work of finding and filling out applications.
          </p>
          <div className={styles.grid3}>
            <div className={styles.card}>
              <p className={styles.cardNumber}>01</p>
              <h3 className={styles.cardTitle}>Tell us about you</h3>
              <p className={styles.cardBody}>
                Upload your resume and add basic information about yourself, your experience, skills, and the kind of role and
                workplace you&apos;re looking for.
              </p>
            </div>
            <div className={styles.card}>
              <p className={styles.cardNumber}>02</p>
              <h3 className={styles.cardTitle}>Set your preferences</h3>
              <p className={styles.cardBody}>
                Choose your target location, job type, and industry, so the
                agent only searches for roles that actually fit what you
                want.
              </p>
            </div>
            <div className={styles.card}>
              <p className={styles.cardNumber}>03</p>
              <h3 className={styles.cardTitle}>The agent gets to work</h3>
              <p className={styles.cardBody}>
                Our AI agent scrapes the internet for matching roles and
                automatically fills in and submits applications on your
                behalf.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div id="about" className={styles.section}>
        <p className={styles.sectionEyebrow}>About</p>
        <h2 className={styles.sectionTitle}>
          A new venture from Save Point
        </h2>
        <div className={styles.grid2}>
          <p className={styles.aboutText}>
            Save Point Job Search is currently in active development. It
            grew out of Save Point Limited&apos;s software and AI agent
            work, applying that same expertise to one of the most
            repetitive and time-consuming parts of job hunting: the
            application itself.
          </p>
          <ul className={styles.factList}>
            <li>Currently in development, not yet publicly available.</li>
            <li>
              Built by Save Point Limited, the team behind our custom
              software and IoT work.
            </li>
            <li>
              You stay in control, set your own criteria before anything is
              submitted.
            </li>
            <li>
              Join the waitlist below to be notified when it launches.
            </li>
          </ul>
        </div>
      </div>

      {/* Contact / waitlist */}
      <div id="contact" className={styles.sectionAlt}>
        <div className={styles.section}>
          <p className={styles.sectionEyebrow}>Contact</p>
          <h2 className={styles.sectionTitle}>Join the waitlist</h2>
          <p className={styles.sectionLead}>
            Save Point Job Search isn&apos;t open yet. Email us to be notified
            when it launches, or if you&apos;d like to ask a question in the
            meantime.
          </p>
          <div className={styles.grid2}>
            <div className={styles.contactCard}>
              <WaitlistForm />
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactRow}>
                <span className={styles.contactLabel}>Email</span>
                <Link
                  href="mailto:contact@savepoint.cc?subject=Job%20Search%20Waitlist"
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
      </div>

      {/* Legal */}
      <div id="legal" className={styles.section}>
        <p className={styles.sectionEyebrow}>Legal</p>
        <h2 className={styles.sectionTitle}>Privacy &amp; terms</h2>
        <div className={styles.legalBox}>
          <p>
            <strong>Same company, same protections.</strong>{" "}
            Save Point Job Search is operated by Save Point Limited and,
            once live, will be covered by Save Point&apos;s standard
            Privacy Policy and Terms of Service.
          </p>
          <p>
            <strong>Your data.</strong>{" "}
            Resume and personal information you submit will only be used to
            search for and apply to roles on your behalf, in line with the
            New Zealand Privacy Act 2020. We will not sell your information
            to third parties.
          </p>
          <p>
            <strong>No guaranteed outcomes.</strong>{" "}
            Save Point Job Search automates the job search and application
            process, it does not guarantee interviews, offers, or
            employment outcomes.
          </p>
          <p>
            <strong>Third-party platforms.</strong>{" "}
            Applications are submitted to third-party job boards and
            employer sites, which have their own terms of use. Save Point
            Job Search operates within reasonable bounds of those terms and
            cannot be held responsible for the policies or decisions of
            third-party platforms or employers.
          </p>
          <p>
            <Link href="/legal" className={styles.inlineLink}>
              Read the full Save Point Legal page
            </Link>{" "}
            for the complete Privacy Policy, Terms of Service, and related
            policies. Full terms specific to Job Search will be published
            ahead of launch.
          </p>
        </div>
      </div>

      <VentureFooter title="Save Point Job Search" />
    </main>
  );
}

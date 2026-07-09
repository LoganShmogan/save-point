import Navbar from "@/app/navigation/navBar";
import Footer from "@/app/footer/footer";
import styles from "@/app/legal/page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Save Point's privacy policy, terms of service, and warranty information, governed by New Zealand law.",
  alternates: {
    canonical: "/legal",
  },
};

export default function Legal() {
  return (
    <main>
      <Navbar />

      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Legal</h1>
      </div>

      <div className={styles.content}>
        {/* 1. Privacy Policy */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Privacy Policy</h2>
          <div className={styles.sectionBody}>
            <p>
              <strong>
                Last updated: 13 May 2026 | Governed by the New Zealand Privacy
                Act 2020
              </strong>
            </p>

            <p>
              <strong>1.1 Introduction</strong>
              <br />
              Save Point Limited ("we", "us", "our") is committed to protecting
              your personal information in accordance with the New Zealand
              Privacy Act 2020. This Privacy Policy explains how we collect,
              use, store, and protect any personal information you provide to us
              through our website or in the course of our services.
            </p>

            <p>
              <strong>1.2 What Information We Collect</strong>
              <br />
              We collect only the information you voluntarily submit through our
              contact form. This may include your full name, email address,
              phone number (if provided), and the content of your enquiry or
              message. We do not collect payment information, sensitive personal
              information, or data from minors under the age of 16 without
              parental consent.
            </p>

            <p>
              <strong>1.3 How We Use Your Information</strong>
              <br />
              The information you provide is used solely to respond to your
              enquiry or request, provide a consultation or project quote, and
              communicate with you regarding your project. We do not use your
              information for marketing purposes without your explicit consent,
              and we do not sell, trade, or transfer your personal information
              to third parties.
            </p>

            <p>
              <strong>1.4 Storage &amp; Security</strong>
              <br />
              Your information is stored securely and only accessible to
              authorised personnel within Save Point Limited. We take reasonable
              steps to protect your information from loss, misuse, or
              unauthorised access. No data transmission over the internet can be
              guaranteed as completely secure; however, we take all practicable
              steps to protect your information.
            </p>

            <p>
              <strong>1.5 Retention</strong>
              <br />
              We retain your personal information only as long as necessary to
              fulfil the purposes outlined in this policy, or as required by
              law. Contact form enquiries are typically retained for up to 24
              months.
            </p>

            <p>
              <strong>1.6 Your Rights</strong>
              <br />
              Under the Privacy Act 2020 you have the right to access the
              personal information we hold about you, request correction of any
              inaccurate information, and ask us to delete your information
              (subject to legal obligations). To exercise any of these rights,
              contact us at{" "}
              <a
                href="mailto:support@savepoint.cc"
                className={styles.inlineLink}
              >
                support@savepoint.cc
              </a>
              .
            </p>

            <p>
              <strong>1.7 Cookies</strong>
              <br />
              Our website may use cookies or similar technologies to improve
              your browsing experience. These do not collect personally
              identifiable information unless you have submitted a contact form.
            </p>

            <p>
              <strong>1.8 Contact</strong>
              <br />
              For any privacy-related questions or complaints, please contact us
              at{" "}
              <a
                href="mailto:support@savepoint.cc"
                className={styles.inlineLink}
              >
                support@savepoint.cc
              </a>
              . If you are not satisfied with our response, you may contact the
              Office of the Privacy Commissioner at{" "}
              <a
                href="https://www.privacy.org.nz"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.inlineLink}
              >
                www.privacy.org.nz
              </a>
              .
            </p>
          </div>
        </div>

        {/* 2. Terms of Service */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Terms of Service</h2>
          <div className={styles.sectionBody}>
            <p>
              <strong>
                Last updated: 13 May 2026 | Governed by the laws of New Zealand
              </strong>
            </p>

            <p>
              <strong>2.1 Acceptance of Terms</strong>
              <br />
              By accessing our website or engaging our services, you agree to be
              bound by these Terms of Service. If you do not agree, please do
              not use our website or engage our services. These terms apply to
              all clients and visitors of Save Point Limited.
            </p>

            <p>
              <strong>2.2 Services Provided</strong>
              <br />
              Save Point Limited provides technology services including, but not
              limited to, web development, software development, IoT
              integration, and related consultancy. The specific scope,
              timeline, and deliverables for each project are agreed upon in
              writing prior to commencement.
            </p>

            <p>
              <strong>2.3 Project Agreements</strong>
              <br />
              All work is scoped individually. A formal written agreement or
              proposal will be provided before any project begins, outlining the
              project scope and deliverables, timeline and milestones, payment
              terms and total cost, and warranty period. No work will commence
              until both parties have agreed to the project scope in writing.
            </p>

            <p>
              <strong>2.4 Payment</strong>
              <br />
              Payment terms are agreed upon in the individual project agreement.
              Unless otherwise stated, a deposit may be required prior to
              commencement, remaining payment is due upon project completion or
              at agreed milestones, and invoices are due within 14 days of
              issue. Late payments may incur interest at a rate of 2% per week.
              Save Point Limited reserves the right to suspend services on
              accounts with outstanding balances.
            </p>

            <p>
              <strong>2.5 Client Responsibilities</strong>
              <br />
              You agree to provide accurate and complete information required
              for project delivery, respond to communications in a timely
              manner, notify us of any changes in project requirements promptly,
              and ensure you hold the rights to any content, logos, or materials
              you provide to us.
            </p>

            <p>
              <strong>2.6 Intellectual Property</strong>
              <br />
              Upon full payment, the client receives ownership of all
              custom-built deliverables as specified in the project agreement.
              Save Point Limited retains the right to use general methodologies,
              frameworks, and non-client-specific code developed during the
              project. Save Point Limited also retains the right to display
              completed work in its portfolio unless otherwise agreed.
            </p>

            <p>
              <strong>2.7 Confidentiality</strong>
              <br />
              Both parties agree to keep confidential any proprietary or
              sensitive information shared during the course of the project.
              Save Point Limited will not disclose your business information to
              third parties without your consent.
            </p>

            <p>
              <strong>2.8 Limitation of Liability</strong>
              <br />
              To the maximum extent permitted by New Zealand law, Save Point
              Limited shall not be liable for any indirect, incidental, or
              consequential damages arising from the use of our services or
              deliverables. Our total liability for any claim shall not exceed
              the total amount paid by you for the specific project giving rise
              to the claim.
            </p>

            <p>
              <strong>2.9 Termination</strong>
              <br />
              Either party may terminate a project agreement with written
              notice. Work completed to date will be invoiced at a pro-rata
              rate. Any deposits paid are non-refundable unless termination is
              initiated by Save Point Limited. All deliverables completed and
              paid for will be transferred to the client.
            </p>

            <p>
              <strong>2.10 Governing Law</strong>
              <br />
              These terms are governed by and construed in accordance with the
              laws of New Zealand. Any disputes shall be subject to the
              exclusive jurisdiction of the New Zealand courts.
            </p>

            <p>
              <strong>2.11 Changes to These Terms</strong>
              <br />
              We may update these Terms of Service from time to time. The
              current version will always be available on our website with the
              effective date noted. Continued use of our services after changes
              constitutes acceptance of the revised terms.
            </p>
          </div>
        </div>

        {/* 3. Disclaimer + 4. Support — two-column grid */}
        <div className={styles.grid2}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Disclaimer</h2>
            <div className={styles.sectionBody}>
              <p>
                <strong>Last updated: 13 May 2026</strong>
              </p>

              <p>
                <strong>3.1 General Information</strong>
                <br />
                The information provided on the Save Point Limited website is
                for general informational purposes only. While we endeavour to
                keep the information up to date and accurate, we make no
                representations or warranties of any kind, express or implied,
                about the completeness, accuracy, reliability, or availability
                of the website or the information contained on it.
              </p>

              <p>
                <strong>3.2 No Professional Advice</strong>
                <br />
                Nothing on this website constitutes legal, financial, technical,
                or professional advice. You should seek independent professional
                advice before making any decisions based on the content of this
                website.
              </p>

              <p>
                <strong>3.3 External Links</strong>
                <br />
                The Save Point Limited website may contain links to third-party
                websites. These links are provided for your convenience only. We
                have no control over the content of those sites and accept no
                responsibility for them or for any loss or damage that may arise
                from your use of them.
              </p>

              <p>
                <strong>3.4 Technology &amp; IoT Disclaimer</strong>
                <br />
                Our IoT and technology solutions are designed and tested to meet
                the agreed project specifications. However, performance may be
                affected by factors outside our control including third-party
                hardware, internet connectivity, firmware updates, environmental
                conditions, and software dependencies. We are not liable for
                failures arising from such external factors after the warranty
                period has elapsed.
              </p>

              <p>
                <strong>3.5 Accuracy of Pricing Information</strong>
                <br />
                Pricing displayed on our website is indicative only and is
                subject to change. Final pricing is confirmed only in a written
                project agreement following consultation.
              </p>

              <p>
                <strong>3.6 Limitation of Liability</strong>
                <br />
                Save Point Limited shall not be liable for any loss or damage,
                including without limitation, indirect or consequential loss or
                damage, arising from or in connection with the use of our
                website or services beyond what is required by New Zealand law.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Support</h2>
            <div className={styles.sectionBody}>
              <p>
                <strong>Last updated: 13 May 2026</strong>
              </p>

              <p>
                <strong>4.1 Overview</strong>
                <br />
                Save Point Limited is committed to providing responsive,
                professional support to all clients during and after project
                delivery.
              </p>

              <p>
                <strong>4.2 Support Channels</strong>
                <br />
                Email:{" "}
                <a
                  href="mailto:support@savepoint.cc"
                  className={styles.inlineLink}
                >
                  support@savepoint.cc
                </a>
                <br />
                Phone: +64 021 065 3792
                <br />
                Available Monday to Friday, 9:00am – 5:00pm NZST, excluding New
                Zealand public holidays.
              </p>

              <p>
                <strong>4.3 Response Times</strong>
                <br />
                Email enquiries are responded to within 1 business day. Phone
                voicemails are returned within 1 business day. Critical project
                issues within the warranty period are addressed within 4
                business hours. Response times are targets, not guarantees.
              </p>

              <p>
                <strong>4.4 Warranty Support</strong>
                <br />
                During your warranty period we will address defects directly
                attributable to our workmanship or code at no additional cost.
                This covers bugs present at delivery and functionality not
                performing as agreed. It does not cover client-side
                modifications, third-party software changes, new feature
                requests, or issues after the warranty period.
              </p>

              <p>
                <strong>4.5 Out-of-Warranty Support</strong>
                <br />
                Support requests outside the warranty period will be assessed
                and quoted separately. We offer ongoing maintenance and support
                packages — contact us at{" "}
                <a
                  href="mailto:support@savepoint.cc"
                  className={styles.inlineLink}
                >
                  support@savepoint.cc
                </a>{" "}
                to discuss options.
              </p>

              <p>
                <strong>4.6 Escalation</strong>
                <br />
                If your issue is not resolved to your satisfaction, email{" "}
                <a
                  href="mailto:support@savepoint.cc"
                  className={styles.inlineLink}
                >
                  support@savepoint.cc
                </a>{" "}
                with the subject line "Support Escalation". We will acknowledge
                escalated issues within 1 business day.
              </p>
            </div>
          </div>
        </div>

        {/* 5. Refund & Warranty Policy */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Refund &amp; Warranty Policy</h2>
          <div className={styles.sectionBody}>
            <p>
              <strong>
                Last updated: 13 May 2026 | Governed by the Consumer Guarantees
                Act 1993 (NZ)
              </strong>
            </p>

            <p>
              <strong>5.1 Our Commitment</strong>
              <br />
              Save Point Limited stands behind the quality of its work. All
              projects come with a warranty period as specified in your
              individual project agreement. We comply with the Consumer
              Guarantees Act 1993 and the Fair Trading Act 1986.
            </p>

            <p>
              <strong>5.2 Warranty Periods</strong>
              <br />
              Warranty periods vary by tier: Online IoT Starter — 1 month from
              project delivery; Business Foundation — 3+ months from project
              delivery; Custom Enterprise — ongoing as per contract terms
              (minimum 5 years).
            </p>

            <p>
              <strong>5.3 What the Warranty Covers</strong>
              <br />
              During the warranty period, we will remedy defects in workmanship
              or functionality that were present at the time of delivery, do not
              conform to the agreed project specification, or arose from our
              code, configuration, or installation.
            </p>

            <p>
              <strong>5.4 What the Warranty Does Not Cover</strong>
              <br />
              The warranty does not apply to damage caused by client
              modifications, misuse, or negligence; third-party services, APIs,
              or hardware failures; issues arising from changes to the client's
              existing infrastructure; or new feature requests or changes to
              original scope.
            </p>

            <p>
              <strong>5.5 Refunds</strong>
              <br />
              Due to the custom nature of our work, refunds are assessed on a
              case-by-case basis. A refund or partial refund may be considered
              where we are unable to deliver agreed project scope after
              reasonable attempts, or where a project is terminated by Save
              Point Limited prior to completion. Deposits are generally
              non-refundable as they cover initial consultation, planning, and
              resource allocation. Any applicable refunds will be processed
              within 20 business days.
            </p>

            <p>
              <strong>5.6 Consumer Rights</strong>
              <br />
              Nothing in this policy limits your rights under the Consumer
              Guarantees Act 1993 or the Fair Trading Act 1986. Where a service
              fails to meet a consumer guarantee, you are entitled to have the
              problem remedied or, in cases of significant failure, a refund.
            </p>

            <p>
              <strong>5.7 How to Make a Claim</strong>
              <br />
              To make a warranty or refund claim, contact us at{" "}
              <a
                href="mailto:support@savepoint.cc"
                className={styles.inlineLink}
              >
                support@savepoint.cc
              </a>{" "}
              with a description of the issue and relevant project details. We
              will acknowledge your claim within 2 business days and work with
              you to reach a fair resolution.
            </p>

            <p>© 2026 Save Point Limited. All rights reserved.</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

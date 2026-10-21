import Navbar from "@/app/navigation/navBar";
import Footer from "@/app/footer/footer";
import styles from "@/app/shared/page.module.css";
import PageHero from "@/app/shared/pageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Save Point's privacy policy, cookie policy, terms and conditions, refund and warranty policy, governed by New Zealand law.",
  alternates: {
    canonical: "/legal",
  },
};

const LAST_UPDATED = "22 October 2026";

const contents = [
  { id: "privacy", label: "Privacy Policy" },
  { id: "cookies", label: "Cookie Policy" },
  { id: "terms", label: "Terms and Conditions" },
  { id: "refunds", label: "Refund and Warranty Policy" },
  { id: "disclaimer", label: "Disclaimer" },
  { id: "support", label: "Support" },
];

const SupportEmail = () => (
  <a href="mailto:support@savepoint.co.nz" className={styles.inlineLink}>
    support@savepoint.co.nz
  </a>
);

export default function Legal() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          title="Legal"
          lead="Our privacy, cookie, terms, refund and warranty policies, all in one place."
        />

        <div className={styles.content}>
          {/* Table of contents */}
          <nav className={styles.section} aria-labelledby="contents-title">
            <h2 id="contents-title" className={styles.sectionTitle}>
              On this page
            </h2>
            <ol className={styles.contents}>
              {contents.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className={styles.inlineLink}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* 1. Privacy Policy */}
          <section id="privacy" className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Privacy Policy</h2>
            <div className={styles.sectionBody}>
              <p className={styles.updated}>
                Last updated: {LAST_UPDATED}. Governed by the New Zealand
                Privacy Act 2020.
              </p>

              <h3 className={styles.subHeadPart}>1.1 Who we are</h3>
              <p>
                Save Point Limited (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
                &ldquo;our&rdquo;) is a New Zealand company. This policy
                explains what personal information we collect, why we collect
                it, and how we look after it. Our privacy officer can be
                contacted at <SupportEmail />.
              </p>

              <h3 className={styles.subHeadPart}>
                1.2 Information you give us
              </h3>
              <p>
                We collect personal information when you use the contact form
                on our website, contact us by email, phone or Facebook, or
                when we work on a project together. This may include your
                name, email address, phone number, business details, and
                anything you tell us about your project.
              </p>

              <h3 className={styles.subHeadPart}>
                1.3 Information collected by our website
              </h3>
              <p>
                When you send a message through our contact form, we receive
                the name, email address, phone number (if you give one) and
                message you enter. The form is delivered to our inbox by
                EmailJS, an email delivery service based in the United States.
                Nothing is collected from the form until you press
                &ldquo;Send message&rdquo;. EmailJS may keep a copy of sent
                messages for a limited time as part of its service.
              </p>
              <p>
                Our website does not use cookies, and does not use analytics,
                advertising or tracking tools. Like all websites, our hosting
                provider (Vercel, based in the United States) may
                automatically record basic technical information (such as your IP address, browser type and the
                pages you requested) in server logs. These logs are used only
                to keep the site running and secure.
              </p>

              <h3 className={styles.subHeadPart}>
                1.4 How we use your information
              </h3>
              <p>
                We use your information to reply to your enquiry, prepare a
                quote, deliver and support your project, send invoices, and
                meet our legal obligations. We will not use your information
                for marketing without your permission.
              </p>

              <h3 className={styles.subHeadPart}>1.5 Who we share it with</h3>
              <p>
                We never sell or trade your personal information. We only
                share it when we need to, with:
              </p>
              <ul className={styles.list}>
                <li>
                  service providers we use to run our business, such as email
                  (Google Workspace), contact form delivery (EmailJS), website
                  hosting (Vercel) and file storage;
                </li>
                <li>
                  contractors working on your project, who must keep it
                  confidential; and
                </li>
                <li>government agencies, where the law requires it.</li>
              </ul>
              <p>
                Some of these providers may store information outside New
                Zealand. When that happens, we take reasonable steps to make
                sure your information is protected to a standard comparable
                to New Zealand law.
              </p>
              <p>
                If you message us on Facebook, Meta&apos;s own privacy policy
                also applies to that conversation.
              </p>

              <h3 className={styles.subHeadPart}>1.6 Keeping it safe</h3>
              <p>
                Your information is only available to people at Save Point
                who need it. We take reasonable steps to protect it from loss,
                misuse and unauthorised access. No method of sending
                information over the internet is completely secure, but we
                take every practical step to protect it.
              </p>

              <h3 className={styles.subHeadPart}>1.7 How long we keep it</h3>
              <p>
                We keep enquiries for up to 24 months. We keep project and
                billing records for as long as we need them to support your
                project, including any warranty period, and for as long as
                New Zealand law requires us to keep business records
                (generally 7 years).
              </p>

              <h3 className={styles.subHeadPart}>1.8 Your rights</h3>
              <p>
                You can ask to see the personal information we hold about
                you, and ask us to correct it. You can also ask us to delete
                it, unless we need to keep it by law. Email <SupportEmail />{" "}
                and we will respond within 20 working days.
              </p>

              <h3 className={styles.subHeadPart}>1.9 Privacy breaches</h3>
              <p>
                If a privacy breach happens that has caused, or is likely to
                cause, serious harm, we will tell you and the Office of the
                Privacy Commissioner as soon as practicable.
              </p>

              <h3 className={styles.subHeadPart}>1.10 Children</h3>
              <p>
                We do not knowingly collect information from anyone under 16
                without the consent of a parent or guardian.
              </p>

              <h3 className={styles.subHeadPart}>1.11 Questions or complaints</h3>
              <p>
                Contact our privacy officer at <SupportEmail />. If you are not
                happy with our response, you can contact the Office of the
                Privacy Commissioner at{" "}
                <a
                  href="https://www.privacy.org.nz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.inlineLink}
                >
                  www.privacy.org.nz
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
                .
              </p>

              <h3 className={styles.subHeadPart}>1.12 Changes to this policy</h3>
              <p>
                We may update this policy from time to time. The latest
                version will always be on this page, with the date it was
                last updated.
              </p>
            </div>
          </section>

          {/* 2. Cookie Policy */}
          <section id="cookies" className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Cookie Policy</h2>
            <div className={styles.sectionBody}>
              <p className={styles.updated}>Last updated: {LAST_UPDATED}.</p>

              <h3 className={styles.subHeadPart}>2.1 What cookies are</h3>
              <p>
                Cookies are small files that a website can save in your
                browser. They are often used to remember logins or
                preferences, or to track what you do across websites.
              </p>

              <h3 className={styles.subHeadPart}>
                2.2 Our website does not use cookies
              </h3>
              <p>
                The Save Point website does not set any cookies. We do not
                use analytics, advertising or tracking tools, and our fonts
                and images are served from our own website rather than from
                third parties. Because of this, we do not show a cookie
                banner or ask for cookie consent.
              </p>

              <h3 className={styles.subHeadPart}>2.3 Links to other websites</h3>
              <p>
                Our website links to other sites, such as Facebook. If you
                follow one of those links, that website may set its own
                cookies under its own cookie policy.
              </p>

              <h3 className={styles.subHeadPart}>2.4 Managing cookies</h3>
              <p>
                You can view, block or delete cookies at any time in your
                browser settings.
              </p>

              <h3 className={styles.subHeadPart}>2.5 If this changes</h3>
              <p>
                If we ever add cookies that are not strictly necessary for
                the website to work, we will update this policy and ask for
                your consent first.
              </p>
            </div>
          </section>

          {/* 3. Terms and Conditions */}
          <section id="terms" className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Terms and Conditions</h2>
            <div className={styles.sectionBody}>
              <p className={styles.updated}>
                Last updated: {LAST_UPDATED}. Governed by the laws of New
                Zealand.
              </p>

              <h3 className={styles.subHeadPart}>3.1 Accepting these terms</h3>
              <p>
                By using our website or engaging our services, you agree to
                these Terms and Conditions. If you do not agree, please do not
                use our website or services. These terms apply to all clients
                and visitors of Save Point Limited.
              </p>

              <h3 className={styles.subHeadPart}>3.2 Our services</h3>
              <p>
                Save Point Limited provides technology services, including
                business automation and AI, self-service kiosks, app and
                software development, web development, IoT (smart device)
                integration, system integration and related advice. The scope, timeline and
                deliverables for each project are agreed in writing before
                work begins.
              </p>

              <h3 className={styles.subHeadPart}>3.3 Project agreements</h3>
              <p>
                Every project is scoped individually. Before any work starts,
                we will give you a written agreement or proposal setting out
                the scope and deliverables, timeline and milestones, payment
                terms and total cost, and warranty period. No work begins
                until we have both agreed to it in writing. If these terms
                and your project agreement disagree, your project agreement
                applies.
              </p>

              <h3 className={styles.subHeadPart}>3.4 Quotes and estimates</h3>
              <p>
                Starter package prices on our website are fixed for the
                inclusions listed with each package. Hardware, third-party
                subscriptions and anything beyond those inclusions are quoted
                separately. All other prices on our website are a general
                guide only. An estimate is
                an approximate figure, not a fixed price. Your final price is
                the one confirmed in your written project agreement.
              </p>

              <h3 className={styles.subHeadPart}>3.5 Payment</h3>
              <p>
                Payment terms are set out in your project agreement. Unless it
                says otherwise, a deposit may be required before work starts,
                the remaining balance is due on completion or at agreed
                milestones, and invoices are due within 14 days. Overdue
                invoices may incur interest at the rate set out in your
                project agreement. We may pause work on accounts with overdue
                balances.
              </p>

              <h3 className={styles.subHeadPart}>3.6 Your responsibilities</h3>
              <p>
                You agree to give us accurate and complete information,
                respond to us in a reasonable time, tell us promptly about any
                changes to your requirements, and make sure you have the
                rights to any content, logos or materials you give us.
              </p>

              <h3 className={styles.subHeadPart}>3.7 Intellectual property</h3>
              <p>
                Once you have paid in full, you own the custom-built
                deliverables listed in your project agreement. We keep the
                right to reuse general methods, frameworks and code that are
                not specific to you. We may also show completed work in our
                portfolio, unless we agree otherwise.
              </p>

              <h3 className={styles.subHeadPart}>3.8 Confidentiality</h3>
              <p>
                We both agree to keep confidential any private or sensitive
                information shared during a project. We will not share your
                business information with third parties without your
                consent, except as described in our Privacy Policy.
              </p>

              <h3 className={styles.subHeadPart}>3.9 Limitation of liability</h3>
              <p>
                To the extent allowed by New Zealand law, Save Point Limited
                is not liable for any indirect or consequential loss arising
                from our services or deliverables. Our total liability for any
                claim is limited to the amount you paid us for the project
                the claim relates to.
              </p>

              <h3 className={styles.subHeadPart}>3.10 Your consumer rights</h3>
              <p>
                Nothing in these terms limits any rights you have under the
                Consumer Guarantees Act 1993 or the Fair Trading Act 1986
                that cannot legally be excluded.
              </p>

              <h3 className={styles.subHeadPart}>3.11 Ending a project</h3>
              <p>
                Either of us may end a project agreement by giving written
                notice. Work completed up to that point will be invoiced
                pro-rata. Deposits are not refundable unless Save Point ends
                the project. All deliverables that are completed and paid for
                will be handed over to you.
              </p>

              <h3 className={styles.subHeadPart}>3.12 Using our website</h3>
              <p>
                The content on this website, including text, logos and
                pixel-art images, belongs to Save Point Limited. Please do not
                copy or reuse it without our permission, or use the website in
                any way that could damage it or interfere with others using
                it.
              </p>

              <h3 className={styles.subHeadPart}>3.13 Governing law</h3>
              <p>
                These terms are governed by New Zealand law. Any disputes will
                be handled by the New Zealand courts.
              </p>

              <h3 className={styles.subHeadPart}>3.14 Changes to these terms</h3>
              <p>
                We may update these terms from time to time. The latest
                version will always be on this page. Changes do not affect
                project agreements already signed.
              </p>
            </div>
          </section>

          {/* 4. Refund and Warranty Policy */}
          <section id="refunds" className={styles.section}>
            <h2 className={styles.sectionTitle}>
              4. Refund and Warranty Policy
            </h2>
            <div className={styles.sectionBody}>
              <p className={styles.updated}>
                Last updated: {LAST_UPDATED}. Read alongside the Consumer
                Guarantees Act 1993 and the Fair Trading Act 1986.
              </p>

              <h3 className={styles.subHeadPart}>4.1 Our commitment</h3>
              <p>
                We stand behind our work. Every project comes with a warranty
                period, set out in your project agreement.
              </p>

              <h3 className={styles.subHeadPart}>4.2 Warranty periods</h3>
              <ul className={styles.list}>
                <li>
                  Automation Starter and Website Starter: 1 month from
                  delivery.
                </li>
                <li>
                  Kiosk Starter and Business Starter Bundle: 3 months from
                  delivery.
                </li>
                <li>
                  Custom projects: as set out in your project agreement, at
                  least 3 months from delivery.
                </li>
                <li>
                  Ongoing enterprise contracts: for the length of your
                  contract, at least 5 years.
                </li>
              </ul>

              <h3 className={styles.subHeadPart}>4.3 What is covered</h3>
              <p>
                During the warranty period, we will fix problems at no extra
                cost where the work was faulty when we delivered it, does not
                match the agreed specification, or was caused by our code,
                setup or installation.
              </p>

              <h3 className={styles.subHeadPart}>4.4 What is not covered</h3>
              <ul className={styles.list}>
                <li>
                  Changes made by you or others, misuse, or accidental damage.
                </li>
                <li>Faults in third-party services, software or hardware.</li>
                <li>Problems caused by changes to your other systems.</li>
                <li>New features or changes to the original scope.</li>
              </ul>

              <h3 className={styles.subHeadPart}>4.5 Refunds</h3>
              <p>
                Because our work is custom-made, refunds are considered case
                by case. We may give a full or partial refund if we cannot
                deliver the agreed scope after reasonable attempts, or if Save
                Point ends the project before it is finished. Deposits are
                generally not refundable, as they cover the initial
                consultation, planning and setup. Any refund will be paid
                within 20 working days.
              </p>

              <h3 className={styles.subHeadPart}>4.6 Your consumer rights</h3>
              <p>
                This policy does not limit your rights under New Zealand
                consumer law. If a service fails to meet a consumer guarantee,
                you are entitled to have it fixed, or for a serious failure, a
                refund.
              </p>

              <h3 className={styles.subHeadPart}>4.7 How to make a claim</h3>
              <p>
                Email <SupportEmail /> with a description of the problem and
                your project details. We will acknowledge your claim within 2
                working days and work with you to reach a fair outcome.
              </p>
            </div>
          </section>

          {/* 5. Disclaimer */}
          <section id="disclaimer" className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Disclaimer</h2>
            <div className={styles.sectionBody}>
              <p className={styles.updated}>Last updated: {LAST_UPDATED}.</p>

              <h3 className={styles.subHeadPart}>5.1 General information</h3>
              <p>
                The information on this website is for general purposes only.
                We try to keep it accurate and up to date, but we cannot
                promise it is complete or free of errors.
              </p>

              <h3 className={styles.subHeadPart}>5.2 Not professional advice</h3>
              <p>
                Nothing on this website is legal, financial or professional
                advice. Please get independent advice before making decisions
                based on it.
              </p>

              <h3 className={styles.subHeadPart}>5.3 Links to other websites</h3>
              <p>
                We link to other websites for your convenience. We do not
                control them and are not responsible for their content.
              </p>

              <h3 className={styles.subHeadPart}>
                5.4 Technology and smart devices
              </h3>
              <p>
                Our technology and smart device (IoT) solutions are built and
                tested to the agreed specification. Their performance can be
                affected by things outside our control, such as third-party
                hardware, internet connections, firmware updates and the
                environment they are used in. After the warranty period ends,
                we are not responsible for failures caused by these outside
                factors.
              </p>
            </div>
          </section>

          {/* 6. Support */}
          <section id="support" className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Support</h2>
            <div className={styles.sectionBody}>
              <p className={styles.updated}>Last updated: {LAST_UPDATED}.</p>

              <h3 className={styles.subHeadPart}>6.1 How to reach us</h3>
              <p>
                Email: <SupportEmail />
                <br />
                Phone:{" "}
                <a href="tel:+64210653792" className={styles.inlineLink}>
                  +64 21 065 3792
                </a>
                <br />
                Monday to Friday, 9:00am to 5:00pm New Zealand time, except
                public holidays.
              </p>

              <h3 className={styles.subHeadPart}>6.2 Response times</h3>
              <p>
                We aim to reply to emails and voicemails within 1 working day.
                Urgent problems during your warranty period are looked at
                within 4 working hours. These are targets, not guarantees.
              </p>

              <h3 className={styles.subHeadPart}>
                6.3 Support outside the warranty
              </h3>
              <p>
                After your warranty ends, we will quote any support work
                separately. We also offer ongoing maintenance and support
                plans. Email <SupportEmail /> to talk about options.
              </p>

              <h3 className={styles.subHeadPart}>6.4 If you are not happy</h3>
              <p>
                If your issue has not been sorted out, email <SupportEmail />{" "}
                with the subject line &ldquo;Support Escalation&rdquo;. We will
                reply within 1 working day.
              </p>
            </div>
          </section>

          <p className={styles.updated}>
            © 2026 Save Point Limited. All rights reserved.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

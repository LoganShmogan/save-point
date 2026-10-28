import Navbar from "@/app/navigation/navBar";
import Footer from "@/app/footer/footer";
import styles from "@/app/shared/page.module.css";
import PageHero from "@/app/shared/pageHero";
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd, breadcrumbJsonLd, pageMetadata } from "@/app/shared/seo";

// The Discord Developer Portal links to #terms and #privacy on this page.
export const metadata: Metadata = pageMetadata({
  title: "Discord Bot Terms & Privacy",
  description:
    "Terms of Service and Privacy Policy for the Save Point Project Hub Discord bot, governed by New Zealand law.",
  path: "/legal/discord-bot",
});

const LAST_UPDATED = "29 October 2026";

const contents = [
  { id: "terms", label: "Terms of Service" },
  { id: "privacy", label: "Privacy Policy" },
];

const SupportEmail = () => (
  <a href="mailto:support@savepoint.co.nz" className={styles.inlineLink}>
    support@savepoint.co.nz
  </a>
);

const ExternalLink = ({ href, children }: { href: string; children: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.inlineLink}
  >
    {children}
    <span className="visually-hidden"> (opens in a new tab)</span>
  </a>
);

export default function DiscordBotLegal() {
  return (
    <>
      <Navbar />
      <main id="main">
        <JsonLd
          data={breadcrumbJsonLd("Discord Bot Terms & Privacy", "/legal/discord-bot")}
        />
        <PageHero
          title="Discord Bot"
          lead="Terms of Service and Privacy Policy for the Save Point Project Hub bot."
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
            <p>
              These policies cover the bot only. For our website and services,
              see our main <Link href="/legal" className={styles.inlineLink}>legal page</Link>.
            </p>
          </nav>

          {/* 1. Terms of Service */}
          <section id="terms" className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Terms of Service</h2>
            <div className={styles.sectionBody}>
              <p className={styles.updated}>
                Last updated: {LAST_UPDATED}. Governed by the laws of New
                Zealand.
              </p>

              <h3 className={styles.subHeadPart}>1.1 About the bot</h3>
              <p>
                The Save Point Project Hub bot (&ldquo;the bot&rdquo;) is a
                Discord application run by Save Point Limited (&ldquo;we&rdquo;,
                &ldquo;us&rdquo;, &ldquo;our&rdquo;). It keeps project forum
                channels in our Discord server in sync with our GitHub
                repositories and with files our team uploads, and posts GitHub
                activity such as commits, pull requests, issues and releases.
              </p>

              <h3 className={styles.subHeadPart}>1.2 Who can use it</h3>
              <p>
                The bot is a private tool for Save Point team members and
                people we invite to work with us. It is not offered to the
                public, and it only works in Discord servers we run. By using
                the bot, you agree to these terms and to{" "}
                <ExternalLink href="https://discord.com/terms">
                  Discord&apos;s Terms of Service
                </ExternalLink>
                .
              </p>

              <h3 className={styles.subHeadPart}>1.3 Acceptable use</h3>
              <p>When you use the bot, you agree not to:</p>
              <ul className={styles.list}>
                <li>
                  upload files you do not have the right to share, or that
                  contain malware;
                </li>
                <li>
                  upload passwords, API keys or other secrets (use an example
                  file such as <code>.env.example</code> instead);
                </li>
                <li>
                  share your personal docsync token, or use someone
                  else&apos;s; or
                </li>
                <li>
                  try to disrupt the bot, get around its access controls, or
                  reach systems it connects to without permission.
                </li>
              </ul>
              <p>
                We may remove content or turn off your access if these terms
                are broken.
              </p>

              <h3 className={styles.subHeadPart}>1.4 Your content</h3>
              <p>
                You keep ownership of the files you upload. You allow us to
                store them, post them in our Discord server and replace older
                versions so the team always sees the latest copy. Work you
                create for a client project is also covered by that
                project&apos;s agreement.
              </p>

              <h3 className={styles.subHeadPart}>1.5 Availability</h3>
              <p>
                We provide the bot as is. It may be unavailable at times, for
                example during maintenance or when Discord or GitHub have
                problems. Keep your own copies of important files. GitHub stays
                the main record for anything stored in a repository.
              </p>

              <h3 className={styles.subHeadPart}>1.6 Limitation of liability</h3>
              <p>
                To the extent allowed by New Zealand law, Save Point Limited is
                not liable for any loss caused by using the bot, including lost
                or out-of-date files. Nothing in these terms limits rights you
                have under New Zealand law that cannot legally be excluded.
              </p>

              <h3 className={styles.subHeadPart}>1.7 Changes and ending use</h3>
              <p>
                We may change or stop the bot, or update these terms, at any
                time. The latest version will always be on this page. You can
                stop using the bot whenever you like.
              </p>

              <h3 className={styles.subHeadPart}>1.8 Contact</h3>
              <p>
                Questions about these terms: <SupportEmail />.
              </p>
            </div>
          </section>

          {/* 2. Privacy Policy */}
          <section id="privacy" className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Privacy Policy</h2>
            <div className={styles.sectionBody}>
              <p className={styles.updated}>
                Last updated: {LAST_UPDATED}. Governed by the New Zealand
                Privacy Act 2020.
              </p>

              <h3 className={styles.subHeadPart}>2.1 What the bot collects</h3>
              <p>The bot only collects what it needs to work:</p>
              <ul className={styles.list}>
                <li>
                  <strong>Your Discord user ID, display name and roles</strong>,
                  when you use one of its commands. Roles are checked so only
                  team members can use it, and your display name shows who
                  uploaded or updated a file.
                </li>
                <li>
                  <strong>Files you upload</strong> with <code>/upload</code>{" "}
                  or the docsync tool, and a fingerprint (hash) of each file
                  so we can tell whether it has changed.
                </li>
                <li>
                  <strong>A docsync token</strong>, if you create one with{" "}
                  <code>/token</code>. We only store a scrambled (hashed)
                  copy, linked to your Discord user ID and display name.
                </li>
                <li>
                  <strong>GitHub content</strong> from the repositories we
                  connect, such as documentation files, commit messages,
                  usernames and pull request, issue and release titles.
                </li>
                <li>
                  <strong>Basic server logs</strong>, such as errors and the
                  names of files synced, used to keep the bot running.
                </li>
              </ul>
              <p>
                The bot does not read your messages. It does not request
                Discord&apos;s message content access, and it ignores chat in
                our channels.
              </p>

              <h3 className={styles.subHeadPart}>2.2 How we use it</h3>
              <p>
                We use this information only to run the bot: posting and
                updating files, showing who changed what, controlling access
                and fixing problems. We never sell it or use it for
                advertising.
              </p>

              <h3 className={styles.subHeadPart}>2.3 Where it is stored</h3>
              <p>
                The bot&apos;s records (file fingerprints, versions, post links
                and hashed tokens) are stored on a server run by Save Point in
                New Zealand. That server is only reachable over our private
                network. Files and activity posted by the bot are stored by
                Discord, and repository content is stored by GitHub. Both are
                based in the United States, and their own privacy policies also
                apply:{" "}
                <ExternalLink href="https://discord.com/privacy">
                  Discord Privacy Policy
                </ExternalLink>{" "}
                and{" "}
                <ExternalLink href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement">
                  GitHub Privacy Statement
                </ExternalLink>
                .
              </p>

              <h3 className={styles.subHeadPart}>2.4 How long we keep it</h3>
              <p>
                File records are kept while the project is active in our
                Discord server. Your docsync token is kept until you create a
                new one or ask us to remove it. Server logs are size-limited
                and older entries are deleted automatically.
              </p>

              <h3 className={styles.subHeadPart}>2.5 Your rights</h3>
              <p>
                You can ask to see the information the bot holds about you, ask
                us to correct it, or ask us to delete it. Email <SupportEmail />{" "}
                and we will respond within 20 working days. You can delete your
                own messages and posts in Discord at any time.
              </p>

              <h3 className={styles.subHeadPart}>2.6 Keeping it safe</h3>
              <p>
                Only Save Point staff who look after the bot can access its
                server. Tokens are never stored in plain text. If a privacy
                breach happens that has caused, or is likely to cause, serious
                harm, we will tell you and the Office of the Privacy
                Commissioner as soon as practicable.
              </p>

              <h3 className={styles.subHeadPart}>2.7 Children</h3>
              <p>
                The bot is for our team and the people we work with. It is not
                intended for anyone under 16.
              </p>

              <h3 className={styles.subHeadPart}>2.8 Questions or complaints</h3>
              <p>
                Contact our privacy officer at <SupportEmail />. If you are not
                happy with our response, you can contact the Office of the
                Privacy Commissioner at{" "}
                <ExternalLink href="https://www.privacy.org.nz">
                  www.privacy.org.nz
                </ExternalLink>
                .
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

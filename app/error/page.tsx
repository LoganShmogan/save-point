import Image from "next/image";
import Link from "next/link";
import styles from "@/app/shared/page.module.css";
import buttons from "@/app/shared/button.module.css";
import Navbar from "@/app/navigation/navBar";
import Footer from "@/app/footer/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Under Construction",
  robots: {
    index: false,
    follow: false,
  },
};

// Page dedicatied under contruction or when site is down etc
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className={styles.message}>
        <div className={styles.messageArt}>
          <Image
            src="/ads/Hourglass (1250 x 1250).png"
            width={140}
            height={140}
            alt="Pixel-art hourglass"
          />
        </div>
        <h1 className={styles.messageTitle}>This page is being built.</h1>
        <p>
          We&apos;re still working on this part of the site. In the meantime,
          you can head back home or get in touch with us directly.
        </p>
        <div className={styles.messageActions}>
          <Link href="/" className={buttons.buttonDark}>
            Back to home
          </Link>
          <Link href="/contact" className={buttons.button}>
            Contact us
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

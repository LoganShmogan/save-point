import Image from "next/image";
import Link from "next/link";
import styles from "@/app/shared/page.module.css";
import buttons from "@/app/shared/button.module.css";
import Navbar from "@/app/navigation/navBar";
import Footer from "@/app/footer/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main" className={styles.message}>
        <div className={styles.messageArt}>
          <Image src="/logo-flag.png" width={600} height={743} alt="Pixel-art purple flag from the Save Point logo" />
        </div>
        <h1 className={styles.messageTitle}>
          Sorry, we can&apos;t find that page.
        </h1>
        <p>
          The link may be out of date, or the page may have moved. Try one of
          these instead:
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

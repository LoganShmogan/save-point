import Image from "next/image";
import styles from "@/app/error/page.module.css";
import Navbar from "@/app/navigation/navBar";
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
    <main>
      <Navbar />
      <div className={styles.page}>
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            width={470.7525}
            height={91.51}
            alt="Save Point Logo"
          />
        </div>
        <div className={styles.construct}>
          <h1 className={styles.textMain}>Page not found.</h1>
        </div>
      </div>
    </main>
  );
}

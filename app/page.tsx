import Image from "next/image";
import styles from "@/app/page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.logo}>
      <Image
        src="/logo.png"
        width={470.7525}
        height={91.51}
        alt="Save Point Logo"
      />
      </div>
      <div className={styles.construct}>
        <h1 className={styles.textMain}>Page is under contruction.</h1>
        <p className={styles.textSub}>Come back on the 01/04/2026.</p>
      </div>
    </main>
  );
}

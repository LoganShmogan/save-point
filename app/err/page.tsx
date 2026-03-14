import Image from "next/image";
import styles from "@/app/err/page.module.css";
// Page dedicatied under contruction or when site is down etc 
export default function Home() {
  return (
    <main>
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
          <h1 className={styles.textMain}>Page is under contruction.</h1>
        </div>
      </div>
    </main>
  );
}

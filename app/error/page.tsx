import Image from "next/image";
import styles from "@/app/error/page.module.css";
import Navbar from "@/app/navigation/navBar";
// Page dedicatied under contruction or when site is down etc
export default function Home() {
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
          <h1 className={styles.textMain}>Page is under construction.</h1>
        </div>
      </div>
    </main>
  );
}

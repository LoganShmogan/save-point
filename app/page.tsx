import Image from "next/image";
import styles from "@/app/error/page.module.css";
import Navbar from "@/app/navigation/navBar";
import Link from "next/link";

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
          <h1 className={styles.textMain}>
            Page is currently under construction.
          </h1>
          <h1>
            All content might not be complete, correct or working at this point.
          </h1>
          <Link href="/home">
            <u>Continue</u>
          </Link>
        </div>
      </div>
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/app/navigation/navBar.module.css";
import buttons from "@/app/shared/button.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className={styles.outer}>
      <nav className={styles.container} aria-label="Main">
        <Link href="/" className={styles.brand}>
          <Image
            src="/logo-wordmark.png"
            width={1400}
            height={272}
            alt="Save Point home"
            priority
          />
        </Link>
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={styles.link}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className={`${buttons.button} ${styles.cta}`}
          aria-current={pathname === "/contact" ? "page" : undefined}
        >
          Contact us
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

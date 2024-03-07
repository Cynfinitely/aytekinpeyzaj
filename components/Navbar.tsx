import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <button onClick={handleClick} className={styles.navbar__button}>
        <img src="/hamburger.png" alt="Menu" />
      </button>
      <div className={`${styles.navbar__menu} ${isOpen ? styles.open : ""}`}>
        <Link href="/" className={styles.navbar__link}>
          Anasayfa
        </Link>
        <Link href="/about" className={styles.navbar__link}>
          Hakkımızda
        </Link>
        <Link href="/productsPage" className={styles.navbar__link}>
          Ürünler
        </Link>
        <Link href="/blog" className={styles.navbar__link}>
          Blog
        </Link>
        <Link href="/contact" className={styles.navbar__link}>
          Bize Ulaşın
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

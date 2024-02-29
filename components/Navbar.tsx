import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navbar__link}>
        Anasayfa
      </Link>
      <Link href="/about" className={styles.navbar__link}>
        Hakkımızda
      </Link>
      <Link href="/productsPage" className={styles.navbar__link}>
        Ürünler
      </Link>
      <Link href="/contact" className={styles.navbar__link}>
        Bize Ulaşın
      </Link>
    </nav>
  );
};

export default Navbar;

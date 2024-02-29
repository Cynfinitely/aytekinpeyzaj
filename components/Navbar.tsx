import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Implement your search functionality here
    console.log(`Searching for "${searchTerm}"`);
  };

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
      <form onSubmit={handleSearchSubmit} className={styles.navbar__search}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className={styles.navbar__searchInput}
          placeholder="Search..."
        />
        <button type="submit" className={styles.navbar__searchButton}>
          Search
        </button>
      </form>
    </nav>
  );
};

export default Navbar;

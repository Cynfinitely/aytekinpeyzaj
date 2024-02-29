import Image from "next/image";
import styles from "../styles/Header.module.scss";
import logo from "../public/logo.png";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Image src={logo} alt="" width="38" height="38" />
        <h1 className={styles.header__title}>Aytekin Peyzaj</h1>
      </div>
      <Navbar />
    </header>
  );
}

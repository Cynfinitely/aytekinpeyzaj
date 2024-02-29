import Link from "next/link";
import styles from "../styles/Contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h2 className={styles.contact__title}>
        Sorunuz var mı? <span className={styles.colored}>Bize Ulaşın.</span>
      </h2>
      <p className={styles.contact__paragraph}>
        Ürünler hakkında soru sormak ve ürünleri satın almak için butona
        tıklayınız.
      </p>
      <Link href="/contact">
        <button>Bize ulaşın.</button>
      </Link>
    </div>
  );
}

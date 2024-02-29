import React from "react";
import Image from "next/image";
import styles from "../styles/Contact.module.scss";

const contact = () => {
  return (
    <div className={styles.contact}>
      <h1>Bize bu numaralardan ulaşabilirsiniz:</h1>
      <div className={styles.contact__groups}>
        <Image src="/whatsapp.png" alt="phone" width={50} height={50} />
        <p>+90 551 849 45 24</p>
      </div>

      <div className={styles.contact__groups}>
        <Image src="/whatsapp.png" alt="phone" width={50} height={50} />
        <p>+90 539 339 63 04</p>
      </div>
    </div>
  );
};

export default contact;

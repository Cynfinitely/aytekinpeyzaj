import React from "react";
import Image from "next/image";
import styles from "../styles/Contact.module.scss";

const contact = () => {
  return (
    <div className={styles.contact}>
      <h1>Bize bu numaralardan whatsapp aracılığıyla ulaşabilirsiniz:</h1>
      <div className={styles.contact__groups}>
        <Image src="/whatsapp.png" alt="phone" width={50} height={50} />
        <p>
          <a href="https://wa.me/+905393396304">+90 539 339 63 04</a>
        </p>
      </div>

      <div className={styles.contact__groups}>
        <Image src="/whatsapp.png" alt="phone" width={50} height={50} />
        <p>
          <a href="https://wa.me/+905518494524">+90 551 849 45 24 </a>
        </p>
      </div>
    </div>
  );
};

export default contact;

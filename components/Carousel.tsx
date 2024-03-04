import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Carousel.module.scss";
import { CarouselProps } from "../interfaces";

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % items.length);
  };

  const handlePrevious = () => {
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  };

  return (
    <div className={styles.carousel}>
      <button onClick={handlePrevious} className={styles.carousel__button}>
        <img src="/left-arrow.png" alt="Previous" />
      </button>
      <div className={styles.carousel__items}>
        <div className={styles.carousel__item}>
          <Image
            src={items[(activeIndex + items.length - 1) % items.length]}
            alt="Carousel item"
            width={500}
            height={500}
          />
        </div>
        <div className={styles.carousel__item}>
          <Image
            src={items[activeIndex]}
            alt="Carousel item"
            width={500}
            height={500}
          />
        </div>
        <div className={styles.carousel__item}>
          <Image
            src={items[(activeIndex + 1) % items.length]}
            alt="Carousel item"
            width={500}
            height={500}
          />
        </div>
      </div>
      <button onClick={handleNext} className={styles.carousel__button}>
        <img src="/right-arrow.png" alt="Next" />
      </button>
    </div>
  );
};

export default Carousel;

import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Carousel.module.scss";
import { CarouselPropsWithItemsShown } from "../interfaces";

const Carousel: React.FC<CarouselPropsWithItemsShown> = ({
  items,
  itemsShown,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % items.length);
  };

  const handlePrevious = () => {
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  };

  const generateItems = () => {
    let carouselItems = [];
    for (let i = 0; i < itemsShown; i++) {
      carouselItems.push(
        <div
          className={styles.carousel__item}
          style={{ flex: `0 0 ${100 / itemsShown}%` }}
          key={i}
        >
          <div className={styles.carousel__image}>
            <Image
              src={items[(activeIndex + i) % items.length]}
              alt="Carousel item"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        </div>
      );
    }
    return carouselItems;
  };

  return (
    <div className={styles.carousel}>
      <button onClick={handlePrevious} className={styles.carousel__button}>
        <img src="/left-arrow.png" alt="Previous" />
      </button>
      <div className={styles.carousel__items}>{generateItems()}</div>
      <button onClick={handleNext} className={styles.carousel__button}>
        <img src="/right-arrow.png" alt="Next" />
      </button>
    </div>
  );
};

export default Carousel;
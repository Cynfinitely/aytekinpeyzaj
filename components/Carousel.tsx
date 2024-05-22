import { useState } from "react";
import Image from "next/image";

const Carousel = ({ items, itemsShown }) => {
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
          className="m-0 p-2 flex justify-center items-center relative h-[50vh]"
          style={{ flex: `0 0 ${100 / itemsShown}%` }}
          key={i}
        >
          <div className="absolute top-0 left-0 w-full h-full">
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
    <div className="flex items-center justify-center w-full p-12">
      <button onClick={handlePrevious} className="p-2 m-4 bg-transparent border-none">
        <img src="/left-arrow.png" alt="Previous" width="15px" height="15px" />
      </button>
      <div className="flex justify-between overflow-hidden w-full p-4">{generateItems()}</div>
      <button onClick={handleNext} className="p-2 m-4 bg-transparent border-none">
        <img src="/right-arrow.png" alt="Next" width="15px" height="15px" />
      </button>
    </div>
  );
};

export default Carousel;
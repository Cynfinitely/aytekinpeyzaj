import React from "react";
import styles from "../styles/ProductShowcase.module.scss";
import Carousel from "./Carousel";
import { carouselProducts } from "../data/carousel";

const ProductShowcase = () => {
  return (
    <div className={styles.productList}>
      <h1>Ürünlerimiz</h1>
      <div className={styles.productContainer}>
        <Carousel items={carouselProducts} itemsShown={3} />
      </div>
    </div>
  );
};

export default ProductShowcase;

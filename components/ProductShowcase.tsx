import React from "react";
import Image from "next/image";
import { IProductListProps } from "../interfaces";
import styles from "../styles/ProductShowcase.module.scss";

const ProductShowcase: React.FC<IProductListProps> = ({ products }) => {
  return (
    <div className={styles.productList}>
      <h1>Ürünlerimiz</h1>
      <div className={styles.productContainer}>
        {products.map((product) => (
          <div key={product.id} className={styles.productItem}>
            <Image src={product.image} alt={product.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;

import Image from "next/image";
import styles from "../styles/Product.module.scss";
import { IProductProps } from "../interfaces";

const Product = (props: IProductProps) => {
  if (!props.product) {
    return null;
  }

  return (
    <div className={styles.product}>
      <h2 className={styles.product__title}>{props.product.name}</h2>
      <p className={styles.product__description}>{props.product.description}</p>
      <div className={styles.product__image}>
        <Image
          src={props.product.image}
          alt={props.product.image.src}
          width={500}
          height={500}
        />
      </div>
      <div className="product__liter-button-container">
        <div className={styles.product__liter}>{props.product.liter}L</div>
      </div>
    </div>
  );
};

export default Product;

import Image from "next/image";
import styles from "../styles/Product.module.scss";
import { IProductProps } from "../interfaces";

const Product = (props: IProductProps) => {
  if (!props.product) {
    return null;
  }

  return (
    <div className={styles.product}>
      <div className={styles.product__image}>
        <Image
          src={props.product.image}
          alt={props.product.image.src}
          width={327}
          height={420}
        />
      </div>
      <div className={styles.product__text}>
        <h1 className={styles.product__text__title}>{props.product.name}</h1>
        <h2 className={styles.product__text__liter}>
          {props.product.liter.join("L / ")}L
        </h2>
        <p className={styles.product__text__description}>
          {props.product.description}
        </p>
        <p className={styles.product__text__price}>
          {" "}
          {props.product.liter.join(" TL / ")} TL
        </p>
      </div>
    </div>
  );
};

export default Product;

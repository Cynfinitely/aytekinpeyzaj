import { IProductListProps } from "../interfaces";
import Product from "./Product";
import styles from "../styles/ProductList.module.scss";

const ProductList = (props: IProductListProps) => {
  return (
    <div className={styles.products}>
      <h1>Ürünler</h1>
      {props.products.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </div>
  );
};

export default ProductList;

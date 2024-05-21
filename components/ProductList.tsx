import { IProductListProps } from "../interfaces";
import Product from "./Product";

const ProductList = (props: IProductListProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 pt-8">
      <h1>Ürünler</h1>
      {props.products.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </div>
  );
};

export default ProductList;
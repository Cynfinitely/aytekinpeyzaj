import React from "react";
import { IProductListProps } from "../interfaces";
import ProductList from "../components/ProductList";
import { GetStaticProps } from "next";
import { products } from "../data/products";

const ProductsPage = ({ products }: IProductListProps) => {
  return <ProductList products={products} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      products,
    },
  };
};

export default ProductsPage;

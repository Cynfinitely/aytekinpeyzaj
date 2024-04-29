import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { GetStaticProps } from "next";
import getProducts from "../API/products";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return <ProductList products={products} />;
};

export default ProductsPage;

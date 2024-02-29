import ProductList from "../components/ProductList";
import Contact from "../components/Contact";
import Head from "next/head";
import { GetStaticProps } from "next";
import Jumbotron from "../components/Jumbotron";
import { products } from "../data/products";
import { IProductListProps } from "../interfaces";

export default function Home({ products }: IProductListProps) {
  return (
    <>
      <Head>
        <title>Aytekin Peyzaj</title>
        <link rel="shortcut icon" href="../public/favicon.ico" />
      </Head>
      <main className="main">
        <Jumbotron />
        <ProductList products={products} />
        <Contact />
      </main>
      <div
        hidden
        id="snipcart"
        data-api-key="OWNlZTNlYmItZTU5OS00MmI4LThjOTAtMjY0NzAyYmI2ODAxNjM3NjIyMjY3MDMxMTIzMzUx
"
      ></div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      products,
    },
  };
};

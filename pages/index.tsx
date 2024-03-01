import Jumbotron from "../components/Jumbotron";
import InfoBanner from "../components/InfoBanner";
import ProductShowcase from "../components/ProductShowcase";
import { GetStaticProps } from "next";
import { products } from "../data/products";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <main className="main">
        <div className={styles.scallopUp}></div>
        <div className={styles.whiteBlock}>
          <Jumbotron />
        </div>
        <div className={styles.scallopDown}></div>
        <div className={styles.colourBlock}>
          <ProductShowcase products={products} />
        </div>
        <InfoBanner />
      </main>
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

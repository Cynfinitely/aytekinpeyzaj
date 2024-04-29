import Jumbotron from "../components/Jumbotron";
import InfoBanner from "../components/InfoBanner";
import ProductShowcase from "../components/ProductShowcase";
import styles from "../styles/Home.module.scss";
import Intro from "../components/Intro";
import { useEffect, useState } from "react";
import getProducts from "../API/products";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <>
      <div>
        <div className={styles.whiteBlock}>
          <Intro />
        </div>
        <div className={styles.colourBlock}>
          <ProductShowcase products={products} />
        </div>
        <div className={styles.whiteBlock}>
          <Jumbotron />
        </div>
        <InfoBanner />
      </div>
    </>
  );
}

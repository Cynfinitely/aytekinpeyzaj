import Jumbotron from "../components/Jumbotron";
import InfoBanner from "../components/InfoBanner";
import ProductShowcase from "../components/ProductShowcase";
import styles from "../styles/Home.module.scss";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <>
      <div>
        <div className={styles.whiteBlock}>
          <Intro />
        </div>
        <div className={styles.colourBlock}>
          <ProductShowcase />
        </div>
        <div className={styles.whiteBlock}>
          <Jumbotron />
        </div>
        <InfoBanner />
      </div>
    </>
  );
}

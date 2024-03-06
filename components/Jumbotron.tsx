import { flyers } from "../data/carousel";
import styles from "../styles/Jumbotron.module.scss";
import Carousel from "./Carousel";

const Jumbotron = () => {
  return (
    <>
      <Carousel items={flyers} itemsShown={1}/>
      <div className={styles.promotional}>
        <em>
          <h3>
            Toprağa hayat,<strong>hayata değer</strong> katar.
          </h3>
        </em>
      </div>
    </>
  );
};
export default Jumbotron;

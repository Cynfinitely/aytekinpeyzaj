import styles from "../styles/Jumbotron.module.scss";
import Carousel from "./Carousel";

const Jumbotron = () => {
  return (
    <>
      <Carousel />
      <div className={styles.promotional}>
        <em>
          Toprağa hayat,<strong>hayata değer</strong> katar.
        </em>
      </div>
    </>
  );
};
export default Jumbotron;

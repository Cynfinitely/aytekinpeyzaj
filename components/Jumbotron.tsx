import { flyers } from "../data/carousel";
import Carousel from "./Carousel";

const Jumbotron = () => {
  return (
    <>
      <Carousel items={flyers} itemsShown={1} />
    </>
  );
};
export default Jumbotron;

import Image from "next/image";
import ladybug from "../public/ladybug.svg";

const Jumbotron = () => {
  return (
    <>
      <div className="background-image">
        <Image src={ladybug} alt={ladybug} />
      </div>
      <div className="promotional-message">
        <h3>REDISCOVER</h3>
        <h2>Aytekin Peyzaj</h2>
        <p>
          An <strong>exclusive collection of bettas</strong> available for
          everyone.
        </p>
      </div>
    </>
  );
};
export default Jumbotron;

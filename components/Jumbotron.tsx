import Image from "next/image";
import ladybug from "../public/ladybug.svg";

const Jumbotron = () => {
  return (
    <>
      <div className="background-image">
        <Image src={ladybug} alt={ladybug} />
      </div>
      <div className="promotional-message">
        <h2>Aytekin Peyzaj</h2>
        <p>
          Toprağa hayat,<strong>hayata değer</strong> katar.
        </p>
      </div>
    </>
  );
};
export default Jumbotron;

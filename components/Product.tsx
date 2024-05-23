import Image from "next/image";

const Product = (props) => {
  if (!props.product) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 grid-rows-auto gap-5 mb-5 border-2 border-red-500 bg-gradient-to-r from-red-200 to-red-100 rounded-lg shadow-lg">
      <div className="grid-area-image w-full h-auto">
        <Image
          src={props.product.image}
          alt="product"
          width={327}
          height={420}
        />
      </div>
      <div className="grid-area-text flex flex-col justify-center items-start">
        <h1 className="text-3xl mb-2">{props.product.name}</h1>
        <h2 className="text-xl mb-2">{props.product.liter}L</h2>
        <p className="mb-2">{props.product.description}</p>
        <p className="text-xl text-red-500"> {props.product.price} TL</p>
      </div>
    </div>
  );
};

export default Product;
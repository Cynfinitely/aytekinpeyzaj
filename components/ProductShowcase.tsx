import React from "react";
import logo from "../public/logo.png";
import Image from "next/image";
import { IProductListProps } from "../interfaces";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";

const ProductShowcase = (props: IProductListProps) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex items-center justify-center">
        <Image
          src={logo}
          alt="Logo"
          className="w-6 sm:w-10 md:w-12 lg:w-16 xl:w-20"
        />
        <h3 className="xl:text-6xl  font-bold text-center"> Ürünlerimiz</h3>
        <Image
          src={logo}
          alt="Logo"
          className="w-6 sm:w-10 md:w-12 lg:w-16 xl:w-20"
        />
      </div>
      <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
        <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">
          {props.products.map((product, index) => (
            <section className="grid grid-rows-1 h-full p-5 py-10 bg-purple-50 text-black text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
              <div>
                <img src={product.image} alt="" />
                <h1 className="text-3xl my-5">{product.name}</h1>
                <p className="mb-5">{product.description}</p>
              </div>
              <div>
                <h2 className="font-semibold mb-5">{product.liter}L</h2>
                <h2 className="font-semibold mb-5">{product.price} TL</h2>
              </div>
              <div>
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600"
                >
                  Sepete Ekle
                </button>
              </div>
            </section>
          ))}
        </section>
      </section>
    </div>
  );
};

export default ProductShowcase;

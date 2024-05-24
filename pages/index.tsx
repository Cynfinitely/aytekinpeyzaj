import Jumbotron from "../components/Jumbotron";
import InfoBanner from "../components/InfoBanner";
import ProductShowcase from "../components/ProductShowcase";
import Intro from "../components/Intro";
import { useEffect, useState } from "react";
import getProducts from "../API/products";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { setUser, signIn } from "../redux/features/authSlice";
import { AppDispatch } from "../redux/store";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ uid: user.uid, email: user.email }));
      }
    });

    // Cleanup function to unsubscribe from the listener when the component is unmounted
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
      <div>
        <div className="bg-flowers bg-no-repeat bg-center bg-cover bg-fixed w-full p-4 text-green-700 border-black border-t-5 border-r-5 border-b-5">
          <Intro />
        </div>
        <div className="bg-soil bg-no-repeat bg-center bg-cover bg-fixed w-full p-4 text-white">
          <ProductShowcase products={products} />
        </div>
        <div className="bg-flowers bg-no-repeat bg-center bg-cover bg-fixed w-full p-4 text-green-700 border-black border-t-5 border-r-5 border-b-5">
          <Jumbotron />
        </div>
        <InfoBanner />
      </div>
    </>
  );
}
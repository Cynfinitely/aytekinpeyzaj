import Link from "next/link";
import { useState } from "react";
import Cart from "./Cart";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../redux/features/authSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch: AppDispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  const username = user?.email.split("@")[0];

  return (
    <nav className="flex justify-evenly md:justify-between  border-black border-4  items-center p-4 bg-[#dabfb8] text-dark font-bold ">
      <button onClick={handleClick} className="md:hidden">
        <img
          src="/hamburger.png"
          alt="Menu"
          className="w-6 h-6 bg-transparent"
        />
      </button>
      <div
        className={`flex flex-col md:flex-row justify-between p-4 flex-wrap ${
          isOpen ? "flex" : "hidden"
        } md:flex`}
      >
        <Link href="/" className="mr-4  flex-auto">
          Anasayfa
        </Link>
        <Link href="/about" className="mr-4  flex-auto">
          Hakkımızda
        </Link>
        <Link href="/productsPage" className="mr-4  flex-auto">
          Ürünler
        </Link>
        <Link href="/blog" className="mr-4  flex-auto">
          Blog
        </Link>
        <Link href="/contact" className="mr-4  flex-auto">
          Bize Ulaşın
        </Link>
      </div>
      {user ? (
        <div className="flex  justify-center items-center gap-7">
          <div className="flex justify-center items-center">
            <p className="hidden md:block">Hoşgeldiniz, {username}</p>
            <Cart />
          </div>

          <button
            onClick={handleSignOut}
            className="py-2.5 px-6 rounded-lg text-sm font-medium bg-teal-200 text-teal-800"
          >
            Çıkış Yap
          </button>
        </div>
      ) : (
        <div className="flex gap-4">
          <Link href="/signIn">
            <button className="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-teal-400">
              Giriş Yap
            </button>
          </Link>

          <Link href="/signUp">
            <button className="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-teal-500">
              Kayıt Ol
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

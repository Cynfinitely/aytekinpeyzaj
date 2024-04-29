import Image from "next/image";
import styles from "../styles/Header.module.scss";
import logo from "../public/logo.png";
import Navbar from "./Navbar";
import Cart from "./Cart";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { signOut } from "../redux/features/authSlice";

export default function Header() {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch: AppDispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  const username = user?.email.split("@")[0];

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Image src={logo} alt="" width="56" height="56" />
        <h1 className={styles.header__title}>
          Aytekin <br /> Peyzaj
        </h1>
      </div>
      <Navbar />
      {user ? (
        <>
          <div className="flex justify-center items-center gap-7">
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
        </>
      ) : (
        <div className="flex gap-4">
          <button>
            <Link href="/signIn">
              <button className="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-teal-400">
                Giriş Yap
              </button>
            </Link>
          </button>
          <button>
            <Link href="/signUp">
              <button className="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-teal-500">
                Kayıt Ol
              </button>
            </Link>
          </button>
        </div>
      )}
    </header>
  );
}

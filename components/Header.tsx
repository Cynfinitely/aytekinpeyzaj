import Image from "next/image";
import logo from "../public/logo.png";

export default function Header() {
  return (
    <header className="w-full flex items-center py-6 bg-primary text-white bg-bottom bg-repeat-x bg-vectorGrass relative">
      <div className="absolute left-4 hidden md:block">
        <p>SİPARİŞ İÇİN</p>
        <p className="font-bold  text-2xl">+90 539 339 63 04</p>
      </div>

      <div className="flex w-full items-center justify-center">
        <h1 className="p-0 text-4xl md:text-6xl font-bold text-bold m-0 ml-1 flex items-center">
          Aytekin <Image src={logo} alt="" width="56" height="56" /> Peyzaj
        </h1>
      </div>
    </header>
  );
}
import React from "react";
import Image from "next/image";

const contact = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-6">
      <h1>Bize bu numaralardan whatsapp aracılığıyla ulaşabilirsiniz:</h1>
      <div className="flex justify-evenly items-center w-1/2 gap-12">
        <Image src="/whatsapp.png" alt="phone" width={50} height={50} />
        <p className="font-bold text-4xl">
          <a href="https://wa.me/+905393396304"> +90 539 339 63 04</a>
        </p>
      </div>

      <div className="flex justify-evenly items-center w-1/2 gap-12">
        <Image src="/whatsapp.png" alt="phone" width={50} height={50} />
        <p className="font-bold text-4xl">
          <a href="https://wa.me/+905518494524"> +90 551 849 45 24 </a>
        </p>
      </div>
    </div>
  );
};

export default contact;

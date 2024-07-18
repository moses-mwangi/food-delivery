import Image from "next/image";
import React from "react";
import chef from "../../public/images/image.png";
import delivery from "../../public/images/image copy.png";
import member from "../../public/images/image copy 2.png";
import handshake from "../../public/images/image copy 3.png";
import Link from "next/link";

export default function Partner() {
  return (
    <div className="flex flex-col gap-14 items-center mt-12 mb-28 px-28">
      <Image src={handshake} alt="lets be members" />
      <h1 className="text-4xl font-semibold">Let’s do it together</h1>
      <div className="flex justify-between">
        <div className="flex flex-col gap-5 items-center">
          <Image src={delivery} alt="lets be members" />
          <h1 className="text-2xl font-semibold">Become a rider</h1>
          <p className="text-gray-800">
            Enjoy flexibility and competitive earnings by delivering orders
          </p>
          <Link
            href="#"
            className="text-[18px font-medium text-gray-200 bg-teal-500 mt-7 px-4 py-3 rounded-full"
          >
            Register here
          </Link>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <Image src={chef} alt="lets be members" />
          <h1 className="text-2xl font-semibold">Become a partner</h1>
          <p className="text-gray-800">
            Our technology and user base can help you boost sales and unlock new
            opportunitie
          </p>
          <Link
            href="#"
            className="text-[18px font-medium text-gray-200 bg-teal-500 mt-7 px-4 py-3 rounded-full"
          >
            Register here
          </Link>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <Image src={member} alt="lets be members" />
          <h1 className="text-2xl font-semibold">Careers</h1>
          <p className="text-gray-800">
            If you’re ambitious, humble, and love working with others, then we
            want to hear from you!
          </p>
          <Link
            href="#"
            className="text-[18px font-medium text-gray-200 bg-teal-500 mt-7 px-4 py-3 rounded-full"
          >
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
}

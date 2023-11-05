"use client";

import Image from "next/image";
import SignUp from "./components/SignUp";
import image from "public/home.jpg";

export default function Home() {
  return (
    <>
      <div className="flex items-center mt-32">
        <div className="mx-auto">
          <Image src={image} className="h-72 w-auto mb-6" />
          <h1 className="text-center text-4xl font-semibold pb-8">Modulearn</h1>
          <SignUp />
        </div>
      </div>
    </>
  );
}

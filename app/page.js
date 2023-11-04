"use client";

import Image from "next/image";
import SignUp from "./components/SignUp";
import image from "public/home.jpg";

export default function Home() {
  return (
    <>
      <div className="flex items-center h-screen">
        <div className="mx-auto">
          <Image src={image} className="h-72 w-auto mb-8" />
          <h1 className="text-center text-4xl font-semibold pb-6">Modulearn</h1>
          <SignUp />
        </div>
      </div>
    </>
  );
}

"use client";

import Image from "next/image";
import SignUp from "./components/SignUp";

export default function Home() {
  return (
    <>
      <div className="flex items-center h-screen">
        <div className="mx-auto">
          <h1 className="text-center text-4xl font-semibold pb-6">Modulearn</h1>
          <SignUp />
        </div>
      </div>
    </>
  );
}

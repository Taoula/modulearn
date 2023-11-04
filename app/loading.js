"use client";
import Image from "next/image";
import circles from "public/spinning-circles.svg";

export default function Loading() {
  return (
    <>
      <div className="w-full flex h-screen items-center">
        <Image src={circles} className="mx-auto" />
      </div>
    </>
  );
}

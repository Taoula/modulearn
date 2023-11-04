"use client";
import Image from "next/image";
import circles from "public/spinning-circles.svg";

export default function Loading() {
  return (
    <>
      <div className="w-full flex h-96">
        <Image src={circles} className="mx-auto" />
      </div>
    </>
  );
}

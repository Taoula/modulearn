"use client";
import Image from "next/image";
import dots from "public/three-dots.svg";

export default function Loading() {
  return (
    <>
      <Image src={dots} />
    </>
  );
}

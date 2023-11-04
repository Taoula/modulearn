"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useFirebase";

export default function Page() {
  const { signOut } = useAuth();
  const router = useRouter();

  const logOut = async function () {
    await signOut().then(() => {
      router.push("/");
    });
  };
  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={logOut}>Sign Out</button>
    </>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useFirebase";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export default function Page() {
  const { signOut } = useAuth();
  const router = useRouter();
  const [createPanelOpen, setCreatePanelOpen] = useState(false);

  const logOut = async function () {
    await signOut().then(() => {
      router.push("/");
    });
  };
  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={logOut}>Sign Out</button>
      <PlusCircleIcon
        className="h-5 w-5"
        onClick={() => setCreatePanelOpen((prev) => !prev)}
      />
      {createPanelOpen && (
        <div>
          <button>New Lesson</button>
          <button>New Roadmap</button>
        </div>
      )}
    </>
  );
}

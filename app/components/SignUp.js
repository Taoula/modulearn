"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useFirebase";

export default function SignUp() {
  const { signInWithPopup } = useAuth();

  const router = useRouter();

  const signIn = function () {
    signInWithPopup().then(() => {
      router.push("/dashboard");
    });
  };
  return (
    <div>
      <button onClick={signIn}>Sign In With Google</button>
    </div>
  );
}

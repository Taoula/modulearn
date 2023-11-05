"use client";

import Lesson from "@/app/components/Lesson";
import { useCollection, useDoc } from "@/app/hooks/useFirebase";
import { useEffect } from "react";

export default function Page() {
  const { data: userData } = useDoc("");

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  console.log(userData);
  return (
    <div className="mt-12">
      <ul
        role="list"
        className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2"
      >
        {userData &&
          userData?.lessons?.map((lesson) => {
            return <Lesson lesson={lesson} key={lesson.id} />;
          })}
      </ul>
    </div>
  );
}

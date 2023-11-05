"use client";

import Lesson from "@/app/components/Lesson";
import { useCollection } from "@/app/hooks/useFirebase";
import { useEffect } from "react";

export default function Page() {
  const { data } = useCollection("lessons");

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <div>
        {data &&
          data.map((lesson) => {
            return <Lesson lessonData={lesson} />;
          })}
      </div>
    </>
  );
}

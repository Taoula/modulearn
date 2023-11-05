"use client";

import LessonPage from "@/app/components/LessonPage";
import { useDoc } from "@/app/hooks/useFirebase";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const lessonId = searchParams.get("lessonId");
  const { data } = useDoc(`lessons/${lessonId}`);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <div className="flex flex-col items-center gap-20">
        <h1 className="text-3xl font-bold">{data?.title}</h1>
        <div className="flex justify-between items-center">
          {index != 0 && (
            <div className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 duration-150 h-fit w-fit hover:cursor-pointer hover:scale-110">
              <ChevronLeftIcon
                className="h-10 w-10 text-white"
                onClick={() => setIndex((prev) => prev - 1)}
              />
            </div>
          )}
          {data && <LessonPage pageData={data?.pages[index]} />}
          {index != data?.pages?.length - 1 && (
            <div className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 duration-150 h-fit w-fit hover:cursor-pointer hover:scale-110">
              <ChevronRightIcon
                className="h-10 w-10 text-white"
                onClick={() => setIndex((prev) => prev + 1)}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

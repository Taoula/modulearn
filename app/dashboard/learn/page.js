"use client";

import LessonPage from "@/app/components/LessonPage";
import { useDoc } from "@/app/hooks/useFirebase";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const lessonId = searchParams.get("lessonId");
  const { data } = useDoc(`/lessons/${lessonId}`);
  const { data: userData, update: updateUser } = useDoc("");
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const complete = function () {
    if (userData && data) {
      let tempLessons = userData?.lessons;
      for (let i = 0; i < tempLessons.length; i++) {
        if (tempLessons[i].id == lessonId) {
          tempLessons[i].progress = index;
          tempLessons[i].completed = true;
          break;
        }
      }
      updateUser({ lessons: tempLessons });
      router.push("/dashboard/lessons");
    }
  };

  useEffect(() => {
    if (userData && data) {
      let tempLessons = userData?.lessons;
      for (let i = 0; i < tempLessons.length; i++) {
        if (tempLessons[i].id == data.id) {
          tempLessons[i].progress = index;
          break;
        }
      }
      updateUser({ lessons: tempLessons });
    }
  }, [index]);

  return (
    <>
      <div className="flex flex-col items-center gap-20 mt-12">
        <h1 className="text-3xl font-bold">{data?.title}</h1>
        <div className="flex justify-between items-center">
          {index != 0 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 hover:stroke-green-600 hover:fill-white duration-200"
              onClick={() => setIndex((prev) => prev - 1)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
          {data && <LessonPage pageData={data?.pages[index]} />}
          {index != data?.pages?.length - 1 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 hover:stroke-green-600 hover:fill-white duration-200"
              onClick={() => setIndex((prev) => prev + 1)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <button
              onClick={complete}
              className="text-yellow-500 bg-red-600 p-5 rounded-full text-lg font-bold tracking-widest"
            >
              COMPLETE LESSON
            </button>
          )}
        </div>
      </div>
    </>
  );
}

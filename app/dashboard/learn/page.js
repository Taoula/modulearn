"use client";

import Chat from "@/app/components/Chat";
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

  const [currentMessage, setCurrentMessage] = useState(""); // Current message being typed by the user

  const [messages, setMessages] = useState([]); // Array of chat messages

  useEffect(() => {
    if (data?.pages && data?.pages.length > 0) {
      setMessages([{ text: data.pages[0].pageText, source: "other" }]);
    }
  }, [data]);

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: currentMessage, source: "user" },
      ]);
      setCurrentMessage("");
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
      <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
        {data?.title}
      </h1>
      <div className="flex flex-col items-center gap-20 mt-12">
        <div className="flex gap-12 items-center">
          {/* {index != 0 && ( */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-10 h-10 hover:stroke-green-600 hover:fill-white duration-200 ${
              index === 0 ? "stroke-gray-200 hover:stroke-gray-200" : ""
            }`}
            onClick={() => setIndex((prev) => (prev > 0 ? prev - 1 : prev))}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {/* )} */}
          {data && (
            <>
              <div className="">
                <LessonPage pageData={data?.pages[index]} />
                <div className="flex gap-4 w-full">
                  <textarea
                    type="text"
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    className="resize-none pl-2 w-11/12 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
                    placeholder="Have a question? Ask here..."
                  ></textarea>
                  <button
                    type="button"
                    onClick={handleSendMessage}
                    className="rounded-md bg-green-600 text-white w-1/12 hover:bg-green-700"
                  >
                    Send
                  </button>
                </div>
              </div>
            </>
          )}
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

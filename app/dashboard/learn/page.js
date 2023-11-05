"use client";

import Chat from "@/app/components/Chat";
import LessonPage from "@/app/components/LessonPage";
import Message from "@/app/components/Message";
import getGptResponse from "@/app/functions/getGptResponse";
import { useCollection, useDoc } from "@/app/hooks/useFirebase";
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
  const {
    data: session,
    update: updateSession,
    loading: loadingSession,
  } = useDoc(`sessions/${lessonId}/pages/${index}`);

  useEffect(() => {
    if (!loadingSession && session === null) {
      updateSession({ messages: [] });
    }
  }, [loadingSession]);

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

  const handleSendMessage = async function () {
    if (!session || !data || !currentMessage) {
      console.log("BAD REQUEST");
      return;
    }

    try {
      console.log("test");
      let tempMessages = session.messages;
      tempMessages.push({ role: "user", content: currentMessage });
      await updateSession({ messages: tempMessages }).then(async () => {
        setCurrentMessage("");
        const response = await getGptResponse(
          "lessonPageResponse",
          [{ role: "system", content: data.pages[index].pageText }].concat(
            session.messages
          ),
          "text"
        );
        tempMessages = session.messages;
        tempMessages.push({ role: "system", content: response });
        await updateSession({ messages: tempMessages });
      });
    } catch (error) {
      console.error(error);
    }
  };

  const [currentMessage, setCurrentMessage] = useState("");

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
          <button
            onClick={() => setIndex((prev) => (prev > 0 ? prev - 1 : prev))}
            className="text-gray-500 bg-white border border-gray-500 px-4 py-1 rounded-full text-md font-semibold flex items-center gap-2 hover:bg-green-600 duration-200 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
            <p>Back</p>
          </button>
          {data && (
            <>
              <div className="">
                <LessonPage pageData={data?.pages[index]} />
                <div className="flex flex-col gap-3 w-full">
                  {session?.messages &&
                    session?.messages.map((message) => {
                      return <Message message={message} />;
                    })}
                </div>
                <div className="flex gap-4 w-full mt-12">
                  <textarea
                    type="text"
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    className="resize-none pl-2 w-10/12 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
                    placeholder="Have a question? Ask here..."
                  ></textarea>
                  <button
                    type="button"
                    onClick={handleSendMessage}
                    className="rounded-md bg-green-50 text-green-600 border border-green-600 w-2/12 hover:bg-green-600 hover:text-white duration-100"
                  >
                    Send
                  </button>
                </div>
              </div>
            </>
          )}
          {index != data?.pages?.length - 1 ? (
            <button
              onClick={() => setIndex((prev) => prev + 1)}
              className="text-gray-500 bg-white border border-gray-500 px-4 py-1 rounded-full text-md font-semibold flex items-center gap-2 hover:bg-green-600 duration-200 hover:text-white"
            >
              <p>Next</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          ) : (
            // <svg
            //   xmlns="http://www.w3.org/2000/svg"
            //   fill="none"
            //   viewBox="0 0 24 24"
            //   strokeWidth={1.5}
            //   stroke="currentColor"
            //   className="w-10 h-10 hover:stroke-green-600 hover:fill-white duration-200"
            //
            // >
            //   <path
            //     strokeLinecap="round"
            //     strokeLinejoin="round"
            //     d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            //   />
            // </svg>
            <button
              onClick={complete}
              className="text-green-600 bg-green-50 border border-green-600 px-4 py-1 rounded-full text-md font-semibold flex items-center gap-2 hover:bg-green-600 duration-200 hover:text-white"
            >
              <p>Finish lesson</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </>
  );
}

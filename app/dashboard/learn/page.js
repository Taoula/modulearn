"use client";

import Chat from "@/app/components/Chat";
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
    console.log(data);
  }, [data]);

  return (
    <>
      <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
        {data?.title}
      </h1>
      <Chat messages={messages} />
      <div className="flex gap-4">
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
    </>
  );
}

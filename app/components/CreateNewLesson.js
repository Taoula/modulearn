import { set } from "mongoose";
import { useState } from "react";

export default function CreateNewLesson() {
  const submit = function () {};
  const [promptText, setPromptText] = useState("Teach me about");
  const [userStartedTyping, setUserStartedTyping] = useState(false);

  const handleInputChange = (e) => {
    let text = e.target.value;
    if (text.slice(0, 14) != "Teach me about") {
      setPromptText("Teach me about " + text.slice(14, text.length));
    } else {
      setPromptText(text);
    }
  };
  return (
    <>
      <div className="bg-white border shadow-lg rounded-lg px-8 py-8 flex flex-col justify-center items-center gap-3">
        <h1 className="text-black text-2xl font-semibold">New Lesson</h1>
        <p className="text-gray-500 font-medium text-sm text-center max-w-sm">
          A lesson covers specific topics or objectives and is useful for
          learning smaller pieces of related information
        </p>
        <textarea
          value={promptText}
          placeholder="What do you want to learn about?"
          onChange={handleInputChange}
          className="h-96 w-full m-3 border bg-slate-50 border-gray-300 rounded-md resize-none px-2 py-2"
        ></textarea>
        <button
          onClick={submit}
          className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 duration-150"
        >
          Create
        </button>
      </div>
    </>
  );
}

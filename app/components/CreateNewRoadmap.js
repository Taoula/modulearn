import { useState } from "react";

export default function CreateNewRoadmap({ open, setOpen }) {
  const [promptText, setPromptText] = useState("");
  const submit = function () {};
  return (
    <>
      <div className="bg-white border shadow-lg rounded-lg px-8 py-8 flex flex-col justify-center items-center gap-3">
        <h1 className="text-black text-2xl font-semibold">New Roadmap</h1>
        <p className="text-gray-500 font-medium text-sm text-center max-w-sm">
          A roadmap encompasses multiple lessons and is useful for learning
          large topics or skills
        </p>
        <textarea
          value={promptText}
          onChange={(e) => setPromptText(e.target.value)}
          className="h-96 w-full m-3 border-2 border-gray-300 rounded-md resize-none px-2 py-2"
        ></textarea>
        <button
          onClick={submit}
          className="w-full py-2 px-4 bg-blue-400 text-white rounded-lg hover:bg-blue-500 duration-150"
        >
          Create
        </button>
      </div>
    </>
  );
}

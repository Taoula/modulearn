import { useState } from "react";

export default function CreateNewRoadmap({ open, setOpen }) {
  const [promptText, setPromptText] = useState("");
  const submit = function () {};
  return (
    <>
      <div className="w-1/3 bg-white shadow-lg rounded-lg px-4 py-3 flex flex-col justify-center items-center gap-3">
        <h1 className="text-black text-2xl font-semibold">
          Create New Roadmap
        </h1>
        <p className="text-gray-500 font-medium text-sm">
          What do you want to learn about?
        </p>
        <textarea
          value={promptText}
          onChange={(e) => setPromptText(e.target.value)}
          className="h-full w-full m-3 border-2 border-gray-300 rounded-md"
        ></textarea>
        <button
          onClick={submit}
          className="w-full py-2 px-4 bg-blue-400 text-white rounded-lg hover:bg-blue-500 duration-150"
        >
          Submit
        </button>
      </div>
    </>
  );
}

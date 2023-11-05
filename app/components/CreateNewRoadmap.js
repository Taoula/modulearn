import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCollection } from "../hooks/useFirebase";
import getGptResponse from "../functions/getGptResponse";

export default function CreateNewRoadmap() {
  const { add: addRoadmap } = useCollection("roadmaps");
  const [promptText, setPromptText] = useState("");
  const router = useRouter();

  const submit = async function () {
    if (!promptText) {
      return;
    }

    const response = await getGptResponse(
      "roadmap",
      [{ role: "user", content: promptText }],
      "json"
    );

    const title = response?.title;
    const lessons = response?.lessons;

    const { id } = await addRoadmap({ title, lessons });

    router.push(`/dashboard/roadmaps/?roadmapId=${id}`);
  };

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

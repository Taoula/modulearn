import { useState } from "react";
import getGptResponse from "../functions/getGptResponse";
import { useCollection } from "../hooks/useFirebase";
import { useRouter } from "next/navigation";

export default function CreateNewLesson() {
  const { add } = useCollection("lessons");
  const [promptText, setPromptText] = useState("");
  const router = useRouter();

  const submit = async function () {
    if (!promptText) {
      return;
    }

    const response = await getGptResponse(
      "lessonFromPrompt",
      [{ role: "user", content: promptText }],
      "json"
    );

    const title = response[0]?.title;
    response.shift();

    const { id } = await add({ title, pages: response });
    router.push(`/dashboard/learn/?lessonId=${id}`);
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

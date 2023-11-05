import { useState } from "react";
import getGptResponse from "../functions/getGptResponse";
import { useAuth, useCollection, useDoc } from "../hooks/useFirebase";
import { useRouter } from "next/navigation";
import circles from "public/three-dots.svg";
import Image from "next/image";

export default function CreateNewLesson() {
  const { add } = useCollection("/lessons");
  const [promptText, setPromptText] = useState("");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const { data: userData, update: updateUser } = useDoc("");

  const submit = async function () {
    if (!promptText || !user || !userData) {
      console.log("something missing");
      return;
    }

    console.log("everything");

    const { uid } = user;

    setIsLoading(true);

    try {
      const response = await getGptResponse(
        "lessonFromPrompt",
        [{ role: "user", content: promptText }],
        "json"
      );

      const title = response[0]?.title;
      response.shift();

      const { id } = await add({ title, pages: response, uid });

      let lessons = userData?.lessons || [];
      lessons.push({ id, completed: false, progress: 0 });
      await updateUser({ lessons });
      router.push(`/dashboard/learn/?lessonId=${id}`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
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
          onChange={(e) => setPromptText(e.target.value)}
          className="h-96 w-full m-3 border bg-slate-50 border-gray-300 rounded-md resize-none px-2 py-2"
        ></textarea>
        <button
          onClick={submit}
          disabled={isLoading}
          className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 duration-150"
        >
          {isLoading ? (
            <div className="flex">
              <span className="mx-auto flex items-center gap-2">
                <p>Loading</p>
                <Image src={circles} className="h-5 w-5" />
              </span>
            </div>
          ) : (
            "Create"
          )}
        </button>
      </div>
    </>
  );
}

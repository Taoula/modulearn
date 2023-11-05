import { useRouter } from "next/navigation";
import { useDoc } from "../hooks/useFirebase";

export default function Lesson({ lesson, key }) {
  const router = useRouter();
  const { data } = useDoc(`/lessons/${lesson?.id}/`);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      {data && (
        <li key={key} className="col-span-1 flex rounded-md shadow-sm">
          <div
            className={` flex w-16 flex-shrink-0 items-center justify-center border rounded-l-md text-sm font-medium ${
              lesson?.completed
                ? "bg-green-50 text-green-600 border-green-600"
                : "bg-yellow-100 text-yellow-600 border-yellow-600"
            }`}
          >
            {lesson?.completed ? "C" : "IP"}
          </div>
          <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
            <div className="flex-1 truncate px-4 py-2 text-sm">
              <p className="font-medium text-gray-900 hover:text-gray-600">
                {data?.title}
              </p>
              <p className="text-gray-500">
                {lesson?.completed ? "Completed" : "In Progress"}
              </p>
            </div>
            <div className="flex-shrink-0 pr-4">
              <button
                onClick={() =>
                  router.push(`/dashboard/learn?lessonId=${lesson?.id}`)
                }
                className="text-sm px-4 py-1 border rounded-md text-gray-500 hover:bg-green-50 hover:text-green-600 hover:border-green-600 duration-200"
              >
                {lesson?.completed ? "Start" : "Continue"}
              </button>
            </div>
          </div>
        </li>
      )}
    </>
  );
}

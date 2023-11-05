import { useRouter } from "next/navigation";

export default function Lesson({ lessonData, key }) {
  const router = useRouter();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <li key={key} className="col-span-1 flex rounded-md shadow-sm">
      <div className="bg-green-600 flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white">
        P
      </div>
      <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
        <div className="flex-1 truncate px-4 py-2 text-sm">
          <p className="font-medium text-gray-900 hover:text-gray-600">
            {lessonData?.title}
          </p>
          <p className="text-gray-500">In progress</p>
        </div>
        <div className="flex-shrink-0 pr-4">
          <button
            onClick={() =>
              router.push(`/dashboard/learn?lessonId=${lessonData?.id}`)
            }
            className="text-sm px-4 py-1 border rounded-md text-gray-500 hover:bg-green-50 hover:text-green-600 hover:border-green-600 duration-200"
          >
            Start
          </button>
        </div>
      </div>
    </li>
  );
}

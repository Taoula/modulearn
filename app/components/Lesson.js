import { useRouter } from "next/navigation";

export default function Lesson({ lessonData, key }) {
  const router = useRouter();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    // <div className="bg-white p-5 shadow-md rounded-lg m-3 text-black w-fit flex flex-col justify-center gap-3">
    //   <h1 className="font-semibold text-lg">{lessonData?.title}</h1>
    //   <button
    //     className="w-full bg-green-500 text-white py-1 px-2 rounded-md hover:bg-green-600 duration-150 font-semibold text-lg"
    // onClick={() =>
    //   router.push(`/dashboard/learn?lessonId=${lessonData?.id}`)
    // }
    //   >
    //     Start Lesson
    //   </button>
    // </div>
    <li key={key} className="col-span-1 flex rounded-md shadow-sm">
      <div
        // className={classNames(
        //   project.bgColor,
        //   "flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"
        // )}
        className="bg-green-600 flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"
      >
        P
      </div>
      <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
        <div className="flex-1 truncate px-4 py-2 text-sm">
          <a
            // href={project.href}
            className="font-medium text-gray-900 hover:text-gray-600"
          >
            {lessonData?.title}
          </a>
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

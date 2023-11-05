export default function RoadmapTracker({ data }) {
  return (
    <div className="rounded-md border px-6 py-8">
      <div className="pb-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-medium">{data?.title}</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 hover:fill-green-600 hover:stroke-green-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
        <button className="border px-4 rounded-md py-1 text-gray-500 hover:bg-green-50 hover:text-green-600 hover:border-green-600 duration-200">
          Continue
        </button>
      </div>
      <ol className="flex items-center w-full">
        {data?.lessons.map((lesson, index) => (
          <li
            key={index}
            className={`relative flex w-full items-center ${
              index !== data.lessons.length - 1
                ? "after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block"
                : ""
            }`}
          >
            <div className="relative group">
              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none p-2 rounded-md shadow-lg bg-white border border-gray-200 text-sm whitespace-nowrap">
                {lesson?.title}
              </div>

              <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-10 lg:w-10 shrink-0 hover:scale-110 duration-200">
                <svg
                  className="w-3.5 h-3.5 text-gray-500 lg:w-4 lg:h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              </span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
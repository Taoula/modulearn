export default function RoadmapTracker({ data }) {
  /*
    data?.lessons = [title: "LESSON TITLE", description (DON'T SHOW) "LESSON DESCRIPTION"]
  */
  return (
    <div className="rounded-md border px-6 py-8">
      <div className="pb-8 flex justify-between items-center">
        <h1 className="text-xl font-medium">{data?.title}</h1>
        <button className="border px-4 rounded-md py-1 text-gray-500 hover:bg-green-50 hover:text-green-600 hover:border-green-600 duration-200">
          Continue
        </button>
      </div>
      <ol class="flex items-center w-full">
        <li class="flex w-full items-center text-green-600 after:content-[''] after:w-full after:h-1 after:border-b after:border-green-600 after:border-4 after:inline-block">
          <span class="flex items-center justify-center w-10 h-10 bg-green-600 rounded-full lg:h-10 lg:w-10 border border-green-600 shrink-0">
            <svg
              class="w-3.5 h-3.5 text-white lg:w-4 lg:h-4 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </span>
        </li>
        <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block ">
          <span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-10 lg:w-10 shrink-0">
            <svg
              class="w-3.5 h-3.5 text-gray-500 lg:w-4 lg:h-4 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </span>
        </li>
        <li class="flex items-center w-full">
          <span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-10 lg:w-10 shrink-0">
            <svg
              class="w-3.5 h-3.5 text-gray-500 lg:w-4 lg:h-4 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </span>
        </li>
      </ol>
    </div>
  );
}

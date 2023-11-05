// export default function RoadmapTracker({ data }) {
//   return (
//     <div className="rounded-md border px-6 py-8">
//       <div className="pb-8 flex justify-between items-center">
//         <h1 className="text-xl font-medium">{data?.title}</h1>
//         <button className="border px-4 rounded-md py-1 text-gray-500 hover:bg-green-50 hover:text-green-600 hover:border-green-600 duration-200">
//           Continue
//         </button>
//       </div>
//       <ol className="flex items-center w-full">
//         {data?.lessons.map((lesson, index) => (
//           <li
//             key={index}
//             className={`flex w-full items-center ${
//               index !== data.lessons.length - 1
//                 ? "after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block hover:scale-110 duration-200"
//                 : ""
//             }`}
//           >
//             <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-10 lg:w-10 shrink-0">
//               <svg
//                 className="w-3.5 h-3.5 text-gray-500 lg:w-4 lg:h-4"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 16 12"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M1 5.917 5.724 10.5 15 1.5"
//                 />
//               </svg>
//             </span>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// }

export default function RoadmapTracker({ data }) {
  return (
    <>
      <div className="rounded-md border px-6 py-8">
        <div className="pb-8 flex justify-between items-center">
          <h1 className="text-xl font-medium">{data?.title}</h1>
          <button className="border px-4 rounded-md py-1 text-gray-500 hover:bg-green-50 hover:text-green-600 hover:border-green-600 duration-200">
            Continue
          </button>
        </div>
        <ol className="flex items-center w-full">
          {data?.lessons.map((lesson, index) => (
            <RoadmapIcon
              onClick={() => generateLesson(lesson)}
              updateRoadmap={updateRoadmap}
              data={data}
              lesson={lesson}
              index={index}
            />
          ))}
        </ol>
      </div>
    </>
  );
}

"use client";

import { useDoc } from "../hooks/useFirebase";

export default function SearchResult({ id }) {
  const { data } = useDoc(`/roadmaps/${id}`);

  return (
    <div className=" m-3 rounded-md shadow-md w-1/2 border border-gray-200 h-28 p-4">
      {data && (
        <div className=" h-full flex flex-col items-center justify-between">
          <h1 className="text-xl font-semibold">{data?.title}</h1>
          <button className="bg-green-400 text-white px-4 py-1 rounded-lg shadow-sm text-lg font-medium w-full hover:bg-green-500 duration-150 ">
            View Roadmap
          </button>
        </div>
      )}
    </div>
  );
}

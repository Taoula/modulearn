"use client";

import { useDoc } from "../hooks/useFirebase";
import RoadmapTracker from "./RoadmapTracker";

export default function SearchResult({ id }) {
  const { data } = useDoc(`/roadmaps/${id}`);

  return (
    <>
      {data && (
        <div className="my-5">
          <RoadmapTracker roadmap={data} />
        </div>
      )}
    </>
  );
}

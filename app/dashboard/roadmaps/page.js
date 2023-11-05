"use client";

import RoadmapTracker from "@/app/components/RoadmapTracker";
import { useCollection, useDoc } from "@/app/hooks/useFirebase";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const roadmapId = searchParams.get("roadmapId");
  const { data } = useCollection(`roadmaps`);

  return (
    <>
      {data &&
        data.map((roadmap) => {
          return (
            <div className="mt-12">
              <RoadmapTracker data={roadmap} />
            </div>
          );
        })}
    </>
  );
}

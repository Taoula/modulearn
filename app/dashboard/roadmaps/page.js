"use client";

import RoadmapTracker from "@/app/components/RoadmapTracker";
import { useDoc } from "@/app/hooks/useFirebase";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const roadmapId = searchParams.get("roadmapId");
  const { data } = useDoc(`roadmaps/${roadmapId}`);

  return (
    <>
      {data && (
        <div className="mt-12">
          <RoadmapTracker data={data} />
        </div>
      )}
    </>
  );
}

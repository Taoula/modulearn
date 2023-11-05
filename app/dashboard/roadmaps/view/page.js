import RoadmapTracker from "@/app/components/RoadmapTracker";
import { useSearchParams } from "next/navigation";

export default function ViewRoadmapPage() {
  const searchParams = useSearchParams();
  const roadmapId = searchParams.get("roadmapId");
  const { data: roadmap } = useDoc(`/roadmaps/${roadmapId}`);

  return (
    <>
      {roadmap && (
        <div>
          <h1>{roadmap?.title}</h1>
          <RoadmapTracker roadmap={roadmap} />
        </div>
      )}
    </>
  );
}

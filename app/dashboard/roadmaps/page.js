"use client";

import RoadmapTracker from "@/app/components/RoadmapTracker";
import { useCollection, useDoc } from "@/app/hooks/useFirebase";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const { data: userData } = useDoc("");

  return (
    <>
      {userData &&
        userData?.roadmaps?.map((roadmap) => {
          return (
            <div className="mt-12">
              <RoadmapTracker roadmap={roadmap} />
            </div>
          );
        })}
    </>
  );
}

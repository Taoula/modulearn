"use client";

import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import CreateNewLesson from "../../components/CreateNewLesson";
import CreateNewRoadmap from "../../components/CreateNewRoadmap";

export default function Page() {
  const [createPanelOpen, setCreatePanelOpen] = useState(false);
  const [createNewLessonOpen, setCreateNewLessonOpen] = useState(false);
  const [createNewRoadmapOpen, setCreateNewRoadmapOpen] = useState(false);

  return (
    <>
      <div className="grid grid-cols-2 gap-14 h-1/2 mt-6">
        <CreateNewLesson
          open={createNewLessonOpen}
          setOpen={setCreateNewRoadmapOpen}
        />
        <CreateNewRoadmap
          open={createNewRoadmapOpen}
          setOpen={setCreateNewRoadmapOpen}
        />
      </div>
    </>
  );
}

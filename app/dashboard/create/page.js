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
      <PlusCircleIcon
        className="h-5 w-5"
        onClick={() => setCreatePanelOpen((prev) => !prev)}
      />
      {createPanelOpen && (
        <div>
          <button onClick={() => setCreateNewLessonOpen(true)}>
            New Lesson
          </button>
          <button onClick={() => setCreateNewRoadmapOpen(true)}>
            New Roadmap
          </button>
        </div>
      )}

      {createNewLessonOpen && (
        <CreateNewLesson
          open={createNewLessonOpen}
          setOpen={setCreateNewRoadmapOpen}
        />
      )}
      {createNewRoadmapOpen && (
        <CreateNewRoadmap
          open={createNewRoadmapOpen}
          setOpen={setCreateNewRoadmapOpen}
        />
      )}
    </>
  );
}

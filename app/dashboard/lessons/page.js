// "use client";

// import Lesson from "@/app/components/Lesson";
// import { useCollection } from "@/app/hooks/useFirebase";
// import { useEffect } from "react";

// export default function Page() {
//   const { data } = useCollection("lessons");

// useEffect(() => {
//   console.log(data);
// }, [data]);
//   return (
//     <>
//       <div>
// {data &&
//   data.map((lesson) => {
//     return <Lesson lessonData={lesson} />;
//   })}
//       </div>
//     </>
//   );
// }

"use client";

// import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import Lesson from "@/app/components/Lesson";
import { useCollection } from "@/app/hooks/useFirebase";
import { useEffect } from "react";

export default function Page() {
  const { data } = useCollection("lessons");

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="mt-12">
      <ul
        role="list"
        className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
      >
        {data &&
          data.map((lesson) => {
            return <Lesson lessonData={lesson} key={lesson.id} />;
          })}
      </ul>
    </div>
  );
}

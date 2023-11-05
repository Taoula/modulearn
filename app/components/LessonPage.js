import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function LessonPage({ pageData, setIndex }) {
  return (
    <>
      <div className="flex flex-col gap-10 mx-20">
        <h1 className="font-medium text-xl">{pageData.conceptName}</h1>
        <p className="max-w-3xl text-xl">{pageData.pageText}</p>
      </div>
    </>
  );
}

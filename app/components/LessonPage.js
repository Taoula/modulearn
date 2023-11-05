import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function LessonPage({ pageData, setIndex }) {
  return (
    <>
      <div className="flex flex-col mx-20 border rounded-md">
        <h1 className="font-medium text-xl border-b p-6">
          {pageData.conceptName}
        </h1>
        <p className="max-w-3xl text-lg p-6">{pageData.pageText}</p>
      </div>
    </>
  );
}

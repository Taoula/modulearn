import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function LessonPage({ pageData, setIndex }) {
  return (
    <>
      <div className="flex flex-col border rounded-md">
        <h1 className="font-medium text-lg border-b p-6">
          {pageData.conceptName}
        </h1>
        <style>
          {`
                p code {
                  display: block;
                  background-color: #34383d;
                  color: white;
                  font-weight: 500;
                  margin-top: 10px;
                  margin-bottom: 10px;
                  border-radius: 10px;
                  padding: 10px 15px;
                  font-family: 'Courier New', monospace;
                }
              `}
        </style>
        <p
          className="max-w-3xl text-md p-6"
          dangerouslySetInnerHTML={{ __html: pageData.pageText }}
        ></p>
      </div>
    </>
  );
}

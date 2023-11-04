export default function CreateNewRoadmap({ open, setOpen }) {
  return (
    <>
      <>
        <div className="w-1/3 bg-white shadow-lg rounded-lg px-4 py-3 flex flex-col justify-center items-center gap-3">
          <h1 className="text-black text-2xl font-semibold">
            Create New Roadmap
          </h1>
          <p className="text-gray-500 font-medium text-sm">
            What do you want to learn about?
          </p>
          <textarea className="h-full w-full m-3 border-2 border-gray-300 rounded-md"></textarea>
        </div>
      </>
    </>
  );
}

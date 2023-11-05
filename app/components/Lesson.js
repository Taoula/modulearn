import { useRouter } from "next/navigation";

export default function Lesson({ lessonData }) {
  const router = useRouter();

  return (
    <div className="bg-white p-5 shadow-md rounded-lg m-3 text-black w-fit flex flex-col justify-center gap-3">
      <h1 className="font-semibold text-lg">{lessonData?.title}</h1>
      <button
        className="w-full bg-green-500 text-white py-1 px-2 rounded-md hover:bg-green-600 duration-150 font-semibold text-lg"
        onClick={() =>
          router.push(`/dashboard/learn?lessonId=${lessonData?.id}`)
        }
      >
        Start Lesson
      </button>
    </div>
  );
}

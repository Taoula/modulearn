import { useRouter } from "next/navigation";
import { useAuth, useCollection, useDoc } from "../hooks/useFirebase";
import { useEffect, useState } from "react";
import getGptResponse from "../functions/getGptResponse";
import Image from "next/image";
import circles from "public/three-dots.svg";

export default function RoadmapIcon({ lesson, index, data, updateRoadmap }) {
  const { user } = useAuth();
  const { data: userData, update: updateUser } = useDoc("");
  const { add } = useCollection("/lessons", { limit: 0 });
  const router = useRouter();
  const [loading, setLoading] = useState("");
  const [complete, setComplete] = useState(null);

  function isComplete(){
    if (userData?.lessons){
      const {lessons} = userData;
      for (let i = 0; i < lessons.length; i++){
        if (lessons[i].id == lesson.id){
          console.log(lessons[i], "COMPLETED :)")
          return lessons[i].completed;
          
        }
      }
    }
    console.log( "NOT COMPLETED :(")
    return false;
  }

  useEffect(()=> {
    setComplete(()=>isComplete());
  }, [userData, lesson])

  function getColors(type) {
    if (type == "bg"){
        if (!lesson?.id) {
            return { backgroundColor: "#ebebeb" };
          } else if (complete) {
            return { backgroundColor: "#8affa9" };
          } else {
            
            return { backgroundColor: "#6190ff" };
          }
    } else {
        if (!lesson?.id){
            return {color: "#a3a2a2"}
        } else if (complete){
            
            return {color: "#43a842"};
        } else {
          return {color: "#1c45a6"};
        }
    }
  
  }

  const generateLesson = async function () {
    
    if (lesson?.id) {
      router.push(`/dashboard/learn/?lessonId=${lesson.id}`);
    } else if (!loading){
      try {
        setLoading(true);
        const response = await getGptResponse(
          "lessonFromPrompt",
          [{ role: "user", content: lesson.description }],
          "json"
        );

        const title = response[0]?.title;
        response.shift();

        const { uid } = user;
        const { id } = await add({ title, pages: response, uid });
        const tempLessons = data?.lessons;
        for (let i = 0; i < tempLessons.length; i++) {
          if (
            tempLessons[i].title == lesson.title &&
            tempLessons[i].description == lesson.description
          ) {
            tempLessons[i].id = id;
          }
        }


        await updateRoadmap({ lessons: tempLessons });
        let lessons = userData?.lessons || [];
        lessons.push({ id, completed: false, progress: 0 });
        await updateUser({ lessons });
        router.push(`/dashboard/learn/?lessonId=${id}`);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
<>
      <li
        onClick={generateLesson}
        className={`relative flex w-full items-center ${
          index !== data.lessons.length - 1
            ? "after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block"
            : ""
        }`}
      >
        {/* Tooltip */}
        <div className="group">
          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none p-2 w-36 rounded-md shadow-lg bg-white border border-gray-200 text-sm">
            {lesson?.title}
          </div>

          <span
            style={...getColors("bg")}
            className="hover:scale-110 duration-200 hover:cursor-pointer flex items-center justify-center w-10 h-10 rounded-full lg:h-10 lg:w-10 shrink-0 group"
          >
            <svg
            style={...getColors("color")}
              className="w-3.5 h-3.5  lg:w-4 lg:h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </span>
        </div>
              {loading && (
        <div className="flex text-black">
          <span className="mx-auto flex items-center gap-2">
            <p>Loading</p>
            <Image src={circles} className="h-5 w-5" />
          </span>
        </div>
      )}
      </li>

    </>)
}

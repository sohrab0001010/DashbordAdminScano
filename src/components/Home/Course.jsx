import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Course = ({ nameGrade, emoji, color = "#2563EB" }) => {

  const {theme} = useContext(ThemeContext)

  return (
    <div
      style={{ "--course-color": "#003bbc" }}
      className={`
        group
        flex
        flex-col
        items-center
        justify-center
        gap-3

        min-h-30
        px-10
        py-6

        rounded-2xl

        border
        ${
          theme === "light"
          ?`border-sky-300/60`
          :`border-gray-500`
        }
        

        ${
          theme === "light"
          ?`bg-[linear-gradient(145deg,rgba(255,255,255,0.85),rgba(247,250,251,0.97))]`
          :`bg-gradient-to-br from-zinc-950 via-zinc-800 to-zinc-600`
        }
        

        shadow-[0_4px_20px_rgba(56,189,248,0.12)]

        backdrop-blur-md

        cursor-pointer

        transition-all
        duration-300
        ease-out

        hover:-translate-y-2
        hover:scale-[1.02]

        ${
          theme === "light"
          ?`hover:border-(--course-color)`
          :`hover:border-gray-100`
        }
        

        hover:bg-[linear-gradient(135deg,color-mix(in_srgb,var(--course-color)_85%,black)_0%,var(--course-color)_28%,color-mix(in_srgb,var(--course-color)_55%,white)_72%,color-mix(in_srgb,var(--course-color)_85%,black)_100%)]

        hover:shadow-[0_10px_35px_-5px_var(--course-color),0_0_20px_-2px_var(--course-color)]
        `}
    >
      {/* Emoji */}
      <span
        className="
          text-5xl
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:-translate-y-1
          group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]
        "
      >
        {emoji}
      </span>

      {/* Title */}
      <span
        className={`
          text-xl
          font-bold
          ${
            theme === "light"
            ?`text-[#082567]`
            :`text-[rgb(0,255,220)]`
          }
          
          transition-colors
          duration-300
          group-hover:text-white
          group-hover:drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]
          `}
        
      >
        {nameGrade}
      </span>
    </div>
  );
};

export default Course;
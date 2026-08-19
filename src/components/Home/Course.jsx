import React from "react";

const Course = ({ title, emoji, color = "#2563EB" }) => {
  return (
    <div
      style={{ "--course-color": color }}
      className="
        group
        flex
        flex-col
        items-center
        justify-center
        gap-3

        min-h-[120px]
        px-10
        py-6

        rounded-2xl

        border
        border-sky-300/60

        bg-[linear-gradient(145deg,rgba(255,255,255,0.85),rgba(247,250,251,0.97))]

        shadow-[0_4px_20px_rgba(56,189,248,0.12)]

        backdrop-blur-md

        cursor-pointer

        transition-all
        duration-300
        ease-out

        hover:-translate-y-2
        hover:scale-[1.02]

        hover:border-[color:var(--course-color)]

        hover:bg-[linear-gradient(135deg,color-mix(in_srgb,var(--course-color)_85%,black)_0%,var(--course-color)_28%,color-mix(in_srgb,var(--course-color)_55%,white)_72%,color-mix(in_srgb,var(--course-color)_85%,black)_100%)]

        hover:shadow-[0_10px_35px_-5px_var(--course-color),0_0_20px_-2px_var(--course-color)]
      "
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
        className="
          text-xl
          font-bold
          text-[#082567]
          transition-colors
          duration-300
          group-hover:text-white
          group-hover:drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]
        "
      >
        {title}
      </span>
    </div>
  );
};

export default Course;
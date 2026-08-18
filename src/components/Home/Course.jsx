import React from "react";

const Course = ({ title, emoji }) => {
  return (
    <div
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

        bg-[linear-gradient(145deg,rgba(255,255,255,0.85),rgba(247, 250, 251, 0.97))]

        shadow-[0_4px_20px_rgba(56,189,248,0.12)]

        backdrop-blur-md

        cursor-pointer

        transition-all
        duration-300
        ease-out

        hover:-translate-y-2
        hover:scale-[1.02]
        hover:border-sky-400
        hover:bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
        hover:shadow-[0_10px_30px_rgba(56,189,248,0.35),0_0_15px_rgba(56,189,248,0.2)]
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

          group-hover:text-sky-100
        "
      >
        {title}
      </span>
    </div>
  );
};

export default Course;
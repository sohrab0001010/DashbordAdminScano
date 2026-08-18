import React from "react";

const Header = () => {
  return (
    <header
      className="
        h-[104px]
        flex
        items-center
        justify-between
        px-8
        bg-[linear-gradient(135deg,#FFFFFF_0%,#F3FBFF_30%,#E6F7FF_65%,#D5F0FF_100%)]
        border-b
        border-sky-100
        shadow-[0_4px_20px_rgba(8,37,103,0.08)]
        relative
        overflow-hidden
      "
    >

      {/* نور براق روی هدر */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.65)_50%,transparent_80%)]
          pointer-events-none
        "
      />

      {/* ورود / ثبت نام */}
      <div
        className="
          relative
          z-10
          flex
          items-center
          gap-3
          px-5
          h-12
          rounded-[0.7rem]
          border
          border-sky-200
          bg-white/50
          backdrop-blur-md
          text-[#082567]
          font-medium
          shadow-[0_4px_14px_rgba(56,189,248,0.12)]
          transition-all
          duration-300
          hover:bg-sky-100/70
          hover:border-sky-300
          hover:shadow-[0_6px_20px_rgba(56,189,248,0.25)]
          hover:-translate-y-0.5
          cursor-pointer
        "
      >
        <span className="hover:text-sky-600 transition-colors duration-300">
          ورود
        </span>

        <span className="text-sky-200">|</span>

        <span className="hover:text-sky-600 transition-colors duration-300">
          ثبت نام
        </span>
      </div>

      {/* لوگو */}
      <div
        className="
          relative
          z-10
          p-1
          rounded-full
          bg-white/60
          border
          border-sky-200
          shadow-[0_4px_20px_rgba(56,189,248,0.2)]
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-[0_6px_25px_rgba(56,189,248,0.35)]
          cursor-pointer
        "
      >
        <img
          src="/images/logo/logo.jpeg"
          alt="scano"
          className="
            rounded-full
            w-16
            h-16
            object-cover
          "
        />
      </div>

    </header>
  );
};

export default Header;
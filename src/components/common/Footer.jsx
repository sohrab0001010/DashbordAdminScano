import React from "react";
import { FaTelegramPlane, FaInstagram  } from "react-icons/fa";
const Footer = () => {
  return (
    <footer
      className="
        mx-4
        mb-4
        mt-4
        rounded-[1rem]
        border
        border-indigo-300/20
        bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
        shadow-[0_0_30px_rgba(37,99,235,0.25)]
        overflow-hidden
        relative
      "
    >
      {/* نور تزئینی */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_50%_0%,rgba(96,165,250,0.28),transparent_45%)]
        "
      />

      <div
        className="
          relative
          z-10
          max-w-6xl
          mx-auto
          px-8
          py-10
          flex
          flex-col
          items-center
          justify-center
          gap-7
          text-white
          text-center
        "
      >
        {/* نام سایت */}
        <h2
          className="
            text-3xl
            font-bold
            text-white
            drop-shadow-[0_0_12px_rgba(125,211,252,0.35)]
          "
        >
          اسکنو
        </h2>

        {/* شعار */}
        <p
          className="
            text-lg
            text-slate-100
            max-w-xl
            leading-8
          "
        >
          یادگیری ریاضی، ساده‌تر از همیشه
        </p>

        {/* راه‌های ارتباطی */}
        <div className="flex items-center gap-5">
          {/* Telegram */}
          <a
            href="#"
            className="
              w-12
              h-12
              flex
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-white/10
              backdrop-blur-md
              text-white
              text-2xl
              transition-all
              duration-300
              hover:text-[#7DD3FC]
              hover:bg-sky-400/15
              hover:border-sky-300/50
              hover:scale-110
              hover:shadow-[0_0_22px_rgba(56,189,248,0.8)]
            "
            aria-label="Telegram"
          >
            <FaTelegramPlane />
          </a>

          {/* Eitaa */}
          <a
            href="#"
            className="
            w-12
            h-12
            flex
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-white/10
            backdrop-blur-md
            text-white
            text-2xl
            transition-all
            duration-300
            hover:text-cyan-200
            hover:bg-cyan-400/15
            hover:border-cyan-300/50
            hover:scale-110
            hover:shadow-[0_0_22px_rgba(34,211,238,0.8)]
          "
            aria-label="Eitaa"
          >
            <FaInstagram  />
          </a>
        </div>

        {/* خط جداکننده */}
        <div className="w-full max-w-2xl h-px bg-white/10" />

        {/* کپی رایت */}
        <p className="text-sm text-slate-300">
          © {new Date().getFullYear()} Scano — تمامی حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
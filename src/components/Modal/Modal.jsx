import React, { useEffect, useState } from "react";

const Modal = ({
  title,
  message,
  icon,
  bgIcon,
  borderIcon,
}) => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    // ورود از بالا
    setModal(true);

    // بعد از 2 ثانیه خروج
    const timer = setTimeout(() => {
      setModal(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        fixed
        top-4
        left-4
        z-50

        flex
        flex-row-reverse

        border
        border-sky-100
        py-4
        px-6
        rounded-lg

        text-[1.2rem]
        bg-sky-50
        select-none

        shadow-[0_4px_12px_rgba(0,0,0,0.08)]

        transition-transform
        duration-500
        ease-out

        ${
          modal
            ? "translate-y-0"
            : "-translate-y-[calc(100%+1rem)]"
        }
      `}
    >
      <div
        className="
          iconContainer
          flex
          flex-col
          justify-center
          items-center
          px-2
        "
      >
        <div
          className={`
            p-3
            ${borderIcon}
            rounded-full
          `}
        >
          <span
            className={`
              flex
              items-center
              justify-center
              p-0.5
              rounded-full
              ${bgIcon}
              text-white
              text-[1rem]
              font-bold
              leading-none
              mx-auto
              my-auto
            `}
          >
            {icon}
          </span>
        </div>
      </div>

      <div
        dir="rtl"
        className="
          textcontainer
          flex
          flex-col
          gap-4
        "
      >
        <span
          className="
            text-[1.1rem]
            font-bold
          "
        >
          {title}
        </span>

        <span
          className="
            text-[1rem]
            text-gray-500
          "
        >
          {message}
        </span>
      </div>
    </div>
  );
};

export default Modal;
import React, { useContext, useState } from 'react'
import { FiChevronLeft } from "react-icons/fi";
import { ImUnlocked } from "react-icons/im";
import { FaLock } from "react-icons/fa";
import { ThemeContext } from '../context/ThemeContext';


const Level = ({ 
  lable, 
  icon: Icon, 
  content, 
  onSelecteVideo,
  code,
  isOpen,
  onToggle,
  setShowModalVideo,
  existSubscription 
}) => {

  const { theme } = useContext(ThemeContext)



  return (
    <div>

      <div
        onClick={() => {
        onToggle()
        }}
        className={`
        group
        grid
        grid-cols-[2fr_6fr_3fr]
        items-center
        py-3
        px-12
        rounded-bl-full
        rounded-tr-full
        cursor-pointer
        transition-all
        duration-200
        ease-in-out
        ${lable === "آسان"
            ? `bg-green-100 hover:bg-[linear-gradient(135deg,#14532D,#15803D,#22C55E,#166534)] hover:text-green-50 ${theme === "dark" && `bg-linear-to-br from-[#000000] via-[#052E16] to-[#047857]`}`
            : lable === "متوسط"
              ? `bg-blue-100 hover:bg-[linear-gradient(135deg,#075985,#0284C7,#38BDF8,#0C4A6E)] hover:text-blue-50 ${theme === "dark" && `bg-linear-to-br from-[#000000] via-[#0A1224] to-[#123B70]`}`
              : lable === "سخت"
                ? `bg-orange-100 hover:bg-[linear-gradient(135deg,#7A2E00,#B84A00,#F07800,#8F3400)] hover:text-orange-50 ${theme === "dark" && `bg-linear-to-br from-[#000000] via-[#431407] to-[#C2410C]`}`
                : `bg-purple-100 hover:bg-[linear-gradient(135deg,#4C1D95,#6D28D9,#A855F7,#581C87)] hover:text-purple-50 ${theme === "dark" && `bg-linear-to-br from-[#000000] via-[#471065] to-[#b109ff]`}`
          }
        
        `}
      >
        <div className="
        left
        flex
        gap-4
        items-center
        ">
          <span 
          className={`
            transition-all
            duration-300
            ${isOpen?"-rotate-90":""}
            ${
              theme === `light`
              ?``
              :`text-gray-100`
            }
            `}
          ><FiChevronLeft /></span>
          <span className='
          text-4xl
          '>{Icon && <Icon />}</span>
        </div>

        <div className={`
          middle
          text-[0.7rem]
          font-medium
          grid
          grid-cols-[1fr_1fr_1fr]
          ${
            theme === "light"
            ?`text-gray-600`
            :`text-gray-100`
          }
          transition-all
          duration-200
          group-hover:text-sky-50
          `}>
          {
            content?.content?.videos.map((item,index) => (
              <span 
              key={index}
              className=''
              >
                {item.subjectVid}
              </span>
            ))
          }
        </div>

        <div
          className={`
            right 
            flex
            justify-end
            gap-4
            ${
                theme === "light"
                ?`text-gray-600`
                :`text-gray-100`
            }
            `}
        >
          <span
          className='group-hover:text-gray-50'
          >کد : {code}</span>
          <span
            className='group-hover:text-gray-50'
          >{lable}</span>
        </div>
      </div>



      <div
      className={`
        grid
        transition-[grid-template-rows]
        duration-300
        ease-in-out
        ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
        `}
      >
        <div className="min-h-0 overflow-hidden">
      <div className={`levelContent`}>
        <div>
          {
            content?.content?.videos.map((video, index) => (
              <div
                key={index}
                onClick={() => {
                  video.isFree || existSubscription
                  ?onSelecteVideo(video.vid)
                  :setShowModalVideo(true)
                }}
                className={`
                flex
                flex-row-reverse
                justify-between
                items-center
                px-12
                py-4
                mt-6
                mb-3
                cursor-pointer
                rounded-bl-full
                rounded-tr-full
                border-b
                border-gray-300
                ${
                  theme === "light"
                  ?`bg-white`
                  :`bg-linear-to-br from-zinc-950 via-zinc-800 to-zinc-600`
                }
                shadow-[0_10px_20px_0_rgba(0,0,0,0.1)]
                transition-all
                duration-200
                hover:scale-105
                hover:translate-y-2                
                `}
              >
                <span
                  className={`
                  ${video.isFree || existSubscription
                      ? "text-green-500"
                      : "text-gray-500"
                    }
                  `}
                >{video.subjectVid}</span>
                <span
                  className={`
                  ${video.isFree || existSubscription
                      ? "text-green-500"
                      : "text-red-600"
                    }
                  `}
                >
                  {
                    video.isFree || existSubscription
                      ? <ImUnlocked />
                      : <FaLock />
                  }
                </span>
              </div>
            ))
          }

        </div>
      </div>
        </div>
      </div>


    </div>
  )
}

export default Level
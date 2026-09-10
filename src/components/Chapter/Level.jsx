import React, { useState } from 'react'
import { FiChevronLeft } from "react-icons/fi";
import { ImUnlocked } from "react-icons/im";
import { FaLock } from "react-icons/fa";


const Level = ({ lable, icon: Icon, content, onSelecteVideo }) => {

  const [isOpen,setIsOpen] = useState(false)

  return (
    <div>

      <div
        onClick={() => setIsOpen(prev => !prev)}
        className={`
        group
        grid
        grid-cols-[2fr_6fr]
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
            ? "bg-green-100 hover:bg-[linear-gradient(135deg,#14532D,#15803D,#22C55E,#166534)] hover:text-green-50"
            : lable === "متوسط"
              ? "bg-blue-100 hover:bg-[linear-gradient(135deg,#075985,#0284C7,#38BDF8,#0C4A6E)] hover:text-blue-50"
              : lable === "سخت"
                ? "bg-orange-100 hover:bg-[linear-gradient(135deg,#7A2E00,#B84A00,#F07800,#8F3400)] hover:text-orange-50"
                : "bg-purple-100 hover:bg-[linear-gradient(135deg,#4C1D95,#6D28D9,#A855F7,#581C87)] hover:text-purple-50"
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
            `}
          ><FiChevronLeft /></span>
          <span className='
          text-4xl
          '>{Icon && <Icon />}</span>
        </div>
        <div
          className="
        right 
        flex
        justify-end
        text-gray-500
        ">
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
                  video.isFree
                  ?onSelecteVideo(video)
                  :console.log("error")
                }}
                className={`
                flex
                flex-row-reverse
                justify-between
                items-center
                px-12
                py-4
                mt-3
                mb-3
                cursor-pointer
                rounded-bl-full
                rounded-tr-full
                border-b
                border-gray-300
                bg-white
                shadow-[0_10px_20px_0_rgba(0,0,0,0.1)]
                transition-all
                duration-200
                hover:scale-105
                hover:translate-y-2

                
                `}
              >
                <span
                  className={`
                  ${video.isFree
                      ? "text-green-500"
                      : "text-gray-500"
                    }
                  `}
                >{video.subjectVid}</span>
                <span
                  className={`
                  ${video.isFree
                      ? "text-green-500"
                      : "text-red-600"
                    }
                  `}
                >
                  {
                    video.isFree
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
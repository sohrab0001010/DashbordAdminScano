import React from 'react'
import { FiChevronLeft } from "react-icons/fi";

const Level = ({ lable, icon: Icon, content }) => {
  return (
    <div>

      <div
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
        ${
          lable === "آسان"
          ?"bg-green-100 hover:bg-[linear-gradient(135deg,#14532D,#15803D,#22C55E,#166534)] hover:text-green-50"
          :lable === "متوسط"
          ?"bg-blue-100 hover:bg-[linear-gradient(135deg,#075985,#0284C7,#38BDF8,#0C4A6E)] hover:text-blue-50"
          :lable === "سخت"
          ?"bg-orange-100 hover:bg-[linear-gradient(135deg,#7A2E00,#B84A00,#F07800,#8F3400)] hover:text-orange-50"
          :"bg-purple-100 hover:bg-[linear-gradient(135deg,#4C1D95,#6D28D9,#A855F7,#581C87)] hover:text-purple-50"
        }
        
        `}
      >
        <div className="
        left
        flex
        gap-4
        items-center
        
        ">
          <span ><FiChevronLeft/></span>
          <span className='
          text-4xl
          '>{Icon && <Icon/>}</span>
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

      <div className="levelContent">
        <div>
          
          
        </div>
      </div>

    </div>
  )
}

export default Level
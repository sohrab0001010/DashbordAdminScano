import React, { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext';


const SectionLeft = ({contentCourse,nameGrade,onSelect,selected}) => {

  const { theme } = useContext(ThemeContext)

  return (
    <>
      {contentCourse.map((item,index) => (
        <label
        key={index}
        className={`
          flex
          flex-col
          items-end
          gap-8
          py-4
          px-8
          border-b
          border-gray-300
          mt-4
          mb-4
          ${
            theme === "light"
            ?`
            text-gray-500
            bg-white
            `
            :`text-gray-100
            bg-gradient-to-br from-zinc-950 via-zinc-800 to-zinc-600`
          }
          cursor-pointer
          shadow-[inset_0_0_10px_0_rgba(0,0,0,0.1)]
          rounded-l-full
          transition-all
          duration-300
          ease-out
          hover:bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
          hover:border-[rgb(0,255,210)]
          hover:text-[rgb(0,255,210)]
          has-checked:bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
          has-checked:border-[rgb(0,255,210)]
          has-checked:text-[rgb(0,255,210)]
          has-checked:scale-3d
          has-checked:-translate-x-4
          `}
        >
          <span>{item.name}</span>
          <input 
          type="radio" 
          name={nameGrade}
          checked={selected == item.name} 
          onChange={() => {onSelect(item.name)
            console.log(item.name)
          }}
          className='peer sr-only'
           />
        </label>
      ))}
    </>
  )
}

export default SectionLeft

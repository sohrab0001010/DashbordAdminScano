import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const Filter = ({ arrayFilter, setFiltered, onFilter, filtered }) => {

  const { theme } = useContext(ThemeContext)




  return (
    <div className={`
            top
            grid
            grid-cols-5
            gap-4
            `}>
      {
        arrayFilter.map((item) => (
          <label
            key={item.filter}
            className={`
                    cursor-pointer
                    text-center
                    ${
                      theme === "light"
                      ?`text-gray-500
                      border-blue-200
                      `
                      :`text-gray-100
                      border-[rgba(0,0,0,0.5)]
                      `
                    }
                    backdrop-blur-[1px]
                    py-2
                    transition-all
                    duration-200
                    border
                    rounded-sm
                    shadow-[0_0_10px_0_rgba(0,0,0,0.1)]
                    bg-[rgba(49,128,255,0.05)]
                    has-checked:bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
                    has-checked:text-[rgb(0,255,210)]
                    has-checked:rounded-lg
                    has-checked:scale-110
                    has-checked:-translate-y-2
                    `}
          >
            <span>{item.filter}</span>
            <input
              onClick={() => {
                setFiltered(item.levelFilter)
                onFilter(item.levelFilter)
                console.log(filtered)
              }}
              checked={filtered === item.levelFilter}
              type="radio"
              name="levels"
              id=""
              className="peer sr-only"
            />
          </label>
        ))
      }
    </div>
  )
}

export default Filter
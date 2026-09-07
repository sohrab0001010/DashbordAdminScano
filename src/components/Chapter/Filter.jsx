import React from 'react'

const Filter = () => {

const arrayFilter = [
        {filtered: "تیز هوشان"},
        {filtered: "سخت"},
        {filtered: "متوسط"},
        {filtered: "آسان"},
        {filtered: "همه"},
    ]


  return (
    <div className={`
            top
            grid
            grid-cols-5
            gap-2
            `}>
              {
                arrayFilter.map((item) => (
                  <label
                  key={item.filtered}
                  className={`
                    cursor-pointer
                    text-center
                    text-gray-500
                    backdrop-blur-[1px]
                    py-2
                    transition-all
                    duration-200
                    border
                    border-blue-200
                    rounded-sm
                    bg-[rgba(49,128,255,0.05)]
                    has-checked:bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
                    has-checked:text-[rgb(0,255,210)]
                    has-checked:rounded-lg
                    has-checked:scale-110
                    has-checked:-translate-y-2
                    `}
                  >
                    {console.log(item)}
                    <span>{item.filtered}</span>
                    <input 
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
import React, { useState } from 'react'
import { useParams } from 'react-router'
import courses from "../data/dataCourses"

const Chapter = () => {

    const param = useParams()

    const [filtered,setFiltered] = useState("همه")
    
    const arrayFilter = [
      {filtered: "تیز هوشان"},
      {filtered: "سخت"},
      {filtered: "متوسط"},
      {filtered: "آسان"},
      {filtered: "همه"},
    ]


    const grade = courses.find(item => item.gradeId === +param.yearId)
    const title = grade.contentCourse.find(item => item.title === param.titleCase)
    const chapter = title.content.find(item => item.chapter === +param.numChapter)


  return (
    <div
    className='
    chapterContainer
    min-h-screen
    bg-white
    grid
    grid-cols-[4fr_2fr]
    gap-12
    py-8
    px-8
    bg-[linear-gradient(rgba(35,35,255,0.1)_1px,transparent_1px)] 
    bg-size-[100%_42px]
    '
    >
      <div className={`
        sectionLeft
        bg-blue-50
        `}>
        </div>

      <div className={`
        sectionRight
        `}>
          <div className={`
            top
            grid
            grid-cols-5
            `}>
              {
                arrayFilter.map((item) => (
                  <label
                  key={item.filtered}
                  className={`
                    cursor-pointer
                    bg-[rgba(49,128,255,0.05)]
                    text-center
                    text-gray-500
                    backdrop-blur-[1px]
                    py-3
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
          <div className="bottom"></div>

        </div>
    </div>
  )
}

export default Chapter
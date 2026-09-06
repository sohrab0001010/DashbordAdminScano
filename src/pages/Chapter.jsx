import React, { useState } from 'react'
import { useParams } from 'react-router'
import courses from "../data/dataCourses"

const Chapter = () => {

    const param = useParams()

    const [filtered,setFiltered] = useState("همه")
    
    const ArrayFilter = [
      {filtered: "همه"},
      {filtered: "آسان"},
      {filtered: "متوسط"},
      {filtered: "سخت"},
      {filtered: "تیزهوشان"},
    ]


    const chapter = courses.find(item => item.gradeId === +param.yearId)
    .contentCourse.find(item => item.title === param.titleCase)
    .content.find(item => item.chapter === +param.numChapter)


  return (
    <div
    className='
    chapterContainer
    min-h-screen
    bg-white
    grid
    grid-cols-[7fr_2fr]
    gap-12
    py-8
    px-8
    bg-[linear-gradient(rgba(35,35,255,0.1)_1px,transparent_1px)] 
    bg-[length:100%_42px]
    '
    >
      <div className={`
        sectionLeft
        bg-blue-50
        `}>
          <div className={`
            top
            
            `}>
              {
                chapter.levels.map((item,index) => (
                  <label
                  key={index}
                  >
                    
                  </label>
                ))
              }
            </div>
          <div className="bottom"></div>
        </div>

      <div className={`
        sectionRight
        bg-blue-100
        `}></div>
    </div>
  )
}

export default Chapter
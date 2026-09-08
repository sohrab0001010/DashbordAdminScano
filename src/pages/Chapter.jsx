import React, { useState } from 'react'
import { useParams } from 'react-router'
import courses from "../data/dataCourses"
import Filter from '../components/Chapter/Filter'
import Level from '../components/Chapter/Level'

const Chapter = () => {

  const arrayFilter = [
        {filtered: "تیز هوشان"},
        {filtered: "سخت"},
        {filtered: "متوسط"},
        {filtered: "آسان"},
        {filtered: "همه"},
    ]

    const param = useParams()

    const [filtered,setFiltered] = useState(null)
    


    const grade = courses.find(item => item.gradeId === +param.yearId)
    const title = grade.contentCourse.find(item => item.title === param.titleCase)
    const chapter = title.content.find(item => item.chapter === +param.numChapter)

    const onShowLevel = level => (
      filtered
      ?chapter
    )


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
    bg-[linear-gradient(rgba(35,35,255,0.2)_1px,transparent_1px)] 
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
        flex
        flex-col
        gap-4
        `}>
          <Filter 
        arrayFilter={arrayFilter}
        setFiltered={setFiltered}
          />
          <div className="
          bottom
          h-full
          w-full
          shadow-[0_0_20px_0_rgba(0,0,0,0.1)]
          rounded-lg
          bg-[(rgba(255,255,255,0.1)]
          backdrop-blur-[3px]
          flex
          flex-col
          gap-4
          py-8
          px-4
          ">
            {
              !filtered
              ?chapter.levels.map((item,index) => (
                <Level
                lable={item.title}
                />
              ))

              :<div>
                {console.log(singleLevel(filtered))}
              </div>
            }
          </div>

        </div>
    </div>
  )
}

export default Chapter
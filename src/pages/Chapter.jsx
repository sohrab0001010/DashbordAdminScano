import React, { useState } from 'react'
import { useParams } from 'react-router'
import courses from "../data/dataCourses"
import Filter from '../components/Chapter/Filter'

const Chapter = () => {

    const param = useParams()

    const [filtered,setFiltered] = useState(null)
    


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
        `}>
          <Filter/>
          <div className="bottom"></div>

        </div>
    </div>
  )
}

export default Chapter
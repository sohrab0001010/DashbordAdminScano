import React from 'react'
import { useParams } from 'react-router'
import courses from '../data/dataCourses'
import course from '../data/dataCourses'

const Course = () => {

  const paramId = useParams().yearId
  const course = courses.find(course => course.gradeId == paramId)


  return (
    <div className='
    mainContainer
    min-h-screen
    grid
    grid-cols-[8fr_5fr_2fr]
    gap-4
    px-12
    py-4

    '>
      <div className="
      sectionLeft
      bg-amber-100
      ">
      </div>

      <div className="
      sectionMiddle
      bg-amber-200
      ">

      </div>

      <div className="
      sectionRight
      flex
      flex-col
      gap-8
      justify-center
      ">
        {
          course.contentCourse.map(item => (
            <div
            className="
            flex
            flex-row-reverse
            justify-between
            items-center
            cursor-pointer
            px-4
            py-5
            bg-
            border-b
            border-gray-300
            rounded-b-lg
            "
            >
              <span className='text-gray-500'>{item.name}</span>
              <input 
              type="radio" 
              name={course.nameGrade} 
              id={item.name}
              className="
              appearance-none
              w-6
              h-6
              rounded-full
              border-2
              bg-white
              border-gray-300
              cursor-pointer
              p-2
              checked:bg-sky-100
              checked:border-sky-200
              checked:shadow-[0_0_12px_3px_rgba(14,165,233,0.7)]
              transition-all
              duration-200
              "
               />
            </div>
          ))
        }

      </div>

    </div>
  )
}

export default Course
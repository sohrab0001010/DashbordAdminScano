import React from 'react'
import { useParams } from 'react-router'
import courses from '../data/dataCourses'
import course from '../data/dataCourses'

const Course = () => {

  const paramId = useParams().yearId
  courses.map(course => {
    if (course.gradeId === +paramId) {
      console.log(course)
    }
  })


  return (
    <div className='
    mainContainer
    min-h-screen
    grid
    grid-cols-[5fr_3fr_1fr]

    '>
      <div className="
      sectionRight
      bg-amber-100
      ">
        {
          courses.map((course,index) => (
            <div key={index}>
              <span>{course.contentCourse[index].name}</span>
              <span></span>
            </div>
          ))
        }
      </div>
      
      <div className="
      sectionMiddle
      bg-amber-200
      ">

      </div>

      <div className="
      sectionLeft
      bg-amber-300
      ">

      </div>

    </div>
  )
}

export default Course
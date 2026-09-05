import React, { useState } from 'react'
import { useParams } from 'react-router';
import courses from '../data/dataCourses';
import SectionRight from '../components/Course/SectionRight';
import SectionLeft from '../components/Course/SectionLeft';

const Course = () => {

  const course = courses.find(course => 
    course.gradeId == useParams().yearId
  )

  const [selectedSection,setSelectedSection] 
  = useState(course.contentCourse[0]?.name)



  return (

    <div>
    <div className="
    sectionTop
    flex
    items-center
    justify-end
    gap-6
    px-12
    py-5
    ">
      <span 
      className="text-2xl font-medium ">
        {course.nameGrade}-{course.subject}
      </span>
      <span
      style={{ "--course-color": course.color }}
      className="
      bg-[linear-gradient(135deg,color-mix(in_srgb,var(--course-color)_85%,black)_0%,var(--course-color)_28%,color-mix(in_srgb,var(--course-color)_55%,white)_72%,color-mix(in_srgb,var(--course-color)_85%,black)_100%)]
      shadow-[0_10px_35px_-5px_var(--course-color),0_0_20px_-2px_var(--course-color)]
      border-(--course-color)
      rounded-br-2xl
      rounded-tr-4xl
      rounded-tl-4xl
      text-5xl
      p-4
      "
      >
        {course.emoji}
      </span>
    </div>

    <div
    className="
    sectionBottom
    select-none
    mainContainer
    min-h-screen
    grid
    grid-cols-[2fr_7fr]
    gap-8
    px-12
    py-20
    "
    >
      <div className="
      sectionLeft 
      sticky
      top-8
      self-start
      mt-12
      ">
        <SectionLeft
        contentCourse={course.contentCourse}
        nameGrade={course.nameGrade}
        onSelect={setSelectedSection}
        selected={selectedSection}
        />
      </div>

      <div 
      className="
      sectionRight
      ">
        <SectionRight
        course={course}
        selectedSection={selectedSection}
        />
      </div>

    </div>

    </div>

  )
}

export default Course

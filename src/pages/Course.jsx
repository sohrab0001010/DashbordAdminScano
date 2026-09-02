import React, { useState } from 'react'
import { useParams } from 'react-router'
import courses from '../data/dataCourses'
import { FiChevronUp } from "react-icons/fi";
import { BsFillHandIndexFill } from 'react-icons/bs';

const Course = () => {

  const paramId = useParams().yearId
  const course = courses.find(course => course.gradeId == paramId)


  const [selectContent,setSelectContent] = useState(course.contentCourse[0].name);
  const [openChapter,setOpenChapter] = useState(null);


  const selectedContent = course.contentCourse.find(item => 
    item.name === selectContent
  )

  const toggleChapter = chapter => {
    setOpenChapter(prev => prev === chapter? null : chapter)
  }


  return (
    <div className='
    mainContainer
    min-h-screen
    grid
    grid-cols-[8fr_5fr_2fr]
    gap-4
    px-12
    py-20

    '>
      <div className="
      sectionLeft
      bg-amber-100
      ">
      </div>

      <div className="
      sectionMiddle
      shadow-[inset_0px_0px_4px_0px_rgba(0,0,0,0.1)]
      rounded-lg
      flex
      flex-col
      gap-8
      px-4
      py-2      
      ">
        <span
        className="
        shadow-[inset_0_0_10px_0_rgba(0,145,255,0.2)]
        inline-block
        text-center
        py-5
        mt-4
        rounded-t-lg
        text-gray-500
        "
        >{course.nameGrade}</span>
        <div>
          {
            selectedContent.content.map((item,index) => (
              <div key={index}
                onClick={() => toggleChapter(item.chapter)}
              >
              <div
              className="
              flex
              flex-row-reverse
              items-center
              justify-between
              border-b
              border-gray-200
              rounded-b-lg
              px-4
              py-5
              mb-4
              shadow-[inset_0px_0px_5px_0px_rgba(100,100,100,0.1)]
              cursor-pointer
              "
              >
                <span>فصل{item.chapter} {course.nameGrade} {selectContent}</span>
                <span><FiChevronUp/></span>
              </div>

              {
                openChapter === item.chapter && 
                <div>
                  {
                    item.levels.map((level,index) => (
                      <div key={index}>
                        <span>{level.title}</span>
                        {console.log(level.content)}
                      </div>
                    ))
                  }
                </div>
              }
              
              </div>
            ))
          }
        </div>
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
              checked={selectContent === item.name}
              onChange={() => setSelectContent(item.name)} 
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
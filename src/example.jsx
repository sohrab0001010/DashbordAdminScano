import React, { useState } from 'react';
import { useParams } from 'react-router';
import courses from '../data/dataCourses';
import { FiChevronUp } from "react-icons/fi";

// level_icons
import { FcLike } from "react-icons/fc";
import { FcReading } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";
import { FcFlashOn } from "react-icons/fc";
//level_icons




const Course = () => {

  const paramId = useParams().yearId
  const course = courses.find(course => course.gradeId == paramId)


  const [selectContent, setSelectContent] = useState(course.contentCourse[0].name);
  const [openChapter, setOpenChapter] = useState(null);
  const [showLevelChapter, setShowLevelChapter] = useState(null);
  const [showLevel, setShowLevel] = useState("all");


  const selectedContent = course.contentCourse.find(item =>
    item.name === selectContent
  )

  const toggleChapter = chapter => {
    setOpenChapter(prev => prev === chapter ? null : chapter)
  }

  const settingShowChapter = chapter => {

  }


  return (
    <div className='
    select-none
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
        transition-all
        duration-200
        shadow-[inset_0_0_10px_0_rgba(0,145,255,0.2)]
        inline-block
        text-center
        py-5
        mt-4
        rounded-t-lg
        text-gray-500
        "
        >{selectContent}</span>

        <div>
          { }
        </div>

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
        >{
            !openChapter
            ?course.nameGrade
            :openChapter
          }</span>
        <div>
          {!showLevelChapter
            ?selectedContent.content.map((item, index) => (
              <div key={index}
              >
                <div
                  onClick={() => {
                    setShowLevelChapter(item.levels)
                  }}
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
                mt-4
                shadow-[inset_0px_0px_5px_0px_rgba(100,100,100,0.1)]
                cursor-pointer
              "
                >
                  <span>فصل{item.chapter} {course.nameGrade} {selectContent}</span>
                  <span
                    className={`
                    transition-all
                    duration-200
                    ${openChapter
                        ? "-rotate-180"
                        : "rotate-0"
                      }
                    `}
                  ></span>
                </div>

                <div
                  className={`
                    grid
                    transition-[grid-template-rows]
                    duration-300
                    ease-in-out
                    ${openChapter === item.chapter
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"

                    }
                    `}
                >
                  <div className="overflow-hidden">
                    {
                      item.levels.map((level, index) => (
                        <div
                          key={index}
                          onClick={() => { setOpenLevel(level.content) }}
                          className="
                        group
                        flex
                        flex-row-reverse
                        items-center
                        justify-between
                        border-b
                        border-gray-300
                        rounded-b-sm
                        px-4
                        py-3
                        text-gray-500
                        cursor-pointer
                        transition-all
                        duration-300
                        hover:border-b-sky-400
                        hover:bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
                        hover:text-sky-50
                      "
                        >
                          <span>{level.title}</span>
                          <img
                            src={level.content.img}
                            alt=""
                            className="
                        w-12
                        h-12
                        rounded-sm
                        border
                        border-gray-300
                        group-hover:border-blue-300
                        group-hover:border-2
                        group-hover:shadow-[0_0_10px_0_rgb(0,255,213)]
                        "
                          />
                        </div>
                      ))
                    }
                  </div>
                </div>



              </div>
            ))
            :<div>
              <div></div>

              <div>{
                showLevelChapter.map((level,index) => (
                  <div
                  className='
                  flex
                  flex-row-reverse
                  items-center
                  justify-between
                  border-b
                  border-gray-200
                  rounded-b-lg
                  px-4
                  py-5
                  mt-4
                  shadow-[inset_0px_0px_5px_0px_rgba(100,100,100,0.1)]
                  cursor-pointer
                  '
                  >
                    <span
                    className=""
                    >{level.title}</span>
                    <span>
                      {
                        level.level === "levelOne"
                        ?<FcLike className='text-3xl'/>
                        :level.level === "levelTow"
                        ?<FcReading className='text-3xl'/>
                        :level.level === "levelThree"
                        ?<FcGraduationCap className='text-3xl'/>
                        :<FcFlashOn className='text-3xl'/>
                      }
                    </span>
                  </div>
                ))
                }</div>
            </div>
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
                onChange={() => {
                  setSelectContent(item.name)
                  setOpenChapter(null)
                }}
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
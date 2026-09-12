import React, { useState } from 'react'
import { useParams } from 'react-router'
import courses from "../data/dataCourses"
import Filter from '../components/Chapter/Filter'
import Level from '../components/Chapter/Level'
import Video from '../components/Video/Video'

const Chapter = () => {

  const arrayFilter = [
        {
          filter: "تیز هوشان",
          levelFilter: "levelFour"
        },
        {
          filter: "سخت",
          levelFilter: "levelThree"
        },
        {
          filter: "متوسط",
          levelFilter: "levelTow"
        },
        {
          filter: "آسان",
          levelFilter: "levelOne"
        },
        {
          filter: "همه",
          levelFilter: "all"
        },
    ]

    const param = useParams()

    
    
    
    const grade = courses.find(item => item.gradeId === +param.yearId)
    const title = grade.contentCourse.find(item => item.title === param.titleCase)
    const chapter = title.content.find(item => item.chapter === +param.numChapter)

    
    const [filtered,setFiltered] = useState("all")
    const [arrayLevels,setArrayLevels] = useState(chapter.levels)
    const [selectedVideo,setSelectedVideo] = useState(null)
    const [firstVideo,setFirstVideo] = useState(null)


    const settingArrayLevel = level => {
      if (level === "all") {
        setArrayLevels(chapter.levels)

      } else {
        setArrayLevels(
          chapter.levels.filter(item => item.level === level)
        )
        console.log(chapter.levels.filter(item => item.level === level))
      }
    }


  return (
    <div
    className='
    chapterContainer
    min-h-screen
    bg-white
    grid
    grid-cols-[4fr_5fr]
    gap-12
    py-8
    px-8
    '
    >
      <div className={`
        sectionLeft
        bg-blue-50
        `}>
          <Video 
          video={selectedVideo}
          firstVideo={firstVideo}
          />
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
        onFilter={settingArrayLevel}
        filtered={filtered}
          />
          <div className="
          bottom
          h-full
          w-full
          shadow-[0_0_20px_0_rgba(0,0,0,0.1)]
          rounded-lg
          bg-[(rgba(255,255,255,0.1))]
          backdrop-blur-[3px]
          flex
          flex-col
          gap-6
          py-8
          px-4
          ">
            {
              arrayLevels.map((item,index) => (
                <Level
                key={index}
                lable={item.title}
                icon={item.icon}
                content={item}
                code={item.codeNumber}
                onSelecteVideo={setSelectedVideo}
                onSelectFirstVideo={setFirstVideo}
                />
              ))
            }
          </div>

        </div>
    </div>
  )
}

export default Chapter
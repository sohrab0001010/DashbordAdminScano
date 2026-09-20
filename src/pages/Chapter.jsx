import React, { useState } from 'react'
import { useParams } from 'react-router'
import courses from "../data/dataCourses"
import Filter from '../components/Chapter/Filter'
import Level from '../components/Chapter/Level'
import Video from '../components/Video/Video'
import VideoModal from '../components/Video/VideoModal'

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
    const [openCode,setOpenCode] = useState(null)
    const [contentLevel,setContentLevel] = useState(null)
    const [showModalVideo,setShowModalVideo] = useState(false)


    const handleToggle = item => {
      setOpenCode(prev => (prev === item.codeNumber ? null : item.codeNumber))
      setSelectedVideo(item.content.videos[0].vid)
      setContentLevel(item.content)
    }


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
    overflow-x-hidden
    relative
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
        `}>
          <Video 
          video={selectedVideo}
          contentLevel={contentLevel}
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
          rounded-lg
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
                isOpen={openCode === item.codeNumber}
                onToggle={() => handleToggle(item)}
                setShowModalVideo={setShowModalVideo}
                />
              ))
            }
          </div>

      </div>

      <VideoModal
      setShowModalVideo={setShowModalVideo}
      showModalVideo={showModalVideo}
      />
    </div>
  )
}

export default Chapter
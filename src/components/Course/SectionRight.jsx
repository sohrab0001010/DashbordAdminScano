import React from 'react'
import { Link } from 'react-router'

const SectionRight = ({ course,selectedSection }) => {

  const sectionActive = course.contentCourse.find(item => 
    item.name === selectedSection
  )


  return (

    <div>

          {
            sectionActive.content.map((item,index) => (
              <Link
              key={index}
              to={`/year/${course.gradeId}/${sectionActive.title}/${item.chapter}`}
              >
              <div
              className='
              group
              flex
              justify-between
              items-center
              px-16
              py-8
              mt-12
              border-b
              border-gray-200
              bg-white
              shadow-[0_0_10px_0_rgba(0,0,0,0.1)]
              cursor-pointer
              rounded-tl-4xl
              rounded-br-4xl
              transition-all
              duration-300
              ease-in-out
              hover:shadow-[0_0_20px_0_rgba(0,0,0,0.1)]
              hover:scale-3d
              hover:-translate-y-2
              '
              >
                <span
                className='
                text-gray-500
                '
                >{sectionActive.name}</span>
                <span
                className='
                bg-blue-50
                border
                border-blue-200
                rounded-lg
                py-2
                px-4
                text-gray-500
                transition-all
                duration-200
                ease-in-out
                group-hover:bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
                group-hover:border-[rgb(0,255,213)]
                group-hover:text-[rgb(0,255,213)]
                '
                >فصل{item.chapter}</span>
              </div>
              </Link>
            ))
          }
        

      

    </div>

  )
}

export default SectionRight

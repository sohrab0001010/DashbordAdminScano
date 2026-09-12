import React from 'react'
import { PiStudentFill } from "react-icons/pi";
import { RiQrScan2Line } from "react-icons/ri";


const Video = ({video,firstVideo}) => {

  return (
    <div
    className='
    h-full
    w-full
    '
    >
      {
        !video || !firstVideo

        /*No video is seleted in this case*/

        ?<div
        className={`
          substitute
          w-full
          h-100
          rounded-lg
          text-blue-50
          flex
          flex-col
          justify-center
          gap-8
          px-20
          text-2xl
          font-medium
          bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
          `}
        >
          <div className='flex gap-4 items-center'>
          <RiQrScan2Line/>
          <span>اینجا راحت اسکن کن</span>
          </div>

          <div className='flex gap-4 items-center justify-end'>
          <PiStudentFill/>
          <span >اینجا راحت یاد بگیر</span>
          </div>
        </div>

          /*In this case the video is selected*/

        :firstVideo
        ?
        :<div className='h-100'>
          <video src={video.vid}  controls className="w-full h-full rounded-lg"/>
          <div>
            {console.log(video)}
          </div>
        </div>
      }
    </div>
  )
}

export default Video






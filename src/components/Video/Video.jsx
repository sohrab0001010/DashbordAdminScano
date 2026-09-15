import React from 'react'
import { ImGift } from 'react-icons/im';

import { PiStudentFill } from "react-icons/pi";
import { RiQrScan2Line } from "react-icons/ri";
import { RiFileDownloadFill } from "react-icons/ri";

const Video = ({ video,contentLevel }) => {
  return (
    <div
      className="
        h-full
        w-full
      "
    >

      {
        !video

        /* No video is selected in this case */

        ? (
          <div
            className="
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
            "
          >

            <div className="flex gap-4 items-center">
              <RiQrScan2Line />
              <span>اینجا راحت اسکن کن</span>
            </div>

            <div className="flex gap-4 items-center justify-end">
              <PiStudentFill />
              <span>اینجا راحت یاد بگیر</span>
            </div>

          </div>
        )

        /* In this case the video is selected */

        : (
          <div
          className='
          flex
          flex-col
          gap-8
          '
          >
          <div className="h-100">
            <video
              src={video}
              controls
              className="
              w-full 
              h-full 
              rounded-lg
              shadow-[0_0_10px_0_rgba(0,0,0,0.1)]
              "
            />
          </div>

          <div
          className='
          h-20 
          flex
          flex-row
          justify-between
          px-4
          '
          >
            <div
            className='
            flex
            flex-col
            justify-center
            items-center
            gap-2
            cursor-pointer
            '
            >
              <img 
              className='
              h-10
              w-10 
              '
              src={contentLevel.img} 
              alt="" />
              <span>
                مشاهده سوالات 
              </span>
            </div>

            <div className='
            text-xl
            flex
            items-center
            gap-3
            cursor-pointer
            '>
              <span><RiFileDownloadFill/></span>
              <span>دانلود سوالات</span>
            </div>

          </div>
          </div>
        )
      }

    </div>
  )
}

export default Video

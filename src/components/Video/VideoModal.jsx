{/*this component is related to video*/ }

import React from 'react'
import Subscription from '../Subscription/Subscription'
import { CgArrowLeft } from "react-icons/cg";


const VideoModal = ({setShowModalVideo,showModalVideo}) => {
    return (
        <>

        {/* Dark glass-like background */}

        <div
        onClick={() => setShowModalVideo(false)}
        className={`
          fixed
          inset-0
          z-40
          bg-black/2
          backdrop-blur-md
          select-none
          transition-opacity
          duration-300
          ${showModalVideo ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      />

        {/* Modal */}

        <div
            className={`
                fixed
                top-1/2
                left-1/2
                z-50
                backdrop-blur-[3rem]
                bg-[rgba(74,171,255,0.05)]
                border
                border-[rgb(142,202,255)]
                flex
                flex-col
                justify-center
                items-center
                gap-10
                rounded-lg
                py-8
                px-24
                transition-transform
                duration-300
                ease-out
                ${showModalVideo ? "translate-x-[-50%] translate-y-[-50%]" : "translate-x-[calc(-50%+100vw)] translate-y-[-50%]"}
                `}
            
        >

            <span
            className='
            flex
            justify-start
            w-full
            px-8
            text-gray-700
            '
            >
                <CgArrowLeft
                onClick={() => setShowModalVideo(false)}
                className='
                cursor-pointer
                relative
                -left-24
                '
                />
            </span>
            <span
            className='
            font-medium
            text-gray-700
            '
            >
                برای دیدن تمام فیلم‌های آموزشی باید اشتراک بخرید
            </span>

            <Subscription />
        </div>
        </>
    )
}

export default VideoModal

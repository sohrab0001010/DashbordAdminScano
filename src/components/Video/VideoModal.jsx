{/*this component is related to video*/ }

import React from 'react'
import Subscription from '../Subscription/Subscription'
import { CgArrowLeft } from "react-icons/cg";


const VideoModal = ({setShowModalVideo}) => {
    return (
        <div
            className='
            relative
            -top-80
            left-104
            z-10
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
            py-4
            '
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
    )
}

export default VideoModal

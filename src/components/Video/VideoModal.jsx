{/*this component is related to video*/ }

import React from 'react'
import Subscription from '../Subscription/Subscription'
import { CgArrowLeft } from "react-icons/cg";


const VideoModal = () => {
    return (
        <div
            className='
    bg-[rgba(74,171,255,0.05)]
    border
    border-[rgb(74,171,255)]
    flex
    flex-col
    justify-center
    items-center
    gap-10
    rounded-lg
    py-4
    '
        >

            <span>
                <CgArrowLeft/>
            </span>
            <span
            className='
            font-medium
            text-gray-500
            '
            >
                برای دیدن تمام فیلم‌های آموزشی باید اشتراک بخرید
            </span>

            <Subscription />
        </div>
    )
}

export default VideoModal

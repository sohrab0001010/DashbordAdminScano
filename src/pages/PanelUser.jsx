import React from 'react'
import UserContent from '../components/PanelUser/UserContent';

const PanelUser = () => {
  return (
    <div
    className="
    h-screen
    bg-500
    grid
    grid-cols-[9fr_2fr]
    gap-10
    py-10
    px-30
    "
    >

        <div className="
        content
        bg-white
        shadow-[0_0_20px_0_rgba(0,0,0,0.1)]
        rounded-lg
        ">

        </div>

        <div className="
        navbar
        bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
        rounded-lg
        p-4
        flex
        flex-col
        items-center
        justify-between
        ">
          <UserContent/>

        </div>

    </div>
  )
}

export default PanelUser
import React, { useState } from 'react'
import { GiExitDoor } from "react-icons/gi";
import UserProperty from '../components/PanelUser/UserProperty';
import UserCheck from '../components/PanelUser/UserCheck';
import Questions from '../components/PanelUser/Questions';
import Transaction from '../components/PanelUser/Transaction';

const PanelUser = () => {

  const [selected,setSelected] = useState("question")

  return (
    <div
    className="
    select-none
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
          {
            selected === "question"
            ? <Questions/>
            :<Transaction/>
          }
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
          <UserProperty/>

          <UserCheck
          selected={selected}
          setSelected={setSelected}
          />

          <button
          className="
          w-full
          flex
          items-center
          justify-around
          gpa-4
          bg-white/10
          py-2
          px-4
          text-sm
          font-medium
          rounded-lg
          text-gray-200
          cursor-pointer
          transition-all
          duration-300
          hover:bg-black/0
          hover:text-[rgb(0,255,213)]
          "
          >
            <GiExitDoor/>
            <span>خروج از حساب کاربری</span>
          </button>
        </div>

    </div>
  )
}

export default PanelUser
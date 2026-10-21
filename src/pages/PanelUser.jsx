import React, { useContext, useState } from 'react'
import { GiExitDoor } from "react-icons/gi";
import { useLocation, useNavigate } from 'react-router';
import UserProperty from '../components/PanelUser/UserProperty';
import UserCheck from '../components/PanelUser/UserCheck';
import Questions from '../components/PanelUser/Questions';
import Transaction from '../components/PanelUser/Transaction';
import { AuthContext  } from '../components/context/AuthContext';

const PanelUser = () => {

  const location = useLocation();
  const [selected,setSelected] = useState(location.state?.selected ?? "question")
  const { setUser } = useContext(AuthContext)

  const navigate = useNavigate()

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
            ?<Questions/>
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
          onClick={() => {
            setUser(null)
            navigate("/")
          }}
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
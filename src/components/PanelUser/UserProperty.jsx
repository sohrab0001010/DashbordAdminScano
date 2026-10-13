import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

const UserContent = () => {

  const { user,setUser } = useContext(AuthContext)
  return (
    <div
    className="
    flex
    flex-row-reverse
    justify-between
    items-center
    w-full
    "
    >
        <img src="/images/defaultUser/user.png" alt="" 
        className="
        h-10
        w-10
        rounded-full
        border
        border-[rgb(0,255,213)]
        "
        />
        
        <div
        className="
        text-[0.7rem]
        flex
        flex-col
        gap-2
        font-medum
        text-[rgb(0,255,213)]
        "
        >
          <span>{user.name}</span>
          <span>{user.phone}</span>
        </div>
    </div>
  )
}

export default UserContent
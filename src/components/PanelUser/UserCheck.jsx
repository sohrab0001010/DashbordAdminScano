import React, { useState } from 'react'

const UserCheck = ({selected,setSelected}) => {

  

  const ArrCheck = [
    {title: "پرسش و پاسخ", id: "question"},
    {title: "تراکنش ها", id: "transaction"}
  ] 

  return (
    <div className="
    w-full
    flex 
    flex-col 
    gap-8
    ">

      {
        ArrCheck.map(item => (
          <label 
          key={item.id}
          className="
          w-full
          flex 
          items-center 
          justify-end
          px-4
          py-2
          rounded-tl-full
          gap-2 
          cursor-pointer
          text-gray-100
          transition-all
          duration-200
          has-checked:bg-black/30
          has-checked:text-[rgb(0,255,213)]
          ">
            <input
              type="checkbox"
              name="userCheck"
              id={item.id}
              checked={selected === item.id}
              onChange={() => setSelected(
                prev => prev = item.id
              )}
              className='
              sr-only
              peer
              '
            />
            <span>{item.title}</span>
          </label>

        ))
      }

    </div>
  )
}

export default UserCheck
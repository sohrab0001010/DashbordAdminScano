{/*
    In this section, the books selected by the user are placed in the final checkout area
*/}



import React from 'react'


const Selected = ({imgBook,name,quantity}) => {
  return (
    <div
    className='
    bg-white
    text-gray-500
    text-[1.2rem]
    font-medium
    flex
    flex-row-reverse
    items-center
    justify-between
    px-8
    '
    >
        <img 
        src={imgBook} 
        alt={name} 
        className='
        h-28
        w-21
        shadow-[0_0_20px_0_rgba(0,0,0,0.2)]
        rounded-lg
        '
        />
        <span>{name}</span>
        <span>تعداد : {quantity}</span>
    </div>
  )
}

export default Selected
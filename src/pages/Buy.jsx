import React from 'react'
import { useParams } from 'react-router'
import dataCourses from "../data/dataCourses"

const Buy = () => {

  const param = useParams()
  console.log(param)

  const grade = dataCourses.find(item => item.gradeId === +param.yearId)
  console.log(grade)

  return (
    <div
    className='
    h-80
    flex
    flex-col
    items-center
    justify-center
    gap-16
    px-120
    '
    >
    
    <div className="
    goldSubsciption
    cursor-pointer
    w-full
    flex
    justify-end
    ">
      <span
      className='
      bg-[linear-gradient(135deg,#92400E,#D97706,#FCD34D,#A16207)]
      shadow-[0_0_20px_rgba(251,191,36,0.45)]
      px-12
      py-4
      rounded-full
      rounded-br-none
      text-yellow-900
      '
      >
      اشتراک طلایی (شش ماه) {grade.priceGold}
      </span>

    </div>

    <div className="
    silverSubsciption
    cursor-pointer
    w-full
    flex
    justify-start
    ">
      <span
      className='
      bg-[linear-gradient(135deg,#4B5563,#D1D5DB,#FFFFFF,#9CA3AF)]
      shadow-[0_0_20px_rgba(209,213,219,0.55)]
      px-12
      py-4
      rounded-full
      rounded-tl-none
      text-gray-600
      '
      >
      اشتراک نقره‌ای (یک ماه) {grade.priceSilver}
      </span>
    </div>
        
    </div>
  )
}

export default Buy
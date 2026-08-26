import React, { useEffect, useState } from 'react'

const OTPTimer = () => {

  const [time, setTime] = useState(120)


  useEffect(() => {

    if (time === 0) return

    const timer = setInterval(() => {
      setTime(prev => prev - 1)
      console.log(time)
    }, 1000)

    return (() => clearInterval(timer))
  }, [time])


  const minutes = Math.floor(time / 60)
  const seconds = time % 60


  return (
    <div
      className='flex gap-2'
    >

      <span>کد را دریافت نکردید؟ </span>
      {
        minutes > 0 || seconds > 0
        ? <span>{minutes}:{seconds.toString().padStart(2, "0")}</span>
        : <span
        className='
        font-medium 
        cursor-pointer
        shrink-0
        border-none
        bg-transparent
        p-0
        text-[#0C2965]
        hover:text-[#174EA6]
        transition-colors
        duration-200
        '
        onClick={() => setTime(120)}
        >ارسال کد</span>
      }

    </div>
  )
}

export default OTPTimer
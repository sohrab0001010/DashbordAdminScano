import React from 'react'

const UserCheck = () => {
  return (
    <div className="
    w-full
    flex 
    flex-col 
    gap-8
    ">

      <label className="
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
      has-checked:bg-white/10
      has-checked:text-rgb(0,255,213)
      ">
        <input
          type="checkbox"
          name="userCheck"
          id="question"
          className='
          sr-only
          peer
          '
        />
        <span>پرسش و پاسخ‌ها</span>
      </label>

      <label className="
      w-full
      px-4
      py-2
      flex 
      items-center
      justify-end
      gap-2 
      cursor-pointer
      rounded-tl-full
      text-gray-100
      transition-all
      duration-200
      has-checked:bg-white/10
      has-checked:text-rgb(0,255,213)
      ">
        <input
          type="checkbox"
          name="userCheck"
          id="transactions"
          className='
          peer
          sr-only
          '
        />
        <span>تراکنش‌ها</span>
      </label>

    </div>
  )
}

export default UserCheck
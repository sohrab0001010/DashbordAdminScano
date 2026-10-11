import React from 'react'

const UserCheck = () => {
  return (
    <div className="flex flex-col gap-4">

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          name="question"
          id="question"
        />
        <span>پرسش و پاسخ‌ها</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          name="transactions"
          id="transactions"
        />
        <span>تراکنش‌ها</span>
      </label>

    </div>
  )
}

export default UserCheck
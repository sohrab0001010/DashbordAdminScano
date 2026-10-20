import React, { useState } from 'react'

const Transaction = () => {

  const [selectedTransaction,setSelectedTransaction] = useState("transactionSub")

  const transactionArray = [
    {title: "کتاب ها" , id: "transactionBook"},
    {title: "اشتراک ها" , id: "transactionSub"}
  ]

  return (
    <div
    className='
    h-full
    grid
    grid-rows-[1fr_14fr]
    gap-4
    '
    >

      <div
      className='
      w-full
      flex
      justify-end
      items-center
      gap-4
      pr-8
      '
      >
        {transactionArray.map(item => (
          <label
          key={item.id}
          className='
          w-30
          h-full
          flex
          items-center
          justify-center
          cursor-pointer
          text-gray-500
          border-r
          border-r-gray-200
          border-b
          border-b-gray-200
          transition-all
          duration-200
          has-checked:text-blue-900
          has-checked:border-b
          has-checked:border-b-blue-900
          has-checked:border-b-3
          has-checked:font-medium
          has-checked:shadow-[inset_0_2px_5px_0_rgba(0,0,0,0.1)]
          '
          >
            <input 
            type="checkbox"
            name="transactions"
            id={item.id}
            checked={selectedTransaction === item.id}
            onChange={() => setSelectedTransaction(
              prev => prev = item.id
            )}
            className='
            sr-only
            peer
            '
            />
            <span>{item.title}</span>
          </label>
        ))}
      </div>

      <div
      className='
      bg-red-100
      px-4
      py-6
      '
      >
        <div
        className='
        flex
        flex-col
        gap-4
        bg-[linear-gradient(135deg,#777777,#F7F7F7,#B0B0B0,#FFFFFF,#858585)]
        px-4
        py-6
        max-h-100
        overflow-y-auto
        '
        >
          {
            Array.from({length : 14}).map((item,index) => (
              <div
              key={index}
              className={`
                ${
                  index%2 == 0
                  ?"bg-[linear-gradient(135deg,#80003D_0%,#35005E_50%,#001C57_100%)]"
                  :"bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]"
                }
                `}
              >
                <span>مبلغ تراکنش : 8000000 تومان</span>
                <span>تاریخ تراکنش : 18/5/1405</span>
                <span>ساعت تراکنش : 18:50</span>
              </div>
            ))
          }
        </div>
      </div>


    </div>
  )
}

export default Transaction

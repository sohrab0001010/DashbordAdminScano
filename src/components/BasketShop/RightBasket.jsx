import React, { useState } from 'react';
import { VscTrash } from "react-icons/vsc";
import BasketContext from '../context/BasketContext';

const RightBasket = ({basket}) => {





  return (
    <div
    className='
    p-4
    flex
    flex-col
    items-center
    justify-center
    gap-8
    shadow-[0_0_20px_0_rgba(0,0,0,0.1)]
    rounded-lg
    text-gray-500
    '
    >
      <h2
      className='
      w-full
      text-right
      font-medium
      px-16
      '
      >
        سبد خرید شما
      </h2>

      {
        basket.map(item => (
          <div
          key={item.id}
          dir='rtl'
          className='
          grid
          grid-cols-[2fr_3fr_4fr_2fr]
          gap-8
          items-center
          '
          >
            <div className="containerImg">
              <img 
              className='
              h-40
              w-30
              shadow-[0_0_20px_0_rgba(0,0,0,0.4)]
              rounded-lg
              '
              src={item.imgBook} 
              alt="" />
            </div>

            <div className="
            containerDescription
            h-full
            flex
            flex-col
            justify-center
            items-center
            gap-8
            ">
              <span>{item.name}</span>
              <span>{item.author}</span>
            </div>

            <div className="
            containerPrice
            flex
            flex-col
            gap-8
            ">

              <div
              
              className='
              flex
              gap-16
              '
              >
                <span
                className='
                line-through
                text-gray-400
                '
                >{item.price} تومان</span>
                <span
                className='
                bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
                text-[rgb(0,255,213)]
                px-2
                py-1
                rounded-sm
                '
                >{item.discount}%</span>
              </div>

              <div
              className='flex gap-4'
              >
                <span>قیمت با تخفیف</span>
                <span
                className='text-blue-400'
                >{item.price - item.discount*item.price/100} تومان</span>
              </div>
            </div>

            <div className="
            trash
            flex
            flex-col
            gap-8
            ">
              <span>تعداد : {quantity}</span>
              
              <div
              className='
              flex
              items-center
              justify-between
              '
              >
                <span
                onClick={() => increaseQuantity(item.id)}
                className='
                px-2
                py-0.5
                rounded-sm
                bg-green-400
                text-white
                cursor-pointer
                '
                >+</span>
                <VscTrash
                onClick={() => removeBook(item.id)}
                className='
                cursor-pointer
                transition-all
                duration-300
                hover:text-xl
                '
                />
                <span
                onClick={() => decreaseQuantity(item.id)}
                className='
                px-2
                py-0.5
                rounded-sm
                bg-red-400
                text-white
                cursor-pointer
                '
                >-</span>
              </div>

            </div>
          </div>
        ))
      }
    </div>
  )
}

export default RightBasket
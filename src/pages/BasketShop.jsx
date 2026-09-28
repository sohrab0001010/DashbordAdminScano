import React, { useContext, useState } from 'react'
import BasketContext from '../components/context/BasketContext'
import { ImFilesEmpty } from "react-icons/im";
import LeftBasket from '../components/BasketShop/LeftBasket';
import RightBasket from '../components/BasketShop/RightBasket';

const BasketShop = () => {

  const {basket} = useContext(BasketContext);


  console.log(basket)

  return (
    <div
    className='
    px-24
    py-8
    '
    >
      {
        basket.length === 0
        ?<div
        className='
        border
        bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
        border-gray-400
        flex
        flex-col
        justify-center
        items-center
        gap-8
        py-8
        rounded-2xl
        text-gray-100
        '
        >
          <span>
            سبد خرید شما خالی است
          </span>
          <span className='text-3xl'>
            <ImFilesEmpty/>
          </span>
        </div>
        :<div
        className='
        bg-white
        grid
        grid-cols-[4fr_6fr]
        '
        >
          <div className="
          leftBasket
          py-4
          px-2
          ">
            <LeftBasket/>
          </div>
          
          <div className="
          rightBasket
          py-4
          px-2
          ">
            <RightBasket
            basket={basket}
            />
          </div>
        </div>
      }
    </div>
  )
}

export default BasketShop
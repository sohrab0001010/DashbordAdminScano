import React, { useContext } from 'react'
import BasketContext from '../components/context/BasketContext'
import { ImFilesEmpty } from "react-icons/im";
import LeftBasket from '../components/BasketShop/LeftBasket';

const BasketShop = () => {

  const {basket} = useContext(BasketContext)

  console.log(basket.length)

  return (
    <div
    className='
    bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
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
          bg-black
          h-10
          ">

          </div>
        </div>
      }
    </div>
  )
}

export default BasketShop
import React, { useContext } from 'react'
import { Link } from 'react-router'
import BasketContext from '../context/BasketContext';



const LeftBasket = () => {

    const {basket} = useContext(BasketContext)

    console.log(basket)

    {/*
        Total amount before discount            
    */}
    const totalAmount = basket.reduce(
        (sum,item) => sum + item.price * item.quantity,0
    )


    {/*
        Total discount on all books    
    */}
    const totalDiscount =
    Math.round(
        basket.reduce(
            (sum,item) => 
                sum + (item.price*(item.discount || 0)/100)*item.quantity,0
        )
    ) 

    {/*
        Amount payable
    */}
    const payable = totalAmount - totalDiscount





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
        text-2xl
        font-bold
        '
        >
            خلاصه سفارش
        </h2>

        <div
        className='
        p-4
        flex
        flex-col
        items-center
        justify-center
        gap-8
        '
        >
            <div className="
            totalAmount
            w-full
            flex
            justify-between
            items-center
            ">
                <span dir='rtl'>
                    <span>{totalAmount}</span>
                    تومان
                </span>
                <span>مبلغ کل</span>
            </div>

            <div
            dir='rtl'
            className="
            discountAmount
            w-full
            flex
            justify-between
            items-center
            ">
                <span>مبلغ تخفیف</span>
                <span>
                    <span>{totalDiscount}</span>
                    تومان
                </span>
            </div>

            <hr 
            className='
            w-full
            border-t
            border-gray-200
            '
            />

            <div 
            dir='rtl'
            className="
            payAble
            w-full
            flex
            justify-between
            items-center
            ">
                <span> قابل پرداخت</span>
                <span>
                    <span>{payable}</span>
                    تومان
                </span>
            </div>

            <Link
            to={'/get-address'}
            className='
            bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
            text-[rgb(0,255,213)]
            border
            p-4
            rounded-2xl
            '
            >
            پرداخت و نهایی کردن خرید
            </Link>

            <p>
                با خرید از اسکنو
                {" "}<Link className='font-medium text-sky-500'>قواننین</Link>{" "}
                و شرایط را مطالعه کردم و می پذیرم
            </p>
        </div>
    </div>
  )
}

export default LeftBasket
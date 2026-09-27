import React from 'react'
import { Link } from 'react-router'

const LeftBasket = () => {
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
                    <span>3000000</span>
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
                    <span>200000</span>
                    تومان
                </span>
            </div>

            <hr 
            className='
            w-full
            border-t-1
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
                    <span>280000</span>
                    تومان
                </span>
            </div>

            <Link
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
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
    gap-4
    shadow-[0_0_20px_0_rgba(0,0,0,0.1)]
    rounded-lg
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
        gap-4
        '
        >
            <div className="totalAmount">
                <span>مبلغ کل</span>
                <span>
                    <span>3000000</span>
                    تومان
                </span>
            </div>

            <div className="discountAmount">
                <span>مبلغ تخفیف</span>
                <span>
                    <span>200000</span>
                    تومان
                </span>
            </div>

            <hr />

            <div className="ghbelPardakht">
                <span> قابل پرداخت</span>
                <span>
                    <span>280000</span>
                    تومان
                </span>
            </div>

            <Link>
            پرداخت و نهایی کردن خرید
            </Link>
            <p>
                با خرید از اسکنو
                <Link>قوانین</Link>
                 و شرایط را مطالعه کردم و می‌پذیرم
            </p>
        </div>
    </div>
  )
}

export default LeftBasket
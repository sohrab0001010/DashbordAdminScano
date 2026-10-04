import React from 'react'

const Form = () => {
  return (
    <div

    >
        <form 
        action=""
        className='
        flex
        flex-col
        gap-4
        '
        >
            <input
            dir='rtl' 
            type="text" 
            className='
            bg-white
            py-2
            px-4
            text-[1.2rem]
            rounded-sm
            shadow-[0_0_20px_0_rgba(0,0,0,0.1)]
            text-gray-500
            outline-none
            border-b
            border-gray-300
            '
            placeholder='نام و نام خانوادگی'
            />

            <input
            dir='rtl' 
            type="text"
            inputMode="numeric" 
            className='
            bg-white
            py-2
            px-4
            text-[1.2rem]
            rounded-sm
            shadow-[0_0_20px_0_rgba(0,0,0,0.1)]
            text-gray-500
            outline-none
            border-b
            border-gray-300
            '
            placeholder='شماره موبایل'
            />

            <input
            dir='rtl' 
            type="text" 
            className='
            bg-white
            py-2
            px-4
            text-[1.2rem]
            rounded-sm
            shadow-[0_0_20px_0_rgba(0,0,0,0.1)]
            text-gray-500
            outline-none
            border-b
            border-gray-300
            '
            placeholder='استان'
            />

            <input
            dir='rtl' 
            type="text" 
            className='
            bg-white
            py-2
            px-4
            text-[1.2rem]
            rounded-sm
            shadow-[0_0_20px_0_rgba(0,0,0,0.1)]
            text-gray-500
            outline-none
            border-b
            border-gray-300
            '
            placeholder='شهر'
            />

            <input
            dir='rtl' 
            type="textaria"
            aria-rowcount={2}
            row
            className='
            bg-white
            py-2
            px-4
            text-[1.2rem]
            rounded-sm
            shadow-[0_0_20px_0_rgba(0,0,0,0.1)]
            text-gray-500
            outline-none
            border-b
            border-gray-300
            '
            placeholder='آدرس دقیق'
            />

            <input
            dir='rtl' 
            type="text" 
            inputMode="numeric"
            pattern='[0-9]*'
            className='
            bg-white
            py-2
            px-4
            text-[1.2rem]
            rounded-sm
            shadow-[0_0_20px_0_rgba(0,0,0,0.1)]
            text-gray-500
            outline-none
            border-b
            border-gray-300
            '
            placeholder='کد پستی'
            />

            <input
            dir='rtl' 
            type="submit" 
            value="رفتن به صفحه پرداخت"
            inputMode="numeric"
            className='
            bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
            py-2
            px-4
            text-[1.2rem]
            text-[rgb(0,255,213)]
            rounded-sm
            shadow-[0_0_20px_0_rgba(0,0,0,0.1)]
            outline-none
            border
            '
            />
        </form>
    </div>
  )
}

export default Form
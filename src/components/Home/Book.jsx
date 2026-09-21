import React from 'react'

const Book = ({imgBook,name,price,author,count,discount}) => { 




    const discountedPrice = price - price*discount



    return (
        <div
        className='
        flex
        flex-col
        justify-center
        items-center
        gap-4
        py-4
        px-16
        bg-[linear-gradient(135deg,#CBD5E1,#F1F5F9,#FFFFFF,#E2E8F0)]
        shadow-[0_0_25px_rgba(226,232,240,0.65)]
        rounded-lg
        text-gray-500
        transition-all
        duration-300
        hover:scale-3d
        hover:-translate-y-2
        hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)]
        '
        >
            <img
                className="
                w-72
                h-80
                rounded-sm
                shadow-[0_0_20px_0_rgba(0,0,0,0.1)]
                "
                src={imgBook}
                alt={name} />

            <span>نویسنده : {author}</span>
            {
                discount 
                ?<>
                <div>
                    <span className='line-through'>{price}</span>
                    <span>{discount}% تخفیف</span>
                </div>
                <span>
                    قیمت با تخفیف: {discountedPrice} تومان
                </span>
                </>
                :<>
                <span>قیمت : {price} تومان</span>     
                </>
                
            }
            <span>موجودی : {count} عدد</span>
            <button
            onClick={() => console.log('click')}
            className='
            bg-green-500
            text-white
            cursor-pointer
            p-4
            rounded-2xl
            transition-all
            duration-300
            hover:bg-[rgb(0,255,0)]
            hover:text-green-700
            '
            >+ افزودن به سبد خرید</button>
        </div>
    )
}

export default Book

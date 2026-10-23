import React, { useContext, useState } from 'react'
import BasketContext from '../context/BasketContext'
import { ThemeContext } from '../context/ThemeContext';


const Book = ({book,onShowModal}) => { 



    const { addToBasket,basket } = useContext(BasketContext)
    const { theme } = useContext(ThemeContext)

    const discountedPrice = book.price - book.price*book.discount/100

    const handleAddToBasket = () => {
        const choosenBook = basket.find(item => item.id == book.id)

        const currentQuantity = choosenBook
        ?choosenBook.quantity
        :0

        if (book.count === 0) {
            onShowModal("notExist")
            return
        }

        if (currentQuantity === book.count) {
            onShowModal("beingLow")
            return
        }

        addToBasket(book)
    }

    return (
        <div
        className={`
            flex
            flex-col
            justify-center
            items-center
            gap-4
            py-4
            px-16
            ${
                theme === "light"
                ?`bg-[linear-gradient(135deg,#CBD5E1,#F1F5F9,#FFFFFF,#E2E8F0)] text-gray-500`
                :`bg-gradient-to-br from-zinc-950 via-zinc-800 to-zinc-600 text-gray-200`
            }
            
            shadow-[0_0_25px_rgba(226,232,240,0.65)]
            rounded-lg
            transition-all
            duration-300
            hover:scale-3d
            hover:-translate-y-2
            hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)]
            `}
        >
            <img
                className="
                w-72
                h-80
                rounded-sm
                shadow-[0_0_20px_0_rgba(0,0,0,0.1)]
                "
                src={book.imgBook}
                alt={book.name} />

            <span>نویسنده : {book.author}</span>
            <span>عنوان : {book.name}</span>
            {
                book.discount 
                ?<>
                <div
                className='
                flex
                gap-4
                items-center
                '
                >
                    <span className='line-through'>{book.price}</span>
                    <span
                    className='
                    bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
                    py-2
                    px-4
                    text-[rgb(0,255,213)]
                    rounded-lg
                    '
                    > تخفیف %{book.discount}</span>
                </div>
                <span>
                    قیمت با تخفیف: {discountedPrice} تومان
                </span>
                </>
                :<>
                <span>قیمت : {book.price} تومان</span>     
                </>
                
            }
            <span>موجودی : {book.count} عدد</span>
            <button
            onClick={handleAddToBasket}
            className='
            bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
            text-white
            cursor-pointer
            p-4
            rounded-2xl
            transition-all
            duration-300
            hover:text-[rgb(0,255,213)]
            '
            >+ افزودن به سبد خرید</button>
        </div>
    )
}

export default Book

import React, { useState } from 'react'
import BasketContext from "./BasketContext"

const BasketProvider = ({ children }) => {

  const [basket, setBasket] = useState([])

  // افزودن کتاب: اگه از قبل تو سبد بود، فقط تعدادش یکی زیاد می‌شه (تا سقف موجودی)
  const addToBasket = book => {
    setBasket(prev => {
      const exists = prev.some(item => item.id === book.id)

      if (exists) {
        return prev.map(item =>
          item.id === book.id && item.quantity < item.count
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...prev, { ...book, quantity: 1 }]
    })
  }

  // افزایش تعداد (حداکثر تا موجودی انبار)
  const increaseQuantity = id => {
    setBasket(prev =>
      prev.map(item =>
        item.id === id && item.quantity < item.count
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  // کاهش تعداد (حداقل ۱؛ برای حذف کامل از دکمه‌ی سطل زباله استفاده می‌شه)
  const decreaseQuantity = id => {
    setBasket(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    )
  }

  // حذف کامل کتاب از سبد
  const removeFromBasket = id => {
    setBasket(prev => prev.filter(item => item.id !== id))
  }

  return (
    <BasketContext.Provider
      value={{
        basket,
        addToBasket,
        increaseQuantity,
        decreaseQuantity,
        removeFromBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider

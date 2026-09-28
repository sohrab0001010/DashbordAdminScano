import React, { useState } from 'react'
import BasketContext from "./BasketContext"

const BasketProvider = ({children}) => {

    const [basket,setBasket] = useState([])

    {/* 
      In this section ,the book is added;
      If the book already exists,its quantity is inceased.
    */}

    const addToBasket = book => {
      setBasket(prev => {
        const existBook = prev.some(item => item.id === book.id)

        if (existBook) {
          return prev.map(item => (
            item.id === book.id && item.quantity < item.count
            ?{...item,quantity : item.quantity + 1}
            : item
          ))
        }

        return [...prev,{...book,quantity : 1}]
      })
    }

  return (
    <BasketContext.Provider value={{basket,addToBasket}}>
        {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider

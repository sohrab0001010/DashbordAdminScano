import React, { useState } from 'react'
import BasketContext from "./BasketContext"

const BasketProvider = ({ children }) => {

  const [basket, setBasket] = useState([])



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
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ))
      }

      return [...prev, { ...book, quantity: 1 }]
    })
  }



  {/*
    increase the ammount up to the available balance
  */}
  const increaseQuantity = id => {
    setBasket(prev => {
      return prev.map(item => (
        item.id === id && item.quantity < item.count
        ?{...item,quantity : item.quantity + 1}
        :item
      ))
    })
  }




  {/*
    reduction in the number of books  
  */}
  const decreaseQuantity = id => {
    setBasket(prev => {
      const finded = prev.find(item => item.id === id)

      if (finded.quantity === 1)
        return prev.filter(item => item.id !== id)

      return prev.map(item => (
        item.id === id && item.quantity > 1
        ?{...item,quantity : item.quantity - 1}
        :item
      ))
    })
  }




  {/* 
    deleting the book 
  */}
  const removeBook = id => {
    setBasket(prev => {
      return prev.filter(item => item.id !== id)
    })
  }



  return (
    <BasketContext.Provider value={{ 
      basket, 
      addToBasket,
      increaseQuantity,
      decreaseQuantity,
      removeBook,
       }}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider

import React, { useState } from 'react'
import BasketContext from "./BasketContext"

const BasketProvider = ({children}) => {

    const [basket,setBasket] = useState([])

    const addToBasket = book => {
        const newBook = {...book}

        setBasket(prev => [...prev,newBook])
        
    }

  return (
    <BasketContext.Provider value={{basket,addToBasket}}>
        {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider

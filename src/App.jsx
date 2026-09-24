import React from 'react'
import { RouterProvider } from 'react-router'
import router from "./routes"
import BasketContext from './components/context/BasketContext'

const App = () => {
  return (
    <BasketContext.Provider>
      <RouterProvider router={router}/>
    </BasketContext.Provider>
  )
}

export default App
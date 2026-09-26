import React from 'react'
import { RouterProvider } from 'react-router'
import router from "./routes"
import BasketProvider from './components/context/BasketProvider'

const App = () => {
  return (
    <BasketProvider>
      <RouterProvider router={router}/>
    </BasketProvider>
  )
}

export default App
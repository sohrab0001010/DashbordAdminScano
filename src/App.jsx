import React from 'react'
import { RouterProvider } from 'react-router'
import router from "./routes"
import BasketProvider from './components/context/BasketProvider'
import AuthProvider from './components/context/AuthContext'

const App = () => {
  return (
    <AuthProvider>
      <BasketProvider>
        <RouterProvider router={router} />
      </BasketProvider>
    </AuthProvider>
  )
}

export default App
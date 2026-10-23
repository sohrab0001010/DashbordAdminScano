import React from 'react'
import { RouterProvider } from 'react-router'
import router from "./routes"
import BasketProvider from './components/context/BasketProvider';
import AuthProvider from './components/context/AuthContext';
import ThemeProvider from './components/context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BasketProvider>
          <RouterProvider router={router} />
        </BasketProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
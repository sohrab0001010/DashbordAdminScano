import React from 'react'
import { createBrowserRouter } from 'react-router'
import RootLayout from './components/layout/RootLayout'
import Home from "./pages/Home"

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: "year-fourth",
                element: <div>year fourth</div>
            },
            {
                path: "year-fifth",
                element: <div>year fourth</div>
            },
        ]
    }
])

export default router
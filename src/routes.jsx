import React from 'react'
import { createBrowserRouter } from 'react-router'
import RootLayout from './components/layout/RootLayout'
import Home from "./pages/Home"
import pageCourse from "./pages/Course"

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
                path: "year/:yearId",
                element: <pageCourse/>
            },
        ]
    }
])

export default router
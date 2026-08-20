import React from 'react'
import { createBrowserRouter } from 'react-router'
import RootLayout from './components/layout/RootLayout'
import Home from "./pages/Home"
import PageCourse from "./pages/Course"
import Login from './pages/Login'
import Register from './pages/Register'

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
                element: <PageCourse/>
            },
        ]
    },

    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    }
])

export default router
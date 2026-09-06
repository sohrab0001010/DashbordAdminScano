import React from 'react'
import { createBrowserRouter } from 'react-router'
import RootLayout from './components/layout/RootLayout'
import Home from "./pages/Home"
import PageCourse from "./pages/Course"
import Login from './pages/Login'
import Register from './pages/Register'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Chapter from './pages/Chapter'

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

            {
                path: "login",
                element: <Login/>,
                handle:{hideHeaderFooter:true}
            },
            {
                path: "register",
                element: <Register/>,
                handle: {hideHeaderFooter:true}
            },
            {
                path: "aboutUs",
                element: <AboutUs/>
            },
            {
                path: "contactUs",
                element: <ContactUs/>
            },
            {
                path: "year/:yearId/:titleCase/:numChapter",
                element: <Chapter/>
            }
        ]
    },



])


export default router
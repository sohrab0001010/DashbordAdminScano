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
import Buy from './pages/Buy'
import BasketShop from './pages/BasketShop'
import Payment from './pages/Payment'
import { FaTerminal } from 'react-icons/fa'
import FinalPayment from './pages/FinalPayment'
import PanelUser from './pages/PanelUser'
import Alows from './pages/Alows'

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
            },
            {
                path: "year/buy/:yearId",
                element: <Buy/>
            },
            {
                path: "basket-shop",
                element: <BasketShop/>
            },
            {
                path: 'get-address',
                element: <Payment/>
            },
            {
                path: "final-payment",
                element: <FinalPayment/>
            },
            {
                path: "panel-user",
                element: <PanelUser/>,
                handle:{hideHeaderFooter:true}
            },
            {
                path: "page-alows",
                element: <Alows/>
            }
            
        ]
    },



])


export default router
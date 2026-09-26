import React, { useEffect, useState } from 'react'
import { Link,NavLink } from 'react-router'
import { MdOutlineQrCodeScanner } from "react-icons/md"
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";


const Header = () => {

  const [discounts, setDiscounts] = useState("")

  useEffect(() => {
    const fetchDiscount = async () => {
      try {
        const res = await fetch("https://dummyjson.com/quot");
        const data = await res.json();
        const existDiscount = data.quotes[0].quote;

        setDiscounts(existDiscount || "با اسکنو اسکن کن و یاد بگیر")

      } catch (error) {
        setDiscounts("با اسکنو اسکن کن و یاد بگیر")
      }

    }
    fetchDiscount()
  }, [])





  return (
    <>
    <header
      className="
    flex
    flex-col
    select-none
    bg-white
    "
    >
      <div
        className="
      section-top
      flex
      flex-row-reverse
      min-h-20
      bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
      py-5
      px-10
      text-sky-100
      text-xl
      ">{discounts}</div>


    </header>
    
      <div className="
      section-bottom
      flex
      flex-row-reverse
      items-center
      justify-between
      sticky
      top-0
      z-50
      p-10
      border-b
      border-gray-100
      backdrop-blur-[3rem]
      shadow-[0_4px_15px_rgba(0,0,0,0.08)]
      rounded-b-2xl
      ">
        <div className="
        flex
        flex-row-reverse
        items-center
        gap-8
        text-[1.2rem]
        ">
          {<Link to={"/login"}>
            <div className="
           flex
           flex-row-reverse
           items-center
           gap-3
           rounded-lg
           border
           border-gray-500
           px-4
           py-2
           text-gray-500
           font-medium
           text-[1.2rem]
           select-none
           transition-all
           duration-200
           hover:bg-[rgba(103,176,255,0.11)]
           hover:text-[#0C2965]
           hover:border-[#0C2965]
            ">
              <span>ورود</span>
              <span className="opacity-50">|</span>
              <span>ثبت نام</span>
            </div>
          </Link>}

          <NavLink 
          className={({isActive}) => {

            return isActive
            ?"text-lg font-bold scale-110 text-[#0C2965]"
            :"transition-all duration-200 text-gray-600 hover:text-[#0C2965]"
          }}end
          to={"/"}
          >خانه</NavLink>

          <NavLink 
          className={({isActive}) => {

            return isActive
            ?"text-lg font-bold scale-110 text-[#0C2965]"
            :"transition-all duration-200 text-gray-600 hover:text-[#0C2965]"
          }}end
          to={"/aboutUs"}
          >درباره ما</NavLink>

          <NavLink 
          className={({isActive}) => {

            return isActive
            ?"text-lg font-bold scale-110 text-[#0C2965]"
            :"transition-all duration-200 text-gray-600 hover:text-[#0C2965]"
          }}end
          to={"/contactUs"}
          >تماس با ما</NavLink>
        </div>


        <div
        className='
        flex
        gap-8
        items-center
        '
        >

        <span className="
        logo
        cursor-pointer
        text-4xl
        text-sky-500
        ">
          <MdOutlineQrCodeScanner/>
        </span>

        <div
        className='
        flex
        gap-1
        h-10
        '
        >
          <div
          className='
          flex
          flex-col
          justify-end
          '
          ><Link
          to={'basket-shop'}
          className='
          text-3xl
          text-gray-500
          '
          ><AiOutlineShoppingCart/></Link></div>
          <div
          className='
          flex
          flex-col
          justify-start
          '
          ><span
          className='
          felx
          flex-col
          justify-center
          items-center
          px-4
          bg-[rgb(0,255,0)]
          rounded-full
          rounded-bl-none
          text-white
          transition-all
          duration-300
          '
          >0</span></div>
        </div>
        </div>

      </div>

    </>
  )
}

export default Header
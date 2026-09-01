import React, { useEffect, useState } from 'react'
import { Link,NavLink } from 'react-router'


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
      <div className="
      section-bottom
      flex
      flex-row-reverse
      items-center
      justify-between
      p-10
      border-b
      border-gray-100
      shadow-[0_4px_15px_rgba(0,0,0,0.08)]
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
           border-gray-400
           px-4
           py-2
           text-gray-400
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
            :"transition-all duration-200 text-gray-400 hover:text-[#0C2965]"
          }}end
          to={"/"}
          >خانه</NavLink>

          <NavLink 
          className={({isActive}) => {

            return isActive
            ?"text-lg font-bold scale-110 text-[#0C2965]"
            :"transition-all duration-200 text-gray-400 hover:text-[#0C2965]"
          }}end
          to={"/aboutUs"}
          >درباره ما</NavLink>

          <NavLink 
          className={({isActive}) => {

            return isActive
            ?"text-lg font-bold scale-110 text-[#0C2965]"
            :"transition-all duration-200 text-gray-400 hover:text-[#0C2965]"
          }}end
          to={"/contactUs"}
          >تماس با ما</NavLink>
        </div>



        <span className="
        logo
        cursor-pointer
        h-16
        w-16
        ">
          <img src="/images/logo/logo.jpeg" alt="" />
        </span>

      </div>

    </header>
  )
}

export default Header
import React, { useState } from 'react'
import { useLocation } from 'react-router'

const Register = () => {

  const phoneRegex = /^09\d{9}$/;


  const location = useLocation()
  const phoneUser = location.state?.phoneNum || ""

  const [number, setNumber] = useState(phoneUser)
  const [username, setUsername] = useState("")
  const [getCode,setGetCode] = useState(false)
  const [modal,setModal] = useState(false)
  const [trueName,setTrueName] = useState(false)



  const validNum = phoneRegex.test(phoneUser)


  const validUsername = () => {
    if (
      username.trim().length < 6
      && validNum
    ) {
      setGetCode(true)
      
    }
  }



  const getHandler = 







  return (
    <div
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        flex-col
        items-center
        justify-center
        gap-6
        px-4
        py-8
        bg-[linear-gradient(235deg,rgba(0,221,255,0.381),rgba(255,255,255),rgba(0,217,255,0.221))]
      "
    >
      {/* Logo */}
      <img
        src="/images/logo/logo.jpeg"
        alt="Logo"
        className="
          relative
          z-20
          w-20
          sm:w-24
        "
      />

      {/* Form Wrapper */}
      <div
        className="
          relative
          w-full
          max-w-sm
        "
      >
        {/* Circle 1 */}
        <div
          className="
            absolute
            -top-12
            -left-10
            sm:-left-14
            h-28
            w-28
            sm:h-32
            sm:w-32
            rounded-full
            bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
          "
        />

        {/* Circle 2 */}
        <div
          className="
            absolute
            -bottom-12
            -right-10
            sm:-right-14
            h-28
            w-28
            sm:h-32
            sm:w-32
            rounded-full
            bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
          "
        />

        {/* Form */}
        <div
          className="
            relative
            z-10
            w-full
            min-h-80
            flex
            flex-col
            items-center
            justify-center
            gap-7
            px-6
            py-8
            sm:px-8
            rounded-lg
            bg-[rgba(0,114,244,0.05)]
            backdrop-blur-xl
            select-none
            border
            border-white/20
          "
        >
          {/* Title */}
          <span
            className="
              text-xl
              text-[#0C2965]
              text-center
            "
          >
            مشخصات خود را وارد کنید
          </span>

          <input
            type="text"
            inputMode="numeric"
            placeholder="نام و نام خانوادگی"
            dir="rtl"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="
                    w-full
                    max-w-64
                    bg-white
                    text-[1.1rem]
                    text-black
                    outline-none
                    py-2
                    px-4
                    border
                    border-gray-300
                    rounded-lg
                    focus:border-[#0C2965]
                    transition-colors
                    duration-200
                    placeholder:text-gray-400
                  "
          />

          <input
            type="text"
            inputMode="numeric"
            placeholder="09123456789"
            dir="rtl"
            value={number}
            onChange={e => setNumber(e.target.value)}
            className="
                    w-full
                    max-w-64
                    bg-white
                    text-[1.1rem]
                    text-black
                    outline-none
                    py-2
                    px-4
                    border
                    border-gray-300
                    rounded-lg
                    focus:border-[#0C2965]
                    transition-colors
                    duration-200
                    placeholder:text-gray-400
                  "
          />

          <input
            onClick={() => {
              if (value === "")
            }}
            type="submit"
            value={
              getCode
                ? "دریافت کد"
                : "تایید و ثبت نام"
            }
            className="
              w-full
              max-w-64
              py-2
              text-[1.1rem]
              text-white
              bg-[linear-gradient(135deg,#000000,#232526,#414345,#000000)]
              cursor-pointer
              rounded-lg
              transition-all
              duration-200
              hover:scale-[1.02]
              active:scale-[0.98]
            "
          />
        </div>
      </div>
    </div>
  );
}

export default Register

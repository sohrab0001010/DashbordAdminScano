import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router'
import OTPInput from '../example';
import OTPTimer from '../components/OTPTimer/OTPTimer';
import Modal from '../components/Modal/Modal';
import modalConfig from '../components/Modal/modalConfig';

const Register = () => {

  const phoneRegex = /^09\d{9}$/;

  const inputNameRef = useRef([])
  const location = useLocation()
  const phoneUser = location.state?.phoneNum || ""

  const [number, setNumber] = useState(phoneUser)
  const [username, setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setContirmPssword] = useState("")
  const [getCode, setGetCode] = useState(false)
  const [condition, setCondition] = useState("")
  const [keymodal,setKeymodal] = useState(0)



  const validNum = phoneRegex.test(number)


  const validUsername = () => {
    if (
      !validNum
      || !username
      || !password
      || !confirmPassword
    ) {
      setCondition("unComplete")
      setKeymodal(prev => prev + 1)
      
      return

    } else if (confirmPassword !== password){
      setCondition("inequality")
      setKeymodal(prev => prev + 1)
      return
    }

    setCondition(null)
    setGetCode(true)
  }







  useEffect(() => {inputNameRef.current.focus()},[])


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
      {/* Modal */}

      {
        condition &&
        <Modal
        key={keymodal}
        title={
          condition
          ?modalConfig.error.title
          :modalConfig.success.title
        }
        message={
          condition && condition === "unComplete"
          ?modalConfig.emptyFields.message
          :modalConfig.equlityPassword.message
        }
        icon={modalConfig.error.icon}
        bgIcon={modalConfig.error.iconBg}
        borderIcon={modalConfig.error.borderIcon}
        />
      }

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
            {getCode
              ? "کد تایید را وارد کنید"
              : "مشخصات خود را وارد کنید"
            }
          </span>



          {
            getCode
              ? <>
              <OTPTimer/>
              <OTPInput/>
              </>
              : <>
                <input
                  type="text"
                  ref={inputNameRef}
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
                  type="text"
                  placeholder="یک رمز ایجاد کنید"
                  dir="rtl"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
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
                  placeholder="تایید رمز"
                  dir="rtl"
                  value={confirmPassword}
                  onChange={e => setContirmPssword(e.target.value)}
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

              </>
          }

          <input
            onClick={() => {
              validUsername()
            }}
            type="submit"
            value={
              !getCode
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

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { IoIosArrowRoundBack } from "react-icons/io";

import OTPInput from "../components/common/OTPInput/OTPInput";
import users from "../data/dataUsers"
import OTPTimer from "../components/OTPTimer/OTPTimer";
import Modal from "../components/Modal/Modal";
import modalConfig from "../components/Modal/modalConfig";

const Login = () => {
  const [number, setNumber] = useState("");
  const [confirm, setConfirm] = useState(false);//to control access to the code retireval step on the login page
  const [condition, setCondition] = useState("")
  const [modalkey, setModalkey] = useState(0)
  const inputRef = useRef([]);
  const navigate = useNavigate()

  const phoneRegex = /^09\d{9}$/;


  const confirmPhone = (value) => {

    if (!value.trim()) {
      setCondition("empty")
      setModalkey(prev => prev + 1)
      return
    }

    const validNumber = phoneRegex.test(value);
    const validUser = users.find(user => user.phone === value)

    if (validNumber && validUser) {
      setConfirm(true);

    } else if (validNumber && !validUser) {
      navigate("/register", {
        state: { phoneNum: value }
      })

    } else {
      setCondition("invalid")
      setModalkey(prev => prev + 1)
    }

  };

  const handleResendCode = () => {
    console.log("send Code");
  };


  useEffect(() => {
    inputRef.current.focus()
  }, [])



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

      {condition && (
        <Modal
          key={modalkey}
          title={modalConfig.error.title}
          message={
            condition === "empty"
              ? modalConfig.emptyFields.message
              : modalConfig.inValidPhone.message
          }
          icon={modalConfig.error.icon}
          bgIcon={modalConfig.error.iconBg}
          borderIcon={modalConfig.error.borderIcon}
        />
      )}



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
            {confirm
              ? "کد تایید را وارد کنید"
              : "ورود به حساب کاربری"}
          </span>

          {/* Register / Resend */}
          <div
            dir="rtl"
            className="
              w-full
              max-w-64
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-2
              gap-y-1
              text-sm
              text-center
              font-medium
            "
          >
            {confirm && (
              <OTPTimer />
            )
              //  (
              //   <>
              //     <span>
              //       هنوز ثبت نام نکرده‌اید؟
              //     </span>

              //     <Link
              //       to="/register"
              //       className="
              //         shrink-0
              //         text-[#0C2965]
              //         hover:text-[#174EA6]
              //         transition-colors
              //         duration-200
              //       "
              //     >
              //       ثبت نام
              //     </Link>
              //   </>
              // )
            }
          </div>

          {/* Phone / OTP */}
          <div
            className="
              w-full
              flex
              flex-col
              items-center
              gap-3
            "
          >
            {confirm ? (
              <>
                <div
                  dir="rtl"
                  className="
                    w-full
                    max-w-64
                    flex
                    flex-col
                    items-center
                    gap-2
                    text-sm
                    text-center
                    font-medium
                  "
                >
                  <span>
                    کد به شماره {number} ارسال شد
                  </span>
                </div>
                <OTPInput />
              </>
            ) : (
              <>
                <span
                  dir="rtl"
                  className="
                    w-full
                    max-w-64
                    text-right
                    text-sm
                    font-medium
                  "
                >
                  شماره همراه خود را وارد کنید
                </span>

                <input
                  type="text"
                  ref={inputRef}
                  inputMode="numeric"
                  placeholder="09123456789"
                  dir="rtl"
                  value={number}
                  onChange={(e) => {
                    if (/^\d*$/.test(e.target.value))
                      setNumber(e.target.value)
                  }}

                  onKeyDown={e => {
                    if (e.key === "Enter")
                      confirmPhone(number)
                  }}

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
            )}
          </div>

          {/* Submit */}
          <input
            onClick={() => {
              if (!confirm) {
                confirmPhone(number);
              }
            }}

            type="submit"
            value={
              confirm
                ? "ادامه و ورود به حساب"
                : "تایید و ورود"
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
};

export default Login;
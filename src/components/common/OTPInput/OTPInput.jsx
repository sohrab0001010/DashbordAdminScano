import React, { useEffect, useRef, useState } from 'react'
import dataCode from "../../../data/dataCode"

const OTPInput = ({onLogin}) => {

  const [otp,setOtp] = useState(["","","",""])
  const [statuse,setStatus] = useState(false)
  const otpRef = useRef(otp)
  const inputRef = useRef([])




  const updateOtp = newOtp => {
    otpRef.current = newOtp
    setOtp(newOtp)
  }


  const handleChange = (value,index) => {
    if (!/^\d*$/.test(value)) return

    const newOtp = [...otpRef.current]
    newOtp[index] = value
    updateOtp(newOtp)

    if (value && index === newOtp.length - 1) {
      const code = newOtp.join("")
      confirmCode(+code)

    } else {
      setStatus(false)
    }

    if (value && index < newOtp.length - 1) {
      inputRef.current[index + 1]?.focus()
    }
  }

  const handlekeyDown = (e,index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRef.current[index - 1]?.focus()
    }
  }

  const handleFocuse = index => {
    const firstEmptyIndex = otpRef.current.findIndex(item => item === "")

    if (firstEmptyIndex !== -1 && index > firstEmptyIndex) {
      inputRef.current[firstEmptyIndex]?.focus()
    }
  }


  const confirmCode = code => {
    const findCode = dataCode.find(item => item === code)

    if (findCode) {
      setStatus("valid")
      onLogin("valid")

    } else {
      setStatus("invalid")
      onLogin("invalid")
    }
  }






  useEffect(() => {inputRef.current[0].focus()},[])





  return (
    <div className="inputs flex gap-4">
      {otp.map((value, index) => (
        <input
          key={index}
          value={value}
          ref={elem => inputRef.current[index] = elem}
          onChange={e => handleChange(e.target.value, index)}
          onKeyDown={e => handlekeyDown(e,index)}
          onFocus={() => handleFocuse(index)}
          inputMode='numeric'
          maxLength={1}
          type="text"
          className={`
            text-[1.2rem]
            p-4
            border
            ${
              statuse === "valid"
              ?"bg-green-100 text-green-600 border-green-400"
              :statuse === "invalid"
              ?"bg-red-100 text-red-600 border-red-500"
              :value
              ?"bg-sky-50 text-sky-800 border-sky-800"
              :"bg-white text-gray-500 border-gray-300"
            }
            focus:border-sky-800
            caret-sky-800
            w-12
            h-12
            outline-none
            rounded-lg
            transition-all
            duration-200
            ease-out
            `}
        />
      ))}
    </div>
  )
}

export default OTPInput
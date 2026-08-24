import React, { useEffect, useRef, useState } from 'react'

const OTPInput = () => {
  const [otp, setOtp] = useState(["", "", "", ""])
  const otpRef = useRef(otp) // آینه‌ی همیشه به‌روز
  const inputRefs = useRef([])

  const updateOtp = (newOtp) => {
    otpRef.current = newOtp
    setOtp(newOtp)
  }

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return

    const newOtp = [...otpRef.current]
    newOtp[index] = value
    updateOtp(newOtp)

    if (value && index < newOtp.length - 1) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleFocus = (index) => {
    const firstEmptyIndex = otpRef.current.findIndex(item => item === "")

    if (firstEmptyIndex !== -1 && index > firstEmptyIndex) {
      inputRefs.current[firstEmptyIndex]?.focus()
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  useEffect(() => { inputRefs.current[0]?.focus() }, [])

  return (
    <div className="inputs flex gap-4">
      {otp.map((value, index) => (
        <input
          key={index}
          ref={element => { inputRefs.current[index] = element }}
          value={value}
          onChange={e => handleChange(e.target.value, index)}
          onFocus={() => handleFocus(index)}
          onKeyDown={e => handleKeyDown(e, index)}
          placeholder="_"
          inputMode='numeric'
          maxLength={1}
          type="text"
          className="
            text-[1.2rem]
            p-4
            border
            border-gray-300
            focus:border-sky-800
            caret-border-sky-800]
            w-12
            h-12
            bg-white
            outline-none
            rounded-lg
          "
        />
      ))}
    </div>
  )
}

export default OTPInput
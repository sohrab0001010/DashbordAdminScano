import React, { useEffect, useRef, useState } from 'react'

const OTPInput = () => {

  const [otp,setOtp] = useState(["","","",""])
  const inputRefs = useRef([])

  const handleChange = (value,index) => {
    if (!/^\d*$/.test(value)) {
      return
    };

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)
    console.log(otp)
    
  }

  const handleFocus = index => {
    const firstEmptyIndex = otp.findIndex(item => item === "")

    if (
      firstEmptyIndex !== -1 && 
      index > firstEmptyIndex
    ) {
      inputRefs.current[firstEmptyIndex]?.focus()
    }
  }


  useEffect(() => {inputRefs.current[0]?.focus()},[])



  return (
    <div 
    className="
    inputs
    flex
    gap-4
    ">
      {
        otp.map((value,index) => (
          <input 
          key={index}
          ref={element => {inputRefs.current[index] = element}}
          onChange={e => handleChange(e.target.value,index)}
          onFocus={() => handleFocus(index)}
          placeholder="_"
          inputMode='numeric'
          maxLength={1}
          type="text" 
          className="
          text-[1.2rem]
          p-4
          rounde-[0.5rem]
          border
          border-gray-300
          focus:border-[#0C2965]
          caret-[#0C2965]
          w-12
          h-12
          bg-white
          outline-none
          rounded-lg
          "/>
        ))
      }
    </div>
  )
}

export default OTPInput
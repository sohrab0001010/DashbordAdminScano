import { useRef, useState } from "react"



const OTPInput = () => {

  const [otp,setOtp] = useState(["","","",""]);
  const otpRef = useRef(otp)
  const inputRefs = useRef([])
  

  const updateOtp = newOtp => {
    otpRef.current = newOtp  
    setOtp(newOtp)
  }

  const handleChange = (value,index) => {
    if (!/^\d*$/.test(value)) return

    const newOtp = [...otpRef.current]
  }




  return (

  )

}


export default OTPInput
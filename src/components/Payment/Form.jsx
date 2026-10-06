import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import modalConfig from '../Modal/modalConfig'
import { useNavigate } from 'react-router'

const Form = () => {

  const navigate = useNavigate();

  const [phone,setPhone] = useState()
  const [postalCode,setPostalCode] = useState()
  const [username,setUsername] = useState("")
  const [province,setProvince] = useState("")
  const [city,setCity] = useState("")
  const [address,setAddress] = useState("")
  const [conditionModal,setConditionModal] = useState(false)
  const [keyModal,setKeyModal] = useState(0)



  const validPostal = /^\d{10}$/
  const validPhone = /^09\d{9}$/

  const validationForm = e => {

    e.preventDefault()
    
    if (
      !username || !phone   || !province
      || !city  || !address || !postalCode
    ) {
      setConditionModal("emptyInput")
      setKeyModal(prev => prev + 1)
      return
    }

    if (!validPhone.test(phone)) {
      setConditionModal("notValidPhone")
      setKeyModal(prev => prev + 1)
      return
    }

    if (!validPostal.test(postalCode)) {
      setConditionModal("notValidPostal")
      setKeyModal(prev => prev + 1)
      return
    }


    navigate("/final-payment")
  }



  return (
    <div

    >
        <form 
        onSubmit={validationForm}
        className='
        flex
        flex-col
        gap-4
        '
        >
            <input
            value={username}
            onChange={e => setUsername(e.target.value)}
            dir='rtl' 
            type="text" 
            className='
            bg-white
            py-2
            px-4
            text-[1.2rem]
            rounded-sm
            shadow-[0_0_20px_0_rgba(0,0,0,0.1)]
            text-gray-500
            outline-none
            border-b
            border-gray-300
            '
            placeholder='نام و نام خانوادگی'
            />

            <input
            onChange={e => setPhone(e.target.value)}
            dir='rtl' 
            type="text"
            inputMode="numeric" 
            value={phone}
            className='
            bg-white
            py-2
            px-4
            text-[1.2rem]
            rounded-sm
            shadow-[0_0_20px_0_rgba(0,0,0,0.1)]
            text-gray-500
            outline-none
            border-b
            border-gray-300
            '
            placeholder='شماره موبایل'
            />

            <input
            value={province}
            onChange={e => setProvince(e.target.value)}
            dir='rtl' 
            type="text" 
            className='
            bg-white
            py-2
            px-4
            text-[1.2rem]
            rounded-sm
            shadow-[0_0_20px_0_rgba(0,0,0,0.1)]
            text-gray-500
            outline-none
            border-b
            border-gray-300
            '
            placeholder='استان'
            />

            <input
            value={city}
            onChange={e => setCity(e.target.value)}
            dir='rtl' 
            type="text" 
            className='
            bg-white
            py-2
            px-4
            text-[1.2rem]
            rounded-sm
            shadow-[0_0_20px_0_rgba(0,0,0,0.1)]
            text-gray-500
            outline-none
            border-b
            border-gray-300
            '
            placeholder='شهر'
            />

            <textarea
            value={address}
            onChange={e => setAddress(e.target.value)}
            rows={4}
            dir='rtl' 
            type="textaria"
            row
            className='
            bg-white
            py-2
            px-4
            text-[1.2rem]
            rounded-sm
            shadow-[0_0_20px_0_rgba(0,0,0,0.1)]
            text-gray-500
            outline-none
            border-b
            border-gray-300
            '
            placeholder='آدرس دقیق'
            />

            <input
            value={postalCode}
            onChange={e => setPostalCode(e.target.value)}
            dir='rtl' 
            type="text" 
            inputMode="numeric"
            pattern='[0-9]*'
            className='
            bg-white
            py-2
            px-4
            text-[1.2rem]
            rounded-sm
            shadow-[0_0_20px_0_rgba(0,0,0,0.1)]
            text-gray-500
            outline-none
            border-b
            border-gray-300
            '
            placeholder='کد پستی'
            />

            <input
            dir='rtl' 
            type="submit" 
            value="رفتن به صفحه پرداخت"
            inputMode="numeric"
            className='
            bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
            py-2
            px-4
            text-[1.2rem]
            text-[rgb(0,255,213)]
            rounded-sm
            shadow-[0_0_20px_0_rgba(0,0,0,0.1)]
            outline-none
            border
            '
            />
        </form>

        {
          conditionModal && 
          <Modal
          key={keyModal}
          title={modalConfig.error.title}
          message={
            conditionModal === "emptyInput"
            ?modalConfig.emptyFields.message
            :conditionModal === "notValidPhone"
            ?modalConfig.inValidPhone.message
            :modalConfig.inValidPostalCode.message
          }
          icon={modalConfig.error.icon}
          bgIcon={modalConfig.error.iconBg}
          borderIcon={modalConfig.error.borderIcon}
          />
        }
    </div>
  )
}

export default Form
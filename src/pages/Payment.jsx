{/* 
    on this page the user's full details are collected and the process proceeds to the final payment page
 */}
 import React, { useContext } from 'react'
 import BasketContext from '../components/context/BasketContext';
import Selected from '../components/Payment/Selected';
import  Form  from '../components/Payment/Form';


 
 const Payment = () => {

    const { basket } = useContext(BasketContext)
    console.log(basket)

   return (
     <div
     className="
     flex
     h-screen
     "
     >
       <div className="
       left-section
       h-full
       w-full
       py-24
       px-24
       ">
        <Form/>
       </div>
       
       <div className="
       right-section
       h-full
       w-full
       py-4
       px-24
       flex
       flex-col
       gap-4
       ">
          {
            basket.map(item => (
              <Selected
              {...item}
              />
            ))
          }     
       </div>
     </div>
   )
 }
 
 export default Payment
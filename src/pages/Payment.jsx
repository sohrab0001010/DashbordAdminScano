{/* 
    on this page the user's full details are collected and the process proceeds to the final payment page
 */}
 import React, { useContext } from 'react'
 import BasketContext from '../components/context/BasketContext';


 
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
       bg-blue-300
       h-full
       w-full
       ">

       </div>
       
       <div className="
       right-section
       bg-blue-500
       h-full
       w-full
       ">

       </div>
     </div>
   )
 }
 
 export default Payment
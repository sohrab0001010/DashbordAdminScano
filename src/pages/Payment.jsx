{/* 
    on this page the user's full details are collected and the process proceeds to the final payment page
 */}
 import React, { useContext } from 'react'
 import BasketContext from '../components/context/BasketContext';


 
 const Payment = () => {

    const { basket } = useContext(BasketContext)
    console.log(basket)

   return (
     <div>
        is final payment
     </div>
   )
 }
 
 export default Payment
import React, { useContext } from 'react'
import userBookOrders from "../../data/dataTransactions/userBookOrders"
import { AuthContext  } from '../context/AuthContext';

const TransactionBook = () => {

    const { user } = useContext(AuthContext)

const transactionBook = userBookOrders.filter(item => item.userId === user.id)
console.log(transactionBook.map(item => item.id))


  return (
    <>
      {
            transactionBook.map((item,index) => (
              <div
              key={item.id}
              className={`
                flex
                itmes-center
                justify-between
                py-6
                px-10
                font-medium
                [clip-path:polygon(0%_0,100%_0,100%_100%,0%_100%)]
                rounded-l-full
                rounded-tl-4xl
                border-l-20
                ${
                  index % 2 == 0
                  ?`
                  bg-[linear-gradient(135deg,#80003D_0%,#35005E_50%,#001C57_100%)]
                  text-[rgb(255,127,253)]
                  `
                  :`
                  bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
                  text-[rgb(0,255,213)]
                  `
                }
                `}
              >
                <span>مبلغ تراکنش : {item.totalAmount} تومان</span>
                <span>تاریخ تراکنش : {item.createdAt}</span>
                <span>ساعت  تراکنش : {item.createdTime}</span>
              </div>
            ))
        }
    </>
  )
}

export default TransactionBook

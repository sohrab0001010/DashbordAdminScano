import React, { useContext } from 'react'
import subscriptionTransactions from "../../data/dataTransactions/datasubscriptionTransactions "
import { AuthContext } from '../context/AuthContext';

const TransactionSub = () => {

    const { user } = useContext(AuthContext)

    const transactionSub = subscriptionTransactions.filter(item => item.userId === user.id)
  return (
    <>
      {
        transactionSub.map((item,index) => (
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
                index%2 == 0
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
            <span>مبلغ تراکنش : {item.amount} تومان</span>
            <span>تاریخ تراکنش : {item.transactionDate}</span>
            <span>ساعت تراکنش : {item.transactionTime}</span>
            </div>
        ))
      }
    </>
  )
}

export default TransactionSub

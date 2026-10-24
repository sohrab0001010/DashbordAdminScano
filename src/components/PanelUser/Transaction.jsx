import React, { useContext, useState } from 'react'
import subscriptionTransactions from "../../data/dataTransactions/datasubscriptionTransactions "
import { AuthContext } from '../context/AuthContext';
import TransactionBook from './TransactionBook';
import TransactionSub from './TransactionSub';
import { ThemeContext } from '../context/ThemeContext';

const Transaction = () => {

  const { user } = useContext(AuthContext)
  const { theme } = useContext(ThemeContext)
  

  const [selectedTransaction,setSelectedTransaction] = useState("transactionSub")

  const transactionArray = [
    {title: "کتاب ها" , id: "transactionBook"},
    {title: "اشتراک ها" , id: "transactionSub"}
  ]

  
  const transactionSub = subscriptionTransactions.filter(item => item.userId === user.id)

  

  return (
    <div
    className='
    h-full
    grid
    grid-rows-[1fr_14fr]
    gap-8
    '
    >

      <div
      className='
      w-full
      flex
      justify-end
      items-center
      gap-8
      pr-8
      '
      >
        {transactionArray.map(item => (
          <label
          key={item.id}
          className={`
            ${
              theme === 'light'
              ?`
              text-gray-500
              has-checked:text-blue-900
              has-checked:border-b-blue-900`
              :`
              text-gray-200
              has-checked:text-[rgb(0,255,255)]
              has-checked:border-b-[rgb(0,255,255)]
                `
            }
            w-30
            h-full
            flex
            items-center
            justify-center
            cursor-pointer
            transition-all
            duration-200
            
            has-checked:border-b-3
            has-checked:font-medium
            has-checked:shadow-[inset_0_2px_5px_0_rgba(0,0,0,0.1)]
            `}
          
          >
            <input 
            type="checkbox"
            name="transactions"
            id={item.id}
            checked={selectedTransaction === item.id}
            onChange={() => setSelectedTransaction(
              prev => prev = item.id
            )}
            className='
            sr-only
            peer
            '
            />
            <span>{item.title}</span>
          </label>
        ))}
      </div>

      <div
      className='
      px-8
      pb-8
      '
      >
        <div
        className={`
      max-h-84
      ${
        theme === 'light'
        ?`bg-[linear-gradient(135deg,#777777,#F7F7F7,#B0B0B0,#FFFFFF,#858585)]
        border-b-gray-300
        border-t-gray-300
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        [&::-webkit-scrollbar-thumb]:hover:bg-gray-400
        `
        :`bg-[linear-gradient(115deg,#020202_0%,#111318_25%,#30343B_43%,#111318_52%,#242830_58%,#08090B_78%,#000000_100%)]
        border-b-gray-800
        border-t-gray-800
        [&::-webkit-scrollbar-thumb]:bg-gray-800
      [&::-webkit-scrollbar-thumb]:hover:bg-gray-900
        `

      }
      shadow-[0_0_20px_0_rgba(0,0,0,0.1)]
      flex
      flex-col
      justify-start
      gap-6
      border-b
      
      border-t
      
      py-4
      px-6
      rounded-lg
      overflow-y-auto
      [&::-webkit-scrollbar]:w-2
      [&::-webkit-scrollbar-track]:bg-transparent
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:transition-all
      [&::-webkit-scrollbar-thumb]:duration-200
      [&::-webkit-scrollbar-thumb]:cursor-pointer
      [&::-webkit-scrollbar-thumb]:bg-gray-300
      [&::-webkit-scrollbar-thumb]:hover:bg-gray-400
      `}
        >
          {
            selectedTransaction === "transactionSub"
            ? <TransactionSub/>
            : <TransactionBook/>
          }
        </div>
      </div>


    </div>
  )
}

export default Transaction

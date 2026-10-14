import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import dataQuestions from "../../data/dataQuestions"

const Questions = () => {

  const { user,setUser } = useContext(AuthContext)

  const [selectedTicketId,setSelectedTicketId] = useState(null)

  const userFinded = dataQuestions.find(item => item.userId === user?.id)
  console.log(userFinded.questionsUser)

  const selectedSpeach = userFinded.questionsUser.find(
    item => item.id
  )

  return (
    selectedTicketId === null

    ?<div
    className='
    flex
    flex-col
    gap-4
    px-12
    '
    >

      <div
    className='
    flex
    flex-col
    gap-8
    py-16
    '
    >
      {
        userFinded.questionsUser.map(item => (
          <div
          className='
          bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
          text-gray-100
          flex
          flex-col
          items-end
          gap-4
          px-10
          py-6
          rounded-l-full
          rounded-tr-full
          '
          >
            <span
            className='
            cursor-pointer
            transition-all
            duration-200
            hover:text-[rgb(0,255,213)]
            '
            onClick={() => setSelectedTicketId(selectedSpeach)}
            >{item.questions[0].question}</span>
            <span
            className={
              `${item.status === "open" ?"text-green-400":"text-red-500"}`
            }
            >
              {
                item.status === "open"
                ?"در حال گفت و گو"
                :"بسته شده"
              }
            </span>
          </div>
        ))
      }
      </div>

      <hr 
      className='
      text-gray-300
      '
      />

      <textarea name="" id=""></textarea>

    </div>

    :
    <div
      className='
      flex
      flex-col
      py-4
      px-8
      '
    >
    <div
    className='
    h-full
    bg-white
    shadow-[0_0_20px_0_rgba(0,0,0,0.1)]
    flex
    flex-col
    justify-center
    border-b
    border-b-gray-300
    border-t
    border-t-gray-300
    py-8
    px-4
    '
    >
      {
        selectedTicketId.questions.map(item => (
          <div
          key={item.id}
          className='
          w-full   
          '
          >
            <span
            className='
            user
            bg-yellow-100
            p-4
            shadow-[0_0_20px_0_rgba(0,0,0,0.1)]
            rounded-full
            rounded-tl-none
            w-[30%]
            '
            >{item.question}
            </span>

            <div
            className='
            admin
            bg-white
            w-full
            flex
            gap-4
            flex-col
            items-end
            '
            >
              {item.replyAdmin.map(item => (
                <div
                key={item.adminId}
                className='
                w-[50%]
                bg-blue-100
                flex
                flex-col
                px-8
                py-2
                rounded-full
                rounded-tr-none
                '
                >
                <span
                className='
                bg-blue-100
                flex
                flex-col
                items-end
                gap-4
                '
                >
                  {item.ADMIN}
                </span>
                <span
                dir='rtl'
                >
                  {item.reply}
                </span>
                </div>
              ))}
            </div>
          </div>
        ))
      }
    </div>

    </div>
  )
}

export default Questions

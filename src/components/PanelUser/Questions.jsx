import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import dataQuestions from "../../data/dataQuestions"

const Questions = () => {

  const { user,setUser } = useContext(AuthContext)

  const [selectedTicketId,setSelectedTicketId] = useState(null)

  const userFinded = dataQuestions.find(item => item.userId === user?.id)
  console.log(userFinded?.questionsUser)


  return (
    selectedTicketId === null

    ?<div
    className='
    flex
    flex-col
    gap-12
    px-12
    '
    >

      <div
    className='
    flex
    flex-col
    gap-8
    bg-green-100
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
            onClick={() => setSelectedTicketId(item)}
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

      <div
      className='
      flex
      flex-col
      gap-4
      '
      >
      <textarea 
      dir='rtl'
      name="" 
      id=""
      rows={4}
      className='
      outline-none
      shadow-[0_0_20px_0_rgb(0,0,0,0.1)]
      p-4
      text-gray-400
      '
      ></textarea>

      <div>
        <button>افزودن عکس</button>
        <button>ارسال</button>
      </div>

      </div>

    </div>

    :
    <div
      className='
      flex
      flex-col
      pl-16
      '
    >
    <div
    className='
    max-h-100
    bg-[linear-gradient(135deg,#777777,#F7F7F7,#B0B0B0,#FFFFFF,#858585)]
    shadow-[0_0_20px_0_rgba(0,0,0,0.1)]
    flex
    flex-col
    justify-start
    border-b
    border-b-gray-300
    border-t
    border-t-gray-300
    py-8
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
    '
    >
      {
        selectedTicketId.questions.map(item => (
          <div
          key={item.id}
          className='
          w-full 
          h-full  
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
            text-violet-100
            bg-[linear-gradient(135deg,#80003D_0%,#35005E_50%,#001C57_100%)]
            '
            >{item.question}
            </span>

            <div
            className='
            admin
            w-full
            flex
            gap-4
            flex-col
            items-end
            text-sky-100
            '
            >
              {item.replyAdmin.map(text => (
                <div
                key={text.adminId}
                className='
                w-[50%]
                bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
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
                flex
                flex-col
                items-end
                gap-4
                '
                >
                  {text.ADMIN}
                </span>
                <span
                dir='rtl'
                >
                  {text.reply}
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

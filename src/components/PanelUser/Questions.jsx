import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import dataQuestions from "../../data/dataQuestions"

const Questions = () => {

  const { user,setUser } = useContext(AuthContext)

  const userFinded = dataQuestions.find(item => item.userId === user.id)
  console.log(userFinded.questionsUser)

  return (
    <div
    className='
    flex
    flex-col
    gap-8
    px-8
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
          justify-end
          px-10
          py-6
          rounded-l-full
          rounded-tr-full
          '
          >
            <span>{item.questions[0].question}</span>
          </div>
        ))
      }
    </div>
  )
}

export default Questions

import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import dataQuestions from "../../data/dataQuestions";
import { IoArrowUndoCircleSharp } from "react-icons/io5";

const Questions = () => {

  const { user,setUser } = useContext(AuthContext)

  const [selectedTicketId,setSelectedTicketId] = useState(null);
  const [ticketUser,setTicketUser] = useState("");
  const [ticketAttachments,setTicketAttachments] = useState([])
  const [showImgInText,setShowImgInText] = useState(null)
  const [textUser,setTextUser] = useState("")

  const userFinded = dataQuestions.find(item => item.userId === user?.id)
  const lastItem = userFinded.questionsUser.at(-1).number
  const lengthQuestion = userFinded.questionsUser.at(-1).questions.length

  const generatedTicket = () => {
    const newTicket = {
      id: `ticet-${userFinded.userId}-${lastItem+1}`,
      status: "open",
      number: lastItem + 1,
      questions: [
        {
          id:`question-${userFinded.userId}-${lastItem}-${lengthQuestion + 1}`,
          question: ticketUser,
          attachments: ticketAttachments.map(
          ({file,...attachment}) => attachment
          ),
          replyAdmin: []
        }
      ]
    }

    return newTicket
  }


  const addToquestions = () => {
    dataQuestions.forEach(item => {
      if(
        item.userId === user.id 
        && ticketUser.trim() !== ""
      ) {
        item.questionsUser.push(generatedTicket())
        setTicketUser("")
        setTicketAttachments([])
      }
    })
  }


  const handleAttachment = e => {
    const files = Array.from(e.target.files)

    const images = files.filter(file => file.type.startsWith("image/"))
    .map(file => ({
      id: crypto.randomUUID(),
      type: "image",
      name: file.name,
      url: URL.createObjectURL(file),
      file: file
    }))

    setTicketAttachments(prev => [...prev,...images])
    e.target.value = ""
  }








  return (
    <>
    {
      selectedTicketId === null

    ?
    (
      <div
    className='
    flex
    flex-col
    gap-12
    px-12
    '
    >

      <div
    className='
    max-h-100
    flex
    flex-col
    gap-8
    px-8
    py-8
    overflow-y-auto
    shadow-[0_1px_0_0_rgba(0,0,0,0.1)]
    [&::-webkit-scrollbar]:w-2
    [&::-webkit-scrollbar-track]:bg-transparent
    [&::-webkit-scrollbar-thumb]:rounded-full
    [&::-webkit-scrollbar-thumb]:transition-all
    [&::-webkit-scrollbar-thumb]:duration-200
    [&::-webkit-scrollbar-thumb]:cursor-pointer
    [&::-webkit-scrollbar-thumb]:bg-gray-100
    [&::-webkit-scrollbar-thumb]:hover:bg-gray-200
    '
    >
      {
        userFinded.questionsUser.map(item => (
          <div
          key={item.id}
          className='
          bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
          text-gray-100
          flex
          flex-col
          items-end
          gap-4
          px-20
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

      {/* <hr 
      className='
      text-gray-300
      '
      /> */}

      <div
      className='
      flex
      flex-col
      gap-4
      '
      > 


      <div
      dir='rtl'
      className={`
      rounded-sm
      grid
      ${ticketAttachments.length !== 0
        &&
        "grid-cols-[10fr_1fr]"
      }
      shadow-[0_0_20px_0_rgb(0,0,0,0.1)]
      `}
      >
      <textarea 
      value={ticketUser}
      dir='rtl'
      name="" 
      id=""
      onChange={e => setTicketUser(e.target.value)}
      rows={4}
      className='
      outline-none
      p-4
      text-gray-400
      '
      ></textarea>

      {
        ticketAttachments.length !== 0 &&
      <div
      className='
      h-full
      w-full
      flex
      flex-col
      items-center
      justify-center
      '
      >
        {
          ticketAttachments.map(item => (
            <div
            key={item.id}
            className='
            w-12
            h-16
            flex
            flex-col
            '
            >
              <span
              onClick={() => 
                setTicketAttachments(prev => prev.filter(a => a.id !== item.id))
              }
              className='
              bg-red-500
              h-[20%]
              cursor-pointer
              flex
              flex-col
              pb-1
              justify-center
              items-center
              text-red-300
              rounded-t-sm
              transition-all
              duration-300
              ease-in-out
              hover:shadow-[0_0_12px_3px_rgba(255,0,0,0.8)]
              hover:bg-red-600
              hover:text-white
              '
              >×</span>
              <img 
              className='
              h-[80%]
              rounded-b-sm
              cursor-pointer
              '
              src={item.url} 
              alt="برای مشاهده عکس کلیک کنید"
              onClick={() => {
                setShowImgInText(item.url)
                console.log(showImgInText)
              }} 
              />
            </div>
          ))
        }
      </div>
      }

      </div>

      <div
      className='
      flex
      items-center
      gap-4
      '
      >
        <label
        className='
        px-4
        py-2
        bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
        rounded-lg
        cursor-pointer
        text-blue-950
        transition-all
        duration-200
        hover:text-[rgb(0,255,213)]
        '
        >افزودن عکس
        <input
        type={ticketAttachments.length === 0 && `file`} 
        accept="image/*"
        hidden
        onChange={e => handleAttachment(e)}
        />
        </label>
        <button
        onClick={addToquestions}
        className='
        px-10
        py-2
        bg-[linear-gradient(135deg,#00ff00,#b4ffb4,#00ff00)]
        rounded-lg
        cursor-pointer
        transition-all
        duration-200
        text-green-800
        hover:text-green-400
        '
        >ارسال</button>
      </div>

      </div>

      </div>
    )

    :
    (
      <div
      className='
      flex
      flex-col
      gap-8
      '
    >
    <span
    onClick={() => {
      setSelectedTicketId(null)
    }}
    className='
    text-[rgba(255,255,255,0.4)]
    text-3xl
    absolute
    left-36
    top-16
    cursor-pointer
    transition-all
    duration-200
    hover:text-[rgba(255,255,255,0.6)]
    '
    >
      <IoArrowUndoCircleSharp/>
    </span>

    <div
    className='
    max-h-100
    bg-[linear-gradient(135deg,#777777,#F7F7F7,#B0B0B0,#FFFFFF,#858585)]
    shadow-[0_0_20px_0_rgba(0,0,0,0.1)]
    flex
    flex-col
    justify-start
    gap-6
    border-b
    border-b-gray-300
    border-t
    border-t-gray-300
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
    '
    >
      {
        selectedTicketId.questions.map(item => (
          <div
          key={item.id}
          className='
          w-full 
          h-full
          flex
          flex-col
          gap-8
          items-start
          justify-between  
          '
          >
            <div
            className='
            user
            flex
            flex-row-reverse
            justify-between
            gap-4
            bg-yellow-100
            py-8
            px-20
            shadow-[0_0_20px_0_rgba(0,0,0,0.1)]
            rounded-full
            rounded-tl-none
            w-[80%]
            text-violet-100
            bg-[linear-gradient(135deg,#80003D_0%,#35005E_50%,#001C57_100%)]
            '
            >
              <span dir='rtl'>{item.question}</span>

            {
              item.attachments.length !== 0 &&

              item.attachments.map(secItem => (
                <img
                key={secItem.id}
                src={secItem.url}
                onClick={() => setShowImgInText(secItem.url)}
                className='
                h-10
                w-12
                rounded-sm
                cursor-pointer
                '
                />
              ))
            }
            </div>


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
                w-[80%]
                bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
                flex
                flex-col
                items-end
                justify-end
                px-20
                py-4
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

    <div
      dir='rtl'
      className={`
      rounded-sm
      grid
      ${ticketAttachments.length !== 0
        &&
        "grid-cols-[10fr_1fr]"
      }
      shadow-[0_0_20px_0_rgb(0,0,0,0.1)]
      `}
      >
      <textarea 
      value={textUser}
      dir='rtl'
      name="" 
      id=""
      onChange={e => setTextUser(e.target.value)}
      rows={4}
      className='
      outline-none
      p-4
      text-gray-400
      '
      ></textarea>

      {
        ticketAttachments.length !== 0 &&
      <div
      className='
      h-full
      w-full
      flex
      flex-col
      items-center
      justify-center
      '
      >
        {
          ticketAttachments.map(item => (
            <div
            key={item.id}
            className='
            w-12
            h-16
            flex
            flex-col
            '
            >
              <span
              onClick={() => 
                setTicketAttachments(prev => prev.filter(a => a.id !== item.id))
              }
              className='
              bg-red-500
              h-[20%]
              cursor-pointer
              flex
              flex-col
              pb-1
              justify-center
              items-center
              text-red-300
              rounded-t-sm
              transition-all
              duration-300
              ease-in-out
              hover:shadow-[0_0_12px_3px_rgba(255,0,0,0.8)]
              hover:bg-red-600
              hover:text-white
              '
              >×</span>
              <img 
              className='
              h-[80%]
              rounded-b-sm
              cursor-pointer
              '
              src={item.url} 
              alt="برای مشاهده عکس کلیک کنید"
              onClick={() => {
                setShowImgInText(item.url)
                console.log(showImgInText)
              }} 
              />
            </div>
          ))
        }
      </div>

      }

      </div>
    


      </div>
    )
    }

    {
      showImgInText && (
        <div
          className="
          fixed inset-0 z-50
          flex items-center justify-center
          bg-black/80 p-4
          "
          onClick={() => setShowImgInText(null)}
        >
          <img
          src={showImgInText}
          alt="تصویر بزرگ‌شده"
          className="
          max-h-[90vh]
          max-w-[90vw]
          rounded-lg
          object-contain
          "
          onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) 
    }
    </>
  )
}

export default Questions

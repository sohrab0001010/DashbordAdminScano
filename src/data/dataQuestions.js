const Questions = [
  {
    userId: 3,
    questionsUser: [
      {
        id: "ticket-3-1",
        status: "open",
        number: 1,
        questions: [
          {
            id: "question-3-1-1",
            question: "آقا این سفارش من نرسیده مگر من کیر شما هستم",
            attachments: [
                {
                    id: "attachment-1",
                    type: "image",
                    name: "payment-receipt.jpg",
                    url: "/uploads/payment-receipt.jpg"
                }
            ],
            replyAdmin: [
              {
                adminId: 2,
                ADMIN: "Ahmad Zamani",
                reply:
                  "نه عزیزم این چه حرفیه شما مثل بقیه کاربر ها یکی از سلول های قلب ما هستی و همگی باهم قلب مارو تشکیل دادین",
              },
              {
                adminId: 1,
                ADMIN: "Sohrab Ghorbani",
                reply:
                  "نه دروغ میگه شما کاربران عزیز هرکدوم یکی از سلول های کیر ما هستید",
              },
            ],
          },
          {
            id: "question-3-1-2",
            question: "این چه طرز صحبته مگه فرهنگ و ادب ندارید",
            attachments: [],
            replyAdmin: [
              {
                adminId: 2,
                ADMIN: "Ahmad Zamani",
                reply:
                  "نه عزیزم شوووخی میکنه ناراحت نشو گل من پیشی پیشی ناز نازیییی",
              },
              {
                adminId: 1,
                ADMIN: "Sohrab Ghorbani",
                reply:
                  "نه عزیزم گوه میخوره خیلی هم جدی هستم البته گفتم زیاد نخورت تا زود تموم نشی",
              },
            ],
          },
        ],
      },
      {
        id: "ticket-3-2",
        status: "closed",
        number: 2,
        questions: [
          {
            id: "question-3-2-1",
            question: "آقا این دوره سال نهم خیلی عالیه آقای زمانی",
            attachments: [],
            replyAdmin: [
              {
                adminId: 1,
                ADMIN: "Sohrab Ghorbani",
                reply:
                  "اگه من سایت به این خوشگلی نمیزدم آقای زمانی دروه هاشو روی کیر من میذاشت؟",
              },
              {
                adminId: 2,
                ADMIN: "Ahmad Zamani",
                reply: "سهراب نکن تروخدا زشته",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    userId: 4,
    questionsUser: [
      {
        id: "ticket-4-1",
        status: "open",
        number: 1,
        questions: [
          {
            id: "question-4-1-1",
            question: "میشه منم بیام باهم کار کنیم",
            attachments: [],
            replyAdmin: [
              {
                adminId: 2,
                ADMIN: "Ahmad Zamani",
                reply:
                  "آره عزیزم اتفاقا خیلی بهت احتیاج داریم در آینده خبرت میکنم",
              },
              {
                adminId: 1,
                ADMIN: "Sohrab Ghorbani",
                reply:
                  "نه عزیزم تو به این کارا احتیاج نداری تو میتونی تلاش کنی(با ددیت دعوا کنی) تا به خواسته هایت برسی",
              },
            ],
          },
          {
            id: "question-4-1-2",
            question: "با تو حرف نزدم کونی که گوه میخوری",
            attachments: [],
            replyAdmin: [
              {
                adminId: 2,
                ADMIN: "Ahmad Zamani",
                reply: "عه زشتس کا",
              },
              {
                adminId: 1,
                ADMIN: "Sohrab Ghorbani",
                reply:
                  "در حدی نیستی که با من حرف بزنی با کیرم حرف زدی منم افتخار دادم جوابتو دادم کونیو هم وقتی به زبون بیار که جلوی آینه وایسادی در ضمن تو گوه میخوری دلیل نمیشه رژیم غذایی بقییه هم گوه باشه",
              },
              {
                adminId: 2,
                ADMIN: "Ahmad Zamani",
                reply: "سهراب ولش کن خداوکیلی",
              },
              {
                adminId: 1,
                ADMIN: "Sohrab Ghorbani",
                reply:
                  "اولا سهراب نه رییس بگو دهنت عادت کنه رعیت کله تخمی دوما یه فیلتر میذارم کاربرایی که اسمشون مهران شعبانیه نتونن تو سایتم ثبت نام کننن",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default Questions;

const courses = [
  {
    gradeId: 4,
    emoji: "📒",
    color: "#FFB900",
    subject: "math",
    nameGrade: "پایه چهارم",
    worksheets: [
      {
        chapter: 1,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 2,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 3,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 4,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 5,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 6,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 7,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 8,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
    ],
    examQuestions: [
      {
        chapter: 1,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 2,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 3,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 4,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 5,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 6,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 7,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 8,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
    ],
  },

  {
    gradeId: 4,
    emoji: "📙",
    color: "#FFB900",
    subject: "math",
    nameGrade: "پایه پنجم",
    worksheets: [
      {
        chapter: 1,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 2,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 3,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 4,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 5,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 6,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 7,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 8,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
    ],
    examQuestions: [
      {
        chapter: 1,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 2,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 3,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 4,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 5,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 6,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 7,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 8,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
    ],
  },

  {
    gradeId: 4,
    emoji: "📘",
    color: "#FFB900",
    subject: "math",
    nameGrade: "پایه ششم",
    worksheets: [
      {
        chapter: 1,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 2,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 3,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 4,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 5,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 6,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 7,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 8,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
    ],
    examQuestions: [
      {
        chapter: 1,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 2,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 3,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 4,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 5,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 6,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 7,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 8,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
    ],
  },

  {
    gradeId: 4,
    emoji: "📗",
    color: "#FFB900",
    subject: "math",
    nameGrade: "پایه هفتم",
    worksheets: [
      {
        chapter: 1,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 2,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 3,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 4,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 5,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 6,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 7,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 8,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
    ],
    examQuestions: [
      {
        chapter: 1,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 2,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 3,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 4,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 5,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 6,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 7,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 8,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
    ],
  },

  {
    gradeId: 4,
    emoji: "📕",
    color: "#FFB900",
    subject: "math",
    nameGrade: "پایه هشتم",
    worksheets: [
      {
        chapter: 1,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 2,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 3,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 4,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 5,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 6,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 7,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 8,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
    ],
    examQuestions: [
      {
        chapter: 1,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 2,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 3,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 4,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 5,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 6,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 7,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 8,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
    ],
  },

  {
    gradeId: 4,
    emoji: "📔",
    color: "#FFB900",
    subject: "math",
    nameGrade: "پایه نهم",
    worksheets: [
      {
        chapter: 1,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 2,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 3,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 4,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 5,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 6,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 7,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
      {
        chapter: 8,
        levels: [
          {
            level: "levelOne",
            title: "آسان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelTow",
            title: "متوسط",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelThree",
            title: "سخت",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
          {
            level: "levelFour",
            title: "تیز هوشان",
            content: {
              imgWorksheet: "/images/worksheet/1.jpg",
              pdf: "/pdfs/1.pdf",
              videos: [
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: true, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
                { isFree: false, vid: "/videos/vid.mp4" },
              ],
            }
          },
        ],
      },
    ],
    examQuestions: [
      {
        chapter: 1,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 2,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 3,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 4,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 5,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 6,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 7,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
      {
        chapter: 8,
        imgExam: "/images/worksheet/1.jpg",
        pdfExam: "/pdfs/1.pdf",
        videos: [
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: true, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
          { isFree: false, vid: "/videos/vid.mp4" },
        ],
      },
    ],
  },

];



export default courses
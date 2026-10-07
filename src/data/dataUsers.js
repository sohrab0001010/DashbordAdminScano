const users = [
    {
        name: "Sohrab Ghorbani",
        password: "1851375",
        phone: "09162019117",
        role: "ADMIN",
    },
    {
        name: "Ahmad Zamani",
        password: "291374",
        phone: "09388595862",
        role : "ADMIN",
    },
    {
        name: "Mohammad Zamani",
        password: "123456",
        phone: "09902436396",
        role: "USER",
        subscriptions : [
            {gradeId: 4, time: "oneMonth"},
            {gradeId: 5,time: "sixMonth"},
        ]
    },
    {
        name: "Mehran Shabani",
        password: "1991374",
        phone: "09900324369",
        role: "USER",
        subscriptions : []
    },
]


export default users
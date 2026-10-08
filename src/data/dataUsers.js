const users = [
  {
    id: 1,
    name: "Sohrab Ghorbani",
    phone: "09162019117",
    password: "1851375",
    role: "ADMIN",
    subscriptions: [],
  },

  {
    id: 2,
    name: "Ahmad Zamani",
    phone: "09388595862",
    password: "291374",
    role: "ADMIN",
    subscriptions: [],
  },

  {
    id: 3,
    name: "Mohammad Zamani",
    phone: "09902436396",
    password: "123456",
    role: "USER",

    subscriptions: [
      {
        id: 1,
        gradeId: 4,
        plan: "oneMonth",
        startDate: "1405/07/01",
        endDate: "1405/08/01",
        status: "ACTIVE",
      },

      {
        id: 2,
        gradeId: 5,
        plan: "sixMonth",
        startDate: "1405/06/01",
        endDate: "1405/12/01",
        status: "ACTIVE",
      },
    ],
  },

  {
    id: 4,
    name: "Mehran Shabani",
    phone: "09900324369",
    password: "1991374",
    role: "USER",
    subscriptions: [],
  },

  {
    id: 5,
    name: "Arman Ahmadi",
    phone: "09124567831",
    password: "456789",
    role: "USER",

    subscriptions: [
      {
        id: 3,
        gradeId: 6,
        plan: "oneMonth",
        startDate: "1405/07/05",
        endDate: "1405/08/05",
        status: "ACTIVE",
      },
    ],
  },

  {
    id: 6,
    name: "Nima Karimi",
    phone: "09351247896",
    password: "654321",
    role: "USER",

    subscriptions: [
      {
        id: 4,
        gradeId: 7,
        plan: "threeMonth",
        startDate: "1405/06/15",
        endDate: "1405/09/15",
        status: "ACTIVE",
      },

      {
        id: 5,
        gradeId: 8,
        plan: "sixMonth",
        startDate: "1405/05/20",
        endDate: "1405/11/20",
        status: "ACTIVE",
      },
    ],
  },

  {
    id: 7,
    name: "Ali Rezaei",
    phone: "09129876543",
    password: "789456",
    role: "USER",

    subscriptions: [
      {
        id: 6,
        gradeId: 4,
        plan: "oneMonth",
        startDate: "1405/05/01",
        endDate: "1405/06/01",
        status: "EXPIRED",
      },
    ],
  },

  {
    id: 8,
    name: "Sina Mohammadi",
    phone: "09911223344",
    password: "147258",
    role: "USER",

    subscriptions: [
      {
        id: 7,
        gradeId: 9,
        plan: "sixMonth",
        startDate: "1405/07/10",
        endDate: "1406/01/10",
        status: "ACTIVE",
      },
    ],
  },

  {
    id: 9,
    name: "Amir Hosseini",
    phone: "09361234578",
    password: "852369",
    role: "USER",
    subscriptions: [],
  },

  {
    id: 10,
    name: "Reza Moradi",
    phone: "09193456782",
    password: "369258",
    role: "USER",

    subscriptions: [
      {
        id: 8,
        gradeId: 5,
        plan: "threeMonth",
        startDate: "1405/07/02",
        endDate: "1405/10/02",
        status: "ACTIVE",
      },

      {
        id: 9,
        gradeId: 6,
        plan: "oneMonth",
        startDate: "1405/07/15",
        endDate: "1405/08/15",
        status: "ACTIVE",
      },
    ],
  },

  {
    id: 11,
    name: "Hossein Kazemi",
    phone: "09107654321",
    password: "741852",
    role: "USER",

    subscriptions: [
      {
        id: 10,
        gradeId: 8,
        plan: "oneMonth",
        startDate: "1405/06/01",
        endDate: "1405/07/01",
        status: "EXPIRED",
      },
    ],
  },

  {
    id: 12,
    name: "Meysam Ebrahimi",
    phone: "09987654321",
    password: "963852",
    role: "USER",

    subscriptions: [
      {
        id: 11,
        gradeId: 7,
        plan: "sixMonth",
        startDate: "1405/07/01",
        endDate: "1406/01/01",
        status: "ACTIVE",
      },

      {
        id: 12,
        gradeId: 9,
        plan: "oneMonth",
        startDate: "1405/07/10",
        endDate: "1405/08/10",
        status: "ACTIVE",
      },
    ],
  },
];

export default users;


const bookOrders = [
  {
    id: 1001,
    userId: 3,

    customer: {
      name: "Mohammad Zamani",
      phone: "09902436396",
      postalCode: "1234567890",
      address: "تهران، خیابان آزادی، پلاک ۱۲",
    },

    items: [
      {
        bookId: 2,
        title: "ریاضی پنجم",
        quantity: 2,
        price: 790000,
        discount: 20,
      },
    ],

    shippingCost: 100000,
    totalAmount: 1364000,

    payment: {
      status: "SUCCESS",
      trackingCode: "TRX-MEMBER-10001",
    },

    orderStatus: "DELIVERED",

    createdAt: "1405/07/01",
  },

  {
    id: 1002,
    userId: 3,

    customer: {
      name: "Mohammad Zamani",
      phone: "09902436396",
      postalCode: "1234567890",
      address: "تهران، خیابان آزادی، پلاک ۱۲",
    },

    items: [
      {
        bookId: 4,
        title: "ریاضی هفتم",
        quantity: 1,
        price: 900000,
        discount: 20,
      },

      {
        bookId: 5,
        title: "ریاضی هشتم",
        quantity: 1,
        price: 950000,
        discount: 20,
      },
    ],

    shippingCost: 120000,
    totalAmount: 1600000,

    payment: {
      status: "SUCCESS",
      trackingCode: "TRX-MEMBER-10002",
    },

    orderStatus: "SHIPPED",

    createdAt: "1405/07/15",
  },

  {
    id: 1003,
    userId: 5,

    customer: {
      name: "Arman Ahmadi",
      phone: "09124567831",
      postalCode: "4567891230",
      address: "کرج، بلوار جمهوری، پلاک ۴۵",
    },

    items: [
      {
        bookId: 1,
        title: "ریاضی چهارم",
        quantity: 1,
        price: 750000,
        discount: 20,
      },
    ],

    shippingCost: 90000,
    totalAmount: 690000,

    payment: {
      status: "SUCCESS",
      trackingCode: "TRX-MEMBER-10003",
    },

    orderStatus: "PROCESSING",

    createdAt: "1405/07/18",
  },

  {
    id: 1004,
    userId: 6,

    customer: {
      name: "Nima Karimi",
      phone: "09351247896",
      postalCode: "7894561230",
      address: "اصفهان، خیابان چهارباغ، پلاک ۲۱",
    },

    items: [
      {
        bookId: 6,
        title: "ریاضی نهم",
        quantity: 2,
        price: 920000,
        discount: 20,
      },
    ],

    shippingCost: 110000,
    totalAmount: 1582000,

    payment: {
      status: "SUCCESS",
      trackingCode: "TRX-MEMBER-10004",
    },

    orderStatus: "DELIVERED",

    createdAt: "1405/06/20",
  },

  {
    id: 1005,
    userId: 10,

    customer: {
      name: "Reza Moradi",
      phone: "09193456782",
      postalCode: "3216549870",
      address: "شیراز، خیابان زند، پلاک ۸",
    },

    items: [
      {
        bookId: 3,
        title: "ریاضی ششم",
        quantity: 1,
        price: 770000,
        discount: 20,
      },

      {
        bookId: 6,
        title: "ریاضی نهم",
        quantity: 1,
        price: 920000,
        discount: 20,
      },
    ],

    shippingCost: 100000,
    totalAmount: 1452000,

    payment: {
      status: "SUCCESS",
      trackingCode: "TRX-MEMBER-10005",
    },

    orderStatus: "PROCESSING",

    createdAt: "1405/07/20",
  },

  {
    id: 1006,
    userId: 4,

    customer: {
      name: "Mehran Shabani",
      phone: "09900324369",
      postalCode: "6543217890",
      address: "تبریز، خیابان امام، پلاک ۱۶",
    },

    items: [
      {
        bookId: 1,
        title: "ریاضی چهارم",
        quantity: 1,
        price: 750000,
        discount: 20,
      },

      {
        bookId: 2,
        title: "ریاضی پنجم",
        quantity: 1,
        price: 790000,
        discount: 20,
      },
    ],

    shippingCost: 95000,
    totalAmount: 1327000,

    payment: {
      status: "FAILED",
      trackingCode: null,
    },

    orderStatus: "CANCELLED",

    createdAt: "1405/07/22",
  },
];

export default bookOrders;
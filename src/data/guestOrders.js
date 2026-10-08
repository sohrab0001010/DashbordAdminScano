const guestOrders = [
  {
    id: 1001,

    userId: null,

    customer: {
      name: "Ali Rezaei",
      phone: "09121234567",
      postalCode: "1234567890",
      address: "تهران، خیابان آزادی، پلاک ۱۲",
    },

    items: [
      {
        bookId: 2,
        title: "ریاضی پنجم",
        quantity: 2,
        price: 790000,
      },
    ],

    shippingCost: 100000,

    totalAmount: 1680000,

    payment: {
      status: "SUCCESS",
      trackingCode: "TRX-GUEST-10001",
    },

    orderStatus: "PROCESSING",

    createdAt: "1405/07/08",
  },

  {
    id: 1002,

    userId: null,

    customer: {
      name: "Reza Ahmadi",
      phone: "09351234567",
      postalCode: "9876543210",
      address: "کرج، بلوار جمهوری، پلاک ۴۵",
    },

    items: [
      {
        bookId: 1,
        title: "ریاضی چهارم",
        quantity: 1,
        price: 750000,
      },

      {
        bookId: 4,
        title: "ریاضی هفتم",
        quantity: 1,
        price: 900000,
      },
    ],

    shippingCost: 120000,

    totalAmount: 1770000,

    payment: {
      status: "SUCCESS",
      trackingCode: "TRX-GUEST-10002",
    },

    orderStatus: "SHIPPED",

    createdAt: "1405/07/10",
  },

  {
    id: 1003,

    userId: null,

    customer: {
      name: "Sara Mohammadi",
      phone: "09104567891",
      postalCode: "4567891230",
      address: "اصفهان، خیابان چهارباغ، پلاک ۲۱",
    },

    items: [
      {
        bookId: 5,
        title: "ریاضی هشتم",
        quantity: 1,
        price: 950000,
      },
    ],

    shippingCost: 100000,

    totalAmount: 1050000,

    payment: {
      status: "FAILED",
      trackingCode: null,
    },

    orderStatus: "CANCELLED",

    createdAt: "1405/07/11",
  },
];

export default guestOrders;

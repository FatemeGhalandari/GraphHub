const productImage =
  "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg";
const avatarImage = "https://i.pravatar.cc/80?img=32";

export const demoCounts = {
  users: { amount: 18, diff: 12 },
  products: { amount: 42, diff: 8 },
  orders: { amount: 27, diff: -4 },
  earnings: { amount: 12840, diff: 18 },
};

export const demoOrders = [
  {
    id: "ORD-1021",
    product: "ASUS ROG Strix",
    customer: "Maya Chen",
    date: { seconds: 1718841600 },
    amount: 1240,
    method: "Credit Card",
    status: "Completed",
    img: productImage,
  },
  {
    id: "ORD-1022",
    product: "Dell XPS 13",
    customer: "Noah Patel",
    date: { seconds: 1718755200 },
    amount: 980,
    method: "PayPal",
    status: "Pending",
    img: productImage,
  },
  {
    id: "ORD-1023",
    product: "Apple MacBook Pro",
    customer: "Sofia Rivera",
    date: { seconds: 1718668800 },
    amount: 2150,
    method: "Debit Card",
    status: "Completed",
    img: productImage,
  },
];

export const demoCollections = {
  users: [
    {
      id: "USR-101",
      FirstName: "Maya",
      LastName: "Chen",
      Email: "maya@example.com",
      Phone: "4165550191",
      status: "Online",
      Image: avatarImage,
    },
    {
      id: "USR-102",
      FirstName: "Noah",
      LastName: "Patel",
      Email: "noah@example.com",
      Phone: "6475550144",
      status: "Offline",
      Image: avatarImage,
    },
  ],
  products: [
    {
      id: "PRD-201",
      Title: "ASUS ROG Strix",
      Price: 1240,
      Category: "Laptops",
      Brand: "ASUS",
      img: productImage,
    },
    {
      id: "PRD-202",
      Title: "Dell XPS 13",
      Price: 980,
      Category: "Laptops",
      Brand: "Dell",
      img: productImage,
    },
  ],
  orders: demoOrders,
  earnings: [
    {
      id: "ERN-301",
      name: "Maya Chen",
      amount: 1240,
      pStatus: "Paid",
      method: "Credit Card",
      tType: "Product Sale",
      status: "Completed",
    },
    {
      id: "ERN-302",
      name: "Noah Patel",
      amount: 980,
      pStatus: "Pending",
      method: "PayPal",
      tType: "Product Sale",
      status: "Pending",
    },
  ],
};

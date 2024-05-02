import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { addDoc, collection, writeBatch } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "graphhub-ad5d8.firebaseapp.com",
  projectId: "graphhub-ad5d8",
  storageBucket: "graphhub-ad5d8.appspot.com",
  messagingSenderId: "149619287880",
  appId: "1:149619287880:web:492f5454dba5b9a342757d",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export const db = getFirestore(firebase);
export default firebase;
export const auth = getAuth();
export const storage = getStorage(firebase);
// const docData = {
//   product: "ASUS ROG Strix",
//   img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
//   customer: "Charlie Brown",
//   date: "2023-12-14",
//   amount: 25.0,
//   method: "Cash",
//   status: "Pending",
// };

// const docData = {
//   name: "Bob Johnson",
//   amount: 7820,
//   pStatus: "Overdue",
//   method: "Debit Card",
//   status: "Completed",
//   tType:"Referral"
// };

// const usersData = [
//   {
//     Address: "British Virgin Islands",
//     Email: "lo@zesibe.tk",
//     FirstName: "Ricardo",
//     LastName: "Bass",
//     Phone: "7831148481",
//     status: "Online",
//     timesStamp: "",
//   },
//   {
//     Address: "Sudan",
//     Email: "lab@regub.tf",
//     FirstName: "Mildred",
//     LastName: "Bush",
//     Phone: "7381738301",
//     status: "",
//     timesStamp: "",
//   },
//   {
//     Address: "Cyprus",
//     Email: "le@ikives.gf",
//     FirstName: "Gene",
//     LastName: "Turner",
//     Phone: "5852446975",
//     status: "",
//     timesStamp: "",
//   },
// ];

const prodData = [
  {
    Brand: "ASUS",
    Category: "Laptops",
    Price: 25.0,
    Title: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    timeStamp: "",
  },
  {
    Brand: "Apple",
    Category: "Laptops",
    Price: 25.0,
    Title: "Apple MacBook Pro",
    img: "https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY327_FMwebp_QL65_.jpg",
    timeStamp: "",
  },
  {
    Brand: "Dell",
    Category: "Laptops",
    Price: 25.0,
    Title: "Dell XPS 13",
    img: "https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY327_FMwebp_QL65_.jpg",
    timeStamp: "",
  },
  {
    Brand: "HP",
    Category: "Laptops",
    Price: 25.0,
    Title: "HP Spectre x360",
    img: "https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY327_FMwebp_QL65_.jpg",
    timeStamp: "",
  },
  {
    Brand: "Lenovo",
    Category: "Laptops",
    Price: 25.0,
    Title: "Lenovo ThinkPad X1 Carbon",
    img: "https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY327_FMwebp_QL65_.jpg",
    timeStamp: "",
  },
  {
    Brand: "Microsoft",
    Category: "Laptops",
    Price: 25.0,
    Title: "Microsoft Surface Laptop 4",
    img: "https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY327_FMwebp_QL65_.jpg",
    timeStamp: "",
  },
  {
    Brand: "Razer",
    Category: "Laptops",
    Price: 25.0,
    Title: "Razer Blade 15",
    img: "https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY327_FMwebp_QL65_.jpg",
    timeStamp: "",
  },
  {
    Brand: "Samsung",
    Category: "Laptops",
    Price: 25.0,
    Title: "Samsung Galaxy Book Pro 360",
    img: "https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY327_FMwebp_QL65_.jpg",
    timeStamp: "",
  },
  {
    Brand: "Acer",
    Category: "Laptops",
    Price: 25.0,
    Title: "Acer Chromebook Spin 713",
    img: "https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY327_FMwebp_QL65_.jpg",
    timeStamp: "",
  },
  {
    Brand: "Google",
    Category: "Laptops",
    Price: 25.0,
    Title: "Google Pixelbook Go",
    img: "https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY327_FMwebp_QL65_.jpg",
    timeStamp: "",
  },
];

const batchWriteData = async () => {
  const batch = writeBatch(db);
  const usersCollectionRef = collection(db, "products");

  prodData.forEach((prodData) => {
    const docRef = addDoc(usersCollectionRef, prodData);
    batch.set(docRef, prodData);
  });

  try {
    await batch.commit();
    console.log("Data written successfully!");
  } catch (error) {
    console.error("Error writing batch data:", error);
  }
};

batchWriteData();

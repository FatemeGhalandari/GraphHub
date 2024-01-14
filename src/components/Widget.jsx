import {
  AccountBalanceWalletIcon,
  KeyboardArrowUpIcon,
  MonetizationOnIcon,
  PersonIcon,
  ShoppingCartIcon,
} from "../components/icons";
import PropTypes from "prop-types";
import styles from "./styles";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const Widget = ({ type }) => {
  const [amount, setAmount] = useState(0);
  const [diff, setDiff] = useState(0);
  let data;

  useEffect(() => {
    const getData = async () => {
      const today = new Date();
      const oneMonthAgo = new Date(new Date().setMonth(today.getMonth() - 1));
      const twoMonthAgo = new Date(new Date().setMonth(today.getMonth() - 2));

      const oneMonthAgoQuery = query(
        collection(db, data.query),
        where("timeStamp", "<=", today),
        where("timeStamp", ">", oneMonthAgo)
      );

      const twoMonthAgoQuery = query(
        collection(db, data.query),
        where("timeStamp", "<=", oneMonthAgo),
        where("timeStamp", ">", twoMonthAgo)
      );

      const oneMonthAgoData = await getDocs(oneMonthAgoQuery);
      const twoMonthAgoData = await getDocs(twoMonthAgoQuery);

      setAmount(oneMonthAgoData.docs.length - twoMonthAgoData.docs.length);

      setDiff(
        ((oneMonthAgoData.docs.length - twoMonthAgoData.docs.length) /
          twoMonthAgoData.docs.length) *
          100
      );
    };
    getData();
  }, [data, diff]);

  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        query: "users",
        icon: (
          <PersonIcon className="self-end bg-[#e9d5ff] text-[#a855f7] p-1 text-[18px] rounded-md" />
        ),
      };
      break;
    case "products":
      data = {
        title: "PRODUCTS",
        isMoney: false,
        link: "See details",
        query: "products",
        icon: (
          <AccountBalanceWalletIcon className=" self-end bg-[#fecaca] text-[#dc2626] p-1 text-[18px] rounded-md" />
        ),
      };
      break;
    case "orders":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartIcon className=" self-end bg-[#bfdbfe] text-[#2563eb] p-1 text-[18px] rounded-md" />
        ),
      };
      break;
    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnIcon className=" self-end bg-[#fef08a] text-[#ca8a04] p-1 text-[18px] rounded-md" />
        ),
      };
      break;

    default:
      break;
  }
  return (
    <div
      className={`${styles.boxShadow} flex flex-1 justify-between p-2 rounded-lg h-[100px]`}
    >
      <div className="flex flex-col justify-between">
        <p className="text-textColor text-[13px] uppercase">{data.title}</p>
        <p className="text-[28px] ">
          {data.isMoney && "$"} {amount}{" "}
        </p>
        <Link
          to={data.query}
          className="text-[13px] border-b-[1px] border-solid border-gray-300 w-max"
        >
          {data.link}
        </Link>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-row items-center text-[14px] text-green">
          <KeyboardArrowUpIcon />
          <p>{diff}%</p>{" "}
        </div>
        {data.icon}
      </div>
    </div>
  );
};

Widget.propTypes = {
  type: PropTypes.any.isRequired, // Update 'any' with the actual type you expect
};
export default Widget;

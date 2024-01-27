import {
  InventoryIcon,
  KeyboardArrowUpIcon,
  KeyboardArrowDownIcon,
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
        where("timeStamp", ">", oneMonthAgo),
      );

      const twoMonthAgoQuery = query(
        collection(db, data.query),
        where("timeStamp", "<=", oneMonthAgo),
        where("timeStamp", ">", twoMonthAgo),
      );

      const oneMonthAgoData = await getDocs(oneMonthAgoQuery);
      const twoMonthAgoData = await getDocs(twoMonthAgoQuery);

      setAmount(oneMonthAgoData.docs.length - twoMonthAgoData.docs.length);

      setDiff(
        ((oneMonthAgoData.docs.length - twoMonthAgoData.docs.length) /
          twoMonthAgoData.docs.length) *
          100,
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
          <PersonIcon className="self-end rounded-md bg-[#e9d5ff] p-1 text-[18px] text-[#a855f7]" />
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
          <InventoryIcon className=" self-end rounded-md bg-[#fecaca] p-1 text-[18px] text-[#dc2626]" />
        ),
      };
      break;
    case "orders":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        query: "orders",
        icon: (
          <ShoppingCartIcon className=" self-end rounded-md bg-[#bfdbfe] p-1 text-[18px] text-[#2563eb]" />
        ),
      };
      break;
    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        query: "earnings",
        icon: (
          <MonetizationOnIcon className=" self-end rounded-md bg-[#fef08a] p-1 text-[18px] text-[#ca8a04]" />
        ),
      };
      break;

    default:
      break;
  }
  return (
    <div
      className={`${styles.boxShadow} flex h-[100px] flex-1 justify-between rounded-lg p-2`}
    >
      <div className="flex flex-col justify-between">
        <p className="text-[13px] uppercase text-textColor">{data.title}</p>
        <p className="text-[28px] ">
          {data.isMoney && "$"} {amount}{" "}
        </p>
        <Link
          to={data.query}
          className="w-max border-b-[1px] border-solid border-gray-300 text-[13px]"
        >
          {data.link}
        </Link>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-row items-center text-[14px] ">
          {diff <= 0 ? (
            <KeyboardArrowDownIcon className="text-red-600" />
          ) : (
            <KeyboardArrowUpIcon className="text-green" />
          )}
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

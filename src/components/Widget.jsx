import {
  AccountBalanceWalletIcon,
  KeyboardArrowUpIcon,
  MonetizationOnIcon,
  PersonIcon,
  ShoppingCartIcon,
} from "../components/Icons";
import PropTypes from "prop-types";
import styles from "./styles";

const Widget = ({ type }) => {
  let data;
  const amount = 100;
  const diff = 100;
  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonIcon className="self-end bg-[#e9d5ff] text-[#a855f7] p-1 text-[18px] rounded-md" />
        ),
      };
      break;
    case "orders":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all users",
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
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: false,
        link: "See details",
        icon: (
          <AccountBalanceWalletIcon className=" self-end bg-[#fecaca] text-[#dc2626] p-1 text-[18px] rounded-md" />
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
        <p className="text-[13px] border-b-[1px] border-solid border-gray-300 w-max">
          {data.link}
        </p>
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

import styles from "./styles";
import {
  MoreVertIcon,
  KeyboardArrowDownIcon,
  KeyboardArrowUpIcon,
} from "./Icons";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Featured = () => {
  return (
    <div className={`${styles.boxShadow} flex flex-[1] p-2 flex-col`}>
      <div className="flex justify-between items-center text-navItemColor">
        <h2 className="text-[18px] font-semibold">Total revenue</h2>
        <MoreVertIcon />
      </div>
      <div className="flex items-center flex-col justify-center p-5 gap-4">
        <div className="w-[100px] h-[100px]">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="text-textColor font-semibold text-[18px]">
          Total sales made today
        </p>
        <p className="text-[30px] text-black">$420</p>
        <p className="text-[13px] font-normal text-textColor text-center">
          Previous transactions processing. <br /> Last payments may not be
          included.
        </p>
        <div className="flex flex-row justify-between items-center w-[100%]">
          <div className="flex flex-col items-center">
            <p className="text-textColor font-semibold">Target</p>
            <div className="flex flex-row items-center mt-2 text-[14px] text-green">
              <KeyboardArrowUpIcon />
              <p>$12.5k</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-textColor font-semibold">Last Week</p>
            <div className="flex flex-row items-center mt-2 text-[14px] text-green">
              <KeyboardArrowUpIcon />
              <p>$12.5k</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-textColor font-semibold">Last Month</p>
            <div className="flex flex-row items-center mt-2 text-[14px] text-red-700">
              <KeyboardArrowDownIcon />
              <p>$12.5k</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

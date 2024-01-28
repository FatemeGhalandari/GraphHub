import {
  MoreVertIcon,
  KeyboardArrowDownIcon,
  KeyboardArrowUpIcon,
} from "./icons";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Featured = () => {
  return (
    <div className="flex flex-[1] flex-col p-2">
      <div className="flex items-center justify-between text-textColor">
        <h2 className="text-[18px] font-semibold">Total revenue</h2>
        <MoreVertIcon />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 p-5">
        <div className="h-[100px] w-[100px]">
          <CircularProgressbar
            value={70}
            text={"70%"}
            strokeWidth={5}
            styles={buildStyles({
              strokeLinecap: "round",
              textSize: "18px",
              pathColor: "green",
              textColor: "green",
              trailColor: "navItemColor",
            })}
          />
        </div>
        <p className="text-[18px] font-semibold text-textColor">
          Total sales made today
        </p>
        <p className="text-[30px] text-black dark:text-white">$420</p>
        <p className="text-center text-[13px] font-normal text-textColor">
          Previous transactions processing. <br /> Last payments may not be
          included.
        </p>
        <div className="flex w-[100%] flex-row items-center justify-between">
          <div className="flex flex-col items-center">
            <p className="font-semibold text-textColor">Target</p>
            <div className="mt-2 flex flex-row items-center text-[14px] text-green">
              <KeyboardArrowUpIcon />
              <p>$12.5k</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-textColor">Last Week</p>
            <div className="mt-2 flex flex-row items-center text-[14px] text-green">
              <KeyboardArrowUpIcon />
              <p>$12.5k</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-textColor">Last Month</p>
            <div className="mt-2 flex flex-row items-center text-[14px] text-red-700">
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

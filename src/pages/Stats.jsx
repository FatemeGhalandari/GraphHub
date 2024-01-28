import Chart from "../components/Chart";
import Featured from "../components/Featured";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "../components/styles";
import RadialChart from "../components/PChart";
import PChart from "../components/RadialChart";
import BChart from "../components/BChart";
const Stats = () => {
  return (
    <div className="flex w-[100%] flex-row dark:bg-[#222] dark:text-textColor">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <div className={`${styles.parent} flex flex-col `}>
          <div className="flex flex-row">
            <div className={`${styles.boxShadow} flex p-2 `}>
              <Featured />
            </div>{" "}
            <div className={`${styles.boxShadow} flex flex-[3] p-2`}>
              <Chart title="Revenue (Last 6 Months)" />
            </div>
          </div>
          <div className="flex flex-row">
            <div className={`${styles.boxShadow} flex flex-[2] p-2`}>
              <RadialChart title="Revenue (Last 6 Months)" />
            </div>
            <div className={`${styles.boxShadow} flex flex-[3] p-2`}>
              <PChart title="Revenue (Last 6 Months)" />
            </div>
          </div>
          <div className={`${styles.boxShadow} flex p-2`}>
            <BChart title="Revenue (Last 6 Months)" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

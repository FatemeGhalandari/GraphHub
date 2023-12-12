import Chart from "../components/Chart";
import Featured from "../components/Featured";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import Widget from "../components/Widget";
import styles from "../components/styles";

const Home = () => {
  return (
    <div className="flex flex-row w-[100%]">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <div className={styles.parent}>
          <Widget type="users" />
          <Widget type="orders" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className={`${styles.parent}`}>
          <Featured />
          <Chart />
        </div>
        <div className={`${styles.boxShadow} px-5 py-5 mx-5 my-1 mb-4`}>
          <p className="text-textColor text-[18px] font-semibold mb-2 ">
            Latest Transactions
          </p>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;

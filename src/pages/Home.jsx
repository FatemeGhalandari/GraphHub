import Chart from "../components/Chart";
import Featured from "../components/Featured";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";
import styles from "../components/styles";

const Home = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <div className={styles.parent}>
          <Widget type="users" />
          <Widget type="orders" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className={`${styles.parent} px-5 py-2`}>
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Home;

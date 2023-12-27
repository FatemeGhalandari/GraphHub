import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Chart from "../components/Chart";
import styles from "../components/styles";
import avatar from "../assets/avatar.svg";
import Tables from "../components/Table";

const Single = () => {
  return (
    <div className="flex flex-row w-[100%] dark:bg-[#222] dark:text-textColor">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <div className={` ${styles.parent}`}>
          <div
            className={`flex flex-[1] flex-col ${styles.boxShadow} ${styles.parent}`}
          >
            <h2 className="text-[16px] text-textColor mb-5">Information</h2>
            <div className="flex flex-row gap-4 ">
              <img
                src={avatar}
                alt="avatar"
                className=" w-[100px] h-[100px] rounded-[50%] object-cover "
              />
              <div className="flex flex-col">
                <h1 className="text-navItemColor mb-4 dark:text-lightGreen">Jane Doe</h1>
                <div className={styles.userInfo}>
                  <p className={styles.userInfoKey}>Email:</p>
                  <p className={styles.userInfoValue}>janedoe@gmail.com</p>
                </div>
                <div className={styles.userInfo}>
                  {" "}
                  <p className={styles.userInfoKey}>Phone: </p>
                  <p className={styles.userInfoValue}>+1 234 567 890</p>
                </div>

                <div className={styles.userInfo}>
                  <p className={styles.userInfoKey}>Address:</p>
                  <p className={styles.userInfoValue}>
                    Elton St. 234 Garden Yard, New York
                  </p>
                </div>
                <div className={styles.userInfo}>
                  <p className={styles.userInfoKey}>Country: </p>
                  <p className={styles.userInfoValue}>USA</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-[2] ${styles.boxShadow} ${styles.parent} `}
          >
            <Chart title="User Spending (Last 6 Month)" />
          </div>
        </div>
        <div className={`${styles.boxShadow} px-5 py-8 mx-5 mb-8`}>
          <p className="text-textColor text-[18px] font-semibold mb-2 ">
            Latest Transactions
          </p>
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default Single;

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "../components/styles";
const Single = () => {
  return (
    <div className="flex flex-row w-[100%]">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <div className={`${styles.boxShadow} ${styles.parent}`}>
          <div className="flex flex-[1] flex-col gap-5">
            <h2 className="text-[15px] text-textColor">information</h2>
            <img src="" alt="" />
            <h1>Jane Doe</h1>
            <p>Email: janedoe@gmail.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: </p>
            <p>Country: USA</p>
          </div>
          <div className={`flex flex-[2] ${styles.parent}`}>right</div>
        </div>
        <div className="flex p-5">bottom</div>
      </div>
    </div>
  );
};

export default Single;

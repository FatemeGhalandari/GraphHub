import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";

const Home = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <div className="flex p-5">
          <Widget type="users" />
          <Widget type="orders" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
      </div>
    </div>
  );
};

export default Home;

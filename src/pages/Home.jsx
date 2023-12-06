import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        container
      </div>
    </div>
  );
};

export default Home;

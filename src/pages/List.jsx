import Datatable from "../components/Datatable";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
const Home = () => {
  return (
    <div className="flex flex-row w-[100%] dark:bg-[#222] dark:text-textColor">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default Home;

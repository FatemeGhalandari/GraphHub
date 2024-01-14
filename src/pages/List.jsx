import Datatable from "../components/Datatable";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { userColumns, productColumns } from "../components/datatablSource";
import { useLocation } from "react-router-dom";
const Home = () => {
  let location = useLocation().pathname;
  return (
    <div className="flex flex-row w-[100%] dark:bg-[#222] dark:text-textColor">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <Datatable
          collectionName={location === "/products" ? "products" : "users"}
          columns={location === "/products" ? productColumns : userColumns}
        />
      </div>
    </div>
  );
};

export default Home;

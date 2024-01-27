import Datatable from "../components/Datatable";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {
  userColumns,
  productColumns,
  orderColumns,
  earningColumns,
} from "../components/datatablSource";
import { useLocation } from "react-router-dom";
const Home = () => {
  let location = useLocation().pathname;
  return (
    <div className="flex w-[100%] flex-row dark:bg-[#222] dark:text-textColor">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <Datatable
          collectionName={
            location === "/products"
              ? "products"
              : location === "/users"
                ? "users"
                : location === "/orders"
                  ? "orders"
                  : "earnings"
          }
          columns={
            location === "/products"
              ? productColumns
              : location === "/users"
                ? userColumns
                : location === "/orders"
                  ? orderColumns
                  : earningColumns
          }
        />
      </div>
    </div>
  );
};

export default Home;

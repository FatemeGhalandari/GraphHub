import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Sidebar />
      <div className="bg-green-300">container</div>
    </div>
  );
};

export default Home;

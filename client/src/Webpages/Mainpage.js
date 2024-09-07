import Sidebar from "./Component/Sidebar";
import Maincontent from "./Maincontent";

const Mainpage = () => {
  return (
    <div className="h-screen w-full bg-primary-color flex flex-col md:flex-row">
      <div className="w-full md:w-1/5 bg-white">
        <Sidebar />
      </div>
      <div className="flex-1 p-4 md:p-6 lg:p-8 scrollbar-hidden md:overflow-auto">
        <Maincontent />
      </div>
    </div>
  );
}

export default Mainpage;

import Sidebar from "./Component/Sidebar";
import Maincontent from "./Maincontent";

const Mainpage = () => {
  return (
    <div className="h-screen w-full bg-primary-color flex justify-center items-center">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full h-full">
        <div className="md:w-1/4 xl:w-1/5 lg:w-1/4 sm:w-full md:h-full">
          <Sidebar />
        </div>
        <div className="flex-grow md:pl-1.5rem">
          <Maincontent />
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
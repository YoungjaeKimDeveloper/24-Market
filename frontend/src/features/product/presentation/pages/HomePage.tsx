import { RefreshCcw } from "lucide-react";
import CustomCard from "../components/CustomCard";

const HomePage = () => {
  return (
    <div>
      <div className="flex items-end w-full justify-end p-4 ">
        {/* Refresh Aciton */}
        <RefreshCcw className="btn bg-red-100 rounded-lg p-2 " />
      </div>
      {/* CARD GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center ">
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>
    </div>
  );
};

export default HomePage;

import { RefreshCcw } from "lucide-react";
import CustomCard from "../components/CustomCard";
import useProductStore from "../store/useProductStore";
import { useEffect } from "react";

const HomePage = () => {
  const { data, isLoading, fetchAllProducts } = useProductStore();
  useEffect(() => {
    fetchAllProducts();
  }, []);
  console.log(data);
  if (isLoading) {
    return (
      <div className="w-full h-full">
        <span className="loading loading-spinner loading-xs"></span>
      </div>
    );
  }
  // BUILD UI
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

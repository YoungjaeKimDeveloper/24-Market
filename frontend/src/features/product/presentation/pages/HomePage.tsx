import { RefreshCcw } from "lucide-react";
import CustomCard from "../components/CustomCard";
import useProductStore from "../store/useProductStore";
import { useEffect } from "react";

const HomePage = () => {
  const {
    data,
    isLoading,
    fetchAllProducts,
    deleteSingleProduct,
    updateSingleProduct,
  } = useProductStore();
  useEffect(() => {
    fetchAllProducts();
  }, []);
  console.log("DATA IS IN HOMEPAGE", data);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-xs animate-bounce size-12"></span>
      </div>
    );
  }
  // BUILD UI
  return (
    <div>
      <div className="flex items-end w-full justify-end p-4 ">
        {/* Refresh Aciton */}
        <RefreshCcw
          className="btn bg-red-100 rounded-lg p-2"
          onClick={fetchAllProducts}
        />
      </div>
      {/* CARD GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center ">
        {data.map((product) => (
          <CustomCard
            key={product.product_id}
            product={product}
            deleteSingleProduct={() => deleteSingleProduct(product.product_id!)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

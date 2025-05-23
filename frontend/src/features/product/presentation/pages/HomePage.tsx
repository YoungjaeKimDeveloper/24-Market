import { RefreshCcw } from "lucide-react";
import CustomCard from "../components/CustomCard";
import useProductStore from "../store/useProductStore";
import { useEffect } from "react";
import CustomLoading from "../components/CustomLoading";

const HomePage = () => {
  const { data, isLoading, fetchAllProducts, deleteSingleProduct } =
    useProductStore();

  useEffect(() => {
    fetchAllProducts();
  }, []);

  if (isLoading) {
    return <CustomLoading />;
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
      <div className="grid grid-cols-1 lg:grid-cols-4 items-center justify-center place-items-center">
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

import { CustomButton } from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import useProductStore from "../store/useProductStore";
import CustomLoading from "../components/CustomLoading";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

/*

  CREATE NEW PRODUCT

*/
const CreateProduct = () => {
  // Track the Data
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [image_url, setImage_url] = useState<string>("");

  const navigate = useNavigate();
  const { createProduct, isLoading } = useProductStore();
  if (isLoading) {
    return <CustomLoading />;
  }

  const onCreateProduct = () => {
    // Validation
    if (!title.trim() || price <= 0 || !image_url.trim()) {
      toast.error("Please fill in all the forms correctly.");
      return;
    }

    createProduct(title, price, image_url);
    navigate("/");
  };

  // BUILD UI
  return (
    // Layout
    <div className="bg-primary w-[100vw] h-[100vh] opacity-50">
      <div className="pt-10">
        <div className=" flex items-center justify-center mx-auto flex-col gap-4">
          <div className="flex items-center justify-center mx-auto flex-col gap-4">
            <CustomInput<string> hintText="Title..." setState={setTitle} />
            <CustomInput<number> hintText="Price..." setState={setPrice} />
            <CustomInput<string>
              hintText="Image Url..."
              setState={setImage_url}
            />
          </div>
          {/* Button - create new Product  */}
          <div className="mt-10">
            <CustomButton
              hintText="Creat new Product"
              onClick={onCreateProduct}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;

import type Product from "../../domain/entity/product";
import { useState } from "react";
import useProductStore from "../store/useProductStore";
interface Props {
  product: Product;
  toggleModal: () => void;
}

const CustomEditProduct = ({ toggleModal, product }: Props) => {
  const { updateSingleProduct } = useProductStore();
  // Track the Value in the local
  const [title, setTitle] = useState<string | null>(product.title || null);
  const [price, setPrice] = useState<number | null>(product.price || null);
  const [imageUrl, setImageUrl] = useState<string | null>(
    product.image_url || null
  );

  // BUILD UI
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded shadow flex flex-col gap-4 items-center">
        <h3 className="font-bold text-lg">Hello!</h3>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            className="input w-60"
            placeholder={title?.toUpperCase() || ""}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="input w-60"
            placeholder={price?.toString()}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <input
            type="text"
            className="input w-60"
            placeholder={imageUrl?.toUpperCase() || ""}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <div className="flex justify-between">
            <button className="btn" onClick={toggleModal}>
              Cancel
            </button>
            <button className="btn" onClick={toggleModal}>
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomEditProduct;

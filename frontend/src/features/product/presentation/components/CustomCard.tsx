import { EditIcon, TrashIcon } from "lucide-react";
import type Product from "../../domain/entity/product";
import { useState } from "react";
// import CustomModal from "./CustomModal";

interface Props {
  product: Product;
  deleteSingleProduct: () => void;
}

const CustomCard = ({ product, deleteSingleProduct }: Props) => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const toggleModal = () => {
    setIsShowModal((prev) => !prev);
  };
  // BUILD UI
  return (
    <div className="p-10 m-auto lg:m-0 ">
      <div className="card bg-base-100 w-64 shadow-xl h-72">
        <figure>
          <img src={product.image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title uppercase w-full text-ellipsis">
            {product.title}
          </h2>
          <p>${product.price}</p>
          <div className="card-actions justify-between">
            {/* Action */}
            <button className="btn btn-primary w-15" onClick={toggleModal}>
              <EditIcon />
            </button>
            {/* Action */}
            <button className="btn bg-red-200">
              <TrashIcon onClick={deleteSingleProduct} />
            </button>
          </div>
        </div>
      </div>
      {isShowModal ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Click to close</p>
            <button className="btn" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CustomCard;

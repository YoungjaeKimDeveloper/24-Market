import { EditIcon, TrashIcon } from "lucide-react";
import type Product from "../../domain/entity/product";
import { useState } from "react";
import CustomEditProduct from "./CustomEditProduct";
import defaultImage from "../../../../assets/images/basicImage.jpg";
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
          <img
            src={product.image_url || defaultImage}
            alt="Product"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = defaultImage;
            }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title uppercase w-full text-ellipsis">
            {product.title}
          </h2>
          <p>
            $<span className="font-bold">{product.price}</span>
          </p>
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
      {/* Edit Modal */}
      {isShowModal ? (
        <CustomEditProduct toggleModal={toggleModal} product={product} />
      ) : null}
    </div>
  );
};

export default CustomCard;

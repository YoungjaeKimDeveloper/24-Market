import { EditIcon, TrashIcon } from "lucide-react";
import type Product from "../../domain/entity/product";

interface Props {
  product: Product;
  deleteSingleProduct: () => void;
}

const CustomCard = ({ product, deleteSingleProduct }: Props) => {
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
            <button className="btn btn-primary w-15">
              <EditIcon />
            </button>
            {/* Action */}
            <button className="btn bg-red-200">
              <TrashIcon onClick={deleteSingleProduct} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;

import { DeleteIcon, EditIcon, TrashIcon } from "lucide-react";

const CustomCard = () => {
  return (
    <div className="p-10 m-auto lg:m-0 ">
      <div className="card bg-base-100 w-64 shadow-xl ">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Title</h2>
          <p>price</p>
          <div className="card-actions justify-between">
            {/* Action */}
            <button className="btn btn-primary w-15">
              <EditIcon />
            </button>
            {/* Action */}
            <button className="btn bg-red-200">
              <TrashIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;

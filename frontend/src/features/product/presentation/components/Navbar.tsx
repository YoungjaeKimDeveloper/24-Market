import { ScanHeart } from "lucide-react";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="navbar bg-red-50 shadow-xl p-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <ScanHeart className="text-red-400" />
          {/* Title */}
          <Link to={"/"}>
            <h1 className="font-sans text-2xl text-primary uppercase tracking-wider font-semibold">
              24 Market
            </h1>
          </Link>
        </div>
        <Link to={"/createProduct"}>
          <Plus className="text-primary" />
        </Link>
      </div>
      {/* Product Card - Layout */}
    </div>
  );
};

export default Navbar;

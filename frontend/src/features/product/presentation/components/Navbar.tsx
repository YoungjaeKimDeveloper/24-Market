import { ScanHeart } from "lucide-react";
import CustomCard from "./CustomCard";
const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="navbar bg-red-50 shadow-xl p-6">
        <div className="flex items-center gap-2">
          <ScanHeart className="text-red-400" />
          {/* Title */}
          <h1 className="font-sans text-2xl text-red-300 uppercase tracking-wider">
            24 Story
          </h1>
        </div>
      </div>
      {/* Product Card - Layout */}
    </div>
  );
};

export default Navbar;

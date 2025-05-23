// import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./features/product/presentation/pages/HomePage";
import Navbar from "./features/product/presentation/components/Navbar";
import { Toaster } from "react-hot-toast";
import CreateProduct from "./features/product/presentation/pages/CreateProduct";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createProduct" element={<CreateProduct />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

// import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./features/product/pages/HomePage";
import Navbar from "./features/product/presentation/components/Navbar";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

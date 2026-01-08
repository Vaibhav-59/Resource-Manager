import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddResource from "./pages/AddResource";
import EditResource from "./pages/EditResource";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddResource />} />
        <Route path="/edit/:id" element={<EditResource />} />
      </Routes>
    </BrowserRouter>
  );
}

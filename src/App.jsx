import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";

export default function App() {
  return (
    <BrowserRouter basename="-task-manager/">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/edit/:id" element={<EditTask />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}


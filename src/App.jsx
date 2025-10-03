import { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router";
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import Cars from "./pages/Cars";
import MyBookings from "./pages/MyBookings";
import Footer from "./components/Footer";
import Layout from "./pages/owner/Layout";
import Dashboard from "./pages/owner/Dashboard";
import AddCar from "./pages/owner/AddCar";
import ManageCars from "./pages/owner/ManageCars";
import ManageBookings from "./pages/owner/ManageBookings";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith("/owner");
  return (
    <div>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/owner" element={<Layout />} />
        <Route index element={<Dashboard />} />
        <Route path="add-car" element={<AddCar />} />
        <Route path="manage-cars" element={<ManageCars />} />
        <Route path="manage-bookings" element={<ManageBookings />} />
      </Routes>

      {!isOwnerPath && <Footer />}
    </div>
  );
};

export default App;

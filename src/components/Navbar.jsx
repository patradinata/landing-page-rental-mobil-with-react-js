import { useState } from "react";
import { assets, menuLinks } from "../assets/assets";
import { Link, useLocation, useNavigate } from "react-router";

const Navbar = ({ setShowLogin }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-borderColor relative transition-all duration-300 ease-in-out ${location.pathname === "/" && "bg-light"}`}>
      <Link to={"/"}>
        <img src={assets.logo} alt="" className="h-8" />
      </Link>

      <div
        className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 max-sm:p-4 transition-all duration-300 ease-in-out z-50 font-medium ${
          location.pathname === "/" ? "bg-light" : "bg-white"
        } ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}
      >
        {menuLinks.map((link, index) => (
          <Link key={index} to={link.path} className=" hover:text-blue-600 hover:border-b">
            {link.name}
          </Link>
        ))}

        <div className="hidden lg:flex border border-borderColor  px-3 gap-2 rounded-full max-w-56">
          <input type="text" className="py-1.5 px-4 w-full bg-transparent  outline-none placeholder:text-gray-400 " placeholder="Search cars" />
          <img src={assets.search_icon} alt="search" />
        </div>

        <div className="flex max-sm:flex-col items-start sm:items-center gap-6">
          <button onClick={() => navigate("/owner")} className="cursor-pointer bg-primary px-4 py-2 text-white rounded-lg transition-all  duration-300 ease-in-out hover:bg-blue-700">
            Dashboard
          </button>
          <button onClick={() => setShowLogin(true)} className="cursor-pointer px-8 py-2 bg-primary text-white rounded-lg transition-all duration-300 ease-in-out hover:bg-primary-dull">
            Login
          </button>
        </div>
      </div>

      <button className="sm:hidden cursor-pointer" aria-label="Menu" onClick={() => setOpen(!open)}>
        <img src={open ? assets.close_icon : assets.menu_icon} alt="menu" />
      </button>
    </div>
  );
};

export default Navbar;

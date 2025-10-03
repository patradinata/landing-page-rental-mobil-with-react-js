import React from "react";
import { assets, dummyUserData } from "../../assets/assets";
import { Link } from "react-router";

const NavbarOwner = () => {
  const user = dummyUserData;
  return (
    <div className="flex items-center justify-between px-8 md:px-10 py-4 text-gray-500 border-b border-borderColor relative transition-all duration-300 ease-in-out">
      <Link to="/" className="text-3xl">
        <img src={assets.logo} alt="" className="h-7 " />
      </Link>
      <p>Welcome, {user.name || "Owner"}</p>
    </div>
  );
};

export default NavbarOwner;

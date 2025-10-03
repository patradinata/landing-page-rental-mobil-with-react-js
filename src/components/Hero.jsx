import React from "react";
import { assets, cityList } from "../assets/assets";
// import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-14 bg-light text-center">
      <h1 className="text-4xl md:text-5xl font-semibold w-full max-w-2xl">
        Ayo jelajahi berbagai <span className="text-primary">macam mobil kesukaanmu</span>
      </h1>

      <form action="#" className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 ">
          <div className="flex flex-col items-start gap-2">
            <select name="location" id="location" required className="px-4 w-full">
              <option value="">Pickup Location</option>
              {cityList.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <p className="text-sm text-gray-500 relative left-5">Please select Location...</p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="pickup-date">Pickup Date</label>
            <input type="date" name="pickup-date" id="pickup-date" min={new Date().toISOString().split("T")[0]} className="text-sm text-gray-500" required />
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="return-date">Return Date</label>
            <input type="date" name="return-date" id="return-date" className="text-sm text-gray-500" required />
          </div>

          {/* <button className="bg-primary flex px-8 items-center gap-4 py-2 text-white rounded-full hover:bg-blue-700 focus:outline-none">
            <FaSearch />
            Search here...
          </button> */}
        </div>
        <button type="submit" className="flex items-center cursor-pointer justify-center  gap-2 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-full">
          <img src={assets.search_icon} alt="search" className="brightness-300" />
          Search
        </button>
      </form>
      <img src={assets.main_car} alt="Hero" className="max-h-64" />
    </div>
  );
};

export default Hero;

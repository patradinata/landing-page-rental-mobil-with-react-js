import React, { useState } from "react";
import Title from "../components/Title";
import { assets, dummyCarData } from "../assets/assets";
import CarCard from "../components/CarCard";

const Cars = () => {
  const [input, setInput] = useState("");
  return (
    <div className="pb-16">
      <div className="flex flex-col items-center py-20 bg-light max-md:px-6">
        <Title title="Available Cars" subTitle="jelajahi pilihan kendaraan kami yang tersedia untuk petualangan anda berikutnya" />

        <div className="flex items-center bg-white border rounded-full border-borderColor px-3 gap-2  max-w-140  w-full h-12 shadow-md mt-6">
          <img src={assets.search_icon} alt="search" className="w-5 h-5 cursor-pointer" />
          <input onChange={(e) => setInput(e.target.value)} value={input} type="search" className="py-2 w-full px-4 focus:outline-none placeholder:text-gray-500 " placeholder="Search by make, model, or features" />
          <img src={assets.filter_icon} alt="" className="w-5 h-5 cursor-pointer" />
        </div>
      </div>

      <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-6">
        <p className="text-gray-500 lg:px-20  font-medium">showing {dummyCarData.length} Cars</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 xl:px-20 max-w-7xl mx-auto">
          {dummyCarData.map((car, index) => (
            <div key={index}>
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;

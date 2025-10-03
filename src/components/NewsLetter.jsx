import React, { useState } from "react";
import { FaSave } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div className="flex flex-col  items-center justify-center gap-2 pb-8 relative bottom-8">
      <h1 className="md:text-4xl text-2xl font-semibold capitalize selection:bg-blue-400 text-center">
        <span className="text-primary-dull">Ayo jadi bagian</span> dari tim kami teman
      </h1>
      <p className="text-base md:text-lg text-gray-500/60 pb-8 text-center">ayo berlangganan untuk mendapatkan penawaran terbaru, pendatang baru, dan diskon ekslusif</p>
      <form action="#" className="flex justify-between items-center w-full max-w-3xl md:max-w-4xl h-12 md:h-14">
        <input type="email" className="border border-gray-300  rounded-full h-full border-r-0 outline-none w-full rounded-r-none px-6 text-gray-500 focus:border-2 focus:border-primary transition-all duration-300 ease-in-out" placeholder="Enter your email address" required />
        <button type="submit" className="bg-primary flex px-8 md:px-16 h-full text-white rounded-lg rounded-r-full items-center gap-4  capitalize cursor-pointer hover:bg-primary-dull">
          subscribe now
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;

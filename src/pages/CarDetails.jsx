import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { assets, dummyCarData } from "../assets/assets";
import Loader from "../components/Loader";

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const currency = import.meta.env.VITE_CURRENCY;
  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    setCar(dummyCarData.find((car) => car._id === id));
  }, [id]);
  return car ? (
    <div className="px-6 md:px-6 lg:px-24 xl:px-32 mt-16 pb-2">
      <button className="flex items-center gap-2 mb-6 cursor-pointer text-gray-600" onClick={() => navigate(-1)}>
        <img src={assets.arrow_icon} alt="back-tol-all-cars" className="rotate-180 opacity-65" />
        back to all cars
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left Car image and details */}
        <div className="lg:col-span-2">
          <img src={assets.car_image1} alt="" className="w-full h-auto md:max-h-80 object-cover rounded-xl mb-6 shadow-md" />
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold">
                {car.brand} {car.model}
              </h1>
              <p className="text-gray-500 text-lg">
                {car.category}. {car.year}
              </p>
            </div>
            <hr className="border-borderColor my-6" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: assets.users_icon, text: `${car.seating_capacity} seats` },
                { icon: assets.fuel_icon, text: car.fuel_type },
                { icon: assets.car_icon, text: car.transmission },
                { icon: assets.location_icon, text: car.location },
              ].map(({ icon, text }) => (
                <div key={text} className="flex flex-col items-center gap-2 bg-light p-4 rounded-lg">
                  <img src={icon} alt="" className="h-5 mb-2" />
                  {text}
                </div>
              ))}
            </div>
            {/* Description */}
            <div>
              <h1 className="text-xl font-medium mb-3">Description</h1>
              <p className="text-gray-500">{car.description}</p>
            </div>
            {/* Features */}
            <div>
              <h1 className="text-xl font-medium mb-3">Features</h1>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {["360 Camera", "Bluetooth", "GPS", "Air Conditioner", "AC", "Heater", "Rear View"].map((item) => (
                  <li key={item} className="flex items-center text-gray-500">
                    <img src={assets.check_icon} alt="" className="h-4 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right booking form */}
        <form onSubmit={handleSubmit} action="#" className="shadow-lg  h-max sticky top-18 rounded-xl p-6 space-y-6 text-gray-500">
          <p className="flex justify-between items-center text-2xl font-semibold">
            {currency} {car.pricePerDay} <span className="text-base font-semibold text-gray-400">per day</span>
          </p>
          <hr className="border-borderColor my-6" />

          <div className="flex flex-col gap-2">
            <label htmlFor="pickup-date" className="font-medium capitalize">
              pickup-date
            </label>
            <input type="date" className="border-borderColor px-4 py-2 rounded-lg" required id="pickup-date" min={new Date().toISOString().split("T")[0]} />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="return-date" className="font-medium capitalize">
              return date
            </label>
            <input type="date" className="border-borderColor px-4 py-2 rounded-lg" required id="return-date" />
          </div>

          <button className="bg-primary w-full px-4 py-2 rounded-lg text-white shadow-md leading-7 font-medium capitalize hover:bg-primary-dull cursor-pointer transition-all duration-300 ease-in-out">book now</button>
          <p className="text-center font-medium text-gray-500">No credit card required to reserve</p>
        </form>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default CarDetails;

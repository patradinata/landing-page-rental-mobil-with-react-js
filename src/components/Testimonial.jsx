import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Azmi Aziz",
      location: "Krui, Lampung, Indonesia",
      image: assets.testimonial_image_1,
      testimonial: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that CarRental provides.",
    },
    {
      name: "Anti Aisyah",
      location: "Pringsewu, Indonesia",
      image: assets.testimonial_image_2,
      testimonial: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that CarRental provides.",
    },
    {
      name: "Hanifah Absarini",
      location: "Pringsewu, Indonesia",
      image: assets.testimonial_image_1,
      testimonial: "I’m truly impressed by the quality and consistency. The entire process was smooth, and the results exceeded all expectations. Thank you!",
    },
  ];
  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
      <Title title="Apa yang pelanggan kami katakan" subTitle="Discover why discerning travelers choose StayVenture for their luxury accommodations around the world." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <div className="flex items-center gap-3">
              <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
              <div>
                <p className="font-semibold text-xl">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <img key={index} src={assets.star_icon} alt="star-icon" />
                ))}
            </div>
            <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

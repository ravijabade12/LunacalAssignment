import React, { useState } from "react";
import Img1 from "../assets/img1.jpeg";
import Img2 from "../assets/img1.jpeg";
import Img3 from "../assets/img1.jpeg";
import Img4 from "../assets/img1.jpeg";

const WidgetTwo = () => {
  const initialImages = [Img1, Img2, Img3, Img4];
  const [images, setImages] = useState(initialImages);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= images.length - 3 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 1
    );
  };

  const handleAddImage = () => {
    // Add a new image to the gallery
    const newImage = Img1;
    setImages([...images, newImage]);
  };

  return (
    <div className="bg-[#363C43] rounded-3xl px-12 py-4 shadow-black shadow-lg w-[720px] h-[316px] overflow-hidden">
      {/* Gallery Header */}
      <div className="flex justify-between m-auto items-center mb-4">
        <button className="px-9 py-4 text-xl rounded-2xl font-semibold bg-[#161616] text-white">
          Gallery
        </button>
        <div className="flex space-x-6">
          <button
            onClick={handleAddImage}
            className="px-7 py-3 rounded-full shadow-inner  shadow-yellow-50 bg-[#40464D] text-white"
          >
            + ADD IMAGE
          </button>
          <div className="flex justify-center space-x-2">
            <button
              onClick={handlePrev}
              className="w-12 h-12 text-3xl flex justify-center items-center rounded-full  shadow-slate-50 shadow-md bg-[#232629] text-white"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 text-3xl flex justify-center items-center rounded-full shadow-slate-50 shadow-md bg-[#232629] text-white"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Image Slider */}
      <div className="relative overflow-hidden mt-10  h-[179px]">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-[33.33%] h-[179px] flex-shrink-0 px-2"
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full rounded-3xl transition-transform duration-300 ease-in-out transform grayscale hover:grayscale-0 hover:scale-105 hover:translate-x-2 hover:-translate-y-3"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WidgetTwo;

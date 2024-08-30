import React, { useState } from "react";
import { FaEye } from "react-icons/fa";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    require("../images/branding1.png"),
    require("../images/branding2.png"),
    require("../images/branding3.png"),
    require("../images/branding4.png"),
    require("../images/printing1.png"),
    require("../images/corporateId.png")
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-white">
      <div className="w-full h-50vh relative">
        <div className="absolute inset-0">
          <img
            src={require("../images/portfolio-bg.jpg")}
            alt="Portfolio Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-[50vh]">
          <div className="text-center text-white px-4 pt-[70px]">
            <h1 className="md:text-5xl py-2 text-3xl font-semibold relative">
              Explore Our Exceptional{" "}
              <span className="text-[#ffc000]"> Portfolio</span>
            </h1>
            <p className="md:text-l max-w-2xl mx-auto">
              Discover how Pedstar's innovative solutions have driven success.
              Our <span className="text-[#ffc000]">Portfolio</span> highlights
              creativity, strategy, and impactful results, tailored to meet each
              client's unique needs.
            </p>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-8">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <img
              src={image}
              alt={`Portfolio ${index + 1}`}
              className="w-full h-auto rounded-lg cursor-pointer transition-transform transform group-hover:scale-105"
              onClick={() => openModal(image)}
            />
            <div
              className="absolute top-2 right-2 p-2 bg-blue-800 rounded-full text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={() => openModal(image)}
            >
              <FaEye
                style={{
                  color: "gold"
                }}
                className="w-4 h-4 "
              />
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div className="relative h-[90vh] flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-full rounded-lg"
            />
            <button
              className="absolute top-2 right-[-50px] bg-blue-500 text-white rounded-full text-3xl min-h-[40px] min-w-[40px] text-bold"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;


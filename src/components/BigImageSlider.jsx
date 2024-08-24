import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const images = [
    {
      url: require("../images/branding1.png"),
      title: "Branding",
      description: "Various Corporate Branding"
    },
    {
      url: require("../images/branding2.png"),
      title: "Branding",
      description: "Various Corporate Branding"
    },
    {
      url: require("../images/branding3.png"),
      title: "Branding",
      description: "Various Corporate Branding"
    },
    {
      url: require("../images/branding4.png"),
      title: "Branding",
      description: "Various Corporate Branding"
    },
    {
      url: require("../images/corporateId.png"),
      title: "Corporate Identity",
      description: "Quality USB Drives Branding"
    },
    {
      url: require("../images/printing1.png"),
      title: "Printing",
      description: "Various Corporate Printing"
    }
  ];

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
  };

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    resetInterval();
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    resetInterval();
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    resetInterval();
  };

  return (
    <div className="flex flex-col items-center p-4 my-2">
      <div className="flex w-full flex-col md:flex-row md:justify-between gap-5 mx-auto">
        <div className="relative w-full md:w-[75%] h-[30vh] md:h-[70vh] mx-auto">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={image.title}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              } object-cover rounded-lg h-full w-full`}
              style={{ objectFit: "cover" }}
            />
          ))}
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold mb-3 text-[#093376]">
            {images[activeIndex].title}
          </h2>
          <p className="text-base mb-4">{images[activeIndex].description}</p>

          <div className="grid grid-cols-3 gap-4 w-full">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`w-24 h-16 md:w-32 md:h-16 bg-cover bg-center rounded-lg cursor-pointer border-2 ${
                  index === activeIndex
                    ? "border-[#093376]"
                    : "border-transparent"
                }`}
                style={{ backgroundImage: `url(${image.url})` }}
              />
            ))}
          </div>

          <div className="flex justify-between w-full md:w-1/2 mt-4">
            <button
              onClick={handlePrevClick}
              className="text-2xl text-[#093376] p-2 "
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNextClick}
              className="text-2xl text-[#093376] p-2"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;


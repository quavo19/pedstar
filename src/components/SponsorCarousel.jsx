import React from "react";
import Slider from "react-slick";

const sponsors = [
  { src: require("../images/brands/BBautomobile.png"), alt: "Sponsor 1" },
  { src: require("../images/brands/addidas.png"), alt: "Sponsor 1" },
  { src: require("../images/brands/alitalia.png"), alt: "Sponsor 1" },
  { src: require("../images/brands/chgroup.png"), alt: "Sponsor 1" },
  { src: require("../images/brands/cinemas.png"), alt: "Sponsor 1" },
  { src: require("../images/brands/delta.png"), alt: "Sponsor 1" },
  { src: require("../images/brands/duraplast.png"), alt: "Sponsor 1" },
  { src: require("../images/brands/ecobank.png"), alt: "Sponsor 1" },
  { src: require("../images/brands/efao.png"), alt: "Sponsor 1" },
  { src: require("../images/brands/kaymu.png"), alt: "Sponsor 1" },
  { src: require("../images/brands/kenyaair.png"), alt: "Sponsor 1" },
  { src: require("../images/brands/lamudi.png"), alt: "Sponsor 1" },
  { src: require("../images/brands/melcom.png"), alt: "Sponsor 1" },
  { src: require("../images/brands/nike.png"), alt: "Sponsor 1" },
  { src: require("../images/brands/sahara.png"), alt: "Sponsor 1" },
  { src: require("../images/brands/stanbic.png"), alt: "Sponsor 1" },
  { src: require("../images/brands/union.png"), alt: "Sponsor 1" },
  { src: require("../images/brands/upsa.png"), alt: "Sponsor 1" },
  { src: require("../images/brands/usaid.png"), alt: "Sponsor 1" }
  //   { src: require("../images/brands"), alt: "Sponsor 1" },
  //   { src: require("../images/brands"), alt: "Sponsor 1" },
  //   { src: require("../images/brands"), alt: "Sponsor 1" },
  //   { src: require("../images/brands"), alt: "Sponsor 1" },
  //   { src: require("../images/brands"), alt: "Sponsor 1" },
  //   { src: require("../images/brands"), alt: "Sponsor 1" },
  //   { src: require("../images/brands"), alt: "Sponsor 1" },
  //   { src: require("../images/brands"), alt: "Sponsor 1" },
  //   { src: require("../images/brands"), alt: "Sponsor 1" }
];

const SponsorCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Show 6 items at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Hide navigation arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4 // Adjust the number of slides for medium screens
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2 // Adjust the number of slides for smaller screens
        }
      }
    ]
  };

  return (
    <div className="md:px-24 px-6 pt-9">
      <Slider {...settings} className="flex space-x-4">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="flex items-center justify-center p-4">
            <img
              src={sponsor.src}
              alt={sponsor.alt}
              className="w-full h-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SponsorCarousel;


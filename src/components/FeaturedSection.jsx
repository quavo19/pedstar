import React from "react";
import {
  FaRegLightbulb,
  FaHeadset,
  FaChartLine,
  FaBriefcase,
  FaPlane,
  FaPrint,
  FaChalkboardTeacher
} from "react-icons/fa";

const services = [
  {
    title: "Brand Design & Management",
    description:
      "Our brand management process integrates together a perfect mix of modules including defining the brand, positioning the brand, and delivering the brand value constantly.",
    icon: <FaRegLightbulb />
  },
  {
    title: "Consultancy & Support Services",
    description:
      "We offer services and assistance on residence permit, work permit, immigration and settlement processes, documentation, and visa on arrival. Our tour services covers USA, UK, Europe, Asia, Dubai, Sao Tomè and other selected destinations purposely designed for individuals, students, corporates enterprises, businessmen and women.",
    icon: <FaHeadset />
  },
  {
    title: "Digital Marketing",
    description:
      "Let PedStar’s digital marketing team help you develop an online marketing strategy to drive more qualified visitors to your business and convert those visitors into leads and sales.",
    icon: <FaChartLine />
  },
  {
    title: "Export & Import",
    description:
      "PedStar can help you comply with import and export requirements, assisting smooth customs clearance. We specialize in import & export logistics, providing personalized and freight shipping services.",
    icon: <FaPlane />
  },
  {
    title: "Procurement",
    description:
      "PedStar manages your office setup deployments following best industry protocols that will get your office space professionally and running properly. We will procure and deliver all your office needs.",
    icon: <FaBriefcase />
  },
  {
    title: "Printing",
    description:
      "We offer full-service printing for big and small businesses. Speed, quality, good finish and delivery matters in everything we do. We keep an eye on the clock, consistently accelerating our response times.",
    icon: <FaPrint />
  },
  {
    title: "Training & Coaching",
    description:
      "Our Training & Coaching services are designed to empower your team with the skills and knowledge needed to excel in their roles. We offer personalized coaching sessions and comprehensive training programs tailored to your business needs.",
    icon: <FaChalkboardTeacher />
  }
];

const FeaturedSection = () => {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div className="relative py-5 flex flex-col items-center text-center overflow-hidden">
        <h2 className="text-2xl font-bold mb-3 text-[#093376]">
          You Have a Business, We Help People Find It
        </h2>
        <p className="text-base mb-4">
          We are a fully in-house digital agency focusing on branding,
          marketing, web design and development with clients ranging from
          start-ups. We pride ourselves on partnering with clients in order to
          give the most transparent and educational experience.
        </p>
        <div className="flex flex-wrap justify-center ">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative items-center w-full md:w-[350px] p-6 m-4 rounded-xl overflow-hidden bg-white border border-gray-300 text-center"
            >
              <img
                src={require("../images/blue-dot-pattern.webp")}
                alt={`Item ${index + 1}`}
                className="absolute top-0 left-0 w-32 h-32 object-cover opacity-30 transform rotate-45 -translate-x-1/2 -translate-y-1/2"
              />
              <div className="absolute top-2 right-2 p-2 z-10 text-white bg-[#093376] text-lg rounded-full">
                {service.icon}
              </div>
              <div className="flex md:h-[90%] flex-col items-center justify-center">
                <h3 className="text-lg font-semibold mb-2 mt-6 text-[#093376]">
                  {service.title}
                </h3>
                <p className="md:text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;


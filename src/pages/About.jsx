import React from "react";
import {
  FaEye,
  FaBullseye,
  FaHandHoldingHeart,
  FaCogs,
  FaUsers,
  FaTasks
} from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="bg-white">
      <div className="relative flex justify-between items-center overflow-hidden p-8 bg-blue-50 h-screen">
        <div className="max-w-lg md:max-w-2xl z-30 mb-32 flex flex-col gap-2 mt-32">
          <p className="md:text-l text-sm text-white bg-[#093376] px-4 py-1 border-l-4 border-[#ffc000] w-[140px] md:w-[160px]">
            Get To Know Us
          </p>
          <h1 className="md:text-5xl text-3xl font-semibold relative text-[#093376]">
            About Us
          </h1>
          <p className="md:text-l text-[#093376]">
            Pedstar, founded on September 25, 2008, is a leading marketing and
            advertising company in Ghana. We specialize in connecting
            decision-makers with a dynamic network of services, people, and
            ideas. Our offerings include business and marketing information,
            consulting, advertising, training, procurement, and insights. Our
            expertise in understanding our audience enables us to deliver
            targeted, creative solutions and long-term analytical insights.
            Committed to our clients and driven by our corporate culture, we
            consistently produce impactful work while focusing on campaign
            objectives.
          </p>
          {/* Add more content as needed */}
        </div>

        <div className="absolute md:w-[70vw] opacity-40 z-20 md:h-[75vh] w-[100vw] h-[60vh] md:top-[-100px] left-[30%] md:left-[55%] bottom-[-20%] -mt-4">
          <div
            className="relative md:w-[70vw] md:h-[75vh] w-[100vw] h-[60vh] md:opacity-100 bg-[#093376] border-[20px] border-[#093376]"
            style={{
              borderTopLeftRadius: "70%",
              borderTopRightRadius: "30%",
              borderBottomLeftRadius: "30%",
              borderBottomRightRadius: "70%"
            }}
          >
            <img
              style={{
                borderTopLeftRadius: "70%",
                borderTopRightRadius: "30%",
                borderBottomLeftRadius: "30%",
                borderBottomRightRadius: "70%"
              }}
              src={require("../images/about-wm.jpg")}
              alt="Profile"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>
        {/* Donut-shaped circles */}
        <div className="opacity-20">
          <div className="absolute border-[70px] border-[#093376] rounded-full w-[400px] h-[400px] bottom-10 left-10"></div>
          <div className="absolute border-[50px] border-[#093376] rounded-full w-[350px] h-[350px] bottom-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
          {/* Rectangles */}
          <div className="absolute bg-[#093376] rounded-3xl w-[400px] h-[200px] bottom-1/4 right-1/4 transform rotate-45"></div>
          <div className="absolute bg-[#093376] rounded-3xl w-[250px] h-[100px] bottom-1/5 left-1/4 transform rotate-45"></div>
          {/* Stars */}
        </div>
      </div>
      <div className="flex flex-col items-center text-center md:p-8 my-16 bg-white ">
        <h2 className="text-2xl font-bold mb-3 text-[#093376]">
          Our Guiding Principles
        </h2>
        <p className="text-base mb-4 text-[#093376]">
          At the heart of everything we do are our mission, vision, and values.
          They shape our actions, drive our commitment, and define our culture.
        </p>
        <div className="flex flex-wrap justify-center ">
          <div className="relative flex flex-wrap justify-center">
            <div className="relative w-full md:w-[300px] p-4 m-4 rounded-xl border-4 border-dotted border-[#093376] text-center">
              <div className="flex items-center justify-center h-12 w-12 mx-auto rounded-full bg-[#093376]">
                <FaEye className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2 mt-4 text-[#093376]">
                Vision
              </h3>
              <p className="md:text-sm text-[#093376]">
                Delivering results-oriented brand marketing products, programs,
                and public relations campaigns that enhance our clients’
                awareness, improve their sales, and foster their growth.
              </p>
            </div>
            <div className="relative w-full md:w-[300px] p-4 m-4 rounded-xl border-4 border-dotted border-[#093376] text-center">
              <div className="flex items-center justify-center h-12 w-12 mx-auto rounded-full bg-[#093376]">
                <FaBullseye className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2 mt-4 text-[#093376]">
                Mission
              </h3>
              <p className="md:text-sm text-[#093376]">
                To provide innovative and effective integrated brand marketing
                and public relations solutions which help our clients grow their
                businesses and realize their marketing goals.
              </p>
            </div>
            <div className="relative w-full md:w-[300px] p-4 m-4 rounded-xl border-4 border-dotted border-[#093376] text-center">
              <div className="flex items-center justify-center h-12 w-12 mx-auto rounded-full bg-[#093376]">
                <FaHandHoldingHeart className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2 mt-4 text-[#093376]">
                Our Values
              </h3>
              <p className="md:text-sm text-[#093376]">
                Our staff enjoy a personal stake in your continued success and
                take pride in what we do.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex items-left justify-center md:items-start flex-col md:px-11 px-6 py-11 bg-[#f9f9f9] h-[70vh]">
        <h2 className="text-2xl font-bold mb-6 text-[#093376]">
          How Are We Different
        </h2>

        <div className="w-full md:w-1/2">
          <div className="flex flex-col space-y-6">
            <div className="flex items-start gap-5">
              <div className="flex items-center justify-center  min-h-[45px] min-w-[45px] mx-auto rounded-full bg-[#093376]">
                <FaCogs className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#093376]">
                  Strategic Planning
                </h3>
                <p className="text-[#093376] text-sm">
                  We start by understanding your goals and crafting a strategic
                  plan that aligns with your vision and market needs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="flex items-center justify-center  min-h-[45px] min-w-[45px] mx-auto rounded-full bg-[#093376]">
                <FaTasks className="text-white text-lg" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#093376]">
                  Execution & Monitoring
                </h3>
                <p className="text-[#093376] text-sm">
                  Our team executes the plan with precision while continuously
                  monitoring performance to ensure optimal results.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="flex items-center justify-center  min-h-[45px] min-w-[45px] mx-auto rounded-full bg-[#093376]">
                <FaUsers className="text-white text-lg" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#093376]">
                  Client Collaboration
                </h3>
                <p className="text-[#093376] text-sm">
                  We value close collaboration with our clients, keeping you
                  informed and involved throughout the process.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTopLeftRadius: "50%",
            borderBottomLeftRadius: "50%",
            borderRight: "none"
          }}
          className="absolute opacity-20 bg-[#093376] top-0 right-0 w-1/2 h-full overflow-hidden border-[20px] border-[#093376]"
        >
          <img
            style={{
              borderTopLeftRadius: "50%",
              borderBottomLeftRadius: "50%"
            }}
            src={require("../images/how-we-work-mk.jpg")}
            alt="Background"
            className="w-full h-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;


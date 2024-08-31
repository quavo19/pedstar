import React from "react";
import { Link } from "react-router-dom";

const ContactBanner = () => {
  return (
    <div className="bg-[#093376] p-6 flex flex-col my-6 md:my-11 md:flex-row items-center justify-center text-white shadow-lg">
      <div className="w-full md:w-1/2 mb-4 md:mb-0 text-center md:text-left">
        <h1 className="text-lg font-bold">Let's write your story, together.</h1>
        <p className="mt-2 text-sm">
          We do not tell you our story. We write it together. Partnering with us
          means a seat at the table where you will be heard.
        </p>
      </div>
      <button
        className="relative text-white btn btn-wide text-white border-none overflow-hidden py-4 px-6"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(255, 192, 0), rgb(255 208 78))"
        }}
      >
        <Link to={"/contact"}>Contact Us</Link>
        <span
          className="absolute bottom-0 right-0 h-14 w-14 bg-white rounded-full"
          style={{
            transform: "translate(50%, 50%)"
          }}
        ></span>
      </button>
    </div>
  );
};

export default ContactBanner;


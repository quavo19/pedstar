import React, { useRef, useState } from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaUser,
  FaTag,
  FaLinkedin,
  FaPhone
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BaseUrl } from "../components/BaseUrl";

const Contact = () => {
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BaseUrl}/submitContact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setResponseMessage("Your message has been sent successfully!");
        setIsError(false); // Set error flag to false on success
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: ""
        });
      } else {
        const errorData = await response.json();
        console.error("Error Response:", errorData);
        setResponseMessage("Failed to send your message. Please try again.");
        setIsError(true); // Set error flag to true on failure
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("An error occurred. Please try again later.");
      setIsError(true); // Set error flag to true on exception
    }
  };

  return (
    <div className="bg-white">
      <div className="w-full h-50vh relative">
        <div className="absolute inset-0">
          <img
            src={require("../images/oldphones.jpg")}
            alt="Portfolio Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-[50vh]">
          <div className="text-center text-white px-4 pt-[70px]">
            <h1 className="md:text-5xl py-2 text-3xl font-semibold relative">
              <span className="text-[#ffc000]"> Contact</span> Us
            </h1>
            <p className="md:text-l max-w-2xl mx-auto">
              Have questions or feedback? Reach out to us anytime. We're here to
              help and will get back to you soon!
            </p>
          </div>
        </div>
      </div>
      <div id="contact" ref={contactRef} className="">
        <div className="flex flex-wrap justify-between gap-8 md:mx-10">
          <div className="flex-1 max-w-md md:p-8 p-4">
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <label
                htmlFor="name"
                className="flex items-center gap-2 mt-4  text-[#093376]"
              >
                <FaUser className="text-l" />
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="rounded-lg h-11 mt-2 p-2 border border-gray-300 outline-none text-sm"
              />
              <label
                htmlFor="phone"
                className="flex items-center gap-2 mt-4  text-[#093376]"
              >
                <FaPhone className="text-l" />
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="What is your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="rounded-lg h-11 mt-2 p-2 border border-gray-300 outline-none text-sm"
              />
              <label
                htmlFor="email"
                className="flex items-center gap-2 mt-4  text-[#093376]"
              >
                <FaEnvelope className="text-l" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="rounded-lg h-11 mt-2 p-2 border border-gray-300 outline-none text-sm"
              />
              <label
                htmlFor="message"
                className="flex items-center gap-2 mt-4  text-[#093376]"
              >
                <FaMessage className="text-l" />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="rounded-lg mt-2 p-2 border border-gray-300 outline-none text-sm"
                rows="4"
              />
              <button
                className="relative text-white btn btn-wide text-white border-none overflow-hidden py-4 px-6 w-full mt-6"
                style={{
                  backgroundImage: "linear-gradient(to right, #ffc000, #ffdd80)"
                }}
              >
                Send Message
                <span
                  className="absolute bottom-0 right-0 h-14 w-14 bg-white rounded-full"
                  style={{
                    transform: "translate(50%, 50%)"
                  }}
                ></span>
              </button>
              <span
                className={`mt-2 block text-sm ${
                  isError ? "text-red-500" : "text-green-500"
                }`}
              >
                {responseMessage}
              </span>
            </form>
          </div>
          <div className="flex md:max-w-[50% flex-col bg-gray-200 w-full gap-10 md:p-16 px-4 py-11 md:rounded-xl">
            <h2 className="text-2xl font-semibold text-[#093376]">
              Contact Us
            </h2>
            <div className="flex flex-col gap-10">
              <ul className="space-y-3 text-center flex flex-col gap-[10px] md:text-left">
                <li className="flex items-center text-[#093376] md:justify-center md:justify-start">
                  <FaPhoneAlt className="mr-2" />
                  <a
                    href="tel:+233200111102"
                    className="hover:underline text-sm"
                  >
                    +233 20 011 1102
                  </a>
                </li>
                <li className="flex items-center text-[#093376] md:justify-center md:justify-start">
                  <FaPhoneAlt className="mr-2" />
                  <a
                    href="tel:+233507003551"
                    className=" hover:underline text-sm"
                  >
                    +233 50 700 3551
                  </a>
                </li>
                <li className="flex items-center text-[#093376] md:justify-center md:justify-start">
                  <FaEnvelope className="mr-2" />
                  <a
                    href="mailto:info@pedstarghana.com"
                    className=" hover:underline text-sm"
                  >
                    info@pedstarghana.com
                  </a>
                </li>
                <li className="flex items-center text-[#093376] md:justify-center md:justify-start">
                  <FaEnvelope className="mr-2" />
                  <a
                    href="mailto:sales@pedstarghana.com"
                    className=" hover:underline text-sm"
                  >
                    sales@pedstarghana.com
                  </a>
                </li>
                <li className="flex items-center text-[#093376] justify-center md:justify-start">
                  <FaMapMarkerAlt className="mr-2" />
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/search/1+Oak+Link+Ring+Road+East,+Labone+-+Accra,+Ghana/@5.5634849,-0.1771016,847m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                    className=" text-sm"
                  >
                    Oak Link Ring Road East, Labone - Accra, Ghana
                  </a>
                </li>
              </ul>
              <div className="flex gap-4">
                <a
                  href="https://pedstarghana.thesmart.space/index.php#"
                  className=" p-4 bg-[#093376] rounded-full"
                >
                  <FaFacebookF color="#ffc000" size={24} />
                </a>
                <a
                  href="https://pedstarghana.thesmart.space/index.php#"
                  className=" p-4 bg-[#093376] rounded-full"
                >
                  <FaTwitter color="#ffc000" size={24} />
                </a>
                <a
                  href="https://www.instagram.com/pedstarcoltd/"
                  className=" p-4 bg-[#093376] rounded-full"
                >
                  <FaInstagram color="#ffc000" size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-10 p-2">
          <iframe
            title="map"
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Oak%20Link%20Ring%20Road%20East,%20Labone%20-%20Accra,%20Ghana+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps tracker sport</a>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;


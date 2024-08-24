import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#093376] text-white py-11 relative overflow-hidden ">
      <div className="relative z-10 container mx-auto px-4 lg:px-16">
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center md:items-start w-full md:w-[300px]">
            <img
              src={require("../images/goldlogo.png")}
              alt="Logo"
              className="w-32 mb-4"
            />
            <p className="text-center text-sm md:text-left">
              Our commitment to our clients is deeply ingrained in our corporate
              culture – and we go above and beyond every day to prove it. It’s
              in our DNA. We produce clever work, but always keep the objective
              of each campaign top of mind.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start w-full md:w-1/5">
            <h3 className="text-xl font-semibold mb-6 relative before:content-[''] before:absolute before:left-1/3 md:before:left-0 before:bottom-[-8px] before:w-8 before:h-[2px] before:bg-[#ffc000] before:rounded-sm">
              Work With Us
            </h3>
            <ul className="space-y-3 text-center md:text-left">
              <li>
                <Link to="#" className="text-white hover:underline text-sm">
                  Brand Management
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white hover:underline text-sm">
                  Corporate Branding
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white hover:underline text-sm">
                  Recruitment
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white hover:underline text-sm">
                  Sales & Product Growth
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white hover:underline text-sm">
                  Staff Training
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start w-full md:w-1/6 md:max-w-[150px]">
            <h3 className="text-l font-semibold mb-6 relative before:content-[''] before:absolute before:left-1/3 md:before:left-0 before:bottom-[-8px] before:w-11 before:h-[2px] before:bg-[#ffc000] before:rounded-sm">
              Useful Links
            </h3>
            <ul className="space-y-3 text-center md:text-left">
              <li>
                <Link
                  to="/about"
                  className="text-white hover:underline text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white hover:underline text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white hover:underline text-sm"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-white hover:underline text-sm"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start w-full md:w-1/5">
            <h3 className="text-xl font-semibold mb-6 relative before:content-[''] before:absolute before:left-1/3 md:before:left-0 before:bottom-[-8px] before:w-8 before:h-[2px] before:bg-[#ffc000] before:rounded-sm">
              Contact Us
            </h3>
            <ul className="space-y-3 text-center md:text-left">
              <li className="flex items-center justify-center md:justify-start">
                <FaPhoneAlt className="mr-2" />
                <a
                  href="tel:+233200111102"
                  className="text-white hover:underline text-sm"
                >
                  +233 20 011 1102
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaPhoneAlt className="mr-2" />
                <a
                  href="tel:+233507003551"
                  className="text-white hover:underline text-sm"
                >
                  +233 50 700 3551
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="mr-2" />
                <a
                  href="mailto:info@pedstarghana.com"
                  className="text-white hover:underline text-sm"
                >
                  info@pedstarghana.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="mr-2" />
                <a
                  href="mailto:sales@pedstarghana.com"
                  className="text-white hover:underline text-sm"
                >
                  sales@pedstarghana.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#ffc000] my-8"></div>

        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <div className="text-center">
            <p className="text-sm">©2024 PedStar. All rights reserved</p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://pedstarghana.thesmart.space/index.php#"
              className="text-white hover:text-[#ffc000]"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://pedstarghana.thesmart.space/index.php#"
              className="text-white hover:text-[#ffc000]"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/pedstarcoltd/"
              className="text-white hover:text-[#ffc000]"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


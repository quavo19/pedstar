import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ExpandMore as ExpandMoreIcon,
  Menu as MenuIcon,
  Close as CloseIcon
} from "@mui/icons-material";

export default function Navbar() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Portfolio", "Contact", "Services"];

  // Set active item based on the current location path
  useEffect(() => {
    const path = location.pathname;
    const currentItem = navItems.find(
      (item) =>
        path === `/${item.toLowerCase()}` || (item === "Home" && path === "/")
    );
    setActiveItem(currentItem || "Home");
  }, [location]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gray-800 bg-opacity-70 flex items-center justify-between p-4 fixed top-0 w-full z-10 md:px-24 px-6 z-50">
      <div className="lg:hidden">
        <button onClick={handleMobileMenuToggle}>
          {isMobileMenuOpen ? (
            <CloseIcon className="text-white z-30" />
          ) : (
            <MenuIcon style={{ color: "#fff", fontSize: "36px" }} />
          )}
        </button>
      </div>
      <ul className="hidden lg:flex items-center text-white text-sm font-medium">
        {navItems.map((item, index) => (
          <React.Fragment key={index}>
            <li
              className={`relative flex items-center cursor-pointer ${
                activeItem === item
                  ? "after:block after:border-b-2 after:border-white after:absolute after:top-11 after:left-0 after:right-0"
                  : ""
              }`}
            >
              <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                {item}
              </Link>
            </li>
            {index < navItems.length - 1 && (
              <span className="h-4 w-[1px] bg-gray-300 opacity-50 mx-4"></span>
            )}
          </React.Fragment>
        ))}
      </ul>
      <Link to={"./"} className="flex-shrink-0">
        <img
          src={require("../images/goldlogo.png")}
          alt="Logo"
          className="h-10 w-auto"
        />
      </Link>
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-[#093376] z-20 flex flex-col items-start justify-start text-white text-lg p-8"
          onClick={handleCloseMobileMenu}
        >
          <button onClick={handleCloseMobileMenu} className="mb-8">
            <CloseIcon className="text-white text-3xl" />
          </button>
          {navItems.map((item, index) => (
            <React.Fragment key={index}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={handleCloseMobileMenu}
                className="mb-4 font-light"
              >
                {item}
              </Link>
            </React.Fragment>
          ))}
        </div>
      )}
    </nav>
  );
}


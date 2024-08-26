import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ExpandMore as ExpandMoreIcon,
  Menu as MenuIcon,
  Close as CloseIcon
} from "@mui/icons-material";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Portfolio", "Contact", "Services"];
  const dropdownItems = [
    { name: "Advertising", path: "/advertising" },
    { name: "Consultancy", path: "/consultancy" },
    { name: "Corporate Training", path: "/corporate-training" },
    { name: "Import & Export", path: "/import-and-export" },
    { name: "Marketing", path: "/marketing" },
    { name: "Procurement", path: "/procurement" }
  ];

  const handleDropdownItemClick = (path) => {
    setActiveItem(path);
    setDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

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
                item !== "Services" && activeItem === item
                  ? "after:block after:border-b-2 after:border-white after:absolute after:top-11 after:left-0 after:right-0"
                  : ""
              }`}
              onClick={() => {
                if (item !== "Services") {
                  setActiveItem(item);
                }
              }}
            >
              {item === "Services" ? (
                <div
                  className="flex items-center"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className="flex items-center text-white"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Services
                    <ExpandMoreIcon className="ml-2" />
                  </button>
                  {dropdownOpen && (
                    <ul className="absolute left-0 mt-[330px] bg-[#00244bc2] text-white rounded-md shadow-lg z-20">
                      {dropdownItems.map((subitem, subindex) => (
                        <li
                          key={subindex}
                          className="w-52 hover:bg-[#00244bc2]"
                        >
                          <Link
                            to={subitem.path}
                            onClick={() =>
                              handleDropdownItemClick(subitem.name)
                            }
                            className="block w-full h-full px-4 py-4"
                          >
                            {subitem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                  {item}
                </Link>
              )}
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
              {item === "Services" ? (
                <div className="flex flex-col items-start">
                  <div className="flex items-center font-light">
                    Services
                    <ExpandMoreIcon className="ml-2" />
                  </div>
                  <ul className="ml-4 mt-2 space-y-4">
                    {dropdownItems.map((subitem, subindex) => (
                      <li
                        key={subindex}
                        className="py-1 hover:text-gray-300 font-light"
                      >
                        <Link
                          to={subitem.path}
                          onClick={() => handleDropdownItemClick(subitem.name)}
                        >
                          {subitem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={handleCloseMobileMenu}
                  className="mb-4 font-light"
                >
                  {item}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </nav>
  );
}


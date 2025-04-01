import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center fixed top-0 w-full z-50">
      {/* Logo */}
      <div className="logo">
        <img
          src="https://i.ibb.co/B5zSn3LC/Screenshot-410-removebg-preview.png"
          alt="Logo"
          className="h-20 w-25"
        />
      </div>

      {/* Hamburger Menu */}
      <button
        className="md:hidden text-gray-700 focus:outline-none z-50 relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
        ></div>
      </button>

      {/* Navigation Links */}
      <nav
        className={`nav-links fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center transition-all duration-500 ease-in-out transform ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } md:static md:w-auto md:h-auto md:bg-transparent md:flex md:translate-y-0 md:opacity-100`}
      >
        <ul className="flex flex-col md:flex-row w-full text-center gap-6 nav_Links">
          <li>
            <a href="#projects" className="nav-link hover-underline block py-4 ">
              Projects
            </a>
          </li>
          <li>
            <a href="#shop" className="nav-link hover-underline block py-4 ">
              Shop
            </a>
          </li>
          <li>
            <a href="#video" className="nav-link hover-underline block py-4 ">
              Video
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link hover-underline block py-4 ">
              About
            </a>
          </li>
          <li>
            <a href="#journals" className="nav-link hover-underline block py-4 ">
              Journals
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Events', path: '/event' },
    { name: 'Office Bearers', path: '/office-bearers' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 font-poppins h-[84px] flex items-center">
      <div className="container mx-auto px-4 flex justify-between items-center h-full">
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="IEEE Computer Society Kerala Chapter" className="w-[127px] h-[46px]" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-start  gap-10 w-[70%]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[20px] text-black hover:text-[#CC7E00] transition duration-300 font-normal"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg top-[84px]">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-[20px] text-black hover:text-orange-500 transition duration-300 font-medium"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

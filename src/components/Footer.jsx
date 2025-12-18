import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import instaIcon from '../assets/icons/instagram.svg';
import whatsappIcon from '../assets/icons/whatsapp.svg';
import linkedinIcon from '../assets/icons/linkdin.svg';

const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-to-b from-[#FFFCF6] to-[#FAA41A] border-t border-gray-200 font-poppins">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-12">

          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img src={logo} alt="IEEE CSKS Logo" className="w-[142px] h-[52px] object-contain" />
          </div>

          {/* Not A Member CTA */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[19px] font-normal text-black font-poppins">Not An IEEE CS Member?</h3>
            <a
              href="https://www.computer.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[141px] h-[45px] border border-[#faa41a] rounded-[27px] flex items-center justify-center text-[15px] text-black hover:bg-[#faa41a] hover:text-white transition-all duration-300"
            >
              Join Us
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-[15px] font-normal text-black hover:text-[#faa41a] transition-colors">Home</Link>
            <Link to="/about" className="text-[15px] font-normal text-black hover:text-[#faa41a] transition-colors">About Us</Link>
            <Link to="/event" className="text-[15px] font-normal text-black hover:text-[#faa41a] transition-colors">Events</Link>
            <Link to="/gallery" className="text-[15px] font-normal text-black hover:text-[#faa41a] transition-colors">Gallery</Link>
            <Link to="/office-bearers" className="text-[15px] font-normal text-black hover:text-[#faa41a] transition-colors">Office Bearer</Link>
            <Link to="/contact" className="text-[15px] font-normal text-black hover:text-[#faa41a] transition-colors">Contact</Link>
          </div>

          {/* Related Links */}
          <div className="flex flex-col gap-2">
            <h4 className="text-[15px] font-normal text-black mb-1">Related Links</h4>
            <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer" className="text-[15px] font-normal text-black hover:text-[#faa41a] transition-colors">IEEE</a>
            <a href="https://ieeekerala.org/" target="_blank" rel="noopener noreferrer" className="text-[15px] font-normal text-black hover:text-[#faa41a] transition-colors">IEEE Kerala Section</a>
            <a href="https://www.computer.org/" target="_blank" rel="noopener noreferrer" className="text-[15px] font-normal text-black hover:text-[#faa41a] transition-colors">IEEE Computer Society</a>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[15px] font-bold text-black font-poppins">Connect with IEEE CSKS</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/ieeecsks?igsh=MWw0c3U2MXF4MGtlOA==" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <img src={instaIcon} alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="https://whatsapp.com/channel/0029VaKFZ0e0bIdpmuDApI2t" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/ieeecsks/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 text-center">
          <p className="text-[12px] font-normal text-black">
            Copyright © 2025 IEEE CSKS | Crafted by Web Team of IEEE CSKS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import locationIcon from '../assets/icons/location.png';
import phoneIcon from '../assets/icons/phone.png';
import emailIcon from '../assets/icons/email.png';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-16 font-poppins text-black">
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-start max-w-[1240px] mx-auto">

        {/* Left Column: Message Form Box */}
        <div className="w-full lg:w-[579px] lg:h-[575px] bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] p-8 lg:p-12 flex flex-col justify-center">
          <h2 className="text-[25px] font-medium text-[#d98a12] mb-6">
            Give Us a Message
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 bg-white border border-gray-200 rounded-lg text-[15px] font-medium outline-none focus:border-[#faa41a] shadow-sm placeholder:text-gray-400"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 bg-white border border-gray-200 rounded-lg text-[15px] font-medium outline-none focus:border-[#faa41a] shadow-sm placeholder:text-gray-400"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 bg-white border border-gray-200 rounded-lg text-[15px] font-medium outline-none focus:border-[#faa41a] shadow-sm placeholder:text-gray-400"
            />

            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-4 bg-white border border-gray-200 rounded-lg text-[15px] font-medium outline-none focus:border-[#faa41a] shadow-sm resize-none placeholder:text-gray-400"
            ></textarea>

            <button
              type="button"
              className="w-[171px] h-[45px] bg-[#faa41a] text-white text-[15px] font-semibold rounded-[16px] hover:bg-opacity-90 transition-all duration-300 shadow-md mt-6"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Column: Contact Info Box */}
        <div className="w-full lg:w-[579px] lg:h-[575px] bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] p-8 lg:p-12 flex flex-col justify-between">
          <div>
            <h2 className="text-[25px] font-medium text-[#d98a12] mb-4">
              Contact Info
            </h2>
            <p className="text-[15px] font-medium text-black mb-8 leading-relaxed">
              Send a message through the form. If your enquiry is time sensitive, please use the contact details below
            </p>

            <div className="space-y-4">
              {/* Post Address */}
              <div className="bg-white rounded-[20px] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 flex items-center gap-6">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                  <img src={locationIcon} alt="Location" className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <h3 className="text-[18px] font-medium text-black">Post Address</h3>
                  <p className="text-[14px] font-medium text-black">Kerala, India</p>
                </div>
              </div>

              {/* General Enquiries */}
              <div className="bg-white rounded-[20px] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 flex items-center gap-6">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                  <img src={phoneIcon} alt="Phone" className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <h3 className="text-[18px] font-medium text-black">General Enquiries</h3>
                  <p className="text-[14px] font-medium text-black">+91 7736006961</p>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-[20px] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 flex items-center gap-6">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                  <img src={emailIcon} alt="Email" className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <h3 className="text-[18px] font-medium text-black">E-mail</h3>
                  <p className="text-[14px] font-medium text-black">ieeecs.ks@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://www.whatsapp.com/channel/0029VaKFZ0e0bIdpmuDApI2t"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[333px] h-[59px] bg-[#faa41a] text-white text-[15px] font-semibold rounded-[16px] flex items-center justify-center hover:bg-opacity-90 transition-all duration-300 shadow-md mx-auto lg:mx-0 mt-6"
          >
            Also Join Our WhatsApp Channel
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

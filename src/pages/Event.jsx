import React, { useRef, useEffect } from 'react';
import img37 from '../assets/images/gallery/37.png';
import img6 from '../assets/images/gallery/6.png';
import img13 from '../assets/images/gallery/13.png';
import img31 from '../assets/images/gallery/31.png';
import img30 from '../assets/images/gallery/30.png';
import img20 from '../assets/images/gallery/20.png';
import img18 from '../assets/images/gallery/18.png';
import img43 from '../assets/images/gallery/43.png';
import img34 from '../assets/images/gallery/34.png';
import img27 from '../assets/images/gallery/27.png';
import img28 from '../assets/images/gallery/28.png';

// Flagship Images
import akcsscImg from '../assets/images/AKCSSC.png';
import slashKeyImg from '../assets/images/Slash key.png';
import informatykaImg from '../assets/images/Informatyka.png';
import eleverImg from '../assets/images/Elever.png';

// Upcoming Events Images
import event1 from '../assets/images/event1.jpeg';
import event2 from '../assets/images/event2.jpeg';
import event3 from '../assets/images/event3.jpeg';
import event4 from '../assets/images/event4.jpeg';
import event5 from '../assets/images/event5.jpeg';
import event6 from '../assets/images/event6.jpeg';
import event7 from '../assets/images/event7.jpeg';

const Event = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: 'smooth'
        });
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const flagshipEvents = [
    {
      id: 1,
      image: akcsscImg,
      title: "AKCSSC",
      description: "All Kerala Computer Society Student Convention (AKCSSC) is the flagship event of the IEEE Computer Society Kerala Chapter (CSKS). This three-day extravaganza brings together students, professionals, and innovators from across Kerala for a blend of technical sessions, cultural experiences, and networking opportunities. Featuring cutting-edge workshops, Inspiring talks, and a vibrant networking dinner, AKCSSC fosters collaboration, creativity, and meaningful connections within the tech community."
    },
    {
      id: 2,
      image: slashKeyImg,
      title: "Slash Key 3.0",
      description: "Slash Key 3.0 is a 30-hour flagship hackathon organized by the IEEE Computer Society Kerala Chapter (CSKS). Designed to ignite innovation and problem-solving, it brings together the brightest minds to collaborate, code, and create impactful solutions. With intense coding sessions, mentorship, and a competitive yet collaborative environment, Slash Key 3.0 pushes participants to transform ideas into reality."
    },
    {
      id: 3,
      image: informatykaImg,
      title: "Informatyka 5.0",
      description: "Informatyka 5.0 is a dynamic and innovation-driven flagship event conducted by the IEEE Computer Society Kerala Chapter, designed to inspire creativity, technical excellence, and collaborative problem-solving among aspiring developers and tech enthusiasts. Bringing together passionate minds from diverse domains, the event fosters an environment where ideas evolve into impactful solutions through intensive sessions, hands-on challenges, and expert mentorship."
    },
    {
      id: 4,
      image: eleverImg,
      title: "Elever 5.0",
      description: "Elever 5.0 is the fifth iteration of the flagship leadership and technical competition organized by the IEEE Computer Society Kerala Chapter (CSKS). It is a high-energy competition designed to foster, challenge, and showcase the talents of IEEE student members across Kerala, featuring multiple tasks leading up to a finale."
    }
  ];

  return (
    <div className="font-poppins overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-center">

          {/* Left Section - Text Content */}
          <div className="flex-1 flex flex-col gap-6 text-center lg:text-left pl-4 lg:pl-12 min-w-[300px]">

            {/* Headings */}
            <div className="flex flex-col">
              <h1
                className="text-[40px] md:text-[58px] font-bold leading-tight tracking-wide"
                style={{
                  WebkitTextStroke: '2px #b47f26',
                  WebkitTextFillColor: 'white',
                  color: 'white'
                }}
              >
                Explore and <br />
                Discover the <br />
                Events
              </h1>
              <h2 className="text-[18px] md:text-[22px] font-medium text-black mt-2">
                That Shape Tomorrow
              </h2>
            </div>

            {/* Paragraph */}
            <p className="text-[15px] font-medium text-black leading-relaxed max-w-xl mx-auto lg:mx-0">
              Step into a world of experiences designed to spark curiosity and fuel growth.
              Our events bring together passionate minds, powerful ideas, and opportunities
              to learn, lead, and create. Discover how each moment contributes to a vibrant
              tech community built on inspiration, empowerment, and innovation.
            </p>

            {/* Button */}
            <div className="flex justify-center pt-8">
              <button
                className="w-[141px] h-[45px] border border-[#faa41a] rounded-[27px] flex items-center justify-center text-[15px] text-black hover:bg-[#faa41a] hover:text-white transition-all duration-300 font-normal"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Section - Image Grid */}
          <div className="hidden lg:flex flex-none flex-col gap-[4px] md:gap-[6px] items-end w-full lg:w-auto mt-8 lg:mt-0">

            {/* Row 1 */}
            <div className="flex gap-[4px] md:gap-[6px] justify-end items-end w-full mb-[4px] md:mb-[6px]">
              <div className="w-[60%] md:w-[457px] h-[100px] md:h-[200px] rounded-2xl overflow-hidden flex-shrink-0">
                <img src={img37} alt="Event 37" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="w-[38%] md:w-[276px] h-[100px] md:h-[199px] rounded-2xl overflow-hidden flex-shrink-0">
                <img src={img6} alt="Event 6" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex gap-[4px] md:gap-[6px] justify-end items-start w-full mb-[4px] md:mb-[6px]">
              <div className="w-[12%] md:w-[89px] h-[35px] md:h-[71px] rounded-xl overflow-hidden flex-shrink-0 self-start mt-1 md:mt-2">
                <img src={img13} alt="Event 13" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="w-[48%] md:w-[312px] h-[90px] md:h-[185px] rounded-2xl overflow-hidden shadow-xl flex-shrink-0 z-10">
                <img src={img31} alt="Event 31" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="w-[38%] md:w-[250px] h-[80px] md:h-[163px] rounded-xl overflow-hidden flex-shrink-0 self-start">
                <img src={img30} alt="Event 30" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex gap-[4px] md:gap-[6px] justify-end items-end w-full mb-[4px] md:mb-[6px] pr-6 md:pr-12">
              <div className="w-[15%] md:w-[64px] h-[28px] md:h-[56px] rounded-xl overflow-hidden flex-shrink-0">
                <img src={img20} alt="Event 20" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="w-[40%] md:w-[169px] h-[31px] md:h-[63px] rounded-xl overflow-hidden flex-shrink-0">
                <img src={img18} alt="Event 18" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="w-[40%] md:w-[178px] h-[40px] md:h-[82px] rounded-xl overflow-hidden flex-shrink-0 self-start -mt-2 md:-mt-4">
                <img src={img43} alt="Event 43" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>

            {/* Row 4 */}
            <div className="flex gap-[4px] md:gap-[6px] justify-end items-start w-full pr-12 md:pr-24">
              <div className="w-[28%] md:w-[66px] h-[18px] md:h-[37px] rounded-xl overflow-hidden flex-shrink-0 ml-auto">
                <img src={img34} alt="Event 34" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="w-[40%] md:w-[103px] h-[34px] md:h-[69px] rounded-xl overflow-hidden flex-shrink-0">
                <img src={img27} alt="Event 27" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="w-[28%] md:w-[69px] h-[23px] md:h-[46px] rounded-xl overflow-hidden flex-shrink-0">
                <img src={img28} alt="Event 28" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Flagship Events Section */}
      <div className="container mx-auto px-4 py-12 md:py-24">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-[29px] font-bold text-[#cc7e00] mb-4">Our Flagship Events</h2>
          <p className="text-[15px] font-medium text-black max-w-4xl leading-relaxed">
            Our flagship events represent the core of our community's innovation, leadership, and growth. These signature programs bring together learners, creators, and industry leaders to share knowledge, collaborate, and shape the future of technology. They stand as milestones that define our mission and inspire excellence year after year
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {flagshipEvents.map((event) => (
            <div
              key={event.id}
              className="relative group w-full h-[300px] rounded-lg overflow-hidden cursor-pointer shadow-lg outline-none"
              tabIndex={0}
            >
              {/* Image */}
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-focus:scale-110 group-active:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8">
                <p className="text-white text-[13px] md:text-[14px] text-center font-medium leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="container mx-auto px-4 py-12 md:py-24">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-[29px] font-bold text-[#cc7e00] mb-4 uppercase">Upcoming Events</h2>
          <p className="text-[15px] font-medium text-black max-w-4xl leading-relaxed">
            Stay updated with our upcoming events designed to inspire learning, collaboration, and innovation. Each program brings new opportunities to engage with experts, explore emerging technologies, and grow within a vibrant tech community. Exciting experiences are on the way be ready to be part of them
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-8 gap-6 cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {[event1, event2, event3, event4, event5, event6, event7].map((event, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={event}
                alt={`Event ${index + 1}`}
                className="w-[271px] h-[339px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Event;

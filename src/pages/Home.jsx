import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import homeBg from '../assets/images/home.png';
import globeIcon from '../assets/icons/globe.svg';
import peopleIcon from '../assets/icons/people.svg';
import dateIcon from '../assets/icons/date.svg';
import awardIcon from '../assets/icons/award.svg';
import teamImg from '../assets/images/team.png';
import mentorIcon from '../assets/icons/mentor.svg';
import team2Img from '../assets/images/team2.png';
import team3Img from '../assets/images/team3.png';
import team4Img from '../assets/images/team4.png';
import team5Img from '../assets/images/team5.png';
import team6Img from '../assets/images/team6.png';
import event1 from '../assets/images/event1.jpeg';
import event2 from '../assets/images/event2.jpeg';
import event3 from '../assets/images/event3.jpeg';
import event4 from '../assets/images/event4.jpeg';
import event5 from '../assets/images/event5.jpeg';
import event6 from '../assets/images/event6.jpeg';
import event7 from '../assets/images/event7.jpeg';
import md1 from '../assets/images/md1.png';
import md2 from '../assets/images/md2.png';
import md3 from '../assets/images/md3.png';
import md4 from '../assets/images/md4.png';
import md5 from '../assets/images/md5.png';
import md6 from '../assets/images/md6.png';

const Counter = ({ end, label, suffix = '+', icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center flex flex-col items-center">
      <div className="mb-2 text-[#CC7E00]">
        {icon}
      </div>
      <div className="text-[#CC7E00] text-3xl max-[403px]:text-2xl md:text-4xl font-semibold mb-1">
        {count}{suffix}
      </div>
      <div className="text-[#CC7E00] text-xs max-[403px]:text-[10px] md:text-sm font-medium">{label}</div>
    </div>
  );
};

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentMdIndex, setCurrentMdIndex] = useState(0);
  const carouselImages = [team2Img, homeBg, team3Img, team4Img, team5Img, team6Img];
  const mdImages = [md1, md2, md3, md4, md5, md6];

  const texts = [
    "Apply Now for Membership Development Sessions Apply Now!!",
    "Join our upcoming technical workshops!",
    "Be part of the largest technical professional organization!"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(imageInterval);
  }, [carouselImages.length]);

  useEffect(() => {
    const mdInterval = setInterval(() => {
      setCurrentMdIndex((prev) => (prev + 1) % mdImages.length);
    }, 3000);
    return () => clearInterval(mdInterval);
  }, [mdImages.length]);

  const scrollContainerRef = React.useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

  return (
    <div className="font-poppins mb-20">
      {/* Top Dynamic Text Section */}
      <div className="bg-white py-4 text-center">
        <p className="text-[18px] font-semibold text-black transition-opacity duration-500">
          {texts[currentTextIndex].split('Apply Now!!').map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && <span className="text-red-600">Apply Now!!</span>}
            </span>
          ))}
        </p>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-12">
        <div
          className="relative bg-cover bg-center bg-no-repeat flex items-center rounded-[20px] overflow-hidden h-[850px] max-[403px]:h-[850px] md:h-[642px] w-full"
          style={{
            backgroundImage: `url(${homeBg})`
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>

          <div className="relative z-10 flex flex-col justify-center h-full w-full px-6 md:px-16">
            <div className="max-w-3xl">
              <h1 className="text-[32px] md:text-[50px] font-semibold text-white leading-tight mb-4">
                Belong Where Technology Innovators Thrive
              </h1>
              <p className="text-[16px] md:text-[18px] font-medium text-white mb-8 max-w-2xl">
                Join our vibrant community of volunteers making a difference in technology and education across Kerala.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.computer.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[141px] h-[45px] bg-white bg-opacity-72 rounded-[27px] flex items-center justify-center text-[20px] font-normal text-black hover:bg-[#CC7E00] hover:text-white transition-all duration-300"
                >
                  Join Us
                </a>
                <Link
                  to="/about"
                  className="w-[141px] h-[45px] bg-white bg-opacity-72 rounded-[27px] flex items-center justify-center text-[20px] font-normal text-black hover:bg-[#CC7E00] hover:text-white transition-all duration-300"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>

          {/* Counter Section */}
          <div className="absolute bottom-0 right-0 bg-white rounded-tl-[50px] flex gap-12 items-center justify-center shadow-lg hidden md:flex w-[590px] h-[172px]">
            <Counter

              end={4060}
              label="Student Members"
              suffix="+"
              icon={<img src={globeIcon} alt="Student Members" className="w-[40px] h-[40px]" />}
            />
            <Counter
              end={56}
              label="Student Chapter"
              suffix="+"
              icon={<img src={peopleIcon} alt="Student Chapter" className="w-[52px] h-[36px]" />}
            />
            <Counter
              end={37}
              label="Events"
              suffix="+"
              icon={<img src={dateIcon} alt="Events" className="w-[35px] h-[41px]" />}
            />
            <Counter
              end={2}
              label="Awards"
              suffix=""
              icon={<img src={awardIcon} alt="Awards" className="w-[34px] h-[41px]" />}
            />
          </div>

          {/* Mobile Counter Section */}
          <div className="absolute bottom-0 w-full bg-white py-8 max-[403px]:py-4 flex flex-wrap justify-around gap-4 max-[403px]:gap-2 md:hidden">
            <Counter end={4060} label="Student Members" suffix="+" icon={<img src={peopleIcon} alt="Student Members" className="w-8 h-8 max-[403px]:w-6 max-[403px]:h-6" />} />
            <Counter end={56} label="Student Chapter" suffix="+" icon={<img src={globeIcon} alt="Student Chapter" className="w-8 h-8 max-[403px]:w-6 max-[403px]:h-6" />} />
            <Counter end={37} label="Events" suffix="+" icon={<img src={dateIcon} alt="Events" className="w-8 h-8 max-[403px]:w-6 max-[403px]:h-6" />} />
            <Counter end={2} label="Awards" suffix="" icon={<img src={awardIcon} alt="Awards" className="w-8 h-8 max-[403px]:w-6 max-[403px]:h-6" />} />
          </div>


        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 md:px-12 py-16 flex flex-col md:flex-row items-center gap-12 mt-20">
        <div className="flex-shrink-0">
          <img
            src={teamImg}
            alt="Team"
            className="rounded-[19px] w-full md:w-[561px] h-auto md:h-[320px] object-cover shadow-lg"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-[27px] font-semibold text-black mb-6">
            About IEEE Computer Society Kerala Chapter
          </h2>
          <p className="text-[15px] font-normal text-black leading-relaxed text-justify">
            The IEEE Computer Society is the world's leading membership
            organization dedicated to computer science and technology.
            Serving more than 60,000 members, the IEEE Computer Society is
            the trusted information, networking, and career-development
            source for a global community of technology leaders that includes
            researchers, educators, software engineers, IT professionals,
            employers, and students. The IEEE Computer Society Kerala
            Chapter has 145 professional members and 2051 student members.
            Winner of IEEE CS(Global) Outstanding Chapter Award 2018 and
            Early Career Professionals Engagement in Outstanding Chapter
            Award Program 2022.
          </p>
        </div>
      </div>

      {/* Card Section */}
      <div className="container mx-auto px-4 md:px-12 pb-20 pt-12">
        <div className="flex flex-wrap justify-center gap-8">
          {/* Card 1: Student Branches */}
          <div className="w-[245px] h-[250px] bg-[#fffcf6] border border-[#fcc772] rounded-[11px] flex flex-col items-center p-6 text-center hover:shadow-lg transition-shadow">
            <img
              src={globeIcon}
              alt="Student Branches"
              className="w-[60px] h-[60px] mb-4"
              style={{ filter: 'grayscale(100%) brightness(0.4)' }}
            />
            <h3 className="text-[20px] font-semibold text-[#595757] mb-3 leading-tight">
              Student Branches
            </h3>
            <p className="text-[11px] font-medium text-black leading-relaxed">
              There are thousands of IEEE Student Branches throughout the world and likely one near you. It's your connection to local professionals.
            </p>
          </div>

          {/* Card 2: Funds & Awards */}
          <div className="w-[245px] h-[250px] bg-[#fffcf6] border border-[#fcc772] rounded-[11px] flex flex-col items-center p-6 text-center hover:shadow-lg transition-shadow">
            <img
              src={awardIcon}
              alt="Funds & Awards"
              className="w-[60px] h-[60px] mb-4"
              style={{ filter: 'grayscale(100%) brightness(0.4)' }}
            />
            <h3 className="text-[20px] font-semibold text-[#595757] mb-3 leading-tight">
              Funds & Awards
            </h3>
            <p className="text-[11px] font-medium text-black leading-relaxed">
              IEEE provides grants, scholarships, and awards, recognizing excellence and supporting student initiatives, research, and leadership.
            </p>
          </div>

          {/* Card 3: Events */}
          <div className="w-[245px] h-[250px] bg-[#fffcf6] border border-[#fcc772] rounded-[11px] flex flex-col items-center p-6 text-center hover:shadow-lg transition-shadow">
            <img
              src={dateIcon}
              alt="Events"
              className="w-[60px] h-[60px] mb-4"
              style={{ filter: 'grayscale(100%) brightness(0.4)' }}
            />
            <h3 className="text-[20px] font-semibold text-[#595757] mb-3 leading-tight">
              Events
            </h3>
            <p className="text-[11px] font-medium text-black leading-relaxed">
              IEEE Computer Society Kerala Chapter organises workshops, hackathons, and seminars, connecting students with experts and peers.
            </p>
          </div>

          {/* Card 4: Mentoring Support */}
          <div className="w-[245px] h-[250px] bg-[#fffcf6] border border-[#fcc772] rounded-[11px] flex flex-col items-center p-6 text-center hover:shadow-lg transition-shadow">
            <img
              src={mentorIcon}
              alt="Mentoring Support"
              className="w-[60px] h-[60px] mb-4"
            />
            <h3 className="text-[20px] font-semibold text-[#595757] mb-3 leading-tight">
              Mentoring Support
            </h3>
            <p className="text-[11px] font-medium text-black leading-relaxed">
              Experienced professionals and academics guide students, offering career advice, skill development, networking opportunities.
            </p>
          </div>
        </div>
      </div>


      {/* Dynamic Image Section */}
      <div className="container mx-auto px-4 md:px-12 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <p className="text-[18px] font-medium text-black leading-relaxed text-justify">
            The IEEE Computer Society Kerala Chapter (CSKS) organizes a diverse range of technical, professional, and community-focused events every year, fostering creativity, connection, collaboration, and skill development among students and professionals. With over 150 impactful events conducted across Kerala, CSKS continues to empower and inspire the tech community.
          </p>
        </div>
        <div className="flex-shrink-0 w-full md:w-[678px]">
          <img
            src={carouselImages[currentImageIndex]}
            alt="CSKS Events"
            className="w-full h-auto md:h-[441px] object-cover rounded-[10px] transition-opacity duration-500 shadow-lg"
          />
        </div>
      </div>

      {/* Event Carousel Section */}
      <div className="container mx-auto px-4 md:px-12 py-12">
        <h2 className="text-[29px] font-bold text-[#cc7e00] mb-8 uppercase text-left">
          Upcoming Events
        </h2>

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

      {/* MD Session Section */}
      <div className="container mx-auto px-4 md:px-12 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-[27px] font-bold text-black mb-6 leading-tight">
            Want to organize an Membership Development Session at your campus?
          </h2>
          <p className="text-[18px] font-medium text-black leading-relaxed text-justify mb-8">
            The IEEE Computer Society Kerala Chapter conducts engaging Membership Development sessions both online and offline to inspire students and help them discover the opportunities, resources, and professional growth that come with being part of IEEE Computer Society. These sessions aim to empower students to enhance their skills, expand their network, and grow personally and professionally within the global tech community.
          </p>
          <a
            href="https://tinyurl.com/md-sessions"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[141px] h-[45px] border border-[#faa41a] rounded-[27px] flex items-center justify-center text-[18px] font-medium text-black hover:bg-[#faa41a] hover:text-white transition-all duration-300 mx-auto"
          >
            Register
          </a>
        </div>
        <div className="flex-shrink-0">
          <img
            src={mdImages[currentMdIndex]}
            alt="MD Session"
            className="w-[264px] h-[330px] object-cover rounded-[10px] shadow-lg transition-opacity duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

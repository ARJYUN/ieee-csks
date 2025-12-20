import React from 'react';
import teamImg from '../assets/images/team.png';
import proExecomImg from '../assets/images/professional-execom.png';
import sltImg from '../assets/images/slt.png';
import gsacImg from '../assets/images/gsac.png';
import volunteerImg from '../assets/images/volunteer-team.jpg';

// Legacy Members
import DrDeepthi from '../assets/images/execom-mem/DrDeepthi.png';
import DrVishnukumar from '../assets/images/execom-mem/DrVishnukumar.png';
import Srinivasan from '../assets/images/execom-mem/Srinivasan.png';
import Senthilkumar from '../assets/images/execom-mem/Senthilkumar.png';
import Nathan from '../assets/images/execom-mem/Nathan.png';
import Devanarayanan from '../assets/images/execom-mem/Devanarayanan.png';
import Chethana from '../assets/images/execom-mem/Chethana.png';
import Gokul from '../assets/images/execom-mem/Gokul.png';
import Bhadra from '../assets/images/execom-mem/Bhadra.png';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-20">
      <h1 className="text-[29px] font-semibold mb-8 text-black">
        About IEEE Computer Society Kerala Chapter
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Image Section */}
        <div className="w-full lg:w-auto flex-shrink-0">
          <img
            src={teamImg}
            alt="IEEE Computer Society Team"
            className="w-full lg:w-[603px] h-auto lg:h-[344px] rounded-[19px] object-cover shadow-sm"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:flex-1">
          <p className="text-base lg:text-lg text-gray-800 leading-relaxed text-justify">
            The IEEE Computer Society is the world’s leading membership organization dedicated to computer science and technology. Serving more than 60,000 members, the IEEE Computer Society is the trusted information, networking, and career-development source for a global community of technology leaders that includes researchers, educators, software engineers, IT professionals, employers, and students. The IEEE Computer Society Kerala Chapter has 145 professional members and 2051 student members. Winner of IEEE CS(Global) Outstanding Chapter Award '2018 and Early Career Professionals Engagement in Outstanding Chapter Award Program 2022.
          </p>
        </div>
      </div>

      {/* Leadership/Team Section */}
      <div className="mt-16 lg:mt-24 space-y-12 lg:space-y-16">
        {[
          {
            img: proExecomImg,
            title: "The Professional Execom",
            desc: "The Professional Execom stands as a beacon of visionary leadership and unwavering dedication within the IEEE CS Kerala Chapter, guiding every endeavor with precision and expertise. The collective wisdom, composed of efficient professionals, forms the bedrock of our chapter's aspirations, propelling us towards unparalleled excellence. With their refined professionalism and strategic guidance, they guarantee the triumph and elevated standards of each initiative we undertake"
          },
          {
            img: sltImg,
            title: "Student Leadership Team (SLT)",
            desc: "The IEEE CS SLT functions as the nexus for all student activities within our chapter. With their exceptional leadership, they provide unwavering support and ensure access to all necessary resources, fostering an environment conducive to excellence. Acting as the cornerstone of guidance, the SLT upholds the highest standards in every activity, thereby guaranteeing a thriving atmosphere where student success flourishes."
          },
          {
            img: gsacImg,
            title: "Graduate Student Activities Committee(GSAC)",
            desc: "The IEEE CS Graduate Student Activities Committee(GSAC) is a dynamic hub of support and inspiration for emerging computer scientists. Our dedicated team empowers students and early-career graduates with exceptional resources and opportunities to excel both academically and professionally. Guided by visionary leadership and an unwavering commitment to excellence, we cultivate a thriving community where innovation flourishes, shaping the future of computer science."
          },
          {
            img: volunteerImg,
            title: "Volunteer Team",
            desc: "The IEEE CS Volunteer Team strives to strengthen and advance all initiatives within our chapter. Comprising specialized sub-teams—including the Design, Content, Video, and Documentation—along with the Event Coordinators, the Volunteer Team provides essential assistance in reinforcing the chapter’s operations. By delivering critical support and promoting a culture of collaboration and progress, the team contributes to the continued growth and success of our chapter’s objectives."
          }
        ].map((item, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
          >
            {/* Image */}
            <div className="w-full lg:w-auto flex-shrink-0 flex justify-center lg:block">
              <img
                src={item.img}
                alt={item.title}
                className="w-[300px] h-[375px] object-cover rounded-none shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:flex-1 text-center lg:text-left">
              <h2 className="text-[27px] font-bold text-black mb-6 leading-tight">
                {item.title}
              </h2>
              <p className="text-[18px] font-normal text-gray-800 leading-relaxed text-justify">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>


      {/* Legacy Section */}
      <div className="mt-24 mb-12">
        <h1 className="text-[36px] font-bold text-center mb-16 uppercase text-black">
          OUR LEGACY
        </h1>

        {/* Chairs */}
        <div className="mb-16">
          <h2 className="text-[27px] font-bold text-black mb-10 pl-4 lg:pl-0">
            Chairs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center mb-8">
            {[
              { img: DrDeepthi, name: "Dr. Deepthi Sasidharan", year: "2024-2025" },
              { img: DrVishnukumar, name: "Dr. Vishnukumar S", year: "2022-2023" },
              { img: Srinivasan, name: "Mr. Srinivasan Ravindran", year: "2020-2021" },
              { img: Senthilkumar, name: "Mr. Senthilkumar KB", year: "2018-2019" },
              { img: Srinivasan, name: "Mr. Srinivasan Ravindran", year: "2017" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-[189px] h-[189px] object-cover mb-4"
                />
                <h3 className="text-[16px] font-semibold text-black">
                  {item.name}
                </h3>
                <p className="text-[16px] font-semibold text-gray-600">
                  {item.year}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            {/* <button className="w-[141px] h-[45px] border border-[#faa41a] rounded-[27px] flex items-center justify-center text-[15px] text-black hover:bg-[#faa41a] hover:text-white transition-all duration-300">
              View All
            </button> */}
          </div>
        </div>

        {/* Student Representatives */}
        <div>
          <h2 className="text-[27px] font-bold text-black mb-10 pl-4 lg:pl-0">
            Student Representatives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center mb-8">
            {[
              { img: Nathan, name: "Nathan Jose V", year: "2025" },
              { img: Devanarayanan, name: "Devanarayanan S V", year: "2024" },
              { img: Chethana, name: "Chethana Raj T", year: "2023" },
              { img: Gokul, name: "Gokul C M", year: "2022" },
              { img: Bhadra, name: "Bhadra Jayakumar", year: "2021" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-[189px] h-[189px] object-cover mb-4"
                />
                <h3 className="text-[16px] font-semibold text-black">
                  {item.name}
                </h3>
                <p className="text-[16px] font-semibold text-gray-600">
                  {item.year}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            {/* <button className="w-[141px] h-[45px] border border-[#faa41a] rounded-[27px] flex items-center justify-center text-[15px] text-black hover:bg-[#faa41a] hover:text-white transition-all duration-300">
              View All
            </button> */}
          </div>
        </div>
      </div>
    </div >
  );
};

export default About;

import React from 'react';

// Import Images
import sarjuImg from '../assets/images/execom-mem/SARJU.png';
import mahalingamImg from '../assets/images/execom-mem/mahalingam.png';
import VishnuRajanImg from '../assets/images/execom-mem/VishnuRajan.png';
import nayanaImg from '../assets/images/execom-mem/nayana.png';
import deepthiImg from '../assets/images/execom-mem/DrDeepthiC.png';
import vishnuImg from '../assets/images/execom-mem/VISHNUKUMAR.png';
import vaishakhImg from '../assets/images/execom-mem/vaishakh.png';
import satheeshImg from '../assets/images/execom-mem/SATHEESH.png';
import devanarayananImg from '../assets/images/execom-mem/Devanarayanan.png';

// SLT Imports
import sreehariImg from '../assets/images/execom-mem/Sreehari.png';
import aravindImg from '../assets/images/execom-mem/Aravind.png';
import abhiramImg from '../assets/images/execom-mem/Abhiram.png';
import parvathyImg from '../assets/images/execom-mem/Parvathy.png';
import asiyaImg from '../assets/images/execom-mem/Asiya.png';
import abhinavImg from '../assets/images/execom-mem/Abhinav.png';
import alwinImg from '../assets/images/execom-mem/Alwin.png';
import gauriImg from '../assets/images/execom-mem/Gauri.png';
import arjunImg from '../assets/images/execom-mem/Arjun.png';
import ananthaImg from '../assets/images/execom-mem/Anantha.png';
import adinathImg from '../assets/images/execom-mem/Adinath.png';
import saniyaImg from '../assets/images/execom-mem/Saniya.png';

// GSAC Imports
import mariaImg from '../assets/images/execom-mem/MARIa.png';
import nathanImg from '../assets/images/execom-mem/Nathan.png';
import sameenImg from '../assets/images/execom-mem/Sameen.png';
import viswanathaImg from '../assets/images/execom-mem/viswanatha.png';
import nehaImg from '../assets/images/execom-mem/Neha.png';
import gregoryImg from '../assets/images/execom-mem/Gregory.png';
import akshayaImg from '../assets/images/execom-mem/Akshaya.png';

const OfficeBearers = () => {
  const professionalExecom = [
    {
      img: sarjuImg,
      name: "PROF. SARJU S",
      role: "CHAIRPERSON",
      college: "SJCET"
    },
    {
      img: mahalingamImg,
      name: "DR. MAHALINGAM P R",
      role: "VICE CHAIRPERSON",
      college: "InApp"
    },
    {
      img: VishnuRajanImg,
      name: "DR. VISHNU RAJAN",
      role: "SECRETARY",
      college: "INTERSHALA"
    },
    {
      img: nayanaImg,
      name: "MS. NAYANA S",
      role: "TREASURER",
      college: "SADA"
    },
    {
      img: deepthiImg,
      name: "DR. DEEPTHI SASIDHARAN",
      role: "CHAPTER ADVISOR",
      college: "GECBH"
    },
    {
      img: vishnuImg,
      name: "DR. VISHNUKUMAR S",
      role: "CHAPTER ADVISOR",
      college: "CUSAT"
    },
    {
      img: vaishakhImg,
      name: "MR. VAISHAKH SURESH",
      role: "JNT. SECRETARY INDUSTRY RELATIONS",
      college: "MYGATE"
    },
    {
      img: satheeshImg,
      name: "DR. SATHEESH KUMAR",
      role: "JNT SECRETARY ACADEMIA",
      college: "JCET PALAKKAD"
    },
    {
      img: devanarayananImg,
      name: "MR. DEVANARAYANAN S V",
      role: "JNT. SECRETARY YP",
      college: "GADS LLP"
    },
    {
      img: mariaImg,
      name: "MS. MARIA TRESA BINU",
      role: "CHAIRPERSON, GSAC",
      college: "EY"
    }
  ];

  const studentLeadership = [
    { img: sreehariImg, name: "SREEHARI S", role: "STUDENT REPRESENTATIVE", college: "GECK" },
    { img: aravindImg, name: "ARAVIND R KRISHNAN", role: "TECHNICAL COORDINATOR", college: "CCET" },
    { img: abhiramImg, name: "ABHIRAM CHANDRASENAN", role: "ECC", college: "CEKGR" },
    { img: parvathyImg, name: "PARVATHY V NAIR", role: "WIC", college: "SJCET" },
    { img: asiyaImg, name: "ASIYA SHAJI", role: "TRAVANCORE HSR", college: "CEP" },
    { img: abhinavImg, name: "ABHINAV S MENON", role: "KOCHI HSR", college: "CCET" },
    { img: alwinImg, name: "ALWIN REJI", role: "MALABAR HSR", college: "GECK" },
    { img: gauriImg, name: "GAUIRI SHANKAR G NAIR", role: "WEBMASTER", college: "GECPKD" },
    { img: arjunImg, name: "ARJUN K", role: "WEBMASTER", college: "NSSCE" },
    { img: ananthaImg, name: "ANANTHA PADMANABHAN P", role: "EIC", college: "MCET" },
    { img: adinathImg, name: "ADINATH M C", role: "SIG AI LEAD", college: "CUSAT" },
    { img: saniyaImg, name: "SANIYA JOBY", role: "MDC", college: "RSET" }
  ];

  const gsacMembers = [
    { img: VishnuRajanImg, name: "DR. VISHNU RAJAN", role: "ADVISOR", college: "" },
    { img: mariaImg, name: "MS. MARIA TRESA BINU", role: "CHAIRPERSON", college: "" },
    { img: nathanImg, name: "MR. NATHAN JOSE V", role: "VICE CHAIRPERSON", college: "" },
    { img: sameenImg, name: "MR. SAMEEN SARDAR S", role: "SECRETARY", college: "" },
    { img: viswanathaImg, name: "MR. VISWANATHA KARTHA", role: "INITIATIVE LEAD", college: "" },
    { img: nehaImg, name: "MS. NEHA SUNNY", role: "COMMUNITY ENGAGEMENT LEAD", college: "" },
    { img: gregoryImg, name: "MR. GREGORY KURIEN", role: "PROGRAM COORDINATOR", college: "" },
    { img: akshayaImg, name: "MS. AKSHAYA KRISHNA R", role: "OUTREACH COORDINATOR", college: "" }
  ];

  return (
    <div className="container mx-auto px-4 py-8 lg:py-16 font-poppins">
      {/* Page Title */}
      <h1 className="text-[36px] font-bold text-[#d98a12] mb-12 text-center">
        Office Bearers 2026
      </h1>

      {/* Professional Execom Section */}
      <div className="mb-16">
        <h2 className="text-[30px] font-bold text-black mb-8 pl-4 lg:pl-0">
          Professional Execom
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 justify-items-center">
          {professionalExecom.map((member, index) => (
            <div
              key={index}
              className="w-[214px] h-[309px] relative rounded-xl overflow-hidden bg-gradient-to-b from-white via-[#ffe4b0] to-[#ffcb7c] border-t-[3px] border-r-[3px] border-t-[#d98a12] border-r-[#d98a12] border-b border-l border-gray-100 shadow-sm flex flex-col"
            >
              <div className="p-4 z-10 text-left">
                <h3 className="text-[13px] font-bold text-black uppercase leading-tight mb-1">
                  {member.name}
                </h3>
                <p className="text-[11px] font-normal text-black uppercase leading-tight">
                  {member.role}
                </p>
                <p className="text-[11px] font-normal text-gray-800 uppercase leading-tight">
                  {member.college}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end h-full pointer-events-none">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-auto max-h-[220px] object-contain object-bottom"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Student Leadership Team Section */}
      <div className="mb-16">
        <h2 className="text-[30px] font-bold text-black mb-8 pl-4 lg:pl-0">
          Student Leadership Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 justify-items-center">
          {studentLeadership.map((member, index) => (
            <div
              key={index}
              className="w-[224px] h-[309px] relative rounded-xl overflow-hidden bg-gradient-to-b from-white via-[#ffe4b0] to-[#ffcb7c] border-t-[3px] border-r-[3px] border-t-[#d98a12] border-r-[#d98a12] border-b border-l border-gray-100 shadow-sm flex flex-col"
            >
              <div className="p-4 z-10 text-left">
                <h3 className="text-[13px] font-bold text-black uppercase leading-tight mb-1">
                  {member.name}
                </h3>
                <p className="text-[11px] font-normal text-black uppercase leading-tight">
                  {member.role}
                </p>
                <p className="text-[11px] font-normal text-gray-800 uppercase leading-tight">
                  {member.college}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end h-full pointer-events-none">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-auto max-h-[220px] object-contain object-bottom"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Graduate Student Activities Committee Section */}
      <div className="mb-16">
        <h2 className="text-[30px] font-bold text-black mb-8 pl-4 lg:pl-0">
          Graduate Student Activities Committee
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 justify-items-center">
          {gsacMembers.map((member, index) => (
            <div
              key={index}
              className="w-[214px] h-[309px] relative rounded-xl overflow-hidden bg-gradient-to-b from-white via-[#ffe4b0] to-[#ffcb7c] border-t-[3px] border-r-[3px] border-t-[#d98a12] border-r-[#d98a12] border-b border-l border-gray-100 shadow-sm flex flex-col"
            >
              <div className="p-4 z-10 text-left">
                <h3 className="text-[13px] font-bold text-black uppercase leading-tight mb-1">
                  {member.name}
                </h3>
                <p className="text-[11px] font-normal text-black uppercase leading-tight">
                  {member.role}
                </p>
                <p className="text-[11px] font-normal text-gray-800 uppercase leading-tight">
                  {member.college}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end h-full pointer-events-none">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-auto max-h-[220px] object-contain object-bottom"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfficeBearers;

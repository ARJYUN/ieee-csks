import React from 'react';

// Import Images
import deepthiImg from '../assets/images/execom-mem/DrDeepthi.png';
import sarjuImg from '../assets/images/execom-mem/SARJU.png';
import akhilImg from '../assets/images/execom-mem/AKHIL.png';
import nayanaImg from '../assets/images/execom-mem/nayana.png';
import vishnuImg from '../assets/images/execom-mem/VISHNUKUMAR.png';
import bijoyImg from '../assets/images/execom-mem/BIJOY.png';
import satheeshImg from '../assets/images/execom-mem/SATHEESH.png';
import janajithImg from '../assets/images/execom-mem/JANAJITH.png';
import aliaImg from '../assets/images/execom-mem/ALIA.png';
import jyothikaImg from '../assets/images/execom-mem/JYOTHIKA.png';

// SLT Imports
import nathanImg from '../assets/images/execom-mem/Nathan.png';
import sameenImg from '../assets/images/execom-mem/sameen.png';
import brigitImg from '../assets/images/execom-mem/brigit.png';
import afrahImg from '../assets/images/execom-mem/afrah.png';
import asiyaImg from '../assets/images/execom-mem/asiya.png';
import vishnuSltImg from '../assets/images/execom-mem/vishnu.png';
import anuImg from '../assets/images/execom-mem/anu.png';
import vasifImg from '../assets/images/execom-mem/vasif.png';
import vaishnavImg from '../assets/images/execom-mem/vaishnav.png';
import afreenImg from '../assets/images/execom-mem/afreen.png';
import adarshImg from '../assets/images/execom-mem/adarsh.png';
import nehaImg from '../assets/images/execom-mem/neha.png';

// GSAC Imports
import chethanaImg from '../assets/images/execom-mem/Chethana.png';
import devanarayananImg from '../assets/images/execom-mem/Devanarayanan.png';
import sreelakshmiImg from '../assets/images/execom-mem/SREELAKSHMI.png';
import mariaImg from '../assets/images/execom-mem/MARIa.png';
import abhiramiImg from '../assets/images/execom-mem/ABHIRAMI.png';
import hafisImg from '../assets/images/execom-mem/haifs.png';
import albinImg from '../assets/images/execom-mem/albin.png';
import vishnuVImg from '../assets/images/execom-mem/vishnu v.png';
import thejalImg from '../assets/images/execom-mem/thejal.png';
import karthikaImg from '../assets/images/execom-mem/karthika.png';
import sagarImg from '../assets/images/execom-mem/sagar.png';

const OfficeBearers = () => {
  const professionalExecom = [
    {
      img: deepthiImg,
      name: "Dr. DEEPTHI SASIDHARAN",
      role: "CHAIR",
      college: "GECBH"
    },
    {
      img: sarjuImg,
      name: "Prof. SARJU S",
      role: "VICE CHAIR",
      college: "SJCET"
    },
    {
      img: akhilImg,
      name: "Mr. AKHIL RAJ",
      role: "SECRETARY",
      college: "EQUIPO HEALTH INC."
    },
    {
      img: nayanaImg,
      name: "Ms. NAYANA S",
      role: "TREASURER",
      college: "SADA"
    },
    {
      img: vishnuImg,
      name: "Dr. VISHNUKUMAR S",
      role: "CHAPTER ADVISOR",
      college: "CUSAT"
    },
    {
      img: bijoyImg,
      name: "Dr. BIJOY A JOSE",
      role: "INDUSTRY RELATIONS ADVISOR",
      college: "CUSAT"
    },
    {
      img: satheeshImg,
      name: "Dr. SATHEESH KUMAR",
      role: "JOINT SECRETARY ACADEMIA",
      college: "JCET PALAKKAD"
    },
    {
      img: janajithImg,
      name: "Mr. JANAJITH D",
      role: "JOINT SECRETARY YP",
      college: "VALORIZ DIGITAL"
    },
    {
      img: aliaImg,
      name: "Ms. ALIA SHIRAZ",
      role: "JS KOCHI HUB",
      college: "THINKPALM"
    },
    {
      img: jyothikaImg,
      name: "Ms. JYOTHIKA NITHIN",
      role: "JS MALABAR HUB",
      college: "KHYAAL INDIA"
    }
  ];

  const studentLeadership = [
    { img: nathanImg, name: "NATHAN JOSE V", role: "STUDENT REPRESENTATIVE", college: "CECK" },
    { img: sameenImg, name: "SAMEEN SARDAR S", role: "TECHNICAL COORDINATOR", college: "MCET" },
    { img: brigitImg, name: "BRIGIT THOMAS", role: "ECC", college: "SCET" },
    { img: afrahImg, name: "AFRAH QUAMAR", role: "WIC", college: "CEC" },
    { img: asiyaImg, name: "ASIYA SHAJI", role: "TRAVANCORE HSR", college: "CEP" },
    { img: vishnuSltImg, name: "VISHNU GOPAL", role: "KOCHI HSR", college: "SCET" },
    { img: anuImg, name: "ANU RAJ", role: "MALABAR HSR", college: "GECPKD" },
    { img: vasifImg, name: "VASIF ABDULLA P", role: "WEBMASTER", college: "MEA" },
    { img: vaishnavImg, name: "VAISHNAV S L", role: "WEBMASTER", college: "GECK" },
    { img: afreenImg, name: "AFREEN M H", role: "EIC", college: "SCET" },
    { img: adarshImg, name: "ADARSH J", role: "SIG AI LEAD", college: "CEA" },
    { img: nehaImg, name: "NEHA MARIAM SUNNY", role: "MDC", college: "GECK" }
  ];

  const gsacMembers = [
    { img: bijoyImg, name: "Dr. BIJOY A JOSE", role: "ADVISOR", college: "" },
    { img: chethanaImg, name: "CHETHANA RAJ T", role: "CHAIR", college: "" },
    { img: devanarayananImg, name: "DEVANARAYANAN S V", role: "VICE CHAIR", college: "" },
    { img: sreelakshmiImg, name: "SREELAKSHMI AR", role: "SECRETARY", college: "" },
    { img: mariaImg, name: "MARIA TRESA BINU", role: "OUTREACH COORDINATOR", college: "" },
    { img: abhiramiImg, name: "ABHIRAMI P", role: "MEMBERSHIP ENGAGEMENT COORDINATOR", college: "" },
    { img: hafisImg, name: "HAFIS C P", role: "MALABAR HUB COORDINATOR", college: "" },
    { img: albinImg, name: "ALBIN B THOMAS", role: "MALABAR HUB COORDINATOR", college: "" },
    { img: vishnuVImg, name: "VISHNU V", role: "KOCHI HUB COORDINATOR", college: "" },
    { img: thejalImg, name: "THEJAL MARIAM ABRAHAM", role: "KOCHI HUB COORDINATOR", college: "" },
    { img: karthikaImg, name: "KARTHIKA SANKAR U", role: "TRAVANCORE HUB COORDINATOR", college: "" },
    { img: sagarImg, name: "SAGAR S", role: "TRAVANCORE HUB COORDINATOR", college: "" }
  ];

  return (
    <div className="container mx-auto px-4 py-8 lg:py-16 font-poppins">
      {/* Page Title */}
      <h1 className="text-[36px] font-bold text-[#d98a12] mb-12 text-center">
        Office Bearers 2025
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

import React from 'react';
import { useResume } from '../../context/ResumeContext';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const CreativeTemplate = () => {
  const { resumeData } = useResume();
  const { personalInfo, experience, education, skills, themeColor } = resumeData;

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800 flex flex-col shadow-2xl relative overflow-hidden" style={{ minHeight: '1000px' }}>
      {/* Larger Diagonal Header */}
      <div 
        className="absolute top-0 left-0 w-full h-80"
        style={{ 
          backgroundColor: themeColor,
          clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0 100%)'
        }}
      ></div>
      
      <div className="relative z-10 p-16">
        {/* Hero Section with Larger Avatar */}
        <div className="flex items-end gap-12 mb-20">
          <div className="w-56 h-56 bg-white rounded-[3rem] shadow-2xl flex items-center justify-center text-8xl font-black" style={{ color: themeColor }}>
            {personalInfo.fullName.charAt(0)}
          </div>
          <div className="pb-8">
            <h1 className="text-7xl font-black text-white mb-4 drop-shadow-lg">{personalInfo.fullName}</h1>
            <p className="text-4xl text-white/95 font-light">{personalInfo.jobTitle}</p>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-12 gap-14">
          {/* Left Column - Main Content */}
          <div className="col-span-8 space-y-14">
            {/* About Me Card */}
            <section className="bg-white rounded-3xl p-12 shadow-xl">
              <div className="flex items-center gap-5 mb-10">
                <div className="w-4 h-20 rounded-full" style={{ backgroundColor: themeColor }}></div>
                <h2 className="text-4xl font-black uppercase tracking-tight">About Me</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-xl">
                {personalInfo.summary}
              </p>
            </section>

            {/* Experience Card */}
            <section className="bg-white rounded-3xl p-12 shadow-xl">
              <div className="flex items-center gap-5 mb-12">
                <div className="w-4 h-20 rounded-full" style={{ backgroundColor: themeColor }}></div>
                <h2 className="text-4xl font-black uppercase tracking-tight">Experience</h2>
              </div>
              <div className="space-y-12">
                {experience.map(exp => (
                  <div key={exp.id} className="relative pl-12 border-l-[8px]" style={{ borderColor: themeColor + '30' }}>
                    <div 
                      className="absolute -left-[16px] top-0 w-6 h-6 rounded-full border-[6px] border-white shadow-lg"
                      style={{ backgroundColor: themeColor }}
                    ></div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-3xl font-bold text-gray-900">{exp.role}</h3>
                      <span 
                        className="text-xs font-black uppercase px-5 py-3 rounded-full text-white shadow-md"
                        style={{ backgroundColor: themeColor }}
                      >
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    <p className="text-xl font-bold mb-5" style={{ color: themeColor }}>{exp.company}</p>
                    <p className="text-lg text-gray-600 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar - Info Cards */}
          <div className="col-span-4 space-y-10">
            {/* Contact Card */}
            <section className="bg-white rounded-3xl p-10 shadow-xl">
              <h3 className="text-lg font-black uppercase mb-8 tracking-wider" style={{ color: themeColor }}>Contact</h3>
              <div className="flex flex-col gap-6 text-sm text-gray-700">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm" style={{ backgroundColor: themeColor + '20' }}>
                    <SafeIcon icon={FiIcons.FiMail} className="text-xl" style={{ color: themeColor }} />
                  </div>
                  <span className="text-sm font-medium">{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm" style={{ backgroundColor: themeColor + '20' }}>
                    <SafeIcon icon={FiIcons.FiPhone} className="text-xl" style={{ color: themeColor }} />
                  </div>
                  <span className="text-sm font-medium">{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm" style={{ backgroundColor: themeColor + '20' }}>
                    <SafeIcon icon={FiIcons.FiMapPin} className="text-xl" style={{ color: themeColor }} />
                  </div>
                  <span className="text-sm font-medium">{personalInfo.location}</span>
                </div>
              </div>
            </section>

            {/* Education Card */}
            <section className="bg-white rounded-3xl p-10 shadow-xl">
              <h3 className="text-lg font-black uppercase mb-8 tracking-wider" style={{ color: themeColor }}>Education</h3>
              {education.map(edu => (
                <div key={edu.id} className="mb-8 last:mb-0 pb-8 last:pb-0 border-b last:border-b-0 border-gray-100">
                  <p className="font-bold text-gray-900 text-lg">{edu.school}</p>
                  <p className="text-base text-gray-600 mt-3">{edu.degree}</p>
                  <p className="text-base font-bold mt-3" style={{ color: themeColor }}>{edu.year}</p>
                </div>
              ))}
            </section>

            {/* Skills Card */}
            <section className="bg-white rounded-3xl p-10 shadow-xl">
              <h3 className="text-lg font-black uppercase mb-8 tracking-wider" style={{ color: themeColor }}>Skills</h3>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-5 py-3 text-white text-sm font-bold rounded-xl shadow-md"
                    style={{ backgroundColor: themeColor }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeTemplate;
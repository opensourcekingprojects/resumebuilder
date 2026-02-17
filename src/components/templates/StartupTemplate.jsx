import React from 'react';
import { useResume } from '../../context/ResumeContext';

const StartupTemplate = () => {
  const { resumeData } = useResume();
  const { personalInfo, experience, education, skills, themeColor } = resumeData;

  return (
    <div 
      className="w-full h-full p-14 shadow-2xl flex flex-col gap-10 font-sans" 
      style={{ minHeight: '1000px', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}
    >
      <header 
        className="bg-white p-10 rounded-3xl shadow-xl border-2"
        style={{ borderColor: themeColor + '40' }}
      >
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-black tracking-tight mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              {personalInfo.fullName}
            </h1>
            <p className="text-xl font-semibold" style={{ color: themeColor }}>
              {personalInfo.jobTitle}
            </p>
          </div>
          <div className="text-right space-y-2">
            <div 
              className="inline-block px-4 py-2 rounded-full text-xs font-bold text-white"
              style={{ backgroundColor: themeColor }}
            >
              {personalInfo.email}
            </div>
            <p className="text-xs text-gray-500">{personalInfo.location}</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-4 space-y-8">
          <section className="bg-white p-8 rounded-3xl shadow-lg">
            <div 
              className="inline-block px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider text-white mb-6"
              style={{ backgroundColor: themeColor }}
            >
              Tech Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 text-xs font-bold rounded-xl border-2 hover:scale-105 transition-transform"
                  style={{ borderColor: i % 3 === 0 ? themeColor + '40' : '#e5e7eb' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="bg-white p-8 rounded-3xl shadow-lg">
            <div 
              className="inline-block px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider text-white mb-6"
              style={{ backgroundColor: themeColor }}
            >
              Education
            </div>
            {education.map(edu => (
              <div 
                key={edu.id} 
                className="mb-5 last:mb-0 p-4 rounded-2xl border-2"
                style={{ borderColor: themeColor + '20' }}
              >
                <p className="text-sm font-bold text-gray-900">{edu.school}</p>
                <p className="text-xs text-gray-600 mt-1">{edu.degree}</p>
                <div 
                  className="inline-block px-2 py-1 rounded-lg text-[10px] font-bold text-white mt-2"
                  style={{ backgroundColor: themeColor }}
                >
                  {edu.year}
                </div>
              </div>
            ))}
          </section>
        </div>

        <div className="col-span-8 space-y-8">
          <section className="bg-white p-10 rounded-3xl shadow-lg">
            <div 
              className="inline-block px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider text-white mb-6"
              style={{ backgroundColor: themeColor }}
            >
              Mission Statement
            </div>
            <p className="text-base leading-relaxed text-gray-700 font-medium">
              {personalInfo.summary}
            </p>
          </section>

          <section className="bg-white p-10 rounded-3xl shadow-lg">
            <div 
              className="inline-block px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider text-white mb-8"
              style={{ backgroundColor: themeColor }}
            >
              Journey & Impact
            </div>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className="relative pl-10 border-l-4"
                  style={{ borderColor: themeColor }}
                >
                  <div 
                    className="absolute -left-[13px] top-0 w-6 h-6 rounded-full border-4 border-white flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: themeColor }}
                  >
                    {index + 1}
                  </div>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-black text-gray-900">{exp.role}</h3>
                      <p className="text-base font-bold mt-1" style={{ color: themeColor }}>
                        {exp.company}
                      </p>
                    </div>
                    <span 
                      className="text-[10px] font-black uppercase px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: themeColor }}
                    >
                      {exp.startDate} — {exp.endDate}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StartupTemplate;
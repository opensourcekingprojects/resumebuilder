import React from 'react';
import { useResume } from '../../context/ResumeContext';

const ExecutiveTemplate = () => {
  const { resumeData } = useResume();
  const { personalInfo, experience, education, skills, themeColor } = resumeData;

  return (
    <div className="w-full h-full bg-white text-gray-900 p-16 shadow-2xl flex flex-col font-serif" style={{ minHeight: '1000px' }}>
      <div 
        className="border-8 border-double p-12 mb-12"
        style={{ borderColor: themeColor }}
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold uppercase tracking-[0.2em] mb-4 text-gray-900">
            {personalInfo.fullName}
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20" style={{ backgroundColor: themeColor }}></div>
            <p className="text-2xl text-gray-600 font-light italic">{personalInfo.jobTitle}</p>
            <div className="h-px w-20" style={{ backgroundColor: themeColor }}></div>
          </div>
          <div className="flex justify-center flex-wrap gap-6 text-xs uppercase tracking-widest text-gray-500 font-sans">
            <span>{personalInfo.email}</span>
            <span className="text-gray-300">|</span>
            <span>{personalInfo.phone}</span>
            <span className="text-gray-300">|</span>
            <span>{personalInfo.location}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-8 space-y-12">
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-3 rotate-45" style={{ backgroundColor: themeColor }}></div>
              <h2 className="text-lg font-bold uppercase tracking-[0.2em]">Executive Profile</h2>
            </div>
            <p className="text-base leading-loose text-gray-700 italic border-l-4 pl-6" style={{ borderColor: themeColor }}>
              {personalInfo.summary}
            </p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-3 h-3 rotate-45" style={{ backgroundColor: themeColor }}></div>
              <h2 className="text-lg font-bold uppercase tracking-[0.2em]">Professional Experience</h2>
            </div>
            <div className="space-y-10">
              {experience.map(exp => (
                <div key={exp.id} className="relative">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                      <p className="text-base font-semibold mt-1" style={{ color: themeColor }}>{exp.company}</p>
                    </div>
                    <div 
                      className="text-xs font-bold uppercase px-4 py-2 border-2"
                      style={{ borderColor: themeColor, color: themeColor }}
                    >
                      {exp.startDate} — {exp.endDate}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700 pl-6 border-l-2 border-gray-200">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="col-span-4 space-y-10">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rotate-45" style={{ backgroundColor: themeColor }}></div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em]">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map(edu => (
                <div key={edu.id} className="border-l-4 pl-4" style={{ borderColor: themeColor }}>
                  <p className="text-sm font-bold text-gray-900">{edu.school}</p>
                  <p className="text-xs text-gray-600 mt-1">{edu.degree}</p>
                  <p className="text-xs font-semibold mt-1" style={{ color: themeColor }}>{edu.year}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rotate-45" style={{ backgroundColor: themeColor }}></div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em]">Core Competencies</h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5" style={{ backgroundColor: themeColor }}></div>
                  <span className="text-xs text-gray-700 uppercase tracking-wide">{skill}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveTemplate;
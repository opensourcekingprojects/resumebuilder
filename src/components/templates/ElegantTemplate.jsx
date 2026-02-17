import React from 'react';
import { useResume } from '../../context/ResumeContext';

const ElegantTemplate = () => {
  const { resumeData } = useResume();
  const { personalInfo, experience, education, skills, themeColor } = resumeData;

  return (
    <div 
      className="w-full h-full text-gray-800 p-20 shadow-2xl flex flex-col" 
      style={{ 
        minHeight: '1000px',
        fontFamily: "'Playfair Display', serif",
        background: 'linear-gradient(to bottom, #fafafa 0%, #ffffff 100%)'
      }}
    >
      <header className="text-center mb-16 pb-12 border-b border-gray-200">
        <h1 className="text-6xl font-normal tracking-tight text-gray-900 mb-6 italic">
          {personalInfo.fullName}
        </h1>
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gray-300"></div>
          <div 
            className="w-3 h-3 rotate-45"
            style={{ backgroundColor: themeColor }}
          ></div>
          <div className="h-px w-16 bg-gray-300"></div>
        </div>
        <p className="text-lg italic text-gray-600 mb-8">{personalInfo.jobTitle}</p>
        <div className="flex justify-center flex-wrap gap-x-10 gap-y-2 text-sm text-gray-500">
          <span>{personalInfo.email}</span>
          <span className="text-gray-300">◆</span>
          <span>{personalInfo.phone}</span>
          <span className="text-gray-300">◆</span>
          <span>{personalInfo.location}</span>
          {personalInfo.website && (
            <>
              <span className="text-gray-300">◆</span>
              <span>{personalInfo.website}</span>
            </>
          )}
        </div>
      </header>

      <div className="max-w-4xl mx-auto w-full">
        <section className="mb-16">
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="flex-1 h-px bg-gray-200"></div>
            <h2 className="text-xs font-normal uppercase tracking-[0.5em] text-gray-400">
              Professional Summary
            </h2>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>
          <p className="text-center text-xl italic leading-loose text-gray-600 px-12">
            "{personalInfo.summary}"
          </p>
        </section>

        <section className="mb-16">
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="flex-1 h-px bg-gray-200"></div>
            <h2 className="text-xs font-normal uppercase tracking-[0.5em] text-gray-400">
              Professional Journey
            </h2>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>
          <div className="flex flex-col gap-12">
            {experience.map(exp => (
              <div key={exp.id} className="text-center px-8">
                <h3 className="text-2xl font-normal text-gray-900 mb-2 italic">{exp.role}</h3>
                <p 
                  className="text-base font-normal mb-3 uppercase tracking-[0.2em]"
                  style={{ color: themeColor }}
                >
                  {exp.company}
                </p>
                <p className="text-xs italic text-gray-400 mb-6">
                  {exp.startDate} — {exp.endDate}
                </p>
                <p className="text-sm leading-loose text-gray-600">
                  {exp.description}
                </p>
                <div className="flex items-center justify-center gap-4 mt-6">
                  <div className="h-px w-12 bg-gray-200"></div>
                  <div 
                    className="w-1.5 h-1.5 rotate-45"
                    style={{ backgroundColor: themeColor }}
                  ></div>
                  <div className="h-px w-12 bg-gray-200"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-2 gap-16">
          <section>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex-1 h-px bg-gray-200"></div>
              <h2 className="text-xs font-normal uppercase tracking-[0.4em] text-gray-400">
                Education
              </h2>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>
            {education.map(edu => (
              <div key={edu.id} className="mb-8 text-center">
                <p className="font-medium text-gray-900 text-base italic">{edu.school}</p>
                <p className="text-sm text-gray-600 mt-2">{edu.degree}</p>
                <p 
                  className="text-xs font-semibold mt-2 uppercase tracking-wider"
                  style={{ color: themeColor }}
                >
                  {edu.year}
                </p>
              </div>
            ))}
          </section>

          <section>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex-1 h-px bg-gray-200"></div>
              <h2 className="text-xs font-normal uppercase tracking-[0.4em] text-gray-400">
                Expertise
              </h2>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>
            <div className="flex flex-col items-center gap-4">
              {skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div 
                    className="w-1 h-1 rounded-full"
                    style={{ backgroundColor: themeColor }}
                  ></div>
                  <span className="text-sm text-gray-700 italic">{skill}</span>
                  <div 
                    className="w-1 h-1 rounded-full"
                    style={{ backgroundColor: themeColor }}
                  ></div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ElegantTemplate;
import React from 'react';
import { useResume } from '../../context/ResumeContext';

const AcademicTemplate = () => {
  const { resumeData } = useResume();
  const { personalInfo, experience, education, skills, themeColor } = resumeData;

  return (
    <div className="w-full h-full bg-white text-gray-800 p-20 shadow-2xl flex flex-col font-serif" style={{ minHeight: '1000px' }}>
      <header className="mb-16 text-center">
        <h1 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
          {personalInfo.fullName}
        </h1>
        <div className="h-px w-32 mx-auto mb-6" style={{ backgroundColor: themeColor }}></div>
        <p className="text-base text-gray-600 italic mb-6">{personalInfo.jobTitle}</p>
        <div className="flex justify-center flex-wrap gap-x-8 gap-y-2 text-xs text-gray-500 uppercase tracking-widest">
          <span>{personalInfo.email}</span>
          <span>•</span>
          <span>{personalInfo.phone}</span>
          <span>•</span>
          <span>{personalInfo.location}</span>
          {personalInfo.website && (
            <>
              <span>•</span>
              <span>{personalInfo.website}</span>
            </>
          )}
        </div>
      </header>

      <div className="flex flex-col gap-14">
        <section>
          <h2 
            className="text-sm font-bold uppercase tracking-[0.3em] mb-6 pb-3 border-b-2"
            style={{ borderColor: themeColor, color: themeColor }}
          >
            Research Summary
          </h2>
          <p className="text-base leading-loose text-gray-700 text-justify">
            {personalInfo.summary}
          </p>
        </section>

        <section>
          <h2 
            className="text-sm font-bold uppercase tracking-[0.3em] mb-8 pb-3 border-b-2"
            style={{ borderColor: themeColor, color: themeColor }}
          >
            Academic & Professional Experience
          </h2>
          <div className="flex flex-col gap-10">
            {experience.map(exp => (
              <div key={exp.id} className="grid grid-cols-12 gap-6">
                <div className="col-span-3 text-right">
                  <div className="inline-block text-xs font-bold text-gray-400 uppercase tracking-wider pt-1">
                    {exp.startDate}
                    <br />
                    —
                    <br />
                    {exp.endDate}
                  </div>
                </div>
                <div className="col-span-9 border-l-2 pl-6" style={{ borderColor: themeColor }}>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{exp.role}</h3>
                  <p className="text-sm italic mb-4" style={{ color: themeColor }}>
                    {exp.company}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-700 text-justify">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 
            className="text-sm font-bold uppercase tracking-[0.3em] mb-8 pb-3 border-b-2"
            style={{ borderColor: themeColor, color: themeColor }}
          >
            Education
          </h2>
          <div className="flex flex-col gap-6">
            {education.map(edu => (
              <div key={edu.id} className="grid grid-cols-12 gap-6">
                <div className="col-span-3 text-right">
                  <div className="inline-block text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {edu.year}
                  </div>
                </div>
                <div className="col-span-9 border-l-2 pl-6" style={{ borderColor: themeColor }}>
                  <h3 className="text-base font-bold text-gray-900">{edu.school}</h3>
                  <p className="text-sm italic text-gray-600">{edu.degree}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 
            className="text-sm font-bold uppercase tracking-[0.3em] mb-8 pb-3 border-b-2"
            style={{ borderColor: themeColor, color: themeColor }}
          >
            Research Interests & Expertise
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {skills.map((skill, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: themeColor }}></div>
                <span className="text-sm text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AcademicTemplate;
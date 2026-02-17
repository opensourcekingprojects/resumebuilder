import React from 'react';
import { useResume } from '../../context/ResumeContext';

const TimelineTemplate = () => {
  const { resumeData } = useResume();
  const { personalInfo, experience, education, skills, themeColor } = resumeData;

  return (
    <div className="w-full h-full bg-white text-gray-800 p-16" style={{ minHeight: '1000px' }}>
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-3">{personalInfo.fullName}</h1>
        <p className="text-2xl mb-6" style={{ color: themeColor }}>
          {personalInfo.jobTitle}
        </p>
        <div className="flex justify-center gap-6 text-sm">
          <span>{personalInfo.email}</span>
          <span>{personalInfo.phone}</span>
          <span>{personalInfo.location}</span>
        </div>
      </header>

      <section className="mb-12">
        <p className="text-center text-lg leading-relaxed max-w-3xl mx-auto">
          {personalInfo.summary}
        </p>
      </section>

      <div className="relative">
        <div
          className="absolute left-1/2 top-0 bottom-0 w-1"
          style={{ backgroundColor: themeColor + '40' }}
        ></div>

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className={`flex gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                <p className="font-semibold mb-2" style={{ color: themeColor }}>
                  {exp.company}
                </p>
                <p className="text-sm leading-relaxed">{exp.description}</p>
              </div>
              <div className="relative flex items-start justify-center">
                <div
                  className="w-6 h-6 rounded-full border-4 border-white z-10"
                  style={{ backgroundColor: themeColor }}
                ></div>
              </div>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'text-right pr-8'}`}>
                <p className="text-sm font-bold text-gray-500">
                  {exp.startDate} - {exp.endDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-12 mt-16">
        <section>
          <h2 className="text-xl font-bold mb-6 pb-3 border-b-2" style={{ borderColor: themeColor }}>
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-4">
              <p className="font-bold">{edu.school}</p>
              <p className="text-sm">{edu.degree}</p>
              <p className="text-xs text-gray-500">{edu.year}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-xl font-bold mb-6 pb-3 border-b-2" style={{ borderColor: themeColor }}>
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-sm font-semibold"
                style={{ backgroundColor: themeColor + '20', color: themeColor }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TimelineTemplate;
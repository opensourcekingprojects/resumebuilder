import React from 'react';
import { useResume } from '../../context/ResumeContext';

const CompactTemplate = () => {
  const { resumeData } = useResume();
  const { personalInfo, experience, education, skills, themeColor } = resumeData;

  return (
    <div
      className="w-full h-full bg-white text-gray-800 p-12 shadow-2xl"
      style={{ minHeight: '1000px', fontSize: '11px' }}
    >
      <header className="mb-8 pb-6 border-b-2 border-gray-200">
        <h1 className="text-3xl font-bold mb-2">{personalInfo.fullName}</h1>
        <p className="text-lg mb-3" style={{ color: themeColor }}>
          {personalInfo.jobTitle}
        </p>
        <div className="flex gap-4 text-xs text-gray-600">
          <span>{personalInfo.email}</span>
          <span>•</span>
          <span>{personalInfo.phone}</span>
          <span>•</span>
          <span>{personalInfo.location}</span>
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-sm font-bold uppercase mb-3" style={{ color: themeColor }}>
          Summary
        </h2>
        <p className="leading-relaxed">{personalInfo.summary}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-sm font-bold uppercase mb-3" style={{ color: themeColor }}>
          Experience
        </h2>
        <div className="space-y-4">
          {experience.map((exp) => (
            <div key={exp.id}>
              <div className="flex justify-between">
                <h3 className="font-bold">{exp.role}</h3>
                <span className="text-xs text-gray-500">
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <p className="font-semibold mb-2">{exp.company}</p>
              <p className="leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-2 gap-6">
        <section>
          <h2 className="text-sm font-bold uppercase mb-3" style={{ color: themeColor }}>
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <p className="font-bold">{edu.school}</p>
              <p>{edu.degree}</p>
              <p className="text-xs text-gray-500">{edu.year}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-sm font-bold uppercase mb-3" style={{ color: themeColor }}>
            Skills
          </h2>
          <p className="leading-relaxed">{skills.join(', ')}</p>
        </section>
      </div>
    </div>
  );
};

export default CompactTemplate;
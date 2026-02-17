import React from 'react';
import { useResume } from '../../context/ResumeContext';

const BoldTemplate = () => {
  const { resumeData } = useResume();
  const { personalInfo, experience, education, skills, themeColor } = resumeData;

  return (
    <div
      className="w-full h-full bg-white text-gray-900 p-16 shadow-2xl"
      style={{ minHeight: '1000px' }}
    >
      <div
        className="h-32 flex items-center justify-center mb-12"
        style={{ backgroundColor: themeColor }}
      >
        <h1 className="text-6xl font-black text-white uppercase tracking-widest">
          {personalInfo.fullName}
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-12">
        <div className="col-span-1 space-y-8">
          <section>
            <h2
              className="text-xl font-black uppercase mb-6 pb-3 border-b-4"
              style={{ borderColor: themeColor }}
            >
              Contact
            </h2>
            <div className="space-y-3 text-sm">
              <p>{personalInfo.email}</p>
              <p>{personalInfo.phone}</p>
              <p>{personalInfo.location}</p>
            </div>
          </section>

          <section>
            <h2
              className="text-xl font-black uppercase mb-6 pb-3 border-b-4"
              style={{ borderColor: themeColor }}
            >
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-bold text-white"
                  style={{ backgroundColor: themeColor }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2
              className="text-xl font-black uppercase mb-6 pb-3 border-b-4"
              style={{ borderColor: themeColor }}
            >
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
        </div>

        <div className="col-span-2 space-y-10">
          <section>
            <h2
              className="text-2xl font-black uppercase mb-6 pb-3 border-b-4"
              style={{ borderColor: themeColor }}
            >
              {personalInfo.jobTitle}
            </h2>
            <p className="text-base leading-relaxed">{personalInfo.summary}</p>
          </section>

          <section>
            <h2
              className="text-2xl font-black uppercase mb-8 pb-3 border-b-4"
              style={{ borderColor: themeColor }}
            >
              Experience
            </h2>
            <div className="space-y-8">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between mb-2">
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <span className="text-sm font-bold" style={{ color: themeColor }}>
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <p className="font-semibold text-gray-600 mb-3">{exp.company}</p>
                  <p className="text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BoldTemplate;
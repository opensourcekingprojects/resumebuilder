import React from 'react';
import { useResume } from '../../context/ResumeContext';

const SplitTemplate = () => {
  const { resumeData } = useResume();
  const { personalInfo, experience, education, skills, themeColor } = resumeData;

  return (
    <div className="w-full h-full flex" style={{ minHeight: '1000px' }}>
      <div className="w-1/2 bg-gray-900 text-white p-16 flex flex-col justify-between">
        <div>
          <h1 className="text-5xl font-black mb-4 leading-tight">{personalInfo.fullName}</h1>
          <p className="text-2xl mb-12" style={{ color: themeColor }}>
            {personalInfo.jobTitle}
          </p>

          <section className="mb-12">
            <h2 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">
              Contact
            </h2>
            <div className="space-y-3 text-sm">
              <p>{personalInfo.email}</p>
              <p>{personalInfo.phone}</p>
              <p>{personalInfo.location}</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-xs font-bold rounded-lg"
                  style={{ backgroundColor: themeColor }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>

        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-6">
              <p className="font-bold text-lg">{edu.school}</p>
              <p className="text-sm opacity-80">{edu.degree}</p>
              <p className="text-xs mt-1" style={{ color: themeColor }}>
                {edu.year}
              </p>
            </div>
          ))}
        </section>
      </div>

      <div className="w-1/2 bg-white p-16">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2" style={{ borderColor: themeColor }}>
            Professional Summary
          </h2>
          <p className="text-base leading-relaxed">{personalInfo.summary}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-8 pb-3 border-b-2" style={{ borderColor: themeColor }}>
            Work Experience
          </h2>
          <div className="space-y-10">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between mb-3">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <span className="text-sm font-semibold" style={{ color: themeColor }}>
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <p className="font-bold text-gray-600 mb-4">{exp.company}</p>
                <p className="text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SplitTemplate;
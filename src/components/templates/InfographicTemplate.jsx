import React from 'react';
import { useResume } from '../../context/ResumeContext';

const InfographicTemplate = () => {
  const { resumeData } = useResume();
  const { personalInfo, experience, education, skills, themeColor } = resumeData;

  return (
    <div
      className="w-full h-full text-gray-800 p-12"
      style={{
        minHeight: '1000px',
        background: `linear-gradient(135deg, ${themeColor}15 0%, #ffffff 100%)`,
      }}
    >
      <header className="bg-white rounded-3xl p-10 mb-8 shadow-xl">
        <div className="flex items-center gap-8">
          <div
            className="w-32 h-32 rounded-full flex items-center justify-center text-5xl font-black text-white"
            style={{ backgroundColor: themeColor }}
          >
            {personalInfo.fullName.charAt(0)}
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-black mb-2">{personalInfo.fullName}</h1>
            <p className="text-xl font-semibold mb-4" style={{ color: themeColor }}>
              {personalInfo.jobTitle}
            </p>
            <div className="flex gap-6 text-sm">
              <span>{personalInfo.email}</span>
              <span>{personalInfo.phone}</span>
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div
            className="text-4xl font-black mb-2"
            style={{ color: themeColor }}
          >
            {experience.length}+
          </div>
          <p className="text-sm font-semibold">Years Experience</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div
            className="text-4xl font-black mb-2"
            style={{ color: themeColor }}
          >
            {skills.length}+
          </div>
          <p className="text-sm font-semibold">Skills Mastered</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div
            className="text-4xl font-black mb-2"
            style={{ color: themeColor }}
          >
            {education.length}
          </div>
          <p className="text-sm font-semibold">Degrees</p>
        </div>
      </div>

      <section className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
        <h2 className="text-2xl font-black mb-4" style={{ color: themeColor }}>
          About Me
        </h2>
        <p className="text-base leading-relaxed">{personalInfo.summary}</p>
      </section>

      <section className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
        <h2 className="text-2xl font-black mb-6" style={{ color: themeColor }}>
          Experience Journey
        </h2>
        <div className="space-y-6">
          {experience.map((exp) => (
            <div key={exp.id} className="relative pl-8 border-l-4" style={{ borderColor: themeColor }}>
              <div
                className="absolute -left-[9px] top-0 w-4 h-4 rounded-full"
                style={{ backgroundColor: themeColor }}
              ></div>
              <div className="flex justify-between mb-2">
                <h3 className="text-lg font-bold">{exp.role}</h3>
                <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: themeColor + '20', color: themeColor }}>
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <p className="font-semibold mb-2" style={{ color: themeColor }}>
                {exp.company}
              </p>
              <p className="text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-2 gap-6">
        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-xl font-black mb-6" style={{ color: themeColor }}>
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-4">
              <p className="font-bold">{edu.school}</p>
              <p className="text-sm">{edu.degree}</p>
              <p className="text-xs" style={{ color: themeColor }}>
                {edu.year}
              </p>
            </div>
          ))}
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-xl font-black mb-6" style={{ color: themeColor }}>
            Skills
          </h2>
          <div className="space-y-3">
            {skills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-semibold">{skill}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      backgroundColor: themeColor,
                      width: `${85 + Math.random() * 15}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default InfographicTemplate;
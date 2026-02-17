import React from 'react';
import { useResume } from '../../context/ResumeContext';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const ModernTemplate = () => {
  const { resumeData } = useResume();
  const { personalInfo, experience, education, skills, themeColor } = resumeData;

  return (
    <div className="w-full h-full bg-white text-gray-800 flex font-sans" style={{ minHeight: '297mm' }}>
      {/* Left Sidebar - 35% */}
      <div className="w-[35%] p-12 text-white flex flex-col gap-10" style={{ backgroundColor: themeColor }}>
        <div className="text-center">
          <div className="w-40 h-40 bg-white/20 rounded-3xl mx-auto mb-8 flex items-center justify-center text-8xl font-black shadow-2xl">
            {personalInfo.fullName.charAt(0)}
          </div>
          <h1 className="text-4xl font-black uppercase tracking-tight leading-tight mb-4">
            {personalInfo.fullName}
          </h1>
          <p className="text-white/90 font-semibold text-xl">{personalInfo.jobTitle}</p>
        </div>

        <div className="flex flex-col gap-6 mt-8">
          <h3 className="text-sm font-black uppercase tracking-widest border-b-2 border-white/30 pb-4">
            Contact Information
          </h3>
          <div className="space-y-5 text-sm text-white/95">
            <div className="flex items-center gap-3">
              <SafeIcon icon={FiIcons.FiMail} className="text-xl" />
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <SafeIcon icon={FiIcons.FiPhone} className="text-xl" />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <SafeIcon icon={FiIcons.FiMapPin} className="text-xl" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-sm font-black uppercase tracking-widest border-b-2 border-white/30 pb-4">
            Core Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((s, i) => (
              <span
                key={i}
                className="bg-white/15 backdrop-blur-sm px-5 py-3 rounded-lg text-xs font-bold border border-white/20"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-auto">
          <h3 className="text-sm font-black uppercase tracking-widest border-b-2 border-white/30 pb-4">
            Education
          </h3>
          {education.map((edu) => (
            <div key={edu.id} className="text-sm">
              <p className="font-bold text-white text-lg">{edu.school}</p>
              <p className="text-white/80 text-base mt-2">{edu.degree}</p>
              <p className="text-white/60 text-sm mt-1">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content - 65% */}
      <div className="flex-1 p-16 flex flex-col gap-14 bg-gray-50">
        <section>
          <h2
            className="text-3xl font-black uppercase mb-6 tracking-tight pb-4 border-b-4"
            style={{ color: themeColor, borderColor: themeColor }}
          >
            Professional Profile
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">{personalInfo.summary}</p>
        </section>

        <section>
          <h2
            className="text-3xl font-black uppercase mb-10 tracking-tight pb-4 border-b-4"
            style={{ color: themeColor, borderColor: themeColor }}
          >
            Work Experience
          </h2>
          <div className="space-y-12">
            {experience.map((exp) => (
              <div key={exp.id} className="relative pl-10 border-l-4 border-gray-200">
                <div
                  className="absolute -left-[10px] top-1 w-5 h-5 rounded-full border-4 border-white shadow-md"
                  style={{ backgroundColor: themeColor }}
                ></div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-black text-2xl text-gray-900">{exp.role}</h3>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>
                <p className="text-lg font-bold mb-5" style={{ color: themeColor }}>
                  {exp.company}
                </p>
                <p className="text-base text-gray-600 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ModernTemplate;
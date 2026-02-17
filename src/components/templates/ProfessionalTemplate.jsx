import React from 'react';
import { useResume } from '../../context/ResumeContext';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const ProfessionalTemplate = () => {
  const { resumeData } = useResume();
  const { personalInfo, experience, education, skills, themeColor } = resumeData;

  return (
    <div className="w-full h-full bg-white text-gray-800 shadow-2xl flex flex-col" style={{ minHeight: '1000px' }}>
      {/* Thicker top bar */}
      <div className="h-4 w-full" style={{ backgroundColor: themeColor }}></div>
      
      <div className="p-16">
        <header className="flex justify-between items-start border-b-2 border-gray-100 pb-12 mb-12">
          <div>
            <h1 className="text-6xl font-black text-gray-900 mb-3 tracking-tight">
              {personalInfo.fullName}
            </h1>
            <p className="text-3xl font-bold uppercase tracking-wide" style={{ color: themeColor }}>
              {personalInfo.jobTitle}
            </p>
          </div>
          <div className="flex flex-col items-end text-base text-gray-600 gap-3 pt-3">
            <div className="flex items-center gap-4">
              <span className="font-medium">{personalInfo.email}</span>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: themeColor + '20' }}>
                <SafeIcon icon={FiIcons.FiMail} size={18} style={{ color: themeColor }} />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-medium">{personalInfo.phone}</span>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: themeColor + '20' }}>
                <SafeIcon icon={FiIcons.FiPhone} size={18} style={{ color: themeColor }} />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-medium">{personalInfo.location}</span>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: themeColor + '20' }}>
                <SafeIcon icon={FiIcons.FiMapPin} size={18} style={{ color: themeColor }} />
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-14">
          <div className="col-span-4 border-r-2 border-gray-100 pr-14">
            <section className="mb-14">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-10 rounded-full" style={{ backgroundColor: themeColor }}></div>
                <h2 className="text-base font-black uppercase tracking-widest text-gray-900">
                  Skills
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-5 py-3 text-sm font-bold rounded-lg border-2"
                    style={{ borderColor: themeColor, color: themeColor, backgroundColor: themeColor + '10' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-10 rounded-full" style={{ backgroundColor: themeColor }}></div>
                <h2 className="text-base font-black uppercase tracking-widest text-gray-900">
                  Education
                </h2>
              </div>
              {education.map(edu => (
                <div
                  key={edu.id}
                  className="mb-8 p-5 rounded-xl border-l-4"
                  style={{ borderColor: themeColor, backgroundColor: '#f9fafb' }}
                >
                  <p className="font-bold text-gray-900 text-base">{edu.school}</p>
                  <p className="text-sm text-gray-600 mt-2">{edu.degree}</p>
                  <div className="inline-block px-3 py-2 rounded-md text-xs font-bold text-white mt-3" style={{ backgroundColor: themeColor }}>
                    {edu.year}
                  </div>
                </div>
              ))}
            </section>
          </div>

          <div className="col-span-8">
            <section className="mb-14">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-10 rounded-full" style={{ backgroundColor: themeColor }}></div>
                <h2 className="text-base font-black uppercase tracking-widest text-gray-900">
                  Professional Summary
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-gray-700">
                {personalInfo.summary}
              </p>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-2 h-10 rounded-full" style={{ backgroundColor: themeColor }}></div>
                <h2 className="text-base font-black uppercase tracking-widest text-gray-900">
                  Experience
                </h2>
              </div>
              <div className="flex flex-col gap-12">
                {experience.map(exp => (
                  <div key={exp.id} className="relative">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                      <span className="text-xs font-black uppercase px-5 py-3 rounded-lg border-2" style={{ borderColor: themeColor, color: themeColor }}>
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    <p className="font-bold text-lg mb-5" style={{ color: themeColor }}>
                      {exp.company}
                    </p>
                    <p className="text-base text-gray-700 leading-relaxed pl-5 border-l-2 border-gray-200">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTemplate;
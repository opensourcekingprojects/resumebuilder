import React from 'react';
import { useResume } from '../../context/ResumeContext';

const ClassicTemplate = () => {
  const { resumeData } = useResume();
  const { personalInfo, experience, education, skills } = resumeData;

  return (
    <div
      className="w-full h-full bg-white text-gray-900 p-20 shadow-2xl flex flex-col gap-10 font-serif"
      style={{ minHeight: '297mm' }}
    >
      {/* Traditional Header */}
      <div className="text-center border-b-8 border-double border-gray-900 pb-10">
        <h1 className="text-6xl font-bold mb-4 tracking-wide text-gray-900">
          {personalInfo.fullName}
        </h1>
        <p className="text-2xl italic text-gray-700 mb-6">{personalInfo.jobTitle}</p>
        <div className="flex justify-center flex-wrap gap-6 text-base text-gray-600">
          <span className="font-medium">{personalInfo.email}</span>
          <span className="text-gray-400">•</span>
          <span className="font-medium">{personalInfo.phone}</span>
          <span className="text-gray-400">•</span>
          <span className="font-medium">{personalInfo.location}</span>
          {personalInfo.website && (
            <>
              <span className="text-gray-400">•</span>
              <span className="font-medium">{personalInfo.website}</span>
            </>
          )}
        </div>
      </div>

      {/* Summary */}
      <section>
        <h2 className="text-2xl font-bold uppercase tracking-wider mb-5 text-center border-b-4 border-gray-400 pb-3">
          Professional Summary
        </h2>
        <p className="text-lg leading-loose text-gray-800 text-center italic px-12">
          {personalInfo.summary}
        </p>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-2xl font-bold uppercase tracking-wider mb-8 text-center border-b-4 border-gray-400 pb-3">
          Work Experience
        </h2>
        <div className="flex flex-col gap-8">
          {experience.map((exp) => (
            <div key={exp.id} className="border-l-8 border-gray-400 pl-8">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-bold text-2xl text-gray-900">{exp.company}</h3>
                <span className="text-base italic text-gray-600">
                  {exp.startDate} – {exp.endDate}
                </span>
              </div>
              <p className="text-xl font-semibold italic mb-3 text-gray-700">{exp.role}</p>
              <p className="text-base text-gray-800 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Skills */}
      <div className="grid grid-cols-2 gap-16">
        <section>
          <h2 className="text-2xl font-bold uppercase tracking-wider mb-6 border-b-4 border-gray-400 pb-3">
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-5">
              <p className="font-bold text-lg text-gray-900">{edu.school}</p>
              <p className="text-base italic text-gray-700 mt-2">{edu.degree}</p>
              <p className="text-sm text-gray-600 mt-1">{edu.year}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-bold uppercase tracking-wider mb-6 border-b-4 border-gray-400 pb-3">
            Skills
          </h2>
          <p className="text-base text-gray-800 leading-relaxed">{skills.join(' • ')}</p>
        </section>
      </div>
    </div>
  );
};

export default ClassicTemplate;
import React from 'react';
import { useResume } from '../../context/ResumeContext';

const MinimalistTemplate = () => {
  const { resumeData } = useResume();
  const { personalInfo, experience, education, skills } = resumeData;

  return (
    <div
      className="w-full h-full bg-white text-black p-24 font-light"
      style={{ minHeight: '297mm', fontFamily: "'Inter', sans-serif" }}
    >
      {/* Ultra-minimal Header */}
      <header className="mb-24 border-b border-black/5 pb-12">
        <h1 className="text-7xl font-extralight tracking-[0.3em] uppercase mb-8 text-black">
          {personalInfo.fullName}
        </h1>
        <div className="h-px w-24 bg-black/80 mb-10"></div>
        <p className="text-base tracking-[0.5em] font-normal uppercase opacity-30 mb-10">
          {personalInfo.jobTitle}
        </p>
        <div className="flex gap-16 text-xs tracking-[0.2em] opacity-20 font-light">
          <span>{personalInfo.email}</span>
          <span>{personalInfo.phone}</span>
          <span>{personalInfo.location}</span>
        </div>
      </header>

      {/* Grid Layout */}
      <div className="grid grid-cols-12 gap-20">
        {/* Left Sidebar */}
        <div className="col-span-3 space-y-20">
          <section>
            <h2 className="text-[8px] font-bold uppercase tracking-[0.6em] mb-10 opacity-15">
              Expertise
            </h2>
            <div className="space-y-5 text-xs uppercase tracking-[0.25em] font-light">
              {skills.map((s, i) => (
                <p key={i} className="opacity-50">
                  {s}
                </p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[8px] font-bold uppercase tracking-[0.6em] mb-10 opacity-15">
              Education
            </h2>
            {education.map((edu) => (
              <div key={edu.id} className="mb-8">
                <p className="text-xs font-normal mb-2 opacity-70">{edu.school}</p>
                <p className="text-[9px] uppercase tracking-[0.2em] opacity-30">{edu.degree}</p>
                <p className="text-[9px] uppercase tracking-[0.2em] opacity-20 mt-2">{edu.year}</p>
              </div>
            ))}
          </section>
        </div>

        {/* Right Content */}
        <div className="col-span-9 space-y-20">
          <section>
            <p className="text-2xl leading-loose font-light opacity-60">{personalInfo.summary}</p>
          </section>

          <section>
            <h2 className="text-[8px] font-bold uppercase tracking-[0.6em] mb-16 opacity-15">
              Professional Experience
            </h2>
            <div className="space-y-20">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <p className="text-[8px] font-bold uppercase tracking-[0.3em] mb-4 opacity-25">
                    {exp.startDate} — {exp.endDate}
                  </p>
                  <h3 className="text-3xl font-light mb-3">{exp.role}</h3>
                  <p className="text-lg font-normal mb-8 italic opacity-40">{exp.company}</p>
                  <p className="text-sm leading-loose opacity-50">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MinimalistTemplate;
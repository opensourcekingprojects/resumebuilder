import React from 'react';
import { useResume } from '../../context/ResumeContext';

const TechnicalTemplate = () => {
  const { resumeData } = useResume();
  const { personalInfo, experience, education, skills } = resumeData;

  return (
    <div
      className="w-full h-full bg-[#0a0e14] text-[#d4d4d8] p-12 font-mono text-xs"
      style={{ minHeight: '297mm' }}
    >
      <div className="border border-[#1f2937] rounded-lg p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-6 pb-5 border-b border-[#1f2937]">
          <div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-[#6ee7b7] text-xs">class</span>
              <h1 className="text-2xl font-bold text-white tracking-tight">
                {personalInfo.fullName}
              </h1>
              <span className="text-[#6ee7b7] text-xs">{'{'}</span>
            </div>
            <div className="pl-4">
              <p className="text-[#9ca3af] mb-1">
                <span className="text-[#60a5fa]">role</span>
                <span className="text-[#6ee7b7]">:</span>
                <span className="text-[#fbbf24]"> "{personalInfo.jobTitle}"</span>
              </p>
            </div>
          </div>
          <div className="text-right text-[10px] space-y-1">
            <p className="text-[#60a5fa]">// Contact Info</p>
            <p className="text-[#9ca3af]">{personalInfo.email}</p>
            <p className="text-[#9ca3af]">{personalInfo.phone}</p>
            <p className="text-[#9ca3af]">{personalInfo.location}</p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Summary */}
          <section>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-[#f472b6]">function</span>
              <span className="text-white">getSummary</span>
              <span className="text-[#9ca3af]">()</span>
              <span className="text-[#6ee7b7]">{'{'}</span>
            </div>
            <div className="pl-4 border-l-2 border-[#1f2937] ml-2">
              <p className="text-[#9ca3af] mb-2">
                <span className="text-[#f472b6]">return</span>
                <span className="text-[#fbbf24]"> `{personalInfo.summary}`</span>
                <span className="text-[#9ca3af]">;</span>
              </p>
            </div>
            <span className="text-[#6ee7b7]">{'}'}</span>
          </section>

          {/* Experience */}
          <section>
            <div className="flex items-baseline gap-2 mb-5">
              <span className="text-[#f472b6]">const</span>
              <span className="text-white">experience</span>
              <span className="text-[#6ee7b7]"> = [</span>
            </div>
            <div className="pl-4 space-y-5">
              {experience.map((exp, index) => (
                <div key={exp.id} className="border-l-2 border-[#374151] pl-4">
                  <p className="text-[#6ee7b7] mb-2">{'{'}</p>
                  <div className="pl-3 space-y-1 text-[10px]">
                    <p>
                      <span className="text-[#60a5fa]">company</span>
                      <span className="text-[#9ca3af]">:</span>
                      <span className="text-[#fbbf24]"> "{exp.company}"</span>
                      <span className="text-[#9ca3af]">,</span>
                    </p>
                    <p>
                      <span className="text-[#60a5fa]">role</span>
                      <span className="text-[#9ca3af]">:</span>
                      <span className="text-[#fbbf24]"> "{exp.role}"</span>
                      <span className="text-[#9ca3af]">,</span>
                    </p>
                    <p>
                      <span className="text-[#60a5fa]">period</span>
                      <span className="text-[#9ca3af]">:</span>
                      <span className="text-[#fbbf24]">
                        {' '}
                        "{exp.startDate} → {exp.endDate}"
                      </span>
                      <span className="text-[#9ca3af]">,</span>
                    </p>
                    <p>
                      <span className="text-[#60a5fa]">description</span>
                      <span className="text-[#9ca3af]">:</span>
                      <span className="text-[#fbbf24]"> "{exp.description}"</span>
                    </p>
                  </div>
                  <p className="text-[#6ee7b7]">
                    {'}'}
                    {index < experience.length - 1 ? ',' : ''}
                  </p>
                </div>
              ))}
            </div>
            <span className="text-[#6ee7b7]">];</span>
          </section>

          {/* Skills & Education Grid */}
          <div className="grid grid-cols-2 gap-8">
            <section>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-[#f472b6]">const</span>
                <span className="text-white">skills</span>
                <span className="text-[#6ee7b7]"> = [</span>
              </div>
              <div className="pl-4 flex flex-wrap gap-x-3 gap-y-1 text-[10px]">
                {skills.map((s, i) => (
                  <span key={i} className="text-[#fbbf24]">
                    "{s}"{i < skills.length - 1 ? ',' : ''}
                  </span>
                ))}
              </div>
              <span className="text-[#6ee7b7]">];</span>
            </section>

            <section>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-[#f472b6]">const</span>
                <span className="text-white">education</span>
                <span className="text-[#6ee7b7]"> = [</span>
              </div>
              <div className="pl-4 space-y-2 text-[10px]">
                {education.map((edu, index) => (
                  <div key={edu.id}>
                    <p className="text-[#6ee7b7]">{'{'}</p>
                    <div className="pl-3">
                      <p>
                        <span className="text-[#60a5fa]">school</span>
                        <span className="text-[#9ca3af]">:</span>
                        <span className="text-[#fbbf24]"> "{edu.school}"</span>
                        <span className="text-[#9ca3af]">,</span>
                      </p>
                      <p>
                        <span className="text-[#60a5fa]">degree</span>
                        <span className="text-[#9ca3af]">:</span>
                        <span className="text-[#fbbf24]"> "{edu.degree}"</span>
                      </p>
                    </div>
                    <p className="text-[#6ee7b7]">
                      {'}'}
                      {index < education.length - 1 ? ',' : ''}
                    </p>
                  </div>
                ))}
              </div>
              <span className="text-[#6ee7b7]">];</span>
            </section>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-[#1f2937]">
          <span className="text-[#6ee7b7]">{'}'}</span>
          <p className="text-[#60a5fa] text-[10px] mt-2">// End of Resume</p>
        </div>
      </div>
    </div>
  );
};

export default TechnicalTemplate;
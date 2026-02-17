import React from 'react';
import { useResume } from '../../context/ResumeContext';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Button from '../common/Button';
import { motion } from 'framer-motion';

const Section = ({ title, icon: Icon, children }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center gap-3">
      <SafeIcon icon={Icon} className="text-gray-500" />
      <h3 className="font-semibold text-gray-800">{title}</h3>
    </div>
    <div className="p-6">{children}</div>
  </div>
);

const Input = ({ label, value, onChange, type = 'text', className = '' }) => (
  <div className={`flex flex-col gap-1.5 ${className}`}>
    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
    />
  </div>
);

const TextArea = ({ label, value, onChange, rows = 3 }) => (
  <div className="flex flex-col gap-1.5">
    <div className="flex justify-between items-center">
      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
        {label}
      </label>
    </div>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={rows}
      className="px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm resize-y"
    />
  </div>
);

const EditorForm = () => {
  const {
    resumeData,
    updatePersonalInfo,
    addExperience,
    updateExperience,
    removeExperience,
    updateEducation,
    addEducation,
    removeEducation,
    updateSkills,
    setTemplate,
    setThemeColor,
  } = useResume();

  const { personalInfo, experience, education, skills } = resumeData;

  const templates = [
    { id: 'modern', name: 'Modern' },
    { id: 'classic', name: 'Classic' },
    { id: 'creative', name: 'Creative' },
    { id: 'minimalist', name: 'Minimal' },
    { id: 'professional', name: 'Pro' },
    { id: 'elegant', name: 'Elegant' },
    { id: 'technical', name: 'Tech' },
    { id: 'executive', name: 'Exec' },
    { id: 'startup', name: 'Startup' },
    { id: 'academic', name: 'Acad' },
    { id: 'bold', name: 'Bold' },
    { id: 'compact', name: 'Compact' },
    { id: 'timeline', name: 'Timeline' },
    { id: 'infographic', name: 'Info' },
    { id: 'split', name: 'Split' },
  ];

  const colors = [
    '#2563eb',
    '#1f2937',
    '#7c3aed',
    '#dc2626',
    '#16a34a',
    '#d97706',
    '#db2777',
  ];

  return (
    <div className="flex flex-col gap-8 pb-20">
      <Section title="Design & Template" icon={FiIcons.FiLayout}>
        <div className="grid grid-cols-5 gap-2 mb-6">
          {templates.map((t) => (
            <button
              key={t.id}
              onClick={() => setTemplate(t.id)}
              className={`py-2 px-1 rounded-lg border-2 text-[10px] uppercase font-bold transition-all ${
                resumeData.template === t.id
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-3">
            Accent Color
          </label>
          <div className="flex gap-3">
            {colors.map((c) => (
              <button
                key={c}
                onClick={() => setThemeColor(c)}
                className={`w-7 h-7 rounded-full transition-transform hover:scale-110 ${
                  resumeData.themeColor === c
                    ? 'ring-2 ring-offset-2 ring-gray-400 scale-110'
                    : ''
                }`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section title="Personal Information" icon={FiIcons.FiUser}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <Input
            label="Full Name"
            value={personalInfo.fullName}
            onChange={(v) => updatePersonalInfo('fullName', v)}
          />
          <Input
            label="Job Title"
            value={personalInfo.jobTitle}
            onChange={(v) => updatePersonalInfo('jobTitle', v)}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <Input
            label="Email"
            value={personalInfo.email}
            onChange={(v) => updatePersonalInfo('email', v)}
          />
          <Input
            label="Phone"
            value={personalInfo.phone}
            onChange={(v) => updatePersonalInfo('phone', v)}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <Input
            label="Location"
            value={personalInfo.location}
            onChange={(v) => updatePersonalInfo('location', v)}
          />
          <Input
            label="Website"
            value={personalInfo.website}
            onChange={(v) => updatePersonalInfo('website', v)}
          />
        </div>
        <TextArea
          label="Professional Summary"
          value={personalInfo.summary}
          onChange={(v) => updatePersonalInfo('summary', v)}
        />
      </Section>

      <Section title="Work Experience" icon={FiIcons.FiBriefcase}>
        <div className="flex flex-col gap-6">
          {experience.map((exp) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key={exp.id}
              className="p-4 rounded-lg bg-gray-50 border border-gray-200 relative group"
            >
              <button
                onClick={() => removeExperience(exp.id)}
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500 p-1"
              >
                <SafeIcon icon={FiIcons.FiTrash2} size={16} />
              </button>

              <div className="grid grid-cols-2 gap-4 mb-3">
                <Input
                  label="Company"
                  value={exp.company}
                  onChange={(v) => updateExperience(exp.id, 'company', v)}
                  className="bg-white"
                />
                <Input
                  label="Role"
                  value={exp.role}
                  onChange={(v) => updateExperience(exp.id, 'role', v)}
                  className="bg-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-3">
                <Input
                  label="Start Date"
                  value={exp.startDate}
                  onChange={(v) => updateExperience(exp.id, 'startDate', v)}
                  className="bg-white"
                />
                <Input
                  label="End Date"
                  value={exp.endDate}
                  onChange={(v) => updateExperience(exp.id, 'endDate', v)}
                  className="bg-white"
                />
              </div>
              <TextArea
                label="Description"
                value={exp.description}
                onChange={(v) => updateExperience(exp.id, 'description', v)}
                rows={3}
              />
            </motion.div>
          ))}
        </div>
        <Button onClick={addExperience} variant="secondary" className="w-full mt-4">
          <SafeIcon icon={FiIcons.FiPlus} />
          Add Experience
        </Button>
      </Section>

      <Section title="Education" icon={FiIcons.FiBook}>
        <div className="flex flex-col gap-6">
          {education.map((edu) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key={edu.id}
              className="p-4 rounded-lg bg-gray-50 border border-gray-200 relative group"
            >
              <button
                onClick={() => removeEducation(edu.id)}
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500 p-1"
              >
                <SafeIcon icon={FiIcons.FiTrash2} size={16} />
              </button>

              <div className="grid grid-cols-2 gap-4 mb-3">
                <Input
                  label="School"
                  value={edu.school}
                  onChange={(v) => updateEducation(edu.id, 'school', v)}
                  className="bg-white"
                />
                <Input
                  label="Year"
                  value={edu.year}
                  onChange={(v) => updateEducation(edu.id, 'year', v)}
                  className="bg-white"
                />
              </div>
              <Input
                label="Degree"
                value={edu.degree}
                onChange={(v) => updateEducation(edu.id, 'degree', v)}
                className="bg-white"
              />
            </motion.div>
          ))}
        </div>
        <Button onClick={addEducation} variant="secondary" className="w-full mt-4">
          <SafeIcon icon={FiIcons.FiPlus} />
          Add Education
        </Button>
      </Section>

      <Section title="Skills" icon={FiIcons.FiCode}>
        <div className="flex flex-col gap-3">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Skills (comma separated)
          </label>
          <textarea
            value={skills.join(', ')}
            onChange={(e) => {
              const newSkills = e.target.value
                .split(',')
                .map((s) => s.trim())
                .filter((s) => s);
              updateSkills(newSkills);
            }}
            rows={4}
            className="px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm resize-y"
            placeholder="React, JavaScript, Node.js, etc."
          />
          <p className="text-xs text-gray-400">Separate each skill with a comma</p>
        </div>
      </Section>
    </div>
  );
};

export default EditorForm;
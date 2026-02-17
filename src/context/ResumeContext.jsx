import React, { createContext, useContext, useState } from 'react';

const ResumeContext = createContext();

const initialResumeState = {
  personalInfo: {
    fullName: 'Alex Morgan',
    jobTitle: 'Senior Software Engineer',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    website: 'alexmorgan.dev',
    summary:
      'Experienced software engineer with a passion for building scalable web applications and open-source tools. Expert in React, Node.js, and cloud architecture.',
  },
  experience: [
    {
      id: 1,
      company: 'TechFlow Systems',
      role: 'Senior Developer',
      startDate: '2021-03',
      endDate: 'Present',
      description:
        'Leading the frontend migration to React 18. Improved site performance by 40%. Mentoring junior developers.',
    },
    {
      id: 2,
      company: 'DataCorp',
      role: 'Full Stack Engineer',
      startDate: '2018-06',
      endDate: '2021-02',
      description:
        'Developed internal analytics dashboard using Vue.js and Python. Managed AWS infrastructure.',
    },
  ],
  education: [
    {
      id: 1,
      school: 'University of California, Berkeley',
      degree: 'B.S. Computer Science',
      year: '2018',
    },
  ],
  skills: [
    'React',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'AWS',
    'Docker',
    'GraphQL',
    'Tailwind CSS',
  ],
  template: 'modern',
  themeColor: '#2563eb',
};

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState(initialResumeState);

  const updatePersonalInfo = (field, value) => {
    setResumeData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value },
    }));
  };

  const addExperience = () => {
    setResumeData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: Date.now(),
          company: 'New Company',
          role: 'Role',
          startDate: '',
          endDate: '',
          description: '',
        },
      ],
    }));
  };

  const updateExperience = (id, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  const removeExperience = (id) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id),
    }));
  };

  const addEducation = () => {
    setResumeData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: Date.now(),
          school: 'New School',
          degree: 'Degree',
          year: '',
        },
      ],
    }));
  };

  const updateEducation = (id, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    }));
  };

  const removeEducation = (id) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
    }));
  };

  const updateSkills = (skills) => {
    setResumeData((prev) => ({
      ...prev,
      skills,
    }));
  };

  const setTemplate = (templateId) => {
    setResumeData((prev) => ({
      ...prev,
      template: templateId,
    }));
  };

  const setThemeColor = (color) => {
    setResumeData((prev) => ({
      ...prev,
      themeColor: color,
    }));
  };

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        updatePersonalInfo,
        addExperience,
        updateExperience,
        removeExperience,
        addEducation,
        updateEducation,
        removeEducation,
        updateSkills,
        setTemplate,
        setThemeColor,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => useContext(ResumeContext);
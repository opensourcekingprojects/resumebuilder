import React, { useRef } from 'react';
import Navbar from '../components/common/Navbar';
import Button from '../components/common/Button';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useResume } from '../context/ResumeContext';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';

const MiniPreview = ({ type, color }) => {
  const bars = (count, width = 'w-full') =>
    Array(count)
      .fill(0)
      .map((_, i) => (
        <div
          key={i}
          className={`h-1 bg-gray-200 rounded-full ${width} mb-1 opacity-60`}
        ></div>
      ));

  const layouts = {
    modern: (
      <div className="flex h-full gap-2">
        <div className="w-1/3 h-full rounded" style={{ backgroundColor: color + '20' }}>
          <div className="w-6 h-6 rounded-full bg-white mx-auto mt-2 mb-2"></div>
          <div className="px-1">{bars(5, 'w-3/4')}</div>
        </div>
        <div className="flex-1 py-2">{bars(8)}</div>
      </div>
    ),
    classic: (
      <div className="flex flex-col items-center py-2 h-full">
        <div
          className="h-3 w-1/2 bg-gray-300 rounded mb-4"
          style={{ backgroundColor: color }}
        ></div>
        <div className="w-full px-2">{bars(12)}</div>
      </div>
    ),
    creative: (
      <div className="flex flex-col h-full">
        <div className="h-8 w-full rounded-t" style={{ backgroundColor: color }}></div>
        <div className="flex gap-2 p-2 flex-1">
          <div className="flex-1">{bars(6)}</div>
          <div className="w-1/4 h-full bg-gray-50 rounded p-1">{bars(4)}</div>
        </div>
      </div>
    ),
    minimalist: (
      <div className="p-4 h-full flex flex-col gap-4">
        <div className="h-1 w-1/4 bg-gray-400"></div>
        <div className="grid grid-cols-2 gap-4">
          <div>{bars(4)}</div>
          <div>{bars(4)}</div>
        </div>
        <div className="h-1 w-full bg-gray-100"></div>
      </div>
    ),
    technical: (
      <div className="bg-gray-900 h-full p-2 font-mono">
        <div className="text-[6px] text-green-500 mb-2">&gt;root@resume:~$</div>
        <div className="h-2 w-1/2 bg-green-900/30 rounded mb-1"></div>
        <div className="grid grid-cols-2 gap-1">{bars(10, 'w-full')}</div>
      </div>
    ),
    executive: (
      <div className="h-full border-4 border-double p-2" style={{ borderColor: color }}>
        <div className="h-2 w-1/2 bg-gray-800 mx-auto mb-4"></div>
        <div className="flex gap-4">
          <div className="flex-1">{bars(8)}</div>
          <div className="flex-1">{bars(8)}</div>
        </div>
      </div>
    ),
    startup: (
      <div className="p-2 h-full bg-slate-50">
        <div className="h-8 w-full bg-white rounded-lg shadow-sm mb-2"></div>
        <div className="grid grid-cols-3 gap-2">
          <div className="h-16 bg-white rounded-lg shadow-sm p-1">{bars(3)}</div>
          <div className="col-span-2 h-16 bg-white rounded-lg shadow-sm p-1">{bars(3)}</div>
        </div>
      </div>
    ),
    academic: (
      <div className="p-4 flex flex-col gap-3 h-full">
        <div className="h-1 w-full bg-gray-200"></div>
        <div className="flex justify-between items-start">
          <div className="w-1/4">{bars(3)}</div>
          <div className="w-3/4">{bars(5)}</div>
        </div>
      </div>
    ),
    elegant: (
      <div className="flex flex-col items-center py-4 h-full">
        <div className="h-2 w-1/3 bg-gray-400 mb-6 italic"></div>
        <div className="w-full px-6 flex flex-col items-center">{bars(8, 'w-2/3')}</div>
      </div>
    ),
    professional: (
      <div className="h-full flex flex-col">
        <div className="h-1 w-full" style={{ backgroundColor: color }}></div>
        <div className="flex-1 flex gap-4 p-2">
          <div className="w-1/3 border-r pr-2">{bars(6)}</div>
          <div className="flex-1">{bars(6)}</div>
        </div>
      </div>
    ),
    bold: (
      <div className="h-full flex flex-col">
        <div className="h-6 w-full" style={{ backgroundColor: color }}></div>
        <div className="flex-1 grid grid-cols-3 gap-2 p-2">
          <div>{bars(6)}</div>
          <div className="col-span-2">{bars(8)}</div>
        </div>
      </div>
    ),
    compact: (
      <div className="p-2 h-full">
        <div className="h-2 w-1/2 mb-2" style={{ backgroundColor: color }}></div>
        {bars(12)}
      </div>
    ),
    timeline: (
      <div className="p-2 h-full relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300"></div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-2">
              <div className="flex-1">{bars(2)}</div>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }}></div>
              <div className="flex-1">{bars(2)}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    infographic: (
      <div className="p-2 h-full space-y-2">
        <div className="h-8 rounded-lg" style={{ backgroundColor: color + '20' }}></div>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-6 bg-gray-100 rounded"></div>
          ))}
        </div>
        {bars(6)}
      </div>
    ),
    split: (
      <div className="flex h-full">
        <div className="w-1/2 bg-gray-900 p-2">{bars(8, 'w-full')}</div>
        <div className="w-1/2 bg-white p-2">{bars(8, 'w-full')}</div>
      </div>
    ),
  };

  return layouts[type] || layouts.modern;
};

const Home = () => {
  const templatesRef = useRef(null);
  const navigate = useNavigate();
  const { setTemplate } = useResume();

  const templates = [
    { id: 'modern', name: 'Modern', description: 'Left sidebar, high impact', color: '#2563eb' },
    { id: 'classic', name: 'Classic', description: 'Traditional & Formal', color: '#1f2937' },
    { id: 'creative', name: 'Creative', description: 'Bold header & Sidebar', color: '#7c3aed' },
    { id: 'minimalist', name: 'Minimalist', description: 'Typography focused', color: '#000000' },
    { id: 'technical', name: 'Technical', description: 'For Developers', color: '#16a34a' },
    { id: 'executive', name: 'Executive', description: 'Premium Management', color: '#1e3a8a' },
    { id: 'startup', name: 'Startup', description: 'Modern Card-based', color: '#db2777' },
    { id: 'academic', name: 'Academic', description: 'Research & Science', color: '#4b5563' },
    { id: 'elegant', name: 'Elegant', description: 'Serif Centered', color: '#d97706' },
    { id: 'professional', name: 'Professional', description: 'Corporate Grid', color: '#0369a1' },
    { id: 'bold', name: 'Bold', description: 'Strong Impact', color: '#dc2626' },
    { id: 'compact', name: 'Compact', description: 'Space Efficient', color: '#059669' },
    { id: 'timeline', name: 'Timeline', description: 'Journey Style', color: '#8b5cf6' },
    { id: 'infographic', name: 'Infographic', description: 'Visual Data', color: '#ec4899' },
    { id: 'split', name: 'Split', description: 'Two Column', color: '#0891b2' },
  ];

  const features = [
    {
      icon: FiIcons.FiLayout,
      title: '15+ Premium Templates',
      description: 'Choose from professionally designed templates for every industry'
    },
    {
      icon: FiIcons.FiDownload,
      title: 'Export to PDF & Word',
      description: 'Download your resume in multiple formats with one click'
    },
    {
      icon: FiIcons.FiEdit3,
      title: 'Live Preview',
      description: 'See changes in real-time as you build your resume'
    },
    {
      icon: FiIcons.FiCode,
      title: 'Open Source',
      description: 'Free forever. Contribute and customize as you need'
    }
  ];

  const handleTemplateClick = (templateId) => {
    setTemplate(templateId);
    navigate('/builder');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <SafeIcon icon={FiIcons.FiGithub} />
              Open Source Resume Builder
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
              Build Your Perfect Resume
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
              Free, open-source resume builder with 15+ professional templates. 
              No sign-up required. Export to PDF or Word instantly.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/builder">
                <Button className="px-8 py-4 text-lg rounded-xl shadow-xl">
                  <SafeIcon icon={FiIcons.FiEdit3} />
                  Start Building
                </Button>
              </Link>
              <Button
                variant="secondary"
                className="px-8 py-4 text-lg rounded-xl"
                onClick={() =>
                  templatesRef.current.scrollIntoView({ behavior: 'smooth' })
                }
              >
                <SafeIcon icon={FiIcons.FiLayout} />
                View Templates
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <SafeIcon icon={feature.icon} className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section ref={templatesRef} className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">15+ Premium Templates</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Every template is unique. Choose the one that fits your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {templates.map((tpl) => (
              <motion.div
                key={tpl.id}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => handleTemplateClick(tpl.id)}
              >
                <div className="aspect-[3/4] bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden mb-4 relative">
                  <MiniPreview type={tpl.id} color={tpl.color} />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-bold bg-blue-600 px-4 py-2 rounded-lg">
                      Use Template
                    </span>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">{tpl.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{tpl.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiIcons.FiFileText} className="text-white text-xl" />
              </div>
              <span className="font-bold text-xl">
                Resume<span className="text-blue-400">Builder</span>
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/opensourcekingprojects/resumebuilder"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <SafeIcon icon={FiIcons.FiGithub} />
                GitHub
              </a>
              <a
                href="https://github.com/opensourcekingprojects/resumebuilder/issues"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Report Issue
              </a>
              <a
                href="https://github.com/opensourcekingprojects/resumebuilder/blob/main/LICENSE"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                MIT License
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>Open Source Resume Builder • Built with React & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from './SafeIcon';

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <SafeIcon icon={FiIcons.FiFileText} className="text-white text-xl" />
            </div>
            <span className="font-bold text-xl text-gray-900">
              Resume<span className="text-blue-600">Builder</span>
            </span>
          </Link>

          <div className="flex gap-6 items-center">
            <Link
              to="/builder"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Builder
            </Link>
            <a
              href="https://github.com/yourusername/resume-builder"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-2 transition-colors"
            >
              <SafeIcon icon={FiIcons.FiGithub} />
              Star on GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React, { useRef, useState } from 'react';
import Navbar from '../components/common/Navbar';
import EditorForm from '../components/editor/EditorForm';
import ModernTemplate from '../components/templates/ModernTemplate';
import ClassicTemplate from '../components/templates/ClassicTemplate';
import CreativeTemplate from '../components/templates/CreativeTemplate';
import MinimalistTemplate from '../components/templates/MinimalistTemplate';
import ProfessionalTemplate from '../components/templates/ProfessionalTemplate';
import ElegantTemplate from '../components/templates/ElegantTemplate';
import TechnicalTemplate from '../components/templates/TechnicalTemplate';
import ExecutiveTemplate from '../components/templates/ExecutiveTemplate';
import StartupTemplate from '../components/templates/StartupTemplate';
import AcademicTemplate from '../components/templates/AcademicTemplate';
import BoldTemplate from '../components/templates/BoldTemplate';
import CompactTemplate from '../components/templates/CompactTemplate';
import TimelineTemplate from '../components/templates/TimelineTemplate';
import InfographicTemplate from '../components/templates/InfographicTemplate';
import SplitTemplate from '../components/templates/SplitTemplate';
import { useResume } from '../context/ResumeContext';
import Button from '../components/common/Button';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { generateWordDocument } from '../utils/wordExport';

const Builder = () => {
  const { resumeData } = useResume();
  const resumeRef = useRef(null);
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const templateMap = {
    modern: ModernTemplate,
    classic: ClassicTemplate,
    creative: CreativeTemplate,
    minimalist: MinimalistTemplate,
    professional: ProfessionalTemplate,
    elegant: ElegantTemplate,
    technical: TechnicalTemplate,
    executive: ExecutiveTemplate,
    startup: StartupTemplate,
    academic: AcademicTemplate,
    bold: BoldTemplate,
    compact: CompactTemplate,
    timeline: TimelineTemplate,
    infographic: InfographicTemplate,
    split: SplitTemplate,
  };

  const TemplateComponent = templateMap[resumeData.template] || ModernTemplate;

  const handleDownloadPDF = async () => {
    const element = resumeRef.current;
    if (!element) return;

    setIsDownloading(true);
    setShowDownloadMenu(false);

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      pdf.addImage(
        imgData,
        'PNG',
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save(`${resumeData.personalInfo.fullName.replace(' ', '_')}_Resume.pdf`);
    } catch (error) {
      console.error('Error generating PDF', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleDownloadWord = async () => {
    setIsDownloading(true);
    setShowDownloadMenu(false);
    try {
      await generateWordDocument(resumeData);
    } catch (error) {
      console.error('Error generating Word document', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-[1920px] mx-auto w-full flex h-[calc(100vh-64px)] overflow-hidden">
        {/* Left Sidebar - Editor */}
        <div className="w-[450px] bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto custom-scrollbar">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
              <SafeIcon icon={FiIcons.FiEdit3} />
              Editor
            </h2>
            <EditorForm />
          </div>
        </div>

        {/* Right Side - Preview */}
        <div className="flex-1 bg-gray-100 dark:bg-gray-900 overflow-y-auto flex flex-col items-center relative">
          {/* Download Button - Fixed Position */}
          <div className="fixed bottom-8 right-8 flex gap-3 z-50">
            <div className="relative">
              <Button
                onClick={() => setShowDownloadMenu(!showDownloadMenu)}
                disabled={isDownloading}
                className="shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <SafeIcon
                  icon={isDownloading ? FiIcons.FiLoader : FiIcons.FiDownload}
                  className={isDownloading ? 'animate-spin' : ''}
                />
                {isDownloading ? 'Downloading...' : 'Download'}
                <SafeIcon icon={FiIcons.FiChevronDown} size={16} />
              </Button>

              {showDownloadMenu && (
                <div className="absolute bottom-full right-0 mb-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden min-w-[180px]">
                  <button
                    onClick={handleDownloadPDF}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors"
                  >
                    <SafeIcon icon={FiIcons.FiFileText} className="text-red-500" />
                    Download as PDF
                  </button>
                  <button
                    onClick={handleDownloadWord}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors border-t border-gray-100 dark:border-gray-700"
                  >
                    <SafeIcon icon={FiIcons.FiFile} className="text-blue-500" />
                    Download as Word
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Resume Preview Container */}
          <div className="py-8 px-4 w-full flex justify-center">
            <div className="bg-white shadow-2xl" style={{ width: '210mm', minHeight: '297mm' }}>
              <div ref={resumeRef} style={{ width: '210mm', minHeight: '297mm' }}>
                <TemplateComponent key={resumeData.template} />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Overlay to close dropdown */}
      {showDownloadMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowDownloadMenu(false)}
        />
      )}
    </div>
  );
};

export default Builder;
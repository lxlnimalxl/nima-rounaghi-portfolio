import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import StackSection from './components/StackSection';
import ResumeView from './components/ResumeView';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PrintResumeDocument from './components/PrintResumeDocument';
import { content } from './data/content';

export default function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('nima_lang') || 'en';
  });

  const [viewMode, setViewMode] = useState('portfolio'); // 'portfolio' | 'resume'

  // Update HTML tag direction & lang
  useEffect(() => {
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    localStorage.setItem('nima_lang', lang);
  }, [lang]);

  const currentContent = content[lang];

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'fa' : 'en'));
  };

  const handleDownloadPdf = () => {
    const pdfUrl = './Seyyed_Nima_Rounaghi_Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Seyyed_Nima_Rounaghi_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleNavigate = (sectionId) => {
    if (viewMode !== 'portfolio') {
      setViewMode('portfolio');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 80);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={`min-h-screen bg-[#0A0A0C] text-[#E4E4E7] flex flex-col ${lang === 'fa' ? 'font-farsi' : 'font-sans'}`}>
      {/* Interactive Web Portfolio (Hidden on Print) */}
      <div className="no-print flex-1 flex flex-col">
        {/* Navigation Bar */}
        <Navbar
          lang={lang}
          onToggleLang={handleToggleLang}
          viewMode={viewMode}
          onToggleViewMode={setViewMode}
          navData={currentContent.nav}
          onDownloadPdf={handleDownloadPdf}
          onNavigate={handleNavigate}
        />

        <main className="flex-1">
          {viewMode === 'portfolio' ? (
            <>
              {/* Hero Section */}
              <HeroSection
                lang={lang}
                heroData={currentContent.hero}
                metaData={currentContent.meta}
                onExploreProjects={() => handleNavigate('projects')}
                onDownloadPdf={handleDownloadPdf}
              />

              {/* What I Take Off Your Plate (Services) */}
              <ServicesSection
                lang={lang}
                servicesData={currentContent.services}
              />

              {/* 19 Production Case Studies */}
              <ProjectsSection
                lang={lang}
                projectsData={currentContent.projects}
              />

              {/* Engineering Toolkit & Stack */}
              <StackSection
                lang={lang}
                stackData={currentContent.stack}
              />

              {/* Curriculum Vitae / Resume Section */}
              <ResumeView
                lang={lang}
                resumeData={currentContent.resume}
                metaData={currentContent.meta}
                contactData={currentContent.contact}
                onDownloadPdf={handleDownloadPdf}
              />

              {/* Contact & Inquiries */}
              <ContactSection
                lang={lang}
                contactData={currentContent.contact}
              />
            </>
          ) : (
            /* Dedicated Executive Resume Mode */
            <div className="pt-6">
              <ResumeView
                lang={lang}
                resumeData={currentContent.resume}
                metaData={currentContent.meta}
                contactData={currentContent.contact}
                onDownloadPdf={handleDownloadPdf}
              />
              <ContactSection
                lang={lang}
                contactData={currentContent.contact}
              />
            </div>
          )}
        </main>

        {/* Footer */}
        <Footer
          lang={lang}
          footerData={currentContent.footer}
          contactData={currentContent.contact}
        />
      </div>

      {/* Standalone Printable Document (Visible on @media print) */}
      <div className="print-only hidden">
        <PrintResumeDocument />
      </div>
    </div>
  );
}

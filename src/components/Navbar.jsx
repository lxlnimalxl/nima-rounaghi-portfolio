import React, { useState } from 'react';
import { 
  Globe, 
  FileText, 
  Briefcase, 
  Layers, 
  Menu, 
  X, 
  ArrowUpRight, 
  Download,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export default function Navbar({
  lang = 'en',
  onToggleLang,
  viewMode = 'portfolio',
  onToggleViewMode,
  navData,
  onDownloadPdf
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0A0A0C]/90 backdrop-blur-md border-b border-white/8 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Monogram & Identity */}
        <a href="#hero" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#121216] border border-white/10 flex items-center justify-center text-white font-bold text-sm tracking-wider group-hover:border-white/30 transition-colors shadow-inner">
            <span>NR</span>
          </div>
          <div>
            <span className="font-bold text-sm sm:text-base text-white tracking-tight block">
              {lang === 'fa' ? 'سید نیما رونقی' : 'Seyyed Nima Rounaghi'}
            </span>
            <span className="text-[11px] text-zinc-400 font-medium block">
              {lang === 'fa' ? 'مهندس نرم‌افزار و طراح UI/UX' : 'Full-Stack Engineer & UI/UX'}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 sm:space-x-2 text-xs font-semibold text-zinc-300">
          <a
            href="#services"
            className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
          >
            {navData.services}
          </a>
          <a
            href="#projects"
            className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
          >
            {navData.projects}
          </a>
          <a
            href="#stack"
            className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
          >
            {navData.stack}
          </a>
          <a
            href="#resume"
            className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
          >
            {navData.resume}
          </a>
          <a
            href="#contact"
            className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
          >
            {navData.contact}
          </a>
        </nav>

        {/* Action Controls: Mode Switch, Language Switch, PDF Download */}
        <div className="hidden sm:flex items-center space-x-3">
          {/* View Mode Toggle (Portfolio / Executive CV) */}
          <div className="bg-[#121216] border border-white/10 rounded-full p-1 flex items-center text-xs font-semibold">
            <button
              onClick={() => onToggleViewMode('portfolio')}
              className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                viewMode === 'portfolio'
                  ? 'bg-white text-black shadow-sm font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {navData.portfolio}
            </button>
            <button
              onClick={() => onToggleViewMode('resume')}
              className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                viewMode === 'resume'
                  ? 'bg-white text-black shadow-sm font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {navData.resumeView}
            </button>
          </div>

          {/* Language Switcher (EN / فارسی) */}
          <button
            onClick={onToggleLang}
            className="px-3 py-2 rounded-xl bg-[#121216] border border-white/10 hover:border-white/20 text-xs font-bold text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Toggle Language / تغییر زبان"
          >
            <Globe size={14} className="text-zinc-400" />
            <span>{lang === 'en' ? 'فارسی' : 'English'}</span>
          </button>

          {/* Download PDF Resume Button */}
          <button
            onClick={onDownloadPdf}
            className="px-4 py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-bold flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <Download size={14} />
            <span>{lang === 'fa' ? 'دریافت PDF رزومه' : 'PDF Resume'}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center space-x-2">
          <button
            onClick={onToggleLang}
            className="p-2 rounded-lg bg-[#121216] border border-white/10 text-xs font-bold text-white"
          >
            {lang === 'en' ? 'FA' : 'EN'}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg bg-[#121216] border border-white/10 text-white"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0A0A0C] border-b border-white/10 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-2 text-sm font-medium">
            <a
              href="#services"
              onClick={() => setMobileOpen(false)}
              className="py-2 text-zinc-300 hover:text-white"
            >
              {navData.services}
            </a>
            <a
              href="#projects"
              onClick={() => setMobileOpen(false)}
              className="py-2 text-zinc-300 hover:text-white"
            >
              {navData.projects}
            </a>
            <a
              href="#stack"
              onClick={() => setMobileOpen(false)}
              className="py-2 text-zinc-300 hover:text-white"
            >
              {navData.stack}
            </a>
            <a
              href="#resume"
              onClick={() => setMobileOpen(false)}
              className="py-2 text-zinc-300 hover:text-white"
            >
              {navData.resume}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="py-2 text-zinc-300 hover:text-white"
            >
              {navData.contact}
            </a>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <div className="flex rounded-lg bg-[#121216] p-1 border border-white/10">
              <button
                onClick={() => {
                  onToggleViewMode('portfolio');
                  setMobileOpen(false);
                }}
                className={`flex-1 py-2 text-xs font-bold rounded-md ${
                  viewMode === 'portfolio' ? 'bg-white text-black' : 'text-zinc-400'
                }`}
              >
                {navData.portfolio}
              </button>
              <button
                onClick={() => {
                  onToggleViewMode('resume');
                  setMobileOpen(false);
                }}
                className={`flex-1 py-2 text-xs font-bold rounded-md ${
                  viewMode === 'resume' ? 'bg-white text-black' : 'text-zinc-400'
                }`}
              >
                {navData.resumeView}
              </button>
            </div>

            <button
              onClick={() => {
                onDownloadPdf();
                setMobileOpen(false);
              }}
              className="w-full py-3 rounded-xl bg-white text-black text-xs font-bold flex items-center justify-center gap-2"
            >
              <Download size={14} />
              <span>{lang === 'fa' ? 'دانلود فایل PDF رزومه' : 'Download PDF Resume'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

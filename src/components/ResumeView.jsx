import React from 'react';
import { 
  Download, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Quote, 
  Mail, 
  Phone, 
  Send,
  MapPin,
  CheckCircle2
} from 'lucide-react';

export default function ResumeView({
  lang = 'en',
  resumeData,
  metaData,
  contactData,
  onDownloadPdf
}) {
  const isRtl = lang === 'fa';

  return (
    <section id="resume" className="py-20 border-b border-white/8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/8 pb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">
              {lang === 'fa' ? 'سوابق مستند و رسمی' : 'Career Trajectory'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {resumeData.title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              {resumeData.subtitle}
            </p>
          </div>

          <button
            onClick={onDownloadPdf}
            className="px-6 py-3 rounded-xl bg-white text-black font-extrabold text-xs flex items-center justify-center gap-2 hover:bg-zinc-200 active:scale-95 transition-all shadow-md self-start sm:self-auto cursor-pointer"
          >
            <Download size={15} />
            <span>{lang === 'fa' ? 'دانلود نسخه کامل PDF' : 'Download Complete PDF'}</span>
          </button>
        </div>

        {/* Executive Contact & Metadata Ribbon */}
        <div className="bg-[#121216] border border-white/8 rounded-3xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-zinc-300">
          <div className="flex items-center space-x-2.5">
            <Mail size={16} className="text-zinc-400 flex-shrink-0" />
            <a href={`mailto:${contactData.email}`} className="truncate hover:text-white">
              {contactData.email}
            </a>
          </div>
          <div className="flex items-center space-x-2.5">
            <Phone size={16} className="text-zinc-400 flex-shrink-0" />
            <span className="font-mono">{contactData.phone}</span>
          </div>
          <div className="flex items-center space-x-2.5">
            <Send size={16} className="text-zinc-400 flex-shrink-0" />
            <a href="https://t.me/lxlnimalxl" target="_blank" rel="noreferrer" className="hover:text-white">
              {contactData.telegram}
            </a>
          </div>
          <div className="flex items-center space-x-2.5">
            <MapPin size={16} className="text-zinc-400 flex-shrink-0" />
            <span>{metaData.location}</span>
          </div>
        </div>

        {/* Philosophy Block */}
        <div className="bg-[#121216]/60 border-l-2 border-white rounded-2xl p-6 sm:p-7 relative">
          <Quote size={24} className="text-zinc-600 mb-2 opacity-50" />
          <p className="text-xs sm:text-sm md:text-base text-zinc-200 font-medium leading-relaxed italic">
            "{resumeData.philosophyText}"
          </p>
        </div>

        {/* SECTION: Professional Experience Timeline */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 text-white border-b border-white/8 pb-4">
            <Briefcase size={20} className="text-zinc-400" />
            <h3 className="text-lg sm:text-xl font-bold tracking-tight">
              {resumeData.sections.experience}
            </h3>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-white/10">
            {resumeData.experienceList.map((exp, idx) => (
              <div key={idx} className="relative pl-10 space-y-3">
                {/* Timeline node */}
                <span className="absolute left-2 top-1.5 w-3.5 h-3.5 rounded-full bg-white border-4 border-[#0A0A0C]" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="font-bold text-base sm:text-lg text-white">
                    {exp.title}
                  </h4>
                  <span className="text-xs font-mono font-semibold text-zinc-400 bg-white/5 px-2.5 py-1 rounded-lg border border-white/6 self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                <div className="text-xs font-semibold text-zinc-400">
                  <span>{exp.company}</span> &bull; <span>{exp.location}</span>
                </div>

                <ul className="space-y-2 pt-1">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="text-xs sm:text-sm text-zinc-300 leading-relaxed flex items-start gap-2">
                      <span className="text-zinc-500 mt-1">&mdash;</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION: Academic Education */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 text-white border-b border-white/8 pb-4">
            <GraduationCap size={20} className="text-zinc-400" />
            <h3 className="text-lg sm:text-xl font-bold tracking-tight">
              {resumeData.sections.education}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.educationList.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#121216] border border-white/8 space-y-2"
              >
                <span className="text-[11px] font-mono text-zinc-400 block font-semibold">
                  {edu.period}
                </span>
                <h4 className="font-bold text-base text-white">
                  {edu.degree}
                </h4>
                <p className="text-xs font-semibold text-zinc-300">
                  {edu.institution}
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION: Certifications */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 text-white border-b border-white/8 pb-4">
            <Award size={20} className="text-zinc-400" />
            <h3 className="text-lg sm:text-xl font-bold tracking-tight">
              {resumeData.sections.certifications}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {resumeData.certificationsList.map((cert, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#121216] border border-white/8 flex items-start space-x-3"
              >
                <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-white">
                    {cert.name}
                  </h4>
                  <span className="text-[11px] text-zinc-400 block font-medium">
                    {cert.issuer}
                  </span>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import nimaProfileImg from '../assets/nima-profile.png';

export default function ResumeView({
  lang = 'en',
  resumeData,
  metaData,
  contactData,
  onDownloadPdf
}) {
  const isRtl = lang === 'fa';

  return (
    <section id="resume" className="py-20 border-b border-white/8 scroll-mt-24">
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

        {/* Executive Profile Card With User Portrait & Contact Ribbon */}
        <div className="bg-[#121216] border border-white/8 rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-white/8">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-b from-[#202028] to-[#121216] border border-white/15 overflow-hidden flex-shrink-0 shadow-lg">
              <img
                src={nimaProfileImg}
                alt="Seyyed Nima Rounaghi"
                className="w-full h-full object-cover object-top"
              />
              <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#121216]" />
            </div>

            <div className="space-y-1 text-center sm:text-left rtl:sm:text-right flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start rtl:sm:justify-start gap-2.5">
                <h3 className="font-black text-xl sm:text-2xl text-white tracking-tight">
                  {lang === 'fa' ? 'سید نیما رونقی' : 'Seyyed Nima Rounaghi'}
                </h3>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-bold">
                  {metaData.status}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-zinc-300">
                {metaData.role} &mdash; <span className="text-zinc-400">{metaData.subrole}</span>
              </p>
              <p className="text-xs text-zinc-400 pt-1">
                {metaData.experienceYears} &bull; {metaData.completedProjects} &bull; {metaData.location}
              </p>
            </div>
          </div>

          {/* Contact Details Grid */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-zinc-300">
            <div className="flex items-center gap-2.5">
              <Mail size={16} className="text-zinc-400 flex-shrink-0" />
              <a href={`mailto:${contactData.email}`} className="truncate hover:text-white font-medium">
                {contactData.email}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone size={16} className="text-zinc-400 flex-shrink-0" />
              <a href={`tel:${contactData.phone}`} className="font-mono font-bold hover:text-white">
                {contactData.phone}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Send size={16} className="text-zinc-400 flex-shrink-0" />
              <a href="https://t.me/lxlnimalxl" target="_blank" rel="noreferrer" className="hover:text-white font-medium">
                {contactData.telegram}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin size={16} className="text-zinc-400 flex-shrink-0" />
              <span>{metaData.location}</span>
            </div>
          </div>
        </div>

        {/* Philosophy Block */}
        <div className="bg-[#121216]/60 border-l-2 rtl:border-l-0 rtl:border-r-2 border-white rounded-2xl p-6 sm:p-7 relative shadow-sm">
          <Quote size={24} className="text-zinc-600 mb-2 opacity-50" />
          <p className="text-xs sm:text-sm md:text-base text-zinc-200 font-medium leading-relaxed italic">
            "{resumeData.philosophyText}"
          </p>
        </div>

        {/* SECTION: Professional Experience Timeline */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-white border-b border-white/8 pb-4">
            <Briefcase size={20} className="text-zinc-400" />
            <h3 className="text-lg sm:text-xl font-bold tracking-tight">
              {resumeData.sections.experience}
            </h3>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 rtl:before:left-auto rtl:before:right-3.5 before:w-0.5 before:bg-white/10">
            {resumeData.experienceList.map((exp, idx) => (
              <div key={idx} className="relative pl-10 rtl:pl-0 rtl:pr-10 space-y-3">
                {/* Timeline node */}
                <span className="absolute left-2 rtl:left-auto rtl:right-2 top-1.5 w-3.5 h-3.5 rounded-full bg-white border-4 border-[#0A0A0C]" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="font-bold text-base sm:text-lg text-white">
                    {exp.title}
                  </h4>
                  <span className="text-xs font-mono font-bold text-zinc-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/6 self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400 font-semibold">
                  <span className="text-zinc-300">{exp.company}</span>
                  <span>&bull;</span>
                  <span>{exp.location}</span>
                </div>

                <ul className="space-y-2 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-2 flex-shrink-0" />
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
          <div className="flex items-center gap-3 text-white border-b border-white/8 pb-4">
            <GraduationCap size={20} className="text-zinc-400" />
            <h3 className="text-lg sm:text-xl font-bold tracking-tight">
              {resumeData.sections.education}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.educationList.map((edu, idx) => (
              <div
                key={idx}
                className="bg-[#121216] border border-white/8 rounded-2xl p-6 space-y-2 hover:border-white/20 transition-colors shadow-sm"
              >
                <div className="flex justify-between items-start gap-2">
                  <h4 className="font-bold text-sm sm:text-base text-white">
                    {edu.degree}
                  </h4>
                  <span className="text-[11px] font-mono font-bold text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/6 flex-shrink-0">
                    {edu.period}
                  </span>
                </div>
                <p className="text-xs font-bold text-zinc-300">
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
          <div className="flex items-center gap-3 text-white border-b border-white/8 pb-4">
            <Award size={20} className="text-zinc-400" />
            <h3 className="text-lg sm:text-xl font-bold tracking-tight">
              {resumeData.sections.certifications}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.certificationsList.map((cert, idx) => (
              <div
                key={idx}
                className="bg-[#121216] border border-white/8 rounded-2xl p-6 space-y-2 hover:border-white/20 transition-colors shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm sm:text-base text-white">
                    {cert.name}
                  </h4>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold">
                    Verified
                  </span>
                </div>
                <p className="text-xs font-bold text-zinc-300">
                  {cert.issuer}
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

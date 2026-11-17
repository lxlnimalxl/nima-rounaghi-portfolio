import React from 'react';
import { ArrowRight, ArrowDown, Download, ShieldCheck, Code, CheckCircle, ExternalLink } from 'lucide-react';

export default function HeroSection({
  lang = 'en',
  heroData,
  metaData,
  onExploreProjects,
  onDownloadPdf
}) {
  const isRtl = lang === 'fa';

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden border-b border-white/8">
      {/* Background Subtle Gradient Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#121216] border border-white/10 text-xs font-medium text-zinc-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{metaData.status}</span>
          </div>

          {/* Name & Title */}
          <div className="space-y-3">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-400">
              {heroData.greeting}
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              {heroData.headline}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-zinc-400">
              {metaData.role} &mdash; <span className="text-zinc-200">{metaData.specialty}</span>
            </p>
          </div>

          {/* Core Value Proposition Statement */}
          <div className="bg-[#121216]/80 border border-white/10 rounded-3xl p-6 sm:p-8 text-left relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-white/40" />
            <p className={`text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed font-normal ${isRtl ? 'text-right' : 'text-left'}`}>
              {heroData.subheadline}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <button
              onClick={onExploreProjects}
              className="px-8 py-3.5 rounded-xl bg-white text-black font-extrabold text-xs sm:text-sm hover:bg-zinc-200 active:scale-98 transition-all flex items-center gap-2 shadow-lg cursor-pointer"
            >
              <span>{heroData.ctaPrimary}</span>
              <ArrowDown size={16} />
            </button>

            <button
              onClick={onDownloadPdf}
              className="px-7 py-3.5 rounded-xl bg-[#121216] border border-white/15 text-white font-bold text-xs sm:text-sm hover:bg-white/10 active:scale-98 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Download size={16} />
              <span>{heroData.ctaSecondary}</span>
            </button>
          </div>

          {/* Key Metrics / Pillars */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-white/8 mt-12">
            {heroData.stats.map((st, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-[#121216]/50 border border-white/6 text-center hover:border-white/15 transition-colors"
              >
                <span className="block text-2xl sm:text-3xl font-black text-white font-mono tracking-tight">
                  {st.value}
                </span>
                <span className="block text-xs text-zinc-400 font-medium mt-1">
                  {st.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

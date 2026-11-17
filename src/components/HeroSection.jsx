import React from 'react';
import { ArrowDown, Download, ShieldCheck, Code, Sparkles, CheckCircle2 } from 'lucide-react';
import nimaProfileImg from '../assets/nima-profile.png';

export default function HeroSection({
  lang = 'en',
  heroData,
  metaData,
  onExploreProjects,
  onDownloadPdf
}) {
  const isRtl = lang === 'fa';

  return (
    <section id="hero" className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden border-b border-white/8 scroll-mt-24">
      {/* Background Subtle Gradient Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Hero Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left rtl:lg:text-right">
            
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#121216] border border-white/10 text-xs font-medium text-zinc-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{metaData.status}</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-400">
                {heroData.greeting}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-5xl font-black text-white tracking-tight leading-[1.14]">
                {heroData.headline}
              </h1>
              <p className="text-sm sm:text-base font-semibold text-zinc-400">
                {metaData.role} &mdash; <span className="text-zinc-200">{metaData.specialty}</span>
              </p>
              <p className="text-xs sm:text-sm font-medium text-zinc-400">
                {metaData.subrole}
              </p>
            </div>

            {/* Core Value Proposition Statement */}
            <div className="bg-[#121216]/80 border border-white/10 rounded-3xl p-6 sm:p-7 text-left rtl:text-right relative overflow-hidden backdrop-blur-sm shadow-xl">
              <div className="absolute top-0 left-0 rtl:left-auto rtl:right-0 w-1.5 h-full bg-white/40" />
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                {heroData.subheadline}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start rtl:lg:justify-start gap-3 sm:gap-4 pt-1">
              <button
                onClick={onExploreProjects}
                className="px-8 py-3.5 rounded-xl bg-white text-black font-extrabold text-xs sm:text-sm hover:bg-zinc-200 active:scale-98 transition-all flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <span>{heroData.ctaPrimary}</span>
                <ArrowDown size={16} />
              </button>

              <button
                onClick={onDownloadPdf}
                className="px-7 py-3.5 rounded-xl bg-[#121216] border border-white/15 text-white font-bold text-xs sm:text-sm hover:bg-white/10 active:scale-98 transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                <Download size={16} />
                <span>{heroData.ctaSecondary}</span>
              </button>
            </div>
          </div>

          {/* Visual Showcase: User Portrait Photo Frame */}
          <div className="lg:col-span-5 flex justify-center order-first lg:order-last">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Atmospheric Ambient Glow Behind Photo */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/20 via-indigo-500/15 to-emerald-500/10 rounded-[36px] blur-2xl opacity-75" />
              
              {/* Styled Showcase Card */}
              <div className="relative rounded-[32px] bg-gradient-to-b from-[#181820] to-[#0E0E12] border border-white/15 p-4 sm:p-6 shadow-2xl overflow-hidden group">
                
                {/* Subtle Decorative Grid Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.75px,transparent_0.75px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
                
                {/* Cutout Portrait Image with Vignette & Shadow */}
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent flex items-end justify-center">
                  <img
                    src={nimaProfileImg}
                    alt="Seyyed Nima Rounaghi"
                    className="w-full h-full object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] transform transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="eager"
                  />
                  
                  {/* Bottom Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E12] via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Overlaid Identity Badge */}
                  <div className="absolute bottom-3 inset-x-3 bg-[#121216]/90 backdrop-blur-md border border-white/15 rounded-2xl p-3.5 shadow-xl flex items-center justify-between gap-3">
                    <div>
                      <h3 className="font-black text-sm text-white tracking-tight">
                        {lang === 'fa' ? 'سید نیما رونقی' : 'Seyyed Nima Rounaghi'}
                      </h3>
                      <p className="text-[11px] text-zinc-400 font-medium mt-0.5">
                        {lang === 'fa' ? 'هم‌بنیان‌گذار و مهندس ارشد نرم‌افزار' : 'Co-Founder & Full-Stack Engineer'}
                      </p>
                    </div>
                    <div className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{lang === 'fa' ? 'آنلاین' : 'Available'}</span>
                    </div>
                  </div>
                </div>

                {/* Floating Micro-Badges */}
                <div className="mt-3 flex items-center justify-between gap-2 text-[10px] font-semibold text-zinc-300">
                  <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/8 flex items-center gap-1.5">
                    <ShieldCheck size={13} className="text-emerald-400" />
                    <span>OWASP & Security</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/8 flex items-center gap-1.5">
                    <Code size={13} className="text-blue-400" />
                    <span>React 19 & Django 5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Key Metrics / Pillars */}
        <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-white/8 mt-12 sm:mt-16">
          {heroData.stats.map((st, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-[#121216]/60 border border-white/6 text-center hover:border-white/15 transition-colors shadow-sm"
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
    </section>
  );
}

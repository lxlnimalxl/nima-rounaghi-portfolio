import React, { useState } from 'react';
import { ExternalLink, Code2, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ProjectsSection({ lang = 'en', projectsData }) {
  const [filter, setFilter] = useState('all');

  const filteredItems = projectsData.items.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <section id="projects" className="py-20 border-b border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">
              {lang === 'fa' ? 'نمونه‌کارهای زنده و پروداکشن' : 'Flagship Portfolio'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {projectsData.title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed">
              {projectsData.subtitle}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-[#121216] p-1.5 rounded-2xl border border-white/10 self-start lg:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-black shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {projectsData.filterAll}
            </button>
            <button
              onClick={() => setFilter('ventures')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === 'ventures'
                  ? 'bg-white text-black shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {projectsData.filterVentures}
            </button>
            <button
              onClick={() => setFilter('fullstack')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === 'fullstack'
                  ? 'bg-white text-black shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {projectsData.filterFullStack}
            </button>
            <button
              onClick={() => setFilter('webapp')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === 'webapp'
                  ? 'bg-white text-black shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {projectsData.filterWebApps}
            </button>
            <button
              onClick={() => setFilter('interactive')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === 'interactive'
                  ? 'bg-white text-black shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {projectsData.filterInteractive}
            </button>
            <button
              onClick={() => setFilter('design')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === 'design'
                  ? 'bg-white text-black shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {projectsData.filterDesign}
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-[#121216] rounded-3xl border border-white/8 hover:border-white/20 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div>
                {/* Project Screenshot Container with Hover Zoom */}
                <div className="relative aspect-video w-full overflow-hidden bg-[#18181E] border-b border-white/8">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent opacity-60" />

                  {/* Category Pill Tag */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-bold text-zinc-300 border border-white/10">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/6 text-[11px] font-medium text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-white/6 mt-4 flex items-center gap-3">
                <a
                  href={item.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-white text-black font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-zinc-200 active:scale-95 transition-all shadow-sm"
                >
                  <span>{projectsData.viewDemo}</span>
                  <ExternalLink size={13} />
                </a>

                <a
                  href={item.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs flex items-center justify-center gap-1.5 hover:bg-white/10 active:scale-95 transition-all"
                  title={projectsData.viewCode}
                >
                  <Code2 size={14} />
                  <span className="hidden sm:inline">{projectsData.viewCode}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

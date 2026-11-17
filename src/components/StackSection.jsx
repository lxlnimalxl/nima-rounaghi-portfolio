import React from 'react';
import { Layers, Terminal, Palette, Server, Cpu } from 'lucide-react';

export default function StackSection({ lang = 'en', stackData }) {
  const categoryIcons = [Layers, Terminal, Palette, Server, Cpu];

  return (
    <section id="stack" className="py-20 border-b border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">
            {lang === 'fa' ? 'فناوری‌ها و تخصص‌ها' : 'Engineering Toolkit'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {stackData.title}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed">
            {stackData.subtitle}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackData.categories.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];

            return (
              <div
                key={cat.name}
                className="p-6 sm:p-7 rounded-3xl bg-[#121216] border border-white/8 space-y-4 hover:border-white/20 transition-all"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-bold text-base text-white">
                    {cat.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/8 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

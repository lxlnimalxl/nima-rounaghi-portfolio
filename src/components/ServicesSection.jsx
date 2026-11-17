import React from 'react';
import { 
  Layout, 
  Palette, 
  Bot, 
  Globe2, 
  ShieldAlert, 
  Cpu, 
  ArrowUpRight 
} from 'lucide-react';

export default function ServicesSection({ lang = 'en', servicesData }) {
  const icons = {
    'platform-dev': Layout,
    'uiux-branding': Palette,
    'bot-automation': Bot,
    'wordpress-opt': Globe2,
    'security-audit': ShieldAlert,
    'hardware-iot': Cpu
  };

  return (
    <section id="services" className="py-20 border-b border-white/8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">
            {lang === 'fa' ? 'قابلیت‌ها و خروجی‌های واقعی' : 'Core Capabilities'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {servicesData.title}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed">
            {servicesData.subtitle}
          </p>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.items.map((srv, index) => {
            const Icon = icons[srv.id] || Layout;
            const indexFormatted = String(index + 1).padStart(2, '0');

            return (
              <div
                key={srv.id}
                className="group p-7 rounded-3xl bg-[#121216] border border-white/8 hover:border-white/20 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Subtle top indicator */}
                <div className="absolute top-0 inset-x-0 h-1 bg-transparent group-hover:bg-white/40 transition-colors" />

                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                      <Icon size={22} />
                    </div>
                    <span className="font-mono text-xs font-bold text-zinc-500 tracking-wider">
                      {indexFormatted}
                    </span>
                  </div>

                  <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-white transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/6 flex items-center justify-between text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors">
                  <span>{lang === 'fa' ? 'اجرای سطح پروداکشن' : 'Production Grade'}</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

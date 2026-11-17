import React from 'react';
import { ArrowUp, Send, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TelegramIcon } from './Icons';

export default function Footer({ lang = 'en', footerData, contactData }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#0A0A0C] text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/8">
          {/* Logo & Identity */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-[#121216] border border-white/10 flex items-center justify-center text-white font-bold text-xs">
              NR
            </div>
            <div>
              <span className="font-bold text-white text-sm block">
                {lang === 'fa' ? 'سید نیما رونقی' : 'Seyyed Nima Rounaghi'}
              </span>
              <span className="text-[11px] text-zinc-500">
                Full-Stack Software Engineer & UI/UX Designer
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/lxlnimalxl"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-xl bg-[#121216] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-white/20 transition-colors"
              title="GitHub"
            >
              <GithubIcon size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/nima-rounaghi/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-xl bg-[#121216] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-white/20 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon size={15} />
            </a>
            <a
              href="https://t.me/lxlnimalxl"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-xl bg-[#121216] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-white/20 transition-colors"
              title="Telegram"
            >
              <TelegramIcon size={15} />
            </a>
            <a
              href={`mailto:${contactData.email}`}
              className="w-9 h-9 rounded-xl bg-[#121216] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-white/20 transition-colors"
              title="Email"
            >
              <Mail size={15} />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#121216] border border-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>{lang === 'fa' ? 'بازگشت به بالا' : 'Back to Top'}</span>
            <ArrowUp size={13} />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-zinc-500 text-[11px]">
          <p>{footerData.copyright}</p>
          <p>{footerData.notice}</p>
        </div>
      </div>
    </footer>
  );
}

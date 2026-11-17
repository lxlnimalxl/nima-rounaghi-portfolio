import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { LinkedinIcon, GithubIcon, TelegramIcon } from './Icons';

export default function ContactSection({ lang = 'en', contactData }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Build mailto URI as fallback for direct submission
    const mailtoUri = `mailto:${contactData.email}?subject=${encodeURIComponent(
      formData.subject || 'Project Inquiry from Portfolio'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailtoUri, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 border-b border-white/8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Contact Information & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">
                {lang === 'fa' ? 'شروع همکاری' : 'Get In Touch'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                {contactData.title}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed">
                {contactData.subtitle}
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${contactData.email}`}
                className="p-4 rounded-2xl bg-[#121216] border border-white/8 hover:border-white/20 flex items-center space-x-3.5 transition-all text-xs sm:text-sm text-zinc-200 hover:text-white"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-[11px] text-zinc-400 font-medium">Email</span>
                  <span className="font-bold">{contactData.email}</span>
                </div>
              </a>

              <a
                href="https://t.me/lxlnimalxl"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-[#121216] border border-white/8 hover:border-white/20 flex items-center space-x-3.5 transition-all text-xs sm:text-sm text-zinc-200 hover:text-white"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white flex-shrink-0">
                  <Send size={18} />
                </div>
                <div>
                  <span className="block text-[11px] text-zinc-400 font-medium">Telegram</span>
                  <span className="font-bold">{contactData.telegram}</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/nima-rounaghi/"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-[#121216] border border-white/8 hover:border-white/20 flex items-center space-x-3.5 transition-all text-xs sm:text-sm text-zinc-200 hover:text-white"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white flex-shrink-0">
                  <LinkedinIcon size={18} />
                </div>
                <div>
                  <span className="block text-[11px] text-zinc-400 font-medium">LinkedIn</span>
                  <span className="font-bold">linkedin.com/in/nima-rounaghi</span>
                </div>
              </a>

              <a
                href="https://github.com/lxlnimalxl"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-[#121216] border border-white/8 hover:border-white/20 flex items-center space-x-3.5 transition-all text-xs sm:text-sm text-zinc-200 hover:text-white"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white flex-shrink-0">
                  <GithubIcon size={18} />
                </div>
                <div>
                  <span className="block text-[11px] text-zinc-400 font-medium">GitHub</span>
                  <span className="font-bold">github.com/lxlnimalxl</span>
                </div>
              </a>

              <div className="p-4 rounded-2xl bg-[#121216] border border-white/8 flex items-center space-x-3.5 text-xs sm:text-sm text-zinc-200">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block text-[11px] text-zinc-400 font-medium">Phone</span>
                  <span className="font-mono font-bold">{contactData.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Inquiry Form */}
          <div className="lg:col-span-7 bg-[#121216] border border-white/8 rounded-3xl p-6 sm:p-10 shadow-xl">
            <h3 className="font-bold text-lg text-white mb-6">
              {lang === 'fa' ? 'ارسال پیام و شرح پروژه' : 'Project Scope & Inquiry Form'}
            </h3>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20">
                  <CheckCircle2 size={28} />
                </div>
                <h4 className="font-bold text-base text-white">
                  {contactData.form.successMsg}
                </h4>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 rounded-xl bg-white text-black text-xs font-bold hover:bg-zinc-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-zinc-400 font-medium block mb-1">
                      {contactData.form.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe / شرکت یا کارفرما"
                      className="w-full bg-[#18181E] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-zinc-400 font-medium block mb-1">
                      {contactData.form.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full bg-[#18181E] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-zinc-400 font-medium block mb-1">
                    {contactData.form.subjectLabel}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Full-Stack Web App, UI/UX Design, Bot Automation, or Security Audit"
                    className="w-full bg-[#18181E] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-zinc-400 font-medium block mb-1">
                    {contactData.form.messageLabel}
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your requirements, timeline, budget, and desired outcomes..."
                    className="w-full bg-[#18181E] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-white/40 transition-colors resize-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-white text-black font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-zinc-200 active:scale-98 transition-all shadow-lg cursor-pointer"
                >
                  <span>{contactData.form.submitBtn}</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

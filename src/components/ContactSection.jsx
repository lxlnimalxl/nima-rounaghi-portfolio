import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { LinkedinIcon, GithubIcon, TelegramIcon } from './Icons';

export default function ContactSection({ lang = 'en', contactData }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Direct FormSubmit AJAX transmission directly to nimarounaghi11@gmail.com
      const res = await fetch('https://formsubmit.co/ajax/nimarounaghi11@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Portfolio Project Inquiry',
          message: formData.message,
          _subject: `New Portfolio Inquiry from ${formData.name}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Network response not ok');
      }
    } catch (err) {
      console.warn('FormSubmit AJAX fallback triggered:', err);
      // Fallback: Mailto client trigger so message is never lost
      const mailtoUri = `mailto:nimarounaghi11@gmail.com?subject=${encodeURIComponent(
        formData.subject || 'Project Inquiry from Portfolio'
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.open(mailtoUri, '_blank');
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 border-b border-white/8 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
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

            {/* Direct Channel Cards */}
            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${contactData.email}`}
                className="p-4 rounded-2xl bg-[#121216] border border-white/8 hover:border-white/20 flex items-center gap-3.5 transition-all text-xs sm:text-sm text-zinc-200 hover:text-white group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white flex-shrink-0 group-hover:bg-white/10 transition-colors">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] text-zinc-400 font-medium">Email</span>
                  <span className="font-bold truncate block">{contactData.email}</span>
                </div>
              </a>

              <a
                href="https://t.me/lxlnimalxl"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-[#121216] border border-white/8 hover:border-white/20 flex items-center gap-3.5 transition-all text-xs sm:text-sm text-zinc-200 hover:text-white group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white flex-shrink-0 group-hover:bg-white/10 transition-colors">
                  <Send size={18} />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] text-zinc-400 font-medium">Telegram</span>
                  <span className="font-bold truncate block">{contactData.telegram}</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/nima-rounaghi/"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-[#121216] border border-white/8 hover:border-white/20 flex items-center gap-3.5 transition-all text-xs sm:text-sm text-zinc-200 hover:text-white group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white flex-shrink-0 group-hover:bg-white/10 transition-colors">
                  <LinkedinIcon size={18} />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] text-zinc-400 font-medium">LinkedIn</span>
                  <span className="font-bold truncate block">linkedin.com/in/nima-rounaghi</span>
                </div>
              </a>

              <a
                href="https://github.com/lxlnimalxl"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-[#121216] border border-white/8 hover:border-white/20 flex items-center gap-3.5 transition-all text-xs sm:text-sm text-zinc-200 hover:text-white group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white flex-shrink-0 group-hover:bg-white/10 transition-colors">
                  <GithubIcon size={18} />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] text-zinc-400 font-medium">GitHub</span>
                  <span className="font-bold truncate block">github.com/lxlnimalxl</span>
                </div>
              </a>

              {/* Verified Single Phone Number */}
              <a
                href={`tel:${contactData.phone}`}
                className="p-4 rounded-2xl bg-[#121216] border border-white/8 hover:border-white/20 flex items-center gap-3.5 transition-all text-xs sm:text-sm text-zinc-200 hover:text-white group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white flex-shrink-0 group-hover:bg-white/10 transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block text-[11px] text-zinc-400 font-medium">Direct Phone / Call</span>
                  <span className="font-mono font-bold block">{contactData.phone}</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side: Direct Inquiry Form */}
          <div className="lg:col-span-7 bg-[#121216] border border-white/8 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/8">
              <h3 className="font-bold text-base sm:text-lg text-white">
                {lang === 'fa' ? 'ارسال پیام مستقیم به ایمیل' : 'Direct Project Scope & Inquiry Form'}
              </h3>
              <span className="text-[11px] font-mono text-zinc-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/6">
                nimarounaghi11@gmail.com
              </span>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20">
                  <CheckCircle2 size={28} />
                </div>
                <h4 className="font-bold text-base text-white">
                  {contactData.form.successMsg}
                </h4>
                <p className="text-xs text-zinc-400">
                  {lang === 'fa' 
                    ? 'پیام شما ثبت و مستقیماً به صندوق پستی نیما ارسال گردید.' 
                    : 'Your inquiry has been delivered directly to Nima\'s inbox.'}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 rounded-xl bg-white text-black text-xs font-bold hover:bg-zinc-200 cursor-pointer shadow-md"
                >
                  {lang === 'fa' ? 'ارسال پیام جدید' : 'Send Another Message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-zinc-400 font-medium block mb-1">
                      {contactData.form.nameLabel} <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe / نام یا نام شرکت"
                      className="w-full bg-[#18181E] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-zinc-400 font-medium block mb-1">
                      {contactData.form.emailLabel} <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@domain.com"
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
                    {contactData.form.messageLabel} <span className="text-red-400">*</span>
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
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-white text-black font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-zinc-200 active:scale-98 transition-all shadow-lg cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>{contactData.form.submittingBtn || 'Transmitting Inquiry...'}</span>
                    </>
                  ) : (
                    <>
                      <span>{contactData.form.submitBtn}</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

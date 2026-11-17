import React from 'react';
import { content } from '../data/content';

export default function PrintResumeDocument() {
  const en = content.en;
  const fa = content.fa;

  return (
    <div id="printable-resume" className="bg-white text-zinc-900 font-sans leading-normal print:block p-8 max-w-[210mm] mx-auto">
      {/* ========================================================================= */}
      {/* ENGLISH RESUME — PAGE 1 */}
      {/* ========================================================================= */}
      <div className="page-break min-h-[280mm] flex flex-col justify-between pb-8">
        <div>
          {/* Header */}
          <div className="border-b-2 border-zinc-900 pb-5 mb-5 flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-zinc-950 uppercase">
                Seyyed Nima Rounaghi
              </h1>
              <p className="text-sm font-bold text-zinc-700 tracking-wide uppercase mt-1">
                Full-Stack Software Engineer & UI/UX Designer &bull; Custom Platforms & Security
              </p>
            </div>
            <div className="text-right text-xs text-zinc-600 space-y-0.5 font-medium">
              <p>Email: nimarounaghi11@gmail.com</p>
              <p>Phone: +98 915 779 9337 / +98 993 540 2771</p>
              <p>GitHub: github.com/lxlnimalxl</p>
              <p>LinkedIn: linkedin.com/in/nima-rounaghi</p>
              <p>Location: Worldwide Remote</p>
            </div>
          </div>

          {/* Executive Summary */}
          <section className="mb-5">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2">
              Executive Profile & Value Proposition
            </h2>
            <p className="text-xs text-zinc-700 leading-relaxed text-justify">
              Senior Full-Stack Software Engineer and UI/UX Designer with over 5 years of proven experience building secure, high-performance web platforms from concept to production. Eliminates multi-freelancer overhead and broken handoffs by unifying creative visual design (Figma) and rigorous software engineering (React 19, Python, Django 5 REST Framework, Linux, OWASP security). Proven track record of 13+ production-grade applications across luxury e-commerce, legal technology, cinema ticketing, travel booking, and fintech.
            </p>
          </section>

          {/* Core Capabilities */}
          <section className="mb-5">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2">
              Core Capabilities & Specializations
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-zinc-800">
              <p>&bull; <strong>Custom Web Apps & Platforms:</strong> Single page apps, SaaS architectures with React 19 & DRF.</p>
              <p>&bull; <strong>UI/UX & Brand Identity:</strong> Design systems in Figma, responsive interfaces, 100% code parity.</p>
              <p>&bull; <strong>Bots & Workflow Automation:</strong> Data scrapers, Telegram bots, and cron-driven ETL pipelines.</p>
              <p>&bull; <strong>WordPress Optimization:</strong> High-conversion headless setups, WooCommerce tuning, speed auditing.</p>
              <p>&bull; <strong>Security Auditing & Pen Testing:</strong> OWASP Top 10 defense, CSRF/XSS mitigation, server hardening.</p>
              <p>&bull; <strong>Hardware & IoT Prototyping:</strong> Microcontroller automation (Arduino, ESP32) with cloud telemetry.</p>
            </div>
          </section>

          {/* Technical Toolkit */}
          <section className="mb-5">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2">
              Technical Arsenal
            </h2>
            <div className="text-xs space-y-1 text-zinc-800">
              <p><strong>Frontend:</strong> React 19, Next.js, Vite, JavaScript (ES6+), TypeScript, Tailwind CSS v4, Bootstrap, HTML5, CSS3, Canvas API, Web Audio API.</p>
              <p><strong>Backend & APIs:</strong> Python 3.13, Django 5.2, Django REST Framework, FastAPI, Flask, SQLAlchemy, Node.js, SQLite, PostgreSQL, RESTful Architecture.</p>
              <p><strong>Design & Creative:</strong> Figma (Systems & Interactive Prototyping), Adobe Photoshop, Premiere Pro, Canva, CapCut.</p>
              <p><strong>Infrastructure & Security:</strong> Docker, Linux (LPIC-1), Penetration Testing, Code Auditing, GitHub Actions, Nginx, SSL/TLS, OWASP Defense.</p>
              <p><strong>Hardware / IoT:</strong> Arduino, ESP32, Embedded C/C++, Sensors, Serial Communication, IoT Cloud Telemetry.</p>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-4">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2">
              Professional Experience
            </h2>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-black text-zinc-950">
                    Lead Full-Stack Software Engineer & UI/UX Consultant
                  </h3>
                  <span className="text-[11px] font-bold text-zinc-600">2022 — Present | Remote</span>
                </div>
                <p className="text-[11px] font-semibold text-zinc-700 italic">Independent & International Technical Contracts</p>
                <ul className="list-disc pl-4 text-xs text-zinc-700 space-y-1 mt-1">
                  <li>Architected and delivered 13+ flagship web applications (SHOP.CO, CinePass, Vakil LegalTech, Ashyaneh, SocioSphere, Deluxe Strategy) with 100% Figma-to-code fidelity.</li>
                  <li>Engineered secure RESTful APIs using Django 5 and Python 3.13, incorporating token authentication, input sanitation, and CSRF protection.</li>
                  <li>Developed custom automation bots and web scrapers, eliminating dozens of operational hours for client workflows.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-black text-zinc-950">
                    Full-Stack Web & WordPress Engineer
                  </h3>
                  <span className="text-[11px] font-bold text-zinc-600">2020 — 2022 | Hybrid / Remote</span>
                </div>
                <p className="text-[11px] font-semibold text-zinc-700 italic">Digital Agencies & Direct Enterprise Clients</p>
                <ul className="list-disc pl-4 text-xs text-zinc-700 space-y-1 mt-1">
                  <li>Built and optimized custom e-commerce and corporate web solutions, achieving sub-second load times and high conversion rates.</li>
                  <li>Hardened WordPress instances against brute-force intrusion, malicious injections, and unauthorized database modifications.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="text-[10px] text-zinc-400 text-center border-t border-zinc-200 pt-2">
          Seyyed Nima Rounaghi &bull; Curriculum Vitae (Page 1 of 2 — English)
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ENGLISH RESUME — PAGE 2 */}
      {/* ========================================================================= */}
      <div className="page-break min-h-[280mm] flex flex-col justify-between pt-6 pb-8">
        <div>
          {/* Prior Experience continued */}
          <section className="mb-5">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2">
              Professional Experience (Continued)
            </h2>
            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="text-xs font-black text-zinc-950">
                  UI/UX & Digital Brand Identity Designer
                </h3>
                <span className="text-[11px] font-bold text-zinc-600">2019 — 2021 | Remote</span>
              </div>
              <p className="text-[11px] font-semibold text-zinc-700 italic">Creative Studios & Branding Projects</p>
              <ul className="list-disc pl-4 text-xs text-zinc-700 space-y-1 mt-1">
                <li>Created end-to-end user journeys, design systems, wireframes, and interactive prototypes in Figma and Adobe Creative Suite.</li>
                <li>Designed corporate branding packages, vector logotypes, marketing assets, and verified WCAG accessibility compliance.</li>
              </ul>
            </div>
          </section>

          {/* Academic Education */}
          <section className="mb-5">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2">
              Academic Education
            </h2>
            <div className="space-y-2 text-xs">
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-zinc-950">Bachelor of Science in Computer Engineering</h3>
                  <span className="text-[11px] font-bold text-zinc-600">2021 — 2025</span>
                </div>
                <p className="text-zinc-700 font-medium">Shokouh Birjand University &bull; Software Architecture, Distributed Systems & Security</p>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-zinc-950">High School Diploma in Mathematics & Physics</h3>
                  <span className="text-[11px] font-bold text-zinc-600">2017 — 2020</span>
                </div>
                <p className="text-zinc-700 font-medium">National High School Curriculum &bull; Advanced Calculus, Analytical Geometry & Physics</p>
              </div>
            </div>
          </section>

          {/* Professional Certifications */}
          <section className="mb-5">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2">
              Certifications & Accreditations
            </h2>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded-lg border border-zinc-200 bg-zinc-50">
                <p className="font-bold text-zinc-950">LPIC-1 Linux System Administrator</p>
                <p className="text-[11px] text-zinc-600">Linux Professional Institute &bull; GNU/Linux Architecture, Shell Scripting, Security</p>
              </div>
              <div className="p-2.5 rounded-lg border border-zinc-200 bg-zinc-50">
                <p className="font-bold text-zinc-950">ICDL (International Computer Driving Licence)</p>
                <p className="text-[11px] text-zinc-600">ICDL Foundation &bull; IT Fundamentals, Database Management, Cyber Security</p>
              </div>
            </div>
          </section>

          {/* Featured Production Portfolios Matrix */}
          <section className="mb-5">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2">
              Key Featured Production Portfolios
            </h2>
            <div className="border border-zinc-200 rounded-lg overflow-hidden text-[11px]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-100 border-b border-zinc-200 text-zinc-800">
                    <th className="p-1.5 font-bold">Platform</th>
                    <th className="p-1.5 font-bold">Domain</th>
                    <th className="p-1.5 font-bold">Architecture</th>
                    <th className="p-1.5 font-bold">Live Demo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 text-zinc-700">
                  <tr>
                    <td className="p-1.5 font-bold">SHOP.CO</td>
                    <td className="p-1.5">Apparel E-Commerce</td>
                    <td className="p-1.5">React 19, Django 5 REST, 3-Angle PDP, Cart/Checkout</td>
                    <td className="p-1.5 font-mono text-zinc-950">lxlnimalxl.github.io/shopco-ecommerce-platform/</td>
                  </tr>
                  <tr>
                    <td className="p-1.5 font-bold">CinePass</td>
                    <td className="p-1.5">Cinema Ticket Booking</td>
                    <td className="p-1.5">React 19, Django 5 REST, Curved SVG Seating, QR Pass</td>
                    <td className="p-1.5 font-mono text-zinc-950">lxlnimalxl.github.io/cinepass-cinema-ticket-booking/</td>
                  </tr>
                  <tr>
                    <td className="p-1.5 font-bold">Vakil</td>
                    <td className="p-1.5">LegalTech Platform</td>
                    <td className="p-1.5">React 19, Django 5 REST, Court Tariff Algorithm</td>
                    <td className="p-1.5 font-mono text-zinc-950">lxlnimalxl.github.io/vakil-legal-platform/</td>
                  </tr>
                  <tr>
                    <td className="p-1.5 font-bold">Ashyaneh</td>
                    <td className="p-1.5">Accommodation Booking</td>
                    <td className="p-1.5">React 19, Django 5 REST, Dual Desktop/Mobile View</td>
                    <td className="p-1.5 font-mono text-zinc-950">lxlnimalxl.github.io/ashyaneh-hotel-booking-platform/</td>
                  </tr>
                  <tr>
                    <td className="p-1.5 font-bold">SocioSphere</td>
                    <td className="p-1.5">Social Platform</td>
                    <td className="p-1.5">React 19, Django 5 REST, Tri-Screen Canvas, Post Feed</td>
                    <td className="p-1.5 font-mono text-zinc-950">lxlnimalxl.github.io/sociosphere-social-platform/</td>
                  </tr>
                  <tr>
                    <td className="p-1.5 font-bold">Deluxe Strategy</td>
                    <td className="p-1.5">Board Game Engine</td>
                    <td className="p-1.5">React 19, Pure SVG Coordinate System, Turn Engine</td>
                    <td className="p-1.5 font-mono text-zinc-950">lxlnimalxl.github.io/deluxe-strategy-board-game/</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <div className="text-[10px] text-zinc-400 text-center border-t border-zinc-200 pt-2">
          Seyyed Nima Rounaghi &bull; Curriculum Vitae (Page 2 of 2 — English)
        </div>
      </div>

      {/* ========================================================================= */}
      {/* PERSIAN RESUME — PAGE 3 (رزومه رسمی فارسی) */}
      {/* ========================================================================= */}
      <div dir="rtl" className="page-break min-h-[280mm] flex flex-col justify-between pt-6 pb-8 font-farsi">
        <div>
          {/* Header FA */}
          <div className="border-b-2 border-zinc-900 pb-5 mb-5 flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-zinc-950">
                سید نیما رونقی
              </h1>
              <p className="text-sm font-bold text-zinc-700 tracking-wide mt-1">
                مهندس نرم‌افزار فول‌استک و طراح UI/UX &bull; توسعه سامانه‌های اختصاصی و امنیت
              </p>
            </div>
            <div className="text-left text-xs text-zinc-600 space-y-0.5 font-medium" dir="ltr">
              <p>ایمیل: nimarounaghi11@gmail.com</p>
              <p>تلفن: 09157799337 / 09935402771</p>
              <p>گیت‌هاب: github.com/lxlnimalxl</p>
              <p>لینکدین: linkedin.com/in/nima-rounaghi</p>
              <p>موقعیت: آماده همکاری ریموت بین‌المللی</p>
            </div>
          </div>

          {/* خلاصه مدیریتی و ارزش پیشنهادی */}
          <section className="mb-5">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2">
              خلاصه حرفه‌ای و ارزش پیشنهادی
            </h2>
            <p className="text-xs text-zinc-700 leading-relaxed text-justify">
              مهندس ارشد نرم‌افزار فول‌استک و طراح رابط و تجربه کاربری (UI/UX) با بیش از ۵ سال تجربه مستمر در طراحی و پیاده‌سازی پلتفرم‌های امن، مقیاس‌پذیر و فوق‌سریع تحت وب. ارائه رویکردی یکپارچه که هزینه‌های گزاف و اصطکاک میان تیم‌های جداگانه طراحی و برنامه‌نویسی را کاملاً حذف می‌کند؛ با پوشش کامل طراحی سیستم‌ها در فیگما و پیاده‌سازی منطق مهندسی در React 19، پایتون، فریم‌ورک جنگو و استانداردهای امنیت سایبری OWASP. توسعه بیش از ۱۳ پلتفرم جامع پروداکشن در حوزه‌های تجارت الکترونیک، سامانه‌های رزرو بلیت، سامانه‌های حقوقی، رزرو اقامتگاه و فین‌تک.
            </p>
          </section>

          {/* حوزه‌های تخصص و خدمات قابل ارائه */}
          <section className="mb-5">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2">
              حوزه‌های تخصص و شایستگی‌های محوری
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-zinc-800">
              <p>&bull; <strong>توسعه وب‌اپلیکیشن‌ها و پلتفرم‌های اختصاصی:</strong> وب‌اپلیکیشن‌های تک‌صفحه‌ای مدرن و SaaS با React 19 و Django REST.</p>
              <p>&bull; <strong>طراحی رابط و تجربه کاربری (UI/UX):</strong> طراحی سیستم‌های دیزاین در فیگما، پیاده‌سازی مو به مو در کد، رعایت a11y.</p>
              <p>&bull; <strong>ربات‌های اتوماسیون و اسکرپینگ:</strong> ربات‌های خودکار تلگرام/دیسکورد و پایپ‌لاین‌های استخراج و پردازش داده.</p>
              <p>&bull; <strong>توسعه و بهینه‌سازی حرفه‌ای وردپرس:</strong> فروشگاه‌های ووکامرس پرسرعت، کاهش زمان لودینگ زیر ثانیه و امنیت دیتابیس.</p>
              <p>&bull; <strong>آدیت امنیتی و آزمون نفوذ:</strong> ایمن‌سازی وب‌اپلیکیشن‌ها طبق استاندارد OWASP Top 10، مقابله با XSS/CSRF و سرور لینوکس.</p>
              <p>&bull; <strong>نمونه‌سازی اینترنت اشیاء (IoT):</strong> برنامه‌نویسی سخت‌افزار با Arduino و ESP32 و اتصال به داشبوردهای ابری.</p>
            </div>
          </section>

          {/* جعبه ابزار و فناوری‌ها */}
          <section className="mb-5">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2">
              فناوری‌ها و جعبه‌ابزار مهندسی
            </h2>
            <div className="text-xs space-y-1 text-zinc-800">
              <p><strong>فرانت‌اند:</strong> React 19, Next.js, Vite, JavaScript (ES6+), TypeScript, Tailwind CSS v4, Bootstrap, HTML5/CSS3, Canvas API, Web Audio API.</p>
              <p><strong>بک‌اند و سرویس‌ها:</strong> Python 3.13, Django 5.2, Django REST Framework, FastAPI, Flask, SQLAlchemy, Node.js, SQLite, PostgreSQL, RESTful API.</p>
              <p><strong>دیزاین و گرافیک:</strong> Figma (سیستم‌های طراحی و پروتوتایپ)، Adobe Photoshop, Adobe Premiere Pro, Canva, CapCut.</p>
              <p><strong>زیرساخت و امنیت:</strong> Docker, Linux (LPIC-1), تست نفوذ و امنیت وب، گیت و GitHub Actions, Nginx, SSL/TLS, استانداردهای OWASP.</p>
              <p><strong>سخت‌افزار / IoT:</strong> Arduino, ESP32, برنامه‌نویسی C/C++ امبدد، حسگرها، ارتباط سریال، پلتفرم‌های اینترنت اشیاء.</p>
            </div>
          </section>

          {/* سوابق شغلی */}
          <section className="mb-4">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2">
              سوابق حرفه‌ای و اجرایی
            </h2>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-black text-zinc-950">
                    مهندس ارشد نرم‌افزار فول‌استک و مشاور طراحی UI/UX
                  </h3>
                  <span className="text-[11px] font-bold text-zinc-600">۱۴۰۱ — اکنون (2022 — Present) | دورکاری</span>
                </div>
                <p className="text-[11px] font-semibold text-zinc-700 italic">قراردادهای بین‌المللی و پروژه‌های فریلنسینگ</p>
                <ul className="list-disc pr-4 text-xs text-zinc-700 space-y-1 mt-1">
                  <li>معماری، طراحی و پیاده‌سازی کامل بیش از ۱۳ محصول پروداکشن تحت وب با تطابق ۱۰۰ درصدی طرح فیگما با کدهای نهایی.</li>
                  <li>توسعه اندپوینت‌های RESTful امن با پایتون و جنگو ۵ به همراه سیستم احراز هویت توکن‌محور، فیلترینگ و اعتبارسنجی ورودی‌ها.</li>
                  <li>ساخت ربات‌های اتوماسیون و اسکریپت‌های کرون‌جاب که منجر به حذف خطاهای دستی و تسریع عملیات گردید.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-black text-zinc-950">
                    توسعه‌دهنده وب و متخصص وردپرس
                  </h3>
                  <span className="text-[11px] font-bold text-zinc-600">۱۳۹۹ — ۱۴۰۱ (2020 — 2022) | حضوری / دورکاری</span>
                </div>
                <p className="text-[11px] font-semibold text-zinc-700 italic">آژانس‌های دیجیتال و پروژه‌های تجاری</p>
                <ul className="list-disc pr-4 text-xs text-zinc-700 space-y-1 mt-1">
                  <li>توسعه و بهینه‌سازی فروشگاه‌های ووکامرس با لودینگ فوق‌سریع و پیاده‌سازی فرانت‌اند اختصاصی با JavaScript و Bootstrap.</li>
                  <li>ایمن‌سازی سرور و ساختار وردپرس در برابر حملات تزریق کد و آسیب‌پذیری‌های دیتابیس.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="text-[10px] text-zinc-400 text-center border-t border-zinc-200 pt-2">
          سید نیما رونقی &bull; رزومه حرفه‌ای و سوابق شغلی (صفحه ۱ از ۲ — فارسی)
        </div>
      </div>

      {/* ========================================================================= */}
      {/* PERSIAN RESUME — PAGE 4 */}
      {/* ========================================================================= */}
      <div dir="rtl" className="min-h-[280mm] flex flex-col justify-between pt-6 pb-8 font-farsi">
        <div>
          {/* ادامه سوابق */}
          <section className="mb-5">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2">
              ادامه سوابق حرفه‌ای
            </h2>
            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="text-xs font-black text-zinc-950">
                  طراح رابط و تجربه کاربری (UI/UX) و هویت بصری
                </h3>
                <span className="text-[11px] font-bold text-zinc-600">۱۳۹۸ — ۱۴۰۰ (2019 — 2021) | دورکاری</span>
              </div>
              <p className="text-[11px] font-semibold text-zinc-700 italic">استودیوهای دیزاین و پروژه‌های برندینگ</p>
              <ul className="list-disc pr-4 text-xs text-zinc-700 space-y-1 mt-1">
                <li>خلق جریان‌های کاربری، سیستم‌های دیزاین، وایرفریم‌ها و پروتوتایپ‌های تعاملی در فیگما و ادوبی.</li>
                <li>طراحی هویت بصری جامع شامل گایدلاین تایپوگرافی، لوگوتایپ‌های وکتوری و اقلام تبلیغاتی دیجیتال.</li>
              </ul>
            </div>
          </section>

          {/* تحصیلات دانشگاهی */}
          <section className="mb-5">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2">
              تحصیلات آکادمیک
            </h2>
            <div className="space-y-2 text-xs">
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-zinc-950">کارشناسی مهندسی کامپیوتر (نرم‌افزار)</h3>
                  <span className="text-[11px] font-bold text-zinc-600">۱۴۰۰ — ۱۴۰۴ (2021 — 2025)</span>
                </div>
                <p className="text-zinc-700 font-medium">دانشگاه شکوه بیرجند &bull; تمرکز بر معماری نرم‌افزار، سیستم‌های توزیع‌شده و امنیت اطلاعات</p>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-zinc-950">دیپلم متوسطه ریاضی و فیزیک</h3>
                  <span className="text-[11px] font-bold text-zinc-600">۱۳۹۶ — ۱۳۹۹ (2017 — 2020)</span>
                </div>
                <p className="text-zinc-700 font-medium">آموزش و پرورش &bull; پایه‌های محاسبات دیفرانسیل، هندسه تحلیلی و ریاضیات گسسته</p>
              </div>
            </div>
          </section>

          {/* گواهینامه‌ها */}
          <section className="mb-5">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2">
              گواهینامه‌های بین‌المللی و مدارک تخصصی
            </h2>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded-lg border border-zinc-200 bg-zinc-50">
                <p className="font-bold text-zinc-950">مدرک بین‌المللی LPIC-1 (مدیریت لینوکس)</p>
                <p className="text-[11px] text-zinc-600">انستیتو حرفه‌ای لینوکس (LPI) &bull; معماری گنو/لینوکس، شل اسکریپتینگ و امنیت</p>
              </div>
              <div className="p-2.5 rounded-lg border border-zinc-200 bg-zinc-50">
                <p className="font-bold text-zinc-950">مدرک بین‌المللی مهارت‌های رایانه‌ای ICDL</p>
                <p className="text-[11px] text-zinc-600">بنیاد جهانی ICDL &bull; مبانی IT، پایگاه‌های داده و امنیت دیجیتال</p>
              </div>
            </div>
          </section>

          {/* جدول پروژه‌های پروداکشن */}
          <section className="mb-5">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2">
              جدول گزیده پروژه‌های پروداکشن بین‌المللی
            </h2>
            <div className="border border-zinc-200 rounded-lg overflow-hidden text-[11px]">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="bg-zinc-100 border-b border-zinc-200 text-zinc-800">
                    <th className="p-1.5 font-bold">پلتفرم</th>
                    <th className="p-1.5 font-bold">حوزه تخصصی</th>
                    <th className="p-1.5 font-bold">معماری و تکنولوژی</th>
                    <th className="p-1.5 font-bold">دموی آنلاین</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 text-zinc-700">
                  <tr>
                    <td className="p-1.5 font-bold">SHOP.CO</td>
                    <td className="p-1.5">فروشگاه پوشاک لوکس</td>
                    <td className="p-1.5">React 19, Django 5 REST, گالری ۳ زاویه، سبد خرید و صدور فاکتور</td>
                    <td className="p-1.5 font-mono text-zinc-950" dir="ltr">lxlnimalxl.github.io/shopco-ecommerce-platform/</td>
                  </tr>
                  <tr>
                    <td className="p-1.5 font-bold">CinePass</td>
                    <td className="p-1.5">رزرو بلیت سینما</td>
                    <td className="p-1.5">React 19, Django 5 REST, صندلی‌های منحنی و بلیت کیوآر SVG</td>
                    <td className="p-1.5 font-mono text-zinc-950" dir="ltr">lxlnimalxl.github.io/cinepass-cinema-ticket-booking/</td>
                  </tr>
                  <tr>
                    <td className="p-1.5 font-bold">Vakil</td>
                    <td className="p-1.5">پلتفرم حقوقی LegalTech</td>
                    <td className="p-1.5">React 19, Django 5 REST, الگوریتم هوشمند محاسبه هزینه دادگاه</td>
                    <td className="p-1.5 font-mono text-zinc-950" dir="ltr">lxlnimalxl.github.io/vakil-legal-platform/</td>
                  </tr>
                  <tr>
                    <td className="p-1.5 font-bold">Ashyaneh</td>
                    <td className="p-1.5">رزرو هتل و اقامتگاه</td>
                    <td className="p-1.5">React 19, Django 5 REST, شبیه‌ساز همزمان دسکتاپ و فریم موبایل</td>
                    <td className="p-1.5 font-mono text-zinc-950" dir="ltr">lxlnimalxl.github.io/ashyaneh-hotel-booking-platform/</td>
                  </tr>
                  <tr>
                    <td className="p-1.5 font-bold">SocioSphere</td>
                    <td className="p-1.5">شبکه اجتماعی مدرن</td>
                    <td className="p-1.5">React 19, Django 5 REST, کانواس سه صفحه‌ای و اتاق چت</td>
                    <td className="p-1.5 font-mono text-zinc-950" dir="ltr">lxlnimalxl.github.io/sociosphere-social-platform/</td>
                  </tr>
                  <tr>
                    <td className="p-1.5 font-bold">Deluxe Strategy</td>
                    <td className="p-1.5">موتور بازی منچ لوکس</td>
                    <td className="p-1.5">React 19, فیزیک تاس، ماشین وضعیت نوبت و وکتور SVG</td>
                    <td className="p-1.5 font-mono text-zinc-950" dir="ltr">lxlnimalxl.github.io/deluxe-strategy-board-game/</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <div className="text-[10px] text-zinc-400 text-center border-t border-zinc-200 pt-2">
          سید نیما رونقی &bull; رزومه حرفه‌ای و سوابق شغلی (صفحه ۲ از ۲ — فارسی)
        </div>
      </div>
    </div>
  );
}

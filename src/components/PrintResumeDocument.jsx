import React from 'react';
import { content } from '../data/content';

export default function PrintResumeDocument() {
  const en = content.en;
  const fa = content.fa;

  return (
    <div id="printable-resume" className="bg-white text-zinc-900 font-sans leading-normal print:block p-8 max-w-[210mm] mx-auto text-[11px]">
      {/* ========================================================================= */}
      {/* ENGLISH RESUME — PAGE 1 */}
      {/* ========================================================================= */}
      <div className="page-break min-h-[280mm] flex flex-col justify-between pb-6">
        <div>
          {/* Header */}
          <div className="border-b-2 border-zinc-900 pb-4 mb-4 flex justify-between items-center gap-4">
            <div className="flex items-center gap-3.5">
              <img
                src="./nima-profile.png"
                alt="Seyyed Nima Rounaghi"
                className="w-14 h-14 rounded-xl object-cover object-top border border-zinc-300 shadow-sm flex-shrink-0"
              />
              <div>
                <h1 className="text-2xl font-black tracking-tight text-zinc-950 uppercase">
                  Seyyed Nima Rounaghi
                </h1>
                <p className="text-xs font-bold text-zinc-700 tracking-wide uppercase mt-0.5">
                  Full-Stack Software Engineer & UI/UX Designer &bull; Co-Founder at Boghcheh & Megabyte System
                </p>
                <p className="text-[10px] font-semibold text-zinc-500 tracking-wider uppercase mt-0.5">
                  Specialized in Custom Platforms, Secure Architecture & Embedded IoT
                </p>
              </div>
            </div>
            <div className="text-right text-[11px] text-zinc-600 space-y-0.5 font-medium flex-shrink-0">
              <p>Email: nimarounaghi11@gmail.com</p>
              <p>Phone: +98 915 779 9337</p>
              <p>GitHub: github.com/lxlnimalxl</p>
              <p>LinkedIn: linkedin.com/in/nima-rounaghi</p>
              <p>Location: Worldwide Remote / Hybrid</p>
            </div>
          </div>

          {/* Executive Summary */}
          <section className="mb-4">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-1.5">
              Executive Profile & Value Proposition
            </h2>
            <p className="text-[11px] text-zinc-700 leading-relaxed text-justify">
              Senior Full-Stack Software Engineer, UI/UX Designer, and Co-Founder with 5+ years of verified expertise building secure, production-grade digital platforms from the ground up. Eliminates multi-freelancer overhead and communication breakdowns by unifying high-fidelity Figma design systems with production-grade engineering in React 19, Python, Django 5 REST Framework, Linux (LPIC-1), and OWASP security practices. Co-founder of <strong>Boghcheh</strong> (specialized handicrafts e-commerce) and <strong>Megabyte System</strong> (enterprise IT and embedded IoT automation), backed by 19+ deployed production platforms.
            </p>
          </section>

          {/* Core Capabilities */}
          <section className="mb-4">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-1.5">
              Core Capabilities & Specializations
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px] text-zinc-800">
              <p>&bull; <strong>Custom Web Apps & Platforms:</strong> Single page apps, SaaS architectures with React 19 & DRF.</p>
              <p>&bull; <strong>UI/UX & Brand Identity:</strong> Design systems in Figma, responsive interfaces, 100% code parity.</p>
              <p>&bull; <strong>Bots & Workflow Automation:</strong> Data scrapers, Telegram bots, and cron-driven ETL pipelines.</p>
              <p>&bull; <strong>WordPress Optimization:</strong> High-conversion headless setups, WooCommerce tuning, speed auditing.</p>
              <p>&bull; <strong>Security Auditing & Pen Testing:</strong> OWASP Top 10 defense, CSRF/XSS mitigation, server hardening.</p>
              <p>&bull; <strong>Hardware & IoT Prototyping:</strong> Microcontroller automation (Arduino, ESP32) with cloud telemetry.</p>
            </div>
          </section>

          {/* Technical Toolkit */}
          <section className="mb-4">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-1.5">
              Technical Arsenal
            </h2>
            <div className="text-[11px] space-y-1 text-zinc-800">
              <p><strong>Frontend:</strong> React 19, Next.js, Vite, JavaScript (ES6+), TypeScript, Tailwind CSS v4, Bootstrap, HTML5, CSS3, Canvas API, Web Audio API.</p>
              <p><strong>Backend & APIs:</strong> Python 3.13, Django 5.2, Django REST Framework, FastAPI, Flask, SQLAlchemy, Node.js, SQLite, PostgreSQL, RESTful Architecture.</p>
              <p><strong>Design & Creative:</strong> Figma (Systems & Interactive Prototyping), Adobe Photoshop, Premiere Pro, Canva, CapCut.</p>
              <p><strong>Infrastructure & Security:</strong> Docker, Linux (LPIC-1), Penetration Testing, Code Auditing, GitHub Actions, Nginx, SSL/TLS, OWASP Defense.</p>
              <p><strong>Hardware / IoT:</strong> Arduino, ESP32, Embedded C/C++, Sensors, Serial Communication, IoT Cloud Telemetry.</p>
            </div>
          </section>

          {/* Professional Experience (Part 1) */}
          <section className="mb-3">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2">
              Professional Experience & Ventures (Part 1)
            </h2>

            <div className="space-y-2.5">
              {/* Boghcheh */}
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-[11px] font-black text-zinc-950">
                    Co-Founder & Chief Technology Officer (CTO)
                  </h3>
                  <span className="text-[10px] font-bold text-zinc-600">2023 — Present | Remote / Tehran</span>
                </div>
                <p className="text-[10px] font-semibold text-zinc-700 italic">Boghcheh &bull; Specialized Handicrafts & Artisan Marketplace (boghcheh.com)</p>
                <ul className="list-disc pl-4 text-[10.5px] text-zinc-700 space-y-0.5 mt-0.5">
                  <li>Co-founded and engineered the end-to-end digital infrastructure for Boghcheh, a dedicated e-commerce platform for authentic Iranian handicrafts and artisanal homeware.</li>
                  <li>Implemented high-converting product pages, multi-vendor product catalogs, automated shipping cost calculation, and secure Iranian bank payment gateway integrations.</li>
                  <li>Directed complete UI/UX branding guidelines, product photography aesthetics, and responsive web presentation.</li>
                </ul>
              </div>

              {/* Megabyte System */}
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-[11px] font-black text-zinc-950">
                    Co-Founder & Lead Systems/Hardware Engineer
                  </h3>
                  <span className="text-[10px] font-bold text-zinc-600">2021 — Present | Birjand / Hybrid</span>
                </div>
                <p className="text-[10px] font-semibold text-zinc-700 italic">Megabyte System &bull; Enterprise IT Infrastructure & Microcontroller Solutions (megabytesystem.com)</p>
                <ul className="list-disc pl-4 text-[10.5px] text-zinc-700 space-y-0.5 mt-0.5">
                  <li>Co-founded computer engineering and hardware consultancy providing IT infrastructure, system diagnostics, and embedded IoT automation.</li>
                  <li>Programmed custom microcontroller prototypes and telemetry circuits using Arduino and ESP32 with serial and Wi-Fi sensor integration.</li>
                  <li>Maintained LPIC-1 compliant Linux server environments, scheduled disaster-recovery backups, and executed vulnerability audits.</li>
                </ul>
              </div>

              {/* Lead Full-Stack */}
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-[11px] font-black text-zinc-950">
                    Lead Full-Stack Software Engineer & UI/UX Consultant
                  </h3>
                  <span className="text-[10px] font-bold text-zinc-600">2022 — Present | Remote</span>
                </div>
                <p className="text-[10px] font-semibold text-zinc-700 italic">Independent & International Technical Contracts</p>
                <ul className="list-disc pl-4 text-[10.5px] text-zinc-700 space-y-0.5 mt-0.5">
                  <li>Architected and delivered 19+ flagship web applications (SHOP.CO, CinePass, Vakil LegalTech, Ashyaneh, SocioSphere, Deluxe Strategy) with 100% Figma-to-code fidelity.</li>
                  <li>Engineered secure RESTful APIs using Django 5 and Python 3.13, incorporating token authentication, input sanitization, and CSRF protection.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="text-[9.5px] text-zinc-400 text-center border-t border-zinc-200 pt-1.5">
          Seyyed Nima Rounaghi &bull; Curriculum Vitae (Page 1 of 2 — English)
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ENGLISH RESUME — PAGE 2 */}
      {/* ========================================================================= */}
      <div className="page-break min-h-[280mm] flex flex-col justify-between pt-4 pb-6">
        <div>
          {/* Prior Experience continued */}
          <section className="mb-4">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2">
              Professional Experience (Continued)
            </h2>
            <div className="space-y-2.5">
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-[11px] font-black text-zinc-950">
                    Full-Stack Web & WordPress Engineer
                  </h3>
                  <span className="text-[10px] font-bold text-zinc-600">2020 — 2022 | Hybrid / Remote</span>
                </div>
                <p className="text-[10px] font-semibold text-zinc-700 italic">Digital Agencies & Direct Enterprise Clients</p>
                <ul className="list-disc pl-4 text-[10.5px] text-zinc-700 space-y-0.5 mt-0.5">
                  <li>Built and optimized custom e-commerce and corporate web solutions, including specialized gem-cutting equipment catalogs and educational toy store platforms.</li>
                  <li>Hardened WordPress instances against brute-force intrusion, malicious injections, and unauthorized database modifications.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-[11px] font-black text-zinc-950">
                    UI/UX & Digital Brand Identity Designer
                  </h3>
                  <span className="text-[10px] font-bold text-zinc-600">2019 — 2021 | Remote</span>
                </div>
                <p className="text-[10px] font-semibold text-zinc-700 italic">Creative Studios & Branding Projects</p>
                <ul className="list-disc pl-4 text-[10.5px] text-zinc-700 space-y-0.5 mt-0.5">
                  <li>Created end-to-end user journeys, design systems, wireframes, and interactive prototypes in Figma and Adobe Creative Suite.</li>
                  <li>Designed corporate branding packages, business card stationery suites, vector logotypes, and technical developer conference posters.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Academic Education */}
          <section className="mb-4">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-1.5">
              Academic Education
            </h2>
            <div className="space-y-1.5 text-[11px]">
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-zinc-950">Bachelor of Science in Computer Engineering</h3>
                  <span className="text-[10px] font-bold text-zinc-600">2021 — 2025</span>
                </div>
                <p className="text-zinc-700 font-medium">Shokouh Birjand University &bull; Software Architecture, Distributed Systems & Security</p>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-zinc-950">High School Diploma in Mathematics & Physics</h3>
                  <span className="text-[10px] font-bold text-zinc-600">2017 — 2020</span>
                </div>
                <p className="text-zinc-700 font-medium">National High School Curriculum &bull; Advanced Calculus, Analytical Geometry & Physics</p>
              </div>
            </div>
          </section>

          {/* Professional Certifications */}
          <section className="mb-4">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-1.5">
              Certifications & Accreditations
            </h2>
            <div className="grid grid-cols-2 gap-2.5 text-[11px]">
              <div className="p-2 rounded-lg border border-zinc-200 bg-zinc-50">
                <p className="font-bold text-zinc-950">LPIC-1 Linux System Administrator</p>
                <p className="text-[10px] text-zinc-600">Linux Professional Institute &bull; GNU/Linux Architecture, Shell Scripting, Security</p>
              </div>
              <div className="p-2 rounded-lg border border-zinc-200 bg-zinc-50">
                <p className="font-bold text-zinc-950">ICDL (International Computer Driving Licence)</p>
                <p className="text-[10px] text-zinc-600">ICDL Foundation &bull; IT Fundamentals, Database Management, Cyber Security</p>
              </div>
            </div>
          </section>

          {/* Featured Production Portfolios Matrix */}
          <section className="mb-3">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-1.5">
              Key Featured Production Portfolios & Ventures
            </h2>
            <div className="border border-zinc-200 rounded-lg overflow-hidden text-[10px]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-100 border-b border-zinc-200 text-zinc-800">
                    <th className="p-1 font-bold">Platform / Venture</th>
                    <th className="p-1 font-bold">Domain</th>
                    <th className="p-1 font-bold">Architecture & Features</th>
                    <th className="p-1 font-bold">Live Link / Source</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 text-zinc-700">
                  <tr className="bg-zinc-50/50">
                    <td className="p-1 font-bold text-zinc-950">Boghcheh (بقچه)</td>
                    <td className="p-1">Handicrafts Marketplace</td>
                    <td className="p-1">Co-Founder, E-Commerce Infrastructure, Payment Gateway, Shipping</td>
                    <td className="p-1 font-mono text-zinc-950">boghcheh.com</td>
                  </tr>
                  <tr className="bg-zinc-50/50">
                    <td className="p-1 font-bold text-zinc-950">Megabyte System</td>
                    <td className="p-1">Enterprise IT & IoT</td>
                    <td className="p-1">Co-Founder, Arduino/ESP32 Telemetry, Linux LPIC-1 Hardening</td>
                    <td className="p-1 font-mono text-zinc-950">megabytesystem.com</td>
                  </tr>
                  <tr>
                    <td className="p-1 font-bold">SHOP.CO</td>
                    <td className="p-1">Apparel E-Commerce</td>
                    <td className="p-1">React 19, Django 5 REST, 3-Angle PDP, Cart/Checkout Invoice</td>
                    <td className="p-1 font-mono text-zinc-950">lxlnimalxl.github.io/shopco-ecommerce-platform/</td>
                  </tr>
                  <tr>
                    <td className="p-1 font-bold">CinePass</td>
                    <td className="p-1">Cinema Ticket Booking</td>
                    <td className="p-1">React 19, Django 5 REST, Curved SVG Seating Matrix, QR Pass</td>
                    <td className="p-1 font-mono text-zinc-950">lxlnimalxl.github.io/cinepass-cinema-ticket-booking/</td>
                  </tr>
                  <tr>
                    <td className="p-1 font-bold">Vakil</td>
                    <td className="p-1">LegalTech Platform</td>
                    <td className="p-1">React 19, Django 5 REST, Court Tariff Calculator Algorithm</td>
                    <td className="p-1 font-mono text-zinc-950">lxlnimalxl.github.io/vakil-legal-platform/</td>
                  </tr>
                  <tr>
                    <td className="p-1 font-bold">Ashyaneh</td>
                    <td className="p-1">Accommodation Booking</td>
                    <td className="p-1">React 19, Django 5 REST, Dual Desktop/Mobile Simulation View</td>
                    <td className="p-1 font-mono text-zinc-950">lxlnimalxl.github.io/ashyaneh-hotel-booking-platform/</td>
                  </tr>
                  <tr>
                    <td className="p-1 font-bold">SocioSphere</td>
                    <td className="p-1">Social Platform</td>
                    <td className="p-1">React 19, Django 5 REST, Tri-Screen Canvas, Post Feed & Chat</td>
                    <td className="p-1 font-mono text-zinc-950">lxlnimalxl.github.io/sociosphere-social-platform/</td>
                  </tr>
                  <tr>
                    <td className="p-1 font-bold">Gem-Cutting Tools</td>
                    <td className="p-1">Specialist Equipment</td>
                    <td className="p-1">Lapidary Machinery Catalog, E-Commerce Architecture, UI/UX System</td>
                    <td className="p-1 font-mono text-zinc-950">figma.com/design/XAKmDNlfHCWm0sScko2FxT</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <div className="text-[9.5px] text-zinc-400 text-center border-t border-zinc-200 pt-1.5">
          Seyyed Nima Rounaghi &bull; Curriculum Vitae (Page 2 of 2 — English)
        </div>
      </div>

      {/* ========================================================================= */}
      {/* PERSIAN RESUME — PAGE 3 (رزومه رسمی فارسی) */}
      {/* ========================================================================= */}
      <div dir="rtl" className="page-break min-h-[280mm] flex flex-col justify-between pt-4 pb-6 font-farsi">
        <div>
          {/* Header FA */}
          <div className="border-b-2 border-zinc-900 pb-4 mb-4 flex justify-between items-center gap-4">
            <div className="flex items-center gap-3.5">
              <img
                src="./nima-profile.png"
                alt="سید نیما رونقی"
                className="w-14 h-14 rounded-xl object-cover object-top border border-zinc-300 shadow-sm flex-shrink-0"
              />
              <div>
                <h1 className="text-2xl font-black tracking-tight text-zinc-950">
                  سید نیما رونقی
                </h1>
                <p className="text-xs font-bold text-zinc-700 tracking-wide mt-0.5">
                  مهندس نرم‌افزار فول‌استک و طراح UI/UX &bull; هم‌بنیان‌گذار بقچه و مگابایت سیستم
                </p>
                <p className="text-[10px] font-semibold text-zinc-500 tracking-wide mt-0.5">
                  تخصص در توسعه پلتفرم‌های سفارشی، معماری امنیتی و اتوماسیون سخت‌افزار (IoT)
                </p>
              </div>
            </div>
            <div className="text-left text-[11px] text-zinc-600 space-y-0.5 font-medium flex-shrink-0" dir="ltr">
              <p>ایمیل: nimarounaghi11@gmail.com</p>
              <p>تلفن: 09157799337</p>
              <p>گیت‌هاب: github.com/lxlnimalxl</p>
              <p>لینکدین: linkedin.com/in/nima-rounaghi</p>
              <p>موقعیت: آماده همکاری ریموت بین‌المللی</p>
            </div>
          </div>

          {/* خلاصه مدیریتی و ارزش پیشنهادی */}
          <section className="mb-4">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-1.5">
              خلاصه حرفه‌ای و ارزش پیشنهادی
            </h2>
            <p className="text-[11px] text-zinc-700 leading-relaxed text-justify">
              مهندس ارشد نرم‌افزار فول‌استک، طراح رابط و تجربه کاربری (UI/UX) و هم‌بنیان‌گذار پلتفرم با بیش از ۵ سال سابقه در طراحی و پیاده‌سازی سامانه‌های مقیاس‌پذیر، پرسرعت و امن تحت وب. ارائه رویکردی یکپارچه که هزینه‌های گزاف و اصطکاک میان تیم‌های جداگانه طراحی و برنامه‌نویسی را کاملاً حذف می‌کند؛ با پوشش کامل طراحی سیستم‌ها در فیگما و پیاده‌سازی منطق مهندسی در React 19، پایتون، فریم‌ورک جنگو ۵، لینوکس (LPIC-1) و استانداردهای امنیت سایبری OWASP. هم‌بنیان‌گذار پلتفرم تخصصی صنایع دستی <strong>بقچه</strong> و <strong>مگابایت سیستم</strong> به همراه ۱۹ پلتفرم جامع پروداکشن تحت وب.
            </p>
          </section>

          {/* حوزه‌های تخصص و خدمات قابل ارائه */}
          <section className="mb-4">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-1.5">
              حوزه‌های تخصص و شایستگی‌های محوری
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px] text-zinc-800">
              <p>&bull; <strong>توسعه وب‌اپلیکیشن‌ها و پلتفرم‌های اختصاصی:</strong> وب‌اپلیکیشن‌های تک‌صفحه‌ای مدرن و SaaS با React 19 و Django REST.</p>
              <p>&bull; <strong>طراحی رابط و تجربه کاربری (UI/UX):</strong> طراحی سیستم‌های دیزاین در فیگما، پیاده‌سازی مو به مو در کد، رعایت a11y.</p>
              <p>&bull; <strong>ربات‌های اتوماسیون و اسکرپینگ:</strong> ربات‌های خودکار تلگرام/دیسکورد و پایپ‌لاین‌های استخراج و پردازش داده.</p>
              <p>&bull; <strong>توسعه و بهینه‌سازی حرفه‌ای وردپرس:</strong> فروشگاه‌های ووکامرس پرسرعت، کاهش زمان لودینگ زیر ثانیه و امنیت دیتابیس.</p>
              <p>&bull; <strong>آدیت امنیتی و آزمون نفوذ:</strong> ایمن‌سازی وب‌اپلیکیشن‌ها طبق استاندارد OWASP Top 10، مقابله با XSS/CSRF و سرور لینوکس.</p>
              <p>&bull; <strong>نمونه‌سازی اینترنت اشیاء (IoT):</strong> برنامه‌نویسی سخت‌افزار با Arduino و ESP32 و اتصال به داشبوردهای ابری.</p>
            </div>
          </section>

          {/* جعبه ابزار و فناوری‌ها */}
          <section className="mb-4">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-1.5">
              فناوری‌ها و جعبه‌ابزار مهندسی
            </h2>
            <div className="text-[11px] space-y-1 text-zinc-800">
              <p><strong>فرانت‌اند:</strong> React 19, Next.js, Vite, JavaScript (ES6+), TypeScript, Tailwind CSS v4, Bootstrap, HTML5/CSS3, Canvas API, Web Audio API.</p>
              <p><strong>بک‌اند و سرویس‌ها:</strong> Python 3.13, Django 5.2, Django REST Framework, FastAPI, Flask, SQLAlchemy, Node.js, SQLite, PostgreSQL, RESTful API.</p>
              <p><strong>دیزاین و گرافیک:</strong> Figma (سیستم‌های طراحی و پروتوتایپ)، Adobe Photoshop, Adobe Premiere Pro, Canva, CapCut.</p>
              <p><strong>زیرساخت و امنیت:</strong> Docker, Linux (LPIC-1), تست نفوذ و امنیت وب، گیت و GitHub Actions, Nginx, SSL/TLS, استانداردهای OWASP.</p>
              <p><strong>سخت‌افزار / IoT:</strong> Arduino, ESP32, برنامه‌نویسی C/C++ امبدد، حسگرها، ارتباط سریال، پلتفرم‌های اینترنت اشیاء.</p>
            </div>
          </section>

          {/* سوابق شغلی (بخش ۱) */}
          <section className="mb-3">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2">
              سوابق حرفه‌ای و پروژه‌های هم‌بنیان‌گذاری (بخش اول)
            </h2>

            <div className="space-y-2.5">
              {/* بقچه */}
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-[11px] font-black text-zinc-950">
                    هم‌بنیان‌گذار و مدیر ارشد فناوری (CTO)
                  </h3>
                  <span className="text-[10px] font-bold text-zinc-600">۱۴۰۲ — اکنون (2023 — Present) | دورکاری / تهران</span>
                </div>
                <p className="text-[10px] font-semibold text-zinc-700 italic">پلتفرم تخصصی صنایع دستی و دست‌بافته‌های بقچه (boghcheh.com)</p>
                <ul className="list-disc pr-4 text-[10.5px] text-zinc-700 space-y-0.5 mt-0.5">
                  <li>هم‌بنیان‌گذاری و توسعه زیرساخت فنی مارکت‌پلیس بقچه برای عرضه صنایع دستی اصیل ایرانی و دست‌بافته‌های هنرمندان.</li>
                  <li>طراحی و توسعه کاتالوگ فروشگاهی، ماژول چندفروشندگی، محاسبه خودکار هزینه بسته‌بندی و ارسال و اتصال به درگاه‌های پرداخت امن شاپرک.</li>
                  <li>تدوین هویت بصری، استانداردهای عکاسی صنعتی و سیستم طراحی تعاملی با محوریت تلفیق هنر سنتی با وب مدرن.</li>
                </ul>
              </div>

              {/* مگابایت سیستم */}
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-[11px] font-black text-zinc-950">
                    هم‌بنیان‌گذار و مهندس ارشد سیستم‌ها و سخت‌افزار
                  </h3>
                  <span className="text-[10px] font-bold text-zinc-600">۱۴۰۰ — اکنون (2021 — Present) | بیرجند / هیبریدی</span>
                </div>
                <p className="text-[10px] font-semibold text-zinc-700 italic">مگابایت سیستم &bull; خدمات مهندسی کامپیوتر، شبکه و اتوماسیون سخت‌افزار (megabytesystem.com)</p>
                <ul className="list-disc pr-4 text-[10.5px] text-zinc-700 space-y-0.5 mt-0.5">
                  <li>هم‌بنیان‌گذاری شرکت خدمات مهندسی کامپیوتر، زیرساخت فناوری، پشتیبانی سخت‌افزاری و پیاده‌سازی راهکارهای IoT.</li>
                  <li>طراحی و برنامه‌نویسی بردهای میکروکنترلری Arduino و ESP32 جهت اتوماسیون، پایش حسگرها و انتقال داده سریال و بی‌سیم.</li>
                  <li>پیکربندی سرورهای لینوکس مبتنی بر سرفصل‌های LPIC-1، اتوماسیون بکاپ‌های دوره‌ای و انجام تست‌های نفوذ شبکه.</li>
                </ul>
              </div>

              {/* مهندس ارشد نرم‌افزار */}
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-[11px] font-black text-zinc-950">
                    مهندس ارشد نرم‌افزار فول‌استک و مشاور طراحی UI/UX
                  </h3>
                  <span className="text-[10px] font-bold text-zinc-600">۱۴۰۱ — اکنون (2022 — Present) | دورکاری</span>
                </div>
                <p className="text-[10px] font-semibold text-zinc-700 italic">قراردادهای بین‌المللی و پروژه‌های فریلنسینگ</p>
                <ul className="list-disc pr-4 text-[10.5px] text-zinc-700 space-y-0.5 mt-0.5">
                  <li>معماری، طراحی و پیاده‌سازی کامل بیش از ۱۹ محصول پروداکشن تحت وب با تطابق ۱۰۰ درصدی طرح فیگما با کدهای نهایی.</li>
                  <li>توسعه اندپوینت‌های RESTful امن با پایتون و جنگو ۵ به همراه سیستم احراز هویت توکن‌محور، فیلترینگ و اعتبارسنجی ورودی‌ها.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="text-[9.5px] text-zinc-400 text-center border-t border-zinc-200 pt-1.5">
          سید نیما رونقی &bull; رزومه حرفه‌ای و سوابق شغلی (صفحه ۱ از ۲ — فارسی)
        </div>
      </div>

      {/* ========================================================================= */}
      {/* PERSIAN RESUME — PAGE 4 */}
      {/* ========================================================================= */}
      <div dir="rtl" className="min-h-[280mm] flex flex-col justify-between pt-4 pb-6 font-farsi">
        <div>
          {/* ادامه سوابق */}
          <section className="mb-4">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2">
              ادامه سوابق حرفه‌ای
            </h2>
            <div className="space-y-2.5">
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-[11px] font-black text-zinc-950">
                    توسعه‌دهنده وب و متخصص وردپرس
                  </h3>
                  <span className="text-[10px] font-bold text-zinc-600">۱۳۹۹ — ۱۴۰۱ (2020 — 2022) | حضوری / دورکاری</span>
                </div>
                <p className="text-[10px] font-semibold text-zinc-700 italic">آژانس‌های دیجیتال و پروژه‌های تجاری و سازمانی</p>
                <ul className="list-disc pr-4 text-[10.5px] text-zinc-700 space-y-0.5 mt-0.5">
                  <li>توسعه و بهینه‌سازی فروشگاه‌های ووکامرس پرسرعت از جمله سایت تخصصی ابزار گوهرتراشی و فروشگاه آنلاین اسباب‌بازی کودکان.</li>
                  <li>ایمن‌سازی ساختار وردپرس در برابر حملات تزریق کد و آسیب‌پذیری‌های دیتابیس و بهینه‌سازی کدهای فرانت‌اند با JavaScript و Bootstrap.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-[11px] font-black text-zinc-950">
                    طراح رابط و تجربه کاربری (UI/UX) و هویت بصری
                  </h3>
                  <span className="text-[10px] font-bold text-zinc-600">۱۳۹۸ — ۱۴۰۰ (2019 — 2021) | دورکاری</span>
                </div>
                <p className="text-[10px] font-semibold text-zinc-700 italic">استودیوهای دیزاین و پروژه‌های برندینگ</p>
                <ul className="list-disc pr-4 text-[10.5px] text-zinc-700 space-y-0.5 mt-0.5">
                  <li>خلق جریان‌های کاربری، سیستم‌های دیزاین، وایرفریم‌ها و پروتوتایپ‌های تعاملی در فیگما و ادوبی.</li>
                  <li>طراحی هویت بصری جامع، ست اداری و کارت ویزیت‌های سازمانی، لوگوتایپ‌های وکتوری و پوسترهای کنفرانس‌های تخصصی.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* تحصیلات دانشگاهی */}
          <section className="mb-4">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-1.5">
              تحصیلات آکادمیک
            </h2>
            <div className="space-y-1.5 text-[11px]">
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-zinc-950">کارشناسی مهندسی کامپیوتر (نرم‌افزار)</h3>
                  <span className="text-[10px] font-bold text-zinc-600">۱۴۰۰ — ۱۴۰۴ (2021 — 2025)</span>
                </div>
                <p className="text-zinc-700 font-medium">دانشگاه شکوه بیرجند &bull; تمرکز بر معماری نرم‌افزار، سیستم‌های توزیع‌شده و امنیت اطلاعات</p>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-zinc-950">دیپلم متوسطه ریاضی و فیزیک</h3>
                  <span className="text-[10px] font-bold text-zinc-600">۱۳۹۶ — ۱۳۹۹ (2017 — 2020)</span>
                </div>
                <p className="text-zinc-700 font-medium">آموزش و پرورش &bull; پایه‌های محاسبات دیفرانسیل، هندسه تحلیلی و ریاضیات گسسته</p>
              </div>
            </div>
          </section>

          {/* گواهینامه‌ها */}
          <section className="mb-4">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-1.5">
              گواهینامه‌های بین‌المللی و مدارک تخصصی
            </h2>
            <div className="grid grid-cols-2 gap-2.5 text-[11px]">
              <div className="p-2 rounded-lg border border-zinc-200 bg-zinc-50">
                <p className="font-bold text-zinc-950">مدرک بین‌المللی LPIC-1 (مدیریت لینوکس)</p>
                <p className="text-[10px] text-zinc-600">انستیتو حرفه‌ای لینوکس (LPI) &bull; معماری گنو/لینوکس، شل اسکریپتینگ و امنیت</p>
              </div>
              <div className="p-2 rounded-lg border border-zinc-200 bg-zinc-50">
                <p className="font-bold text-zinc-950">مدرک بین‌المللی مهارت‌های رایانه‌ای ICDL</p>
                <p className="text-[10px] text-zinc-600">بنیاد جهانی ICDL &bull; مبانی IT، پایگاه‌های داده و امنیت دیجیتال</p>
              </div>
            </div>
          </section>

          {/* جدول پروژه‌های پروداکشن */}
          <section className="mb-3">
            <h2 className="text-xs font-black uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-1.5">
              جدول گزیده پروژه‌های پروداکشن بین‌المللی و هم‌بنیان‌گذاری
            </h2>
            <div className="border border-zinc-200 rounded-lg overflow-hidden text-[10px]">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="bg-zinc-100 border-b border-zinc-200 text-zinc-800">
                    <th className="p-1 font-bold">پلتفرم / شرکت</th>
                    <th className="p-1 font-bold">حوزه تخصصی</th>
                    <th className="p-1 font-bold">معماری و قابلیت‌ها</th>
                    <th className="p-1 font-bold">دموی آنلاین / لینک</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 text-zinc-700">
                  <tr className="bg-zinc-50/50">
                    <td className="p-1 font-bold text-zinc-950">بقچه (Boghcheh)</td>
                    <td className="p-1">مارکت‌پلیس صنایع دستی</td>
                    <td className="p-1">هم‌بنیان‌گذار، زیرساخت تجارت الکترونیک، درگاه پرداخت شاپرک</td>
                    <td className="p-1 font-mono text-zinc-950" dir="ltr">boghcheh.com</td>
                  </tr>
                  <tr className="bg-zinc-50/50">
                    <td className="p-1 font-bold text-zinc-950">مگابایت سیستم</td>
                    <td className="p-1">سخت‌افزار، شبکه و IoT</td>
                    <td className="p-1">هم‌بنیان‌گذار، اتوماسیون ESP32/Arduino، مدیریت سرور LPIC-1</td>
                    <td className="p-1 font-mono text-zinc-950" dir="ltr">megabytesystem.com</td>
                  </tr>
                  <tr>
                    <td className="p-1 font-bold">SHOP.CO</td>
                    <td className="p-1">فروشگاه پوشاک لوکس</td>
                    <td className="p-1">React 19, Django 5 REST, گالری ۳ زاویه، سبد خرید و صدور فاکتور</td>
                    <td className="p-1 font-mono text-zinc-950" dir="ltr">lxlnimalxl.github.io/shopco-ecommerce-platform/</td>
                  </tr>
                  <tr>
                    <td className="p-1 font-bold">CinePass</td>
                    <td className="p-1">رزرو بلیت سینما</td>
                    <td className="p-1">React 19, Django 5 REST, صندلی‌های منحنی و بلیت کیوآر SVG</td>
                    <td className="p-1 font-mono text-zinc-950" dir="ltr">lxlnimalxl.github.io/cinepass-cinema-ticket-booking/</td>
                  </tr>
                  <tr>
                    <td className="p-1 font-bold">Vakil</td>
                    <td className="p-1">پلتفرم حقوقی LegalTech</td>
                    <td className="p-1">React 19, Django 5 REST, الگوریتم هوشمند محاسبه هزینه دادگاه</td>
                    <td className="p-1 font-mono text-zinc-950" dir="ltr">lxlnimalxl.github.io/vakil-legal-platform/</td>
                  </tr>
                  <tr>
                    <td className="p-1 font-bold">Ashyaneh</td>
                    <td className="p-1">رزرو هتل و اقامتگاه</td>
                    <td className="p-1">React 19, Django 5 REST, شبیه‌ساز همزمان دسکتاپ و فریم موبایل</td>
                    <td className="p-1 font-mono text-zinc-950" dir="ltr">lxlnimalxl.github.io/ashyaneh-hotel-booking-platform/</td>
                  </tr>
                  <tr>
                    <td className="p-1 font-bold">SocioSphere</td>
                    <td className="p-1">شبکه اجتماعی مدرن</td>
                    <td className="p-1">React 19, Django 5 REST, کانواس سه صفحه‌ای و اتاق چت</td>
                    <td className="p-1 font-mono text-zinc-950" dir="ltr">lxlnimalxl.github.io/sociosphere-social-platform/</td>
                  </tr>
                  <tr>
                    <td className="p-1 font-bold">تجهیزات گوهرتراشی</td>
                    <td className="p-1">فروشگاه ابزار دقیق</td>
                    <td className="p-1">کاتالوگ ماشین‌آلات تراش سنگ، سیستم فروشگاهی و سیستم دیزاین</td>
                    <td className="p-1 font-mono text-zinc-950" dir="ltr">figma.com/design/XAKmDNlfHCWm0sScko2FxT</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <div className="text-[9.5px] text-zinc-400 text-center border-t border-zinc-200 pt-1.5">
          سید نیما رونقی &bull; رزومه حرفه‌ای و سوابق شغلی (صفحه ۲ از ۲ — فارسی)
        </div>
      </div>
    </div>
  );
}

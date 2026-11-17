import shopcoImg from '../assets/projects/shopco.png';
import cinepassImg from '../assets/projects/cinepass.png';
import vakilImg from '../assets/projects/vakil.png';
import ashyanehImg from '../assets/projects/ashyaneh.png';
import sociosphereImg from '../assets/projects/sociosphere.png';
import cybergameImg from '../assets/projects/cybergame.png';
import tacticalImg from '../assets/projects/tactical.png';
import deluxeImg from '../assets/projects/deluxe.png';
import nevoImg from '../assets/projects/nevo.png';
import plantoImg from '../assets/projects/planto.png';
import finwiseImg from '../assets/projects/finwise.png';
import novabankImg from '../assets/projects/novabank.png';
import nexcentImg from '../assets/projects/nexcent.png';
import boghchehImg from '../assets/projects/boghcheh.png';
import figmaUiuxWebImg from '../assets/projects/figma-uiux-web.png';
import figmaMobileAppImg from '../assets/projects/figma-mobile-app.png';
import figmaWebProjectsImg from '../assets/projects/figma-web-projects.png';
import figmaBrandingCardsImg from '../assets/projects/figma-branding-cards.png';
import figmaGraphicPostersImg from '../assets/projects/figma-graphic-posters.png';

export const content = {
  en: {
    meta: {
      title: "Seyyed Nima Rounaghi | Full-Stack Software Engineer & UI/UX Designer | Co-Founder",
      role: "Full-Stack Software Engineer & UI/UX Designer",
      subrole: "Co-Founder at Boghcheh & Megabyte System",
      specialty: "Custom Platforms & Security",
      status: "Available for high-impact international contracts & full-time remote roles",
      location: "Open to Worldwide Remote",
      experienceYears: "5+ Years",
      completedProjects: "19+ Production Portfolios",
    },
    nav: {
      about: "Overview",
      services: "Capabilities",
      projects: "Case Studies",
      stack: "Technical Stack",
      resume: "Resume & CV",
      contact: "Contact",
      downloadPdf: "Download PDF Resume",
      viewMode: "View Mode",
      portfolio: "Portfolio",
      resumeView: "Executive CV",
    },
    hero: {
      greeting: "Hello, I am Seyyed Nima Rounaghi",
      headline: "Engineering High-Performance Platforms With Security-First Logic & Creative Precision.",
      subheadline:
        "Managing multiple freelancers for a single project—a designer, a developer, and a security expert—is stressful, fragmented, and expensive. Code breaks, designs do not match the final product, and deadlines slip. I offer a unified approach: building secure, high-performance platforms from the ground up, handling both creative design and complex engineering under one roof.",
      ctaPrimary: "Explore Case Studies",
      ctaSecondary: "Download Two-Language Resume",
      stats: [
        { value: "19+", label: "Production Platforms" },
        { value: "100%", label: "Figma-to-Code Parity" },
        { value: "5+ Yrs", label: "Engineering & Design" },
        { value: "Sec-First", label: "Audited & Hardened" },
      ]
    },
    services: {
      title: "What I Take Off Your Plate",
      subtitle: "End-to-end technical execution without handoff friction, broken contracts, or design discrepancies.",
      items: [
        {
          id: "platform-dev",
          title: "Custom Platform & Web App Development",
          description: "Full-stack single page applications, SaaS architectures, and internal tools built with React 19, Vite, Django REST Framework, and clean component systems."
        },
        {
          id: "uiux-branding",
          title: "UI/UX, Logo & Brand Identity Design",
          description: "Meticulous design systems in Figma, interactive design-to-code components, typographic discipline, responsive mobile interfaces, and digital brand identities."
        },
        {
          id: "bot-automation",
          title: "Custom Bot Development & Workflow Automation",
          description: "Data scrapers, Telegram/Discord automation bots, cron-driven ETL pipelines, and API integration workers saving dozens of manual operational hours."
        },
        {
          id: "wordpress-opt",
          title: "WordPress Site Creation & Optimization",
          description: "Custom headless architectures, performance-tuned WooCommerce stores, database query optimization, security hardening, and fast page load speeds."
        },
        {
          id: "security-audit",
          title: "Security Auditing & Penetration Testing",
          description: "Systematic vulnerability analysis (OWASP Top 10), authentication flow verification, CSRF/XSS defense, Linux server hardening (LPIC-1), and data privacy auditing."
        },
        {
          id: "hardware-iot",
          title: "Hardware Prototyping (Embedded Systems)",
          description: "Microcontroller automation using Arduino and ESP32, embedded sensor networks, Wi-Fi/Bluetooth telemetry, and physical-to-cloud dashboard bridges."
        }
      ]
    },
    stack: {
      title: "The Tools I Use to Get the Job Done",
      subtitle: "A battle-tested stack spanning client interfaces, distributed backend engines, security, and hardware.",
      categories: [
        {
          name: "Frontend Architecture",
          tools: ["React 19", "Next.js", "Vite", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS v4", "Bootstrap", "HTML5 / CSS3", "Canvas API", "Web Audio"]
        },
        {
          name: "Backend & APIs",
          tools: ["Python 3.13", "Django 5.2", "Django REST Framework", "FastAPI", "Flask", "SQLAlchemy", "Node.js", "SQLite", "PostgreSQL", "RESTful Architecture"]
        },
        {
          name: "Design & Digital Media",
          tools: ["Figma (Design & Prototyping)", "Adobe Photoshop", "Adobe Premiere Pro", "Canva", "CapCut", "Design Systems", "Component Architecture"]
        },
        {
          name: "Infrastructure & Security",
          tools: ["Docker", "Linux (LPIC-1)", "Penetration Testing", "Security Auditing", "Git / GitHub Actions", "Nginx", "SSL/TLS", "OWASP Security"]
        },
        {
          name: "Hardware & IoT",
          tools: ["Arduino", "ESP32", "Embedded C/C++", "Sensors & Actuators", "Serial Communication", "IoT Cloud Telemetry"]
        }
      ]
    },
    projects: {
      title: "Featured International Production Portfolios",
      subtitle: "Nineteen production-grade platforms, commercial ventures, and case studies engineered with zero compromises on performance, accessibility, or visual fidelity.",
      filterAll: "All Categories",
      filterVentures: "Ventures & Co-Founding",
      filterFullStack: "Full-Stack (React + Django)",
      filterWebApps: "Web & Mobile Apps",
      filterInteractive: "Interactive & Games",
      filterDesign: "Brand & Visual Systems",
      viewDemo: "Live Demo",
      viewCode: "Source Code / Spec",
      items: [
        {
          id: "boghcheh",
          title: "Boghcheh Cultural Handicrafts Marketplace",
          category: "ventures",
          categoryLabel: "Co-Founder & E-Commerce",
          image: boghchehImg,
          description: "Co-founded specialized Iranian handicrafts and cultural goods marketplace. Scalable multi-vendor architecture, artisan onboarding, storytelling product pages, automated shipping calculator, and secure bank payment gateways.",
          tags: ["Co-Founder", "E-Commerce", "Artisan Tech", "Payment Gateway"],
          demoUrl: "https://boghcheh.com/",
          codeUrl: "https://boghcheh.com/"
        },
        {
          id: "megabyte",
          title: "Megabyte System Enterprise IT & Embedded Systems",
          category: "ventures",
          categoryLabel: "Co-Founder & Enterprise IT",
          image: figmaWebProjectsImg,
          description: "Co-founded hardware engineering and enterprise IT consultancy. Provides custom microcontroller IoT automation with Arduino/ESP32, local Linux server administration (LPIC-1), and network penetration testing for organizations.",
          tags: ["Co-Founder", "Embedded IoT", "Linux LPIC-1", "Hardware Tech"],
          demoUrl: "https://github.com/lxlnimalxl",
          codeUrl: "https://github.com/lxlnimalxl"
        },
        {
          id: "shopco",
          title: "SHOP.CO E-Commerce Platform",
          category: "fullstack",
          categoryLabel: "Full-Stack E-Commerce",
          image: shopcoImg,
          description: "High-end fashion marketplace with 3-angle gallery selector, dynamic price slider filters, color/size variants, cart engine, promo coupon validator, and printable checkout invoice.",
          tags: ["React 19", "Django 5 REST", "Tailwind v4", "Canvas Confetti"],
          demoUrl: "https://lxlnimalxl.github.io/shopco-ecommerce-platform/",
          codeUrl: "https://github.com/lxlnimalxl/shopco-ecommerce-platform"
        },
        {
          id: "cinepass",
          title: "CinePass Cinema Booking Engine",
          category: "fullstack",
          categoryLabel: "Full-Stack Entertainment",
          image: cinepassImg,
          description: "Interactive cinema reservation platform featuring dynamic movie feed, curved theater seat matrix with VIP pricing, and real-time generated SVG QR admission passes.",
          tags: ["React 19", "Django 5 REST", "Curved Screen SVG", "QR Pass"],
          demoUrl: "https://lxlnimalxl.github.io/cinepass-cinema-ticket-booking/",
          codeUrl: "https://github.com/lxlnimalxl/cinepass-cinema-ticket-booking"
        },
        {
          id: "vakil",
          title: "Vakil Legal Counsel & Fee Calculator",
          category: "fullstack",
          categoryLabel: "Full-Stack LegalTech",
          image: vakilImg,
          description: "Institutional legal services portal with dynamic court tariff calculator (Taranoom algorithm), lawyer directory, service grids, and consultation booking modal.",
          tags: ["React 19", "Django 5 REST", "Tariff Engine", "Legal Portal"],
          demoUrl: "https://lxlnimalxl.github.io/vakil-legal-platform/",
          codeUrl: "https://github.com/lxlnimalxl/vakil-legal-platform"
        },
        {
          id: "ashyaneh",
          title: "Ashyaneh Hotel & Apartment Booking",
          category: "fullstack",
          categoryLabel: "Full-Stack Travel",
          image: ashyanehImg,
          description: "Bilingual accommodation reservation system with dual viewport simulation (Desktop & Mobile Phone frame), multi-filter search, and checkout invoice generator.",
          tags: ["React 19", "Django 5 REST", "Dual Sim View", "Booking Engine"],
          demoUrl: "https://lxlnimalxl.github.io/ashyaneh-hotel-booking-platform/",
          codeUrl: "https://github.com/lxlnimalxl/ashyaneh-hotel-booking-platform"
        },
        {
          id: "sociosphere",
          title: "SocioSphere Social Network",
          category: "fullstack",
          categoryLabel: "Full-Stack Social",
          image: sociosphereImg,
          description: "Full-scale social application with real-time post creation, likes/comments feed, active stories carousel, chat rooms, and a tri-screen device frame showcase.",
          tags: ["React 19", "Django 5 REST", "Tri-Screen Canvas", "Feed Engine"],
          demoUrl: "https://lxlnimalxl.github.io/sociosphere-social-platform/",
          codeUrl: "https://github.com/lxlnimalxl/sociosphere-social-platform"
        },
        {
          id: "gemcutting",
          title: "Gem-Cutting Precision Tools E-Commerce",
          category: "webapp",
          categoryLabel: "Specialized E-Commerce",
          image: figmaUiuxWebImg,
          description: "Specialized e-commerce and UI/UX design engineered for gemological tools, lapidary machinery, diamond cutting disks, and gemstone polishing supplies.",
          tags: ["E-Commerce", "UI/UX", "WooCommerce", "Catalog Engine"],
          demoUrl: "https://www.figma.com/design/XAKmDNlfHCWm0sScko2FxT/Resume-En?node-id=0-68",
          codeUrl: "https://www.figma.com/design/XAKmDNlfHCWm0sScko2FxT/Resume-En?node-id=0-68"
        },
        {
          id: "toystore",
          title: "Toy Store Educational Play Mobile App",
          category: "webapp",
          categoryLabel: "Mobile App UI/UX",
          image: figmaMobileAppImg,
          description: "Playful, high-engagement mobile e-commerce application UI/UX tailored for educational toys, age-based product categories, animated carts, and child-safe purchase flows.",
          tags: ["Mobile App UI", "Figma", "User Journey", "E-Commerce"],
          demoUrl: "https://www.figma.com/design/XAKmDNlfHCWm0sScko2FxT/Resume-En?node-id=0-58",
          codeUrl: "https://www.figma.com/design/XAKmDNlfHCWm0sScko2FxT/Resume-En?node-id=0-58"
        },
        {
          id: "cybergame",
          title: "Cyber.Game Cyberpunk Landing",
          category: "interactive",
          categoryLabel: "Interactive Media",
          image: cybergameImg,
          description: "Futuristic dark-mode landing platform with synthesized sound effects via Web Audio API, animated neon glowing matrices, and particle celebratory confetti.",
          tags: ["React 19", "Tailwind v4", "Web Audio API", "Confetti"],
          demoUrl: "https://lxlnimalxl.github.io/cyber-game-landing/",
          codeUrl: "https://github.com/lxlnimalxl/cyber-game-landing"
        },
        {
          id: "tactical",
          title: "Tactical Strike Warfare Portal",
          category: "webapp",
          categoryLabel: "Gaming & Web App",
          image: tacticalImg,
          description: "Military sci-fi warfare portal featuring tactical operative dossiers, character stats matrices, interactive pricing tiers, and sound-synthesized click triggers.",
          tags: ["React 19", "Tailwind v4", "Interactive Roster", "Audio Synthesis"],
          demoUrl: "https://lxlnimalxl.github.io/futuristic-tactical-landing/",
          codeUrl: "https://github.com/lxlnimalxl/futuristic-tactical-landing"
        },
        {
          id: "deluxe",
          title: "Deluxe Strategy Board Game",
          category: "interactive",
          categoryLabel: "Game Engine",
          image: deluxeImg,
          description: "Interactive Ludo board game built with pure SVG coordinates, randomized dice roll physics, turn-based pawn movement engine, and winner fireworks.",
          tags: ["React 19", "SVG Game Engine", "Dice Physics", "Turn Machine"],
          demoUrl: "https://lxlnimalxl.github.io/deluxe-strategy-board-game/",
          codeUrl: "https://github.com/lxlnimalxl/deluxe-strategy-board-game"
        },
        {
          id: "nevo",
          title: "Nevo Hypercar Automotive Showcase",
          category: "webapp",
          categoryLabel: "Automotive SaaS",
          image: nevoImg,
          description: "Luxury automotive showcase with interactive 3D color customizer, powertrain technical breakdown, range estimator, and test drive booking modal.",
          tags: ["React 19", "Tailwind v4", "Spec Customizer", "3D Canvas"],
          demoUrl: "https://lxlnimalxl.github.io/nevo-futuristic-car-website/",
          codeUrl: "https://github.com/lxlnimalxl/nevo-futuristic-car-website"
        },
        {
          id: "planto",
          title: "Planto Botanical Store",
          category: "webapp",
          categoryLabel: "E-Commerce",
          image: plantoImg,
          description: "Curated botanical e-commerce platform with organic minimalist layout, interactive slideover cart, quick search modal, and plant care guides.",
          tags: ["React 19", "Tailwind v4", "Cart Machine", "Botanical UX"],
          demoUrl: "https://lxlnimalxl.github.io/planto-interactive-botanical-website/",
          codeUrl: "https://github.com/lxlnimalxl/planto-interactive-botanical-website"
        },
        {
          id: "finwise",
          title: "FinWise Wealth & Budget Manager",
          category: "webapp",
          categoryLabel: "FinTech Mobile",
          image: finwiseImg,
          description: "Mobile wealth management interface with multi-account ledgers, transaction charts, savings target trackers, and quick expense categorization.",
          tags: ["React 19", "Mobile App UI", "Analytics Charts", "Ledger System"],
          demoUrl: "https://lxlnimalxl.github.io/finwise-mobile-banking-app/",
          codeUrl: "https://github.com/lxlnimalxl/finwise-mobile-banking-app"
        },
        {
          id: "novabank",
          title: "NovaBank Digital Banking",
          category: "webapp",
          categoryLabel: "FinTech Mobile",
          image: novabankImg,
          description: "Next-gen banking application with interactive credit card carousel stack, biometrics simulation, spending heatmaps, and instant transfer workflow.",
          tags: ["React 19", "Card Carousel", "Quick Transfer", "Mobile Banking"],
          demoUrl: "https://lxlnimalxl.github.io/novabank-mobile-banking-app/",
          codeUrl: "https://github.com/lxlnimalxl/novabank-mobile-banking-app"
        },
        {
          id: "nexcent",
          title: "Nexcent Corporate B2B Platform",
          category: "webapp",
          categoryLabel: "Corporate SaaS",
          image: nexcentImg,
          description: "High-conversion corporate community agency platform with animated statistic counters, member management showcase, and case studies.",
          tags: ["React 19", "Tailwind v4", "B2B SaaS", "Metric Counters"],
          demoUrl: "https://lxlnimalxl.github.io/nexcent-agency-landing-page/",
          codeUrl: "https://github.com/lxlnimalxl/nexcent-agency-landing-page"
        },
        {
          id: "brandingcards",
          title: "Executive Corporate Stationery & Identity System",
          category: "design",
          categoryLabel: "Brand Identity & Print",
          image: figmaBrandingCardsImg,
          description: "Comprehensive corporate branding suite including premium tactile business cards, envelope mockups, typography guidelines, vector logomarks, and cohesive print-ready assets.",
          tags: ["Brand Identity", "Figma", "Print Systems", "Vector Art"],
          demoUrl: "https://www.figma.com/design/XAKmDNlfHCWm0sScko2FxT/Resume-En?node-id=0-79",
          codeUrl: "https://www.figma.com/design/XAKmDNlfHCWm0sScko2FxT/Resume-En?node-id=0-79"
        },
        {
          id: "graphicposters",
          title: "Cybersecurity & Developer Conference Posters",
          category: "design",
          categoryLabel: "Graphic Design & Posters",
          image: figmaGraphicPostersImg,
          description: "Visual media series created for developer meetups, cybersecurity seminars, Git workshops, and 'Hack The Gibson' culture posters with strong typography and high visual impact.",
          tags: ["Graphic Design", "Photoshop", "Cybersecurity", "Poster Art"],
          demoUrl: "https://www.figma.com/design/XAKmDNlfHCWm0sScko2FxT/Resume-En?node-id=0-96",
          codeUrl: "https://www.figma.com/design/XAKmDNlfHCWm0sScko2FxT/Resume-En?node-id=0-96"
        }
      ]
    },
    resume: {
      title: "Executive Curriculum Vitae",
      subtitle: "Verified career trajectory, venture track records, academic foundation, certifications, and engineering history.",
      sections: {
        summary: "Executive Summary",
        experience: "Professional Experience & Ventures",
        education: "Academic Education",
        certifications: "Certifications & Credentials",
        philosophy: "Engineering & Design Philosophy",
      },
      philosophyText:
        "I do not just write code blindly; I design intuitive interfaces and build systems that are secure by default. You get the creative eye of a designer and the rigorous logic of a security-focused engineer in a single technical partner.",
      experienceList: [
        {
          period: "2023 — Present",
          title: "Co-Founder & Chief Technology Officer (CTO)",
          company: "Boghcheh (https://boghcheh.com/)",
          location: "Tehran & Nationwide / Remote",
          achievements: [
            "Co-founded and engineered Boghcheh, a premier specialized e-commerce platform dedicated to Persian authentic handicrafts and artisan creations.",
            "Designed and implemented high-conversion catalog UX, multi-vendor product databases, automated shipping calculations, and secure Iranian banking payment gateway connections.",
            "Established cohesive brand identity, photography guidelines, and design systems bridging cultural craftsmanship with modern minimalist digital experience."
          ]
        },
        {
          period: "2021 — Present",
          title: "Co-Founder & Lead Systems/Hardware Engineer",
          company: "Megabyte System (مگابایت سیستم)",
          location: "Birjand / Hybrid",
          achievements: [
            "Co-founded enterprise computer engineering, systems infrastructure, and IT hardware solutions firm.",
            "Engineered custom microcontroller IoT prototypes and telemetry systems using Arduino and ESP32 with serial and cloud communication.",
            "Administered secure Linux server environments (LPIC-1 certified), automated disaster recovery workflows, and conducted vulnerability penetration tests for corporate networks."
          ]
        },
        {
          period: "2022 — Present",
          title: "Lead Full-Stack Software Engineer & UI/UX Consultant",
          company: "Independent & International Contracts",
          location: "Remote",
          achievements: [
            "Architected and deployed 19+ production platforms spanning luxury e-commerce, cinema ticketing, legal counsel, and mobile fintech.",
            "Eliminated client coordination overhead by handling both Figma design systems and production React 19 / Django 5 codebases.",
            "Engineered secure-by-default RESTful endpoints, implementing OWASP defenses, CSRF/CORS hardening, and token authentication.",
            "Designed and automated ETL data scrapers, Telegram bots, and backend cron jobs that eliminated hundreds of hours of manual operations."
          ]
        },
        {
          period: "2020 — 2022",
          title: "Full-Stack Web & WordPress Engineer",
          company: "Freelance & Digital Agencies",
          location: "Hybrid / Remote",
          achievements: [
            "Developed and optimized custom WooCommerce storefronts, achieving sub-second page loads and high checkout conversion rates.",
            "Created responsive frontend interfaces from scratch using JavaScript (ES6+), Bootstrap, and semantic HTML5/CSS3.",
            "Hardened WordPress installations against brute-force attacks, malware injection, and unauthorized database access.",
            "Managed server hosting environments, automated database backups, and DNS routing configurations."
          ]
        },
        {
          period: "2019 — 2021",
          title: "UI/UX & Digital Brand Identity Designer",
          company: "Creative Studio & Brand Projects",
          location: "Remote",
          achievements: [
            "Crafted user journeys, wireframes, and high-fidelity clickable interactive prototypes in Figma and Adobe Creative Suite.",
            "Designed unified corporate visual identities including typography guidelines, vector logotypes, and marketing assets.",
            "Conducted user experience evaluations and accessibility (a11y) audits to ensure inclusive digital interfaces."
          ]
        }
      ],
      educationList: [
        {
          degree: "Bachelor of Science in Computer Engineering",
          institution: "Shokouh Birjand University",
          period: "2021 — 2025",
          details: "Focused on Software Architecture, Distributed Systems, Algorithms & Data Structures, and Information Security."
        },
        {
          degree: "High School Diploma in Mathematics & Physics",
          institution: "National High School Curriculum",
          period: "2017 — 2020",
          details: "Advanced foundations in calculus, analytical geometry, discrete mathematics, and classical physics."
        }
      ],
      certificationsList: [
        {
          name: "LPIC-1 Linux System Administrator",
          issuer: "Linux Professional Institute",
          description: "System architecture, GNU/Linux commands, devices, Linux filesystems, and shell scripting."
        },
        {
          name: "ICDL (International Computer Driving Licence)",
          issuer: "ICDL Foundation",
          description: "Computer essentials, online security, spreadsheets, databases, and IT fundamentals."
        }
      ]
    },
    contact: {
      title: "Let's Build Something Exceptional",
      subtitle: "Send me a message about what you are trying to build. Let's figure out the smartest and most secure way to get it done.",
      email: "nimarounaghi11@gmail.com",
      phone: "+98 915 779 9337 / +98 993 540 2771",
      telegram: "@lxlnimalxl",
      linkedin: "linkedin.com/in/nima-rounaghi",
      github: "github.com/lxlnimalxl",
      form: {
        nameLabel: "Your Name",
        emailLabel: "Your Email Address",
        subjectLabel: "Project Type / Subject",
        messageLabel: "Tell me about your project, timeline, and goals",
        submitBtn: "Send Project Inquiry",
        successMsg: "Thank you for reaching out. Your message has been prepared for dispatch."
      }
    },
    footer: {
      copyright: "© 2026 Seyyed Nima Rounaghi. All rights reserved.",
      notice: "Crafted with React 19, Tailwind CSS v4, and rigorous engineering principles."
    }
  },

  fa: {
    meta: {
      title: "سید نیما رونقی | مهندس نرم‌افزار فول‌استک و طراح UI/UX | هم‌بنیان‌گذار",
      role: "مهندس نرم‌افزار فول‌استک و طراح UI/UX",
      subrole: "هم‌بنیان‌گذار بقچه و مگابایت سیستم",
      specialty: "توسعه پلتفرم‌های اختصاصی و امنیت",
      status: "آماده همکاری در پروژه‌های سطح اول بین‌المللی و ریموت فول‌تایم",
      location: "آماده همکاری بین‌المللی ریموت",
      experienceYears: "۵+ سال تجربه",
      completedProjects: "۱۹+ محصول و نمونه‌کار تخصصی",
    },
    nav: {
      about: "درباره من",
      services: "تخصص‌ها",
      projects: "نمونه‌کارها",
      stack: "مهارت‌های فنی",
      resume: "رزومه و سوابق",
      contact: "تماس و همکاری",
      downloadPdf: "دانلود PDF رزومه",
      viewMode: "حالت نمایش",
      portfolio: "پورتفولیو",
      resumeView: "رزومه رسمی",
    },
    hero: {
      greeting: "سلام، من سید نیما رونقی هستم",
      headline: "مهندسی پلتفرم‌های پرسرعت با معماری امن، منطق دقیق مهندسی و ظرافت در طراحی محصول.",
      subheadline:
        "مدیریت چند فریلنسر مجزا برای یک پروژه—یک طراح، یک برنامه‌نویس و یک متخصص امنیت—فرایندی پرهزینه، فرسایشی و پراسترس است؛ کدها می‌شکنند، طرح نهایی با دیزاین فیگما همخوانی ندارد و ددلاین‌ها از دست می‌روند. من رویکردی کاملاً یکپارچه ارائه می‌دهم: توسعه پلتفرم‌های امن و فوق‌سریع از صفر تا صد، با هدایت همزمان طراحی خلاقانه محصول و مهندسی پیشرفته نرم‌افزار زیر یک سقف.",
      ctaPrimary: "مشاهده نمونه‌کارها",
      ctaSecondary: "دانلود رزومه رسمی دو زبانه",
      stats: [
        { value: "۱۹+", label: "پلتفرم پروداکشن" },
        { value: "۱۰۰٪", label: "تطابق کامل فیگما با کد" },
        { value: "۵+ سال", label: "توسعه نرم‌افزار و دیزاین" },
        { value: "امنیت محور", label: "تست نفوذ و ایمن‌سازی" },
      ]
    },
    services: {
      title: "خدماتی که مسئولیت کامل آن را بر عهده می‌گیرم",
      subtitle: "اجرای کامل چرخه حیات نرم‌افزار بدون اصطکاک میان تیم‌ها، بدون باگ‌های ارتباطی و با بالاترین استاندارد.",
      items: [
        {
          id: "platform-dev",
          title: "توسعه پلتفرم‌های اختصاصی و وب‌اپلیکیشن‌ها",
          description: "پیاده‌سازی وب‌اپلیکیشن‌های تک‌صفحه‌ای مدرن، سامانه‌های SaaS و ابزارهای سازمانی با React 19، Vite، Django REST Framework و معماری کامپوننت ماژولار."
        },
        {
          id: "uiux-branding",
          title: "طراحی رابط و تجربه کاربری (UI/UX) و هویت بصری",
          description: "خلق سیستم‌های دیزاین دقیق در فیگما، پیاده‌سازی مو به موی دیزاین در کد، چیدمان واکنش‌گرای موبایل، تایپوگرافی اصولی و هویت برند پایدار دیجیتال."
        },
        {
          id: "bot-automation",
          title: "توسعه ربات‌های اختصاصی و خودکارسازی فرآیندها",
          description: "طراحی وب اسکرپرهای پیشرفته، ربات‌های اتوماسیون تلگرام و دیسکورد، پایپ‌لاین‌های ETL و اتصال API برای صرفه‌جویی در ده‌ها ساعت کار دستی."
        },
        {
          id: "wordpress-opt",
          title: "توسعه و بهینه‌سازی حرفه‌ای سایت‌های وردپرسی",
          description: "توسعه فروشگاه‌های ووکامرس پرسرعت، کاهش زمان لودینگ زیر یک ثانیه، بهینه‌سازی کوئری‌های دیتابیس، ایمن‌سازی سرور و جلوگیری از حملات."
        },
        {
          id: "security-audit",
          title: "آدیت امنیتی و تست نفوذ سامانه‌های تحت وب",
          description: "بررسی ساختاریافته آسیب‌پذیری‌ها طبق OWASP Top 10، امن‌سازی فرآیندهای احراز هویت، دفاع در برابر XSS/CSRF و پیکربندی امن سرور لینوکس (LPIC-1)."
        },
        {
          id: "hardware-iot",
          title: "نمونه‌سازی سخت‌افزاری و سیستم‌های امبدد (IoT)",
          description: "اتوماسیون با میکروکنترلرهای Arduino و ESP32، شبکه‌های حسگری بی‌سیم، مانیتورینگ آنلاین دیتای سخت‌افزار در داشبوردهای ابری."
        }
      ]
    },
    stack: {
      title: "جعبه ابزار تخصصی و فناوری‌های مورد استفاده",
      subtitle: "مجموعه‌ای منتخب از فریم‌ورک‌ها و استانداردهای روز دنیا برای فرانت‌اند، بک‌اند، امنیت و سخت‌افزار.",
      categories: [
        {
          name: "معماری فرانت‌اند",
          tools: ["React 19", "Next.js", "Vite", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS v4", "Bootstrap", "HTML5 / CSS3", "Canvas API", "Web Audio"]
        },
        {
          name: "بک‌اند و توسعه وب سرویس",
          tools: ["Python 3.13", "Django 5.2", "Django REST Framework", "FastAPI", "Flask", "SQLAlchemy", "Node.js", "SQLite", "PostgreSQL", "معماری RESTful"]
        },
        {
          name: "دیزاین و رسانه دیجیتال",
          tools: ["فیگما (Figma)", "Adobe Photoshop", "Adobe Premiere Pro", "Canva", "CapCut", "سیستم‌های دیزاین", "معماری کامپوننت"]
        },
        {
          name: "زیرساخت و امنیت",
          tools: ["داکر (Docker)", "لینوکس (LPIC-1)", "تست نفوذ و پنتستینگ", "آدیت امنیت کد", "گیت و GitHub Actions", "Nginx", "SSL/TLS", "امنیت OWASP"]
        },
        {
          name: "سخت‌افزار و اینترنت اشیاء",
          tools: ["Arduino", "ESP32", "برنامه‌نویسی امبدد C/C++", "حسگرها و درایورها", "ارتباطات سریال", "تله‌متری ابری IoT"]
        }
      ]
    },
    projects: {
      title: "پروژه‌های بین‌المللی منتخب و آماده محصول",
      subtitle: "نوزده پلتفرم پروداکشن، استارتاپ‌های هم‌بنیان‌گذاری‌شده و نمونه‌کارهای تخصصی که با بالاترین سطح ظرافت طراحی و منطق مهندسی پیاده‌سازی شده‌اند.",
      filterAll: "همه پروژه‌ها",
      filterVentures: "بنیان‌گذاری و پلتفرم‌ها",
      filterFullStack: "فول‌استک (React + Django)",
      filterWebApps: "وب و اپلیکیشن‌ها",
      filterInteractive: "بازی و مدیا تعاملی",
      filterDesign: "برندینگ و سیستم‌های بصری",
      viewDemo: "مشاهده دموی آنلاین",
      viewCode: "سورس کد / مستندات",
      items: [
        {
          id: "boghcheh",
          title: "پلتفرم تخصصی صنایع دستی و دست‌بافته‌های بقچه",
          category: "ventures",
          categoryLabel: "هم‌بنیان‌گذار و تجارت الکترونیک",
          image: boghchehImg,
          description: "هم‌بنیان‌گذار و مدیر ارشد فنی (CTO) در پلتفرم تخصصی صنایع دستی بقچه. معماری چندفروشگاهی، گالری معرفی آثار هنرمندان اصیل ایرانی، محاسبه خودکار هزینه ارسال، دیتابیس محصولات و اتصال به درگاه‌های بانکی شاپرک.",
          tags: ["هم‌بنیان‌گذار", "تجارت الکترونیک", "صنایع دستی", "درگاه پرداخت"],
          demoUrl: "https://boghcheh.com/",
          codeUrl: "https://boghcheh.com/"
        },
        {
          id: "megabyte",
          title: "مگابایت سیستم؛ زیرساخت فناوری و اتوماسیون سخت‌افزار",
          category: "ventures",
          categoryLabel: "هم‌بنیان‌گذار و مهندسی سیستم‌ها",
          image: figmaWebProjectsImg,
          description: "هم‌بنیان‌گذار و مهندس ارشد سخت‌افزار و شبکه در مگابایت سیستم. اتوماسیون میکروکنترلری با برد‌های Arduino و ESP32، پیکربندی سرورهای لینوکس LPIC-1، عیب‌یابی سطح سخت‌افزار و آزمون نفوذ و ایمن‌سازی شبکه‌های سازمانی.",
          tags: ["هم‌بنیان‌گذار", "اینترنت اشیاء", "سرور لینوکس", "اتوماسیون سخت‌افزار"],
          demoUrl: "https://github.com/lxlnimalxl",
          codeUrl: "https://github.com/lxlnimalxl"
        },
        {
          id: "shopco",
          title: "پلتفرم فروشگاهی بین‌المللی SHOP.CO",
          category: "fullstack",
          categoryLabel: "فروشگاه فول‌استک لوکس",
          image: shopcoImg,
          description: "مارکت‌پلیس پوشاک مدرن با گالری ۳ زاویه‌ای محصول، فیلتر اسلایدی قیمت، انتخابگر سایز و رنگ، اعتبارسنجی کد تخفیف و صدور فاکتور رسمی خرید.",
          tags: ["React 19", "Django 5 REST", "Tailwind v4", "Canvas Confetti"],
          demoUrl: "https://lxlnimalxl.github.io/shopco-ecommerce-platform/",
          codeUrl: "https://github.com/lxlnimalxl/shopco-ecommerce-platform"
        },
        {
          id: "cinepass",
          title: "سامانه رزرواسیون بلیت سینما CinePass",
          category: "fullstack",
          categoryLabel: "رزرواسیون فول‌استک سینما",
          image: cinepassImg,
          description: "سامانه تعاملی بلیت سینما با فید فیلم، ماتریس صندلی‌های منحنی و بلیت رسمی تولیدشده با کیوآرکد وکتوری SVG.",
          tags: ["React 19", "Django 5 REST", "نمایشگر منحنی SVG", "کیوآر کد اختصاصی"],
          demoUrl: "https://lxlnimalxl.github.io/cinepass-cinema-ticket-booking/",
          codeUrl: "https://github.com/lxlnimalxl/cinepass-cinema-ticket-booking"
        },
        {
          id: "vakil",
          title: "سامانه حقوقی بین‌المللی وکیل و محاسبه‌گر هزینه",
          category: "fullstack",
          categoryLabel: "سامانه حقوقی LegalTech",
          image: vakilImg,
          description: "پلتفرم جامع خدمات حقوقی با موتور هوشمند محاسبه تمبر و هزینه‌های دادرسی، دایرکتوری وکلا و رزرو مشاوره تخصصی.",
          tags: ["React 19", "Django 5 REST", "موتور محاسبات دادگاه", "پرتال وکالت"],
          demoUrl: "https://lxlnimalxl.github.io/vakil-legal-platform/",
          codeUrl: "https://github.com/lxlnimalxl/vakil-legal-platform"
        },
        {
          id: "ashyaneh",
          title: "پلتفرم رزرواسیون اقامتگاه و هتل آشیانه",
          category: "fullstack",
          categoryLabel: "سامانه رزرواسیون سفر",
          image: ashyanehImg,
          description: "سامانه دوزبانه رزرو هتل با قابلیت شبیه‌سازی همزمان نمای دسکتاپ و فریم گوشی موبایل، فیلترهای پیشرفته و صدور فاکتور.",
          tags: ["React 19", "Django 5 REST", "شبیه‌ساز دوگانه", "موتور رزرواسیون"],
          demoUrl: "https://lxlnimalxl.github.io/ashyaneh-hotel-booking-platform/",
          codeUrl: "https://github.com/lxlnimalxl/ashyaneh-hotel-booking-platform"
        },
        {
          id: "sociosphere",
          title: "شبکه اجتماعی فول‌استک SocioSphere",
          category: "fullstack",
          categoryLabel: "شبکه اجتماعی مدرن",
          image: sociosphereImg,
          description: "اپلیکیشن کامل شبکه اجتماعی با قابلیت ارسال پست، لایک و کامنت زنده، استوری تعاملی، اتاق چت و شبیه‌ساز سه صفحه‌ای همزمان.",
          tags: ["React 19", "Django 5 REST", "کانواس سه‌گانه", "موتور فید محتوا"],
          demoUrl: "https://lxlnimalxl.github.io/sociosphere-social-platform/",
          codeUrl: "https://github.com/lxlnimalxl/sociosphere-social-platform"
        },
        {
          id: "gemcutting",
          title: "سایت تخصصی تجهیزات و ابزارآلات گوهرتراشی",
          category: "webapp",
          categoryLabel: "فروشگاه تخصصی ابزار",
          image: figmaUiuxWebImg,
          description: "پلتفرم فروشگاهی و طراحی رابط کاربری تخصصی جهت عرضه ابزارآلات گوهرتراشی، دستگاه‌های تراش سنگ‌های قیمتی و دیسک‌های الماسه با کاتالوگ دقیق مشخصات فنی.",
          tags: ["طراحی UI/UX", "فروشگاه تخصصی", "ووکامرس", "کاتالوگ فنی"],
          demoUrl: "https://www.figma.com/design/XAKmDNlfHCWm0sScko2FxT/Resume-En?node-id=0-68",
          codeUrl: "https://www.figma.com/design/XAKmDNlfHCWm0sScko2FxT/Resume-En?node-id=0-68"
        },
        {
          id: "toystore",
          title: "طراحی رابط کاربری اپلیکیشن موبایل فروشگاه اسباب‌بازی",
          category: "webapp",
          categoryLabel: "اپلیکیشن موبایل و دیزاین",
          image: figmaMobileAppImg,
          description: "طراحی رابط کاربری اپلیکیشن موبایل فروشگاه اسباب‌بازی‌های فکری و آموزشی با دسته‌بندی رده‌های سنی، سبد خرید جذاب و فرآیند تسویه حساب اختصاصی والدین.",
          tags: ["طراحی اپ موبایل", "سیستم دیزاین", "تجربه کاربری", "فروشگاه کودک"],
          demoUrl: "https://www.figma.com/design/XAKmDNlfHCWm0sScko2FxT/Resume-En?node-id=0-58",
          codeUrl: "https://www.figma.com/design/XAKmDNlfHCWm0sScko2FxT/Resume-En?node-id=0-58"
        },
        {
          id: "cybergame",
          title: "لندینگ بازی سایبرپانک Cyber.Game",
          category: "interactive",
          categoryLabel: "مدیا و بازی تعاملی",
          image: cybergameImg,
          description: "لندینگ دارک‌مود با افکت‌های صوتی سینتایزشده تحت وب بدون فایل سنگین صوتی، ماتریس‌های نئونی متحرک و آتش‌بازی ذرات.",
          tags: ["React 19", "Tailwind v4", "Web Audio API", "کانفتی ذرات"],
          demoUrl: "https://lxlnimalxl.github.io/cyber-game-landing/",
          codeUrl: "https://github.com/lxlnimalxl/cyber-game-landing"
        },
        {
          id: "tactical",
          title: "پرتال بازی نظامی Tactical Strike",
          category: "webapp",
          categoryLabel: "بازی و وب‌اپلیکیشن",
          image: tacticalImg,
          description: "پلتفرم عملیات‌های تاکتیکی با پرونده کامل اپراتورها، ماتریس توانمندی‌ها، اشتراک پریمیوم و افکت‌های صوتی کلیک.",
          tags: ["React 19", "Tailwind v4", "روستر کاراکترها", "افکت صوتی تعاملی"],
          demoUrl: "https://lxlnimalxl.github.io/futuristic-tactical-landing/",
          codeUrl: "https://github.com/lxlnimalxl/futuristic-tactical-landing"
        },
        {
          id: "deluxe",
          title: "بازی استراتژیک تخته‌ای منچ لوکس (Ludo)",
          category: "interactive",
          categoryLabel: "موتور بازی برداری",
          image: deluxeImg,
          description: "بازی تعاملی منچ پیاده‌سازی‌شده با مختصات ریاضی برداری SVG، فیزیک تاس انداختن تصادفی و منطق نوبت‌دهی مهره‌ها.",
          tags: ["React 19", "موتور برداری SVG", "فیزیک تاس", "ماشین وضعیت نوبت"],
          demoUrl: "https://lxlnimalxl.github.io/deluxe-strategy-board-game/",
          codeUrl: "https://github.com/lxlnimalxl/deluxe-strategy-board-game"
        },
        {
          id: "nevo",
          title: "شو روم خودروهای سوپراسپرت Nevo",
          category: "webapp",
          categoryLabel: "شو روم خودرویی SaaS",
          image: nevoImg,
          description: "شوکیس خودروهای برقی لوکس با شخصی‌سازی ۳ بعدی رنگ، مشخصات فنی موتور، تخمین برد باتری و رزرو تست رانندگی.",
          tags: ["React 19", "Tailwind v4", "کاستومایزر رنگ", "کانواس ۳ بعدی"],
          demoUrl: "https://lxlnimalxl.github.io/nevo-futuristic-car-website/",
          codeUrl: "https://github.com/lxlnimalxl/nevo-futuristic-car-website"
        },
        {
          id: "planto",
          title: "فروشگاه گل و گیاهان آپارتمانی Planto",
          category: "webapp",
          categoryLabel: "فروشگاه آنلاین گیاهان",
          image: plantoImg,
          description: "پلتفرم گیاه‌شناسی مدرن با طراحی ارگانیک مینیمال، سبد خرید اسلایدی، مودال جستجوی سریع و راهنمای نگهداری گیاهان.",
          tags: ["React 19", "Tailwind v4", "سبد خرید سریع", "UX گیاه‌شناسی"],
          demoUrl: "https://lxlnimalxl.github.io/planto-interactive-botanical-website/",
          codeUrl: "https://github.com/lxlnimalxl/planto-interactive-botanical-website"
        },
        {
          id: "finwise",
          title: "سامانه مدیریت دارایی و بودجه FinWise",
          category: "webapp",
          categoryLabel: "فین‌تک همراه",
          image: finwiseImg,
          description: "رابط کاربری مدیریت امور مالی با دفترکل چند حسابی، نمودارهای تحلیلی تراکنش‌ها و ردیابی اهداف پس‌انداز.",
          tags: ["React 19", "UI اپلیکیشن موبایل", "نمودارهای تحلیلی", "سامانه دفترکل"],
          demoUrl: "https://lxlnimalxl.github.io/finwise-mobile-banking-app/",
          codeUrl: "https://github.com/lxlnimalxl/finwise-mobile-banking-app"
        },
        {
          id: "novabank",
          title: "همراه‌بانک دیجیتال NovaBank",
          category: "webapp",
          categoryLabel: "فین‌تک و بانکداری",
          image: novabankImg,
          description: "اپلیکیشن بانکداری نوین با اسلایدر کارت‌های اعتباری سه‌بعدی، شبیه‌ساز بیومتریک و جریان انتقال وجه آنی.",
          tags: ["React 19", "اسلایدر کارت اعتباری", "انتقال وجه آنی", "بانکداری مدرن"],
          demoUrl: "https://lxlnimalxl.github.io/novabank-mobile-banking-app/",
          codeUrl: "https://github.com/lxlnimalxl/novabank-mobile-banking-app"
        },
        {
          id: "nexcent",
          title: "پلتفرم آژانس شرکتی B2B Nexcent",
          category: "webapp",
          categoryLabel: "پلتفرم شرکتی سازمانی",
          image: nexcentImg,
          description: "پلتفرم مدیریت جوامع شرکتی با کانترهای آماری متحرک، شوکیس دسترسی کاربران و لندینگ پیج با نرخ تبدیل بالا.",
          tags: ["React 19", "Tailwind v4", "SaaS سازمانی", "کانترهای آماری"],
          demoUrl: "https://lxlnimalxl.github.io/nexcent-agency-landing-page/",
          codeUrl: "https://github.com/lxlnimalxl/nexcent-agency-landing-page"
        },
        {
          id: "brandingcards",
          title: "مجموعه هویت بصری سازمانی، کارت ویزیت و ست اداری",
          category: "design",
          categoryLabel: "هویت بصری و اوراق اداری",
          image: figmaBrandingCardsImg,
          description: "طراحی هویت بصری یکپارچه شرکتی شامل کارت‌های ویزیت لوکس، سربرگ و ست اداری، گایدلاین پالت رنگ و تایپوگرافی، و لوگوتایپ‌های وکتوری برداری.",
          tags: ["هویت بصری", "طراحی برندینگ", "کارت ویزیت", "وکتور آرت"],
          demoUrl: "https://www.figma.com/design/XAKmDNlfHCWm0sScko2FxT/Resume-En?node-id=0-79",
          codeUrl: "https://www.figma.com/design/XAKmDNlfHCWm0sScko2FxT/Resume-En?node-id=0-79"
        },
        {
          id: "graphicposters",
          title: "مجموعه پوسترهای گرافیکی رویدادهای فناوری و امنیت سایبری",
          category: "design",
          categoryLabel: "طراحی گرافیک و پوسترها",
          image: figmaGraphicPostersImg,
          description: "مجموعه آثار گرافیکی و پوسترهای رویدادهای تخصصی برنامه‌نویسی، سمینارهای امنیت سایبری، کارگاه‌های Git و پوسترهای مفهومی هکینگ با تایپوگرافی برجسته.",
          tags: ["طراحی پوستر", "فتوشاپ", "امنیت سایبری", "تایپوگرافی"],
          demoUrl: "https://www.figma.com/design/XAKmDNlfHCWm0sScko2FxT/Resume-En?node-id=0-96",
          codeUrl: "https://www.figma.com/design/XAKmDNlfHCWm0sScko2FxT/Resume-En?node-id=0-96"
        }
      ]
    },
    resume: {
      title: "رزومه و سوابق حرفه‌ای رسمی",
      subtitle: "پیشینه شغلی، تجربیات هم‌بنیان‌گذاری، تحصیلات آکادمیک، گواهینامه‌ها و فلسفه مهندسی نرم‌افزار.",
      sections: {
        summary: "خلاصه مدیریتی",
        experience: "سوابق حرفه‌ای و پروژه‌های هم‌بنیان‌گذاری",
        education: "تحصیلات دانشگاهی",
        certifications: "گواهینامه‌های تخصصی",
        philosophy: "فلسفه طراحی و مهندسی",
      },
      philosophyText:
        "من کدهارا بدون دیدگاه طراحی نمی‌نویسم؛ رابط‌های کاربری را با شهود انسانی خلق می‌کنم و سیستم‌ها را با معماری ایمن از پایه پایه‌ریزی می‌نمایم. کارفرما دید خلاقانه یک طراح و منطق بی‌چون‌وچرای یک مهندس مسلط به امنیت را همزمان در یک همراه فنی دریافت می‌کند.",
      experienceList: [
        {
          period: "۱۴۰۲ — اکنون (2023 — Present)",
          title: "هم‌بنیان‌گذار و مدیر ارشد فناوری (CTO)",
          company: "سامانه تخصصی صنایع دستی بقچه (boghcheh.com)",
          location: "تهران و سراسر کشور / دورکاری",
          achievements: [
            "هم‌بنیان‌گذاری و معماری فنی پلتفرم جامع صنایع دستی بقچه به عنوان بستر تجارت الکترونیک دست‌بافته‌ها، سرامیک و هنرهای اصیل ایرانی.",
            "پیاده‌سازی پایگاه‌داده چندفروشگاهی محصولات، محاسبه خودکار هزینه بسته‌بندی و ارسال پستی، و اتصال به درگاه‌های پرداخت امن شاپرک.",
            "طراحی هویت بصری، گایدلاین‌های عکاسی صنعتی محصول و سیستم طراحی دیجیتال که هنر اصیل ایرانی را با تجربه مدرن مینیمال وب پیوند داد."
          ]
        },
        {
          period: "۱۴۰۰ — اکنون (2021 — Present)",
          title: "هم‌بنیان‌گذار و مهندس ارشد سیستم‌ها و سخت‌افزار",
          company: "مگابایت سیستم (Megabyte System)",
          location: "بیرجند / هیبریدی",
          achievements: [
            "هم‌بنیان‌گذاری شرکت تخصصی خدمات مهندسی کامپیوتر، زیرساخت فناوری و راهکارهای سخت‌افزاری و شبکه.",
            "پیاده‌سازی پروژه‌های اتوماسیون اینترنت اشیاء (IoT) و سامانه‌های داده میکروکنترلری با تراشه‌های Arduino و ESP32 تحت ارتباطات سریال و وای‌فای.",
            "مدیریت سرورهای لینوکسی امن بر پایه سرفصل‌های استاندارد LPIC-1، اتوماسیون فرآیندهای بازیابی بحران و اجرای تست‌های نفوذ شبکه برای سازمان‌ها."
          ]
        },
        {
          period: "۱۴۰۱ — اکنون (2022 — Present)",
          title: "مهندس ارشد نرم‌افزار فول‌استک و مشاور طراحی UI/UX",
          company: "قراردادهای بین‌المللی و فریلنسینگ",
          location: "دورکاری / ریموت",
          achievements: [
            "معماری و توسعه بیش از ۱۹ پلتفرم جامع وب شامل سامانه‌های تجارت الکترونیک، رزرو بلیت، سامانه‌های حقوقی و فین‌تک.",
            "حذف هزینه‌های مضاعف و عدم هماهنگی میان طراح و برنامه‌نویس با پوشش کامل طراحی سیستم‌ها در فیگما و پیاده‌سازی بی‌نقص در React 19 و Django 5.",
            "پیاده‌سازی اندپوینت‌های RESTful امن با استانداردهای OWASP، محافظت در برابر حملات تزریق و پیاده‌سازی احراز هویت توکن‌محور.",
            "طراحی و راه‌اندازی ربات‌های اتوماسیون داده، ربات‌های تلگرام و کرون‌جاب‌های پردازشی که منجر به حذف صدها ساعت کار تکراری گردید."
          ]
        },
        {
          period: "۱۳۹۹ — ۱۴۰۱ (2020 — 2022)",
          title: "توسعه‌دهنده وب و متخصص وردپرس",
          company: "آژانس‌های دیجیتال مارکتینگ و پروژه‌های اختصاصی",
          location: "حضوری / دورکاری",
          achievements: [
            "طراحی و بهینه‌سازی فروشگاه‌های ووکامرس با لودینگ زیر یک ثانیه و بالاترین نرخ تبدیل خرید مشتریان.",
            "کدنویسی فرانت‌اند اختصاصی و بهینه‌سازی کدهای فرانت‌اند با JavaScript مدرن، Bootstrap و HTML5/CSS3 معنایی.",
            "ایمن‌سازی پلتفرم‌های وردپرسی در برابر حملات Brute-Force، بدافزارها و نفوذ به پایگاه‌داده.",
            "پیکربندی سرورهای هاستینگ، ایجاد پایپ‌لاین‌های خودکار بکاپ‌گیری از دیتابیس و مدیریت تنظیمات DNS."
          ]
        },
        {
          period: "۱۳۹۸ — ۱۴۰۰ (2019 — 2021)",
          title: "طراح رابط و تجربه کاربری (UI/UX) و هویت بصری",
          company: "استودیوهای طراحی و برندینگ",
          location: "دورکاری",
          achievements: [
            "خلق سفرهای کاربری (User Journey)، وایرفریم‌ها و پروتوتایپ‌های تعاملی باکیفیت در Figma و ادوبی.",
            "طراحی هویت جامع بصری سازمانی شامل راهنمای سبک تایپوگرافی، لوگوتایپ‌های وکتوری و اقلام تبلیغاتی دیجیتال.",
            "ارزیابی تجربه کاربری و آدیت استانداردهای دسترسی‌پذیری (a11y) برای اطمینان از سهولت کاربری در تمام دیوایس‌ها."
          ]
        }
      ],
      educationList: [
        {
          degree: "کارشناسی مهندسی کامپیوتر (نرم‌افزار)",
          institution: "دانشگاه شکوه بیرجند",
          period: "۱۴۰۰ — ۱۴۰۴ (2021 — 2025)",
          details: "تمرکز بر معماری نرم‌افزار، سیستم‌های توزیع‌شده، الگوریتم‌ها، ساختار داده و مبانی امنیت اطلاعات."
        },
        {
          degree: "دیپلم متوسطه ریاضی و فیزیک",
          institution: "آموزش و پرورش",
          period: "۱۳۹۶ — ۱۳۹۹ (2017 — 2020)",
          details: "پایه‌های پیشرفته در محاسبات دیفرانسیل، هندسه تحلیلی، ریاضیات گسسته و فیزیک کلاسیک."
        }
      ],
      certificationsList: [
        {
          name: "مدرک بین‌المللی LPIC-1 (مدیریت سیستم‌های لینوکس)",
          issuer: "Linux Professional Institute",
          description: "معماری سیستم‌عامل، دستورات پیشرفته گنو/لینوکس، فایل‌سیستم‌ها و شل اسکریپتینگ."
        },
        {
          name: "مدرک بین‌المللی مهارت‌های رایانه‌ای ICDL",
          issuer: "بنیاد جهانی ICDL",
          description: "مفاهیم اساسی کامپیوتر، امنیت آنلاین، اکسل، پایگاه‌های داده و مبانی IT."
        }
      ]
    },
    contact: {
      title: "بیایید با هم ایده‌های بزرگ را به واقعیت تبدیل کنیم",
      subtitle: "درباره پروژه‌ای که قصد اجرای آن را دارید پیامی ارسال کنید تا هوشمندانه‌ترین و امن‌ترین مسیر ساخت آن را برنامه‌ریزی کنیم.",
      email: "nimarounaghi11@gmail.com",
      phone: "09157799337 / 09935402771",
      telegram: "t.me/lxlnimalxl",
      linkedin: "linkedin.com/in/nima-rounaghi",
      github: "github.com/lxlnimalxl",
      form: {
        nameLabel: "نام و نام خانوادگی",
        emailLabel: "آدرس ایمیل",
        subjectLabel: "موضوع / نوع پروژه",
        messageLabel: "توضیحات پروژه، زمان‌بندی و اهداف خود را بنویسید",
        submitBtn: "ارسال درخواست همکاری",
        successMsg: "پیام شما آماده شد و برای بررسی سریع در دستور کار قرار گرفت."
      }
    },
    footer: {
      copyright: "© ۲۰۲۶ سید نیما رونقی. تمامی حقوق محفوظ است.",
      notice: "توسعه داده شده با React 19، Tailwind CSS v4 و استانداردهای دقیق مهندسی نرم‌افزار."
    }
  }
};

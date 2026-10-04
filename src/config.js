/**
 * TECHSHOYO REBRANDABLE CONFIGURATION
 * 
 * All content, brand variables, founders, services, and projects live here.
 * No hardcoded copy exists in individual components.
 * 
 * ⚠️ ACTION REQUIRED FOR CUSTOMIZATION:
 * - Replace Founder Photos: Update `photo` in `founders` array with your images (e.g., in `/public/images/founders/`).
 * - Replace Project Thumbnails: Update `thumbnail` in `projects` array with your screenshots (e.g., in `/public/images/projects/`).
 * - Replace Social Links: Update URLs in `socialLinks` object.
 * - Customize bios, roles, or add an accent color below!
 */

export const siteConfig = {
  // BRAND IDENTITY
  brand: {
    name: "TechShoyo",
    monogramText: "TS",
    tagline: "We build websites that make people stay.",
    subtext: "Websites, landing pages, link pages, and forms, designed and built by a team of three.",
    email: "techshoyo@techshoyo.me",
    location: "Delhi NCR, India",
    institution: "Christ University Delhi NCR",
    program: "BSc Data Science & AI",
    heroBadge: "Operating",
    selectedWorkSubtitle: "Selected work from our team of three.",
    ctaPrimary: "View Our Work",
    ctaSecondary: "Get a Quote",
    navCta: "Get in Touch",
    logoPath: "/techshoyo-monogram.svg",
    logoPng: "/logo-transparent.png",
  },

  // CSS VARIABLES / COLOR THEME (Dark-first, Monochrome, Expandable)
  theme: {
    cssVariables: {
      "--bg-black": "#000000",
      "--bg-card": "#0A0A0A",
      "--bg-elevated": "#111111",
      "--text-white": "#FAFAFA",
      "--text-muted": "#A1A1A1",
      "--text-subtle": "#6B6B6B",
      "--border-subtle": "rgba(255, 255, 255, 0.08)",
      "--border-medium": "rgba(255, 255, 255, 0.14)",
      "--border-strong": "rgba(255, 255, 255, 0.28)",
      "--accent-color": "#FAFAFA", /* Customize to add a subtle colored accent later, e.g. #3B82F6 or #10B981 */
      "--accent-glow": "rgba(255, 255, 255, 0.12)",
    },
  },

  // NAVIGATION LINKS
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  // TICKER / MARQUEE ITEMS
  marqueeItems: [
    "Website Development",
    "Landing Pages",
    "Link-in-Bio Hubs",
    "Form Architecture",
    "Speed Optimization",
    "Tailored Interactions",
    "Mobile-First Engineering",
    "Clean Typography",
  ],

  // SERVICES
  services: [
    {
      id: "web-dev",
      number: "01",
      title: "Website Development",
      description: "Full-scale custom websites built with clean code, lightning performance, and thoughtful interactions.",
      details: "Multi-page brand experiences, portfolio showcases, and company sites engineered from scratch.",
      icon: "Code2",
    },
    {
      id: "landing-pages",
      number: "02",
      title: "Landing Pages",
      description: "High-converting, laser-focused single pages designed to hook visitors and turn them into customers.",
      details: "Optimized for conversion funnels, product launches, SaaS propositions, and campaign drives.",
      icon: "Layout",
    },
    {
      id: "linktree",
      number: "03",
      title: "Linktree / Link-in-Bio Pages",
      description: "Bespoke, blazing fast social landing hubs that elevate your personal or creator brand beyond default templates.",
      details: "Custom domain support, brand-matched micro-layouts, analytics readiness, and zero third-party branding.",
      icon: "Share2",
    },
    {
      id: "form-design",
      number: "04",
      title: "Form Design & Integration",
      description: "Intuitive, accessible, frictionless forms with real-time feedback and seamless database integrations.",
      details: "Multi-step client questionnaires, onboarding flows, lead capture systems, and validated inquiry forms.",
      icon: "FileCheck",
    },
  ],

  // PROJECTS (Selected Work)
  projects: [
    {
      id: "forge",
      title: "Forge",
      type: "Design & Development",
      tag: "Live Client Site",
      url: "https://forgeee.framer.website/",
      description: "Minimalist software studio showcase featuring tactile geometry, dark contrast, and precise typography.",
      thumbnail: "/images/projects/forge.jpg",
      gradient: "from-zinc-900 via-neutral-900 to-black",
      badge: null,
      year: "2025",
    },
    {
      id: "lumina",
      title: "Lumina",
      type: "Interactive Experience",
      tag: "Live Site",
      url: "https://luminaaa.framer.website/",
      description: "Ambient lighting and creative product showcase featuring smooth tactile interactions and subtle luminescence.",
      thumbnail: "/images/projects/lumina.jpg",
      gradient: "from-neutral-900 via-stone-900 to-black",
      badge: null,
      year: "2025",
    },
    {
      id: "replate",
      title: "Replate",
      type: "Sustainable Commerce",
      tag: "Live Site",
      url: "https://47akm3133.wixsite.com/replate",
      description: "Clean digital storefront crafted to reduce food waste by connecting surplus meals with eco-conscious consumers.",
      thumbnail: "/images/projects/replate.jpg",
      gradient: "from-zinc-900 via-zinc-950 to-black",
      badge: null,
      year: "2025",
    },
    {
      id: "voidrunners",
      title: "Voidrunners",
      type: "Concept Project",
      tag: "Concept Project",
      url: "https://voidrunners-landing.vercel.app",
      description: "Atmospheric sci-fi gaming universe landing hub with cybernetic dark gradients and sharp HUD elements.",
      thumbnail: "/images/projects/voidrunners.jpg",
      badge: "Concept Project",
      year: "2026",
    },
    {
      id: "lumen-dental",
      title: "Lumen Dental Studio",
      type: "Concept Project",
      tag: "Concept Project",
      url: "https://lumen-dental-studio-kappa.vercel.app/",
      description: "Boutique dental clinic web experience with serene luxury aesthetics, treatment overviews, and appointment booking.",
      thumbnail: "/images/projects/lumen-dental.jpg",
      gradient: "from-zinc-900 via-gray-950 to-black",
      badge: "Concept Project",
      year: "2026",
    },
  ],

  // PROCESS STEPS
  process: [
    {
      step: "01",
      name: "Discover",
      tagline: "Define the core problem",
      description: "We align on your goals, target audience, and brand personality before touching a single line of code. We clarify your offering so every section has a purpose.",
    },
    {
      step: "02",
      name: "Design",
      tagline: "High-contrast visual hierarchy",
      description: "We craft clean, modern layouts with geometric typography, generous white space, and subtle motion prototypes that match your vision.",
    },
    {
      step: "03",
      name: "Build",
      tagline: "Clean code & smooth motion",
      description: "We develop the site mobile-first with modern tooling (React, Vite, Tailwind). Every animation runs at 60fps with zero bloat and zero lag.",
    },
    {
      step: "04",
      name: "Launch",
      tagline: "Fast, indexed, and ready",
      description: "We configure your custom domain, perform rigorous Lighthouse audits, optimize Open Graph SEO previews, and hand over clean ownership.",
    },
  ],

  // ABOUT STORY & FOUNDERS
  about: {
    heading: "Built by students who ship.",
    storyParagraph1: "TechShoyo began in late-night study lounges and campus cafes at Christ University Delhi NCR. As three Data Science and AI students, we spent our days analyzing algorithms and neural networks, but we realized that our real passion lay in turning abstract ideas into tangible, live digital products that people actually enjoy using.",
    storyParagraph2: "We noticed too many local businesses, student startups, and independent creators were stuck with bloated templates, slow load times, or agencies charging enterprise prices for basic sites. We set out to offer the antidote: honest craftsmanship, fast turnarounds, direct access to the developers writing your code, and high-performance websites that leave a lasting impression.",
    badge: "BSc Data Science & AI, Christ University",
  },

  // ⚠️ FOUNDERS: REPLACE ROLES, BIOS, OR PHOTOS HERE
  founders: [
    {
      id: "viraaj",
      name: "Viraaj",
      // ⚠️ REPLACE ROLE HERE IF NEEDED:
      role: "Co-Founder & Technical Lead",
      // ⚠️ REPLACE BIO HERE IF NEEDED:
      bio: "Focuses on frontend architecture, smooth motion systems, and crafting responsive user experiences that feel crisp and weightless.",
      // ⚠️ REPLACE WITH REAL PHOTO: Replace `null` with path e.g. "/images/founders/viraaj.jpg"
      photo: null,
      credentials: "BSc Data Science & AI",
      institution: "Christ University Delhi NCR",
    },
    {
      id: "ansh",
      name: "Ansh",
      // ⚠️ REPLACE ROLE HERE IF NEEDED:
      role: "Co-Founder & Design Engineer",
      // ⚠️ REPLACE BIO HERE IF NEEDED:
      bio: "Obsessed with geometric typography, visual balance, and translating brand identities into razor-sharp digital interfaces.",
      // ⚠️ REPLACE WITH REAL PHOTO: Replace `null` with path e.g. "/images/founders/ansh.jpg"
      photo: null,
      credentials: "BSc Data Science & AI",
      institution: "Christ University Delhi NCR",
    },
    {
      id: "suryansh",
      name: "Suryansh",
      // ⚠️ REPLACE ROLE HERE IF NEEDED:
      role: "Co-Founder & Full-Stack Developer",
      // ⚠️ REPLACE BIO HERE IF NEEDED:
      bio: "Specializes in data-driven logic, rock-solid form structures, API pipelines, and optimizing load times for peak Lighthouse performance.",
      // ⚠️ REPLACE WITH REAL PHOTO: Replace `null` with path e.g. "/images/founders/suryansh.jpg"
      photo: null,
      credentials: "BSc Data Science & AI",
      institution: "Christ University Delhi NCR",
    },
  ],

  // WHY CHOOSE US
  whyUs: {
    heading: "Why TechShoyo?",
    subheading: "No enterprise bureaucracy. Just three dedicated builders delivering modern web experiences.",
    stats: [
      { value: 5, suffix: "+", label: "Shipped Projects", description: "Real, live production web applications and concepts." },
      { value: 3, suffix: "", label: "Founders & Builders", description: "Direct collaboration with the developers creating your site." },
      { value: 100, suffix: "%", label: "Mobile-First", description: "Engineered specifically for handheld devices and touch." },
      { value: 60, suffix: "fps", label: "Smooth Motion", description: "Butter-smooth Lenis scrolling and restrained Framer animations." },
    ],
    features: [
      {
        title: "Direct Founder Access",
        description: "You speak directly to Viraaj, Ansh, and Suryansh. No account executives, no games of telephone, and zero miscommunications.",
        icon: "Users",
      },
      {
        title: "Fast Turnarounds",
        description: "Because our workflow is lean and focused, we measure timelines in days and weeks, not quarters. We ship quickly without cutting corners.",
        icon: "Zap",
      },
      {
        title: "High Performance & AA Contrast",
        description: "Every page is tuned for sub-second initial loads, clean semantic HTML, AA contrast compliance, and top-tier Lighthouse scores.",
        icon: "ShieldCheck",
      },
      {
        title: "Zero Vendor Lock-In",
        description: "You receive clean, modular codebases or platform access. You own your code, domains, and assets completely.",
        icon: "LockOpen",
      },
    ],
  },

  // CONTACT SECTION & FORM CONFIG
  contact: {
    heading: "Let's build something.",
    subheading: "Have a project in mind, need a quote, or want to revamp an existing site? Send us a message and we'll reply within 24 hours.",
    email: "techshoyo@techshoyo.me",
    serviceOptions: [
      "Website Development",
      "Landing Page",
      "Linktree / Link-in-Bio Page",
      "Form Design & Integration",
      "Consultation / Other",
    ],
  },

  // SOCIAL LINKS (Update with your handles)
  // ⚠️ REPLACE SOCIAL LINKS HERE
  socialLinks: [
    { name: "Email", href: "mailto:techshoyo@techshoyo.me", label: "techshoyo@techshoyo.me" },
    { name: "GitHub", href: "https://github.com/techshoyo", label: "github.com/techshoyo" },
    { name: "LinkedIn", href: "https://linkedin.com/company/techshoyo", label: "linkedin.com/company/techshoyo" },
    { name: "Twitter", href: "https://x.com/techshoyo", label: "@techshoyo" },
  ],

  // FOOTER
  footer: {
    wordmark: "TechShoyo",
    copyright: "© 2026 TechShoyo. Founded by students who ship.",
    note: "Crafted with React, Tailwind CSS, Lenis, and Framer Motion.",
  },
};

export default siteConfig;

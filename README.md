# TechShoyo — Web Agency Website

A high-performance, dark-first, monochrome single-page agency website built for **TechShoyo**, founded by Viraaj, Ansh, and Suryansh (BSc Data Science and AI at Christ University).

Built with **React + Vite + Tailwind CSS**, **Framer Motion**, and **Lenis** smooth scrolling.

---

## 🚀 Live Local Development

The project is located at:
```
C:\Users\viraa\.gemini\antigravity-ide\scratch\techshoyo
```

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Dev Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
npm run preview
```

---

## 🎨 Brand & Design System

- **Identity**: Bold white "TS" monogram on pure black (`#000000`).
- **Color Palette**: Dark-first, pure monochrome with CSS variables:
  - `--bg-black`: `#000000`
  - `--bg-card`: `#0A0A0A`
  - `--bg-elevated`: `#111111`
  - `--text-white`: `#FAFAFA`
  - `--text-muted`: `#A1A1A1`
  - `--text-subtle`: `#6B6B6B`
  - `--border-subtle`: `rgba(255, 255, 255, 0.08)`
  - `--border-medium`: `rgba(255, 255, 255, 0.14)`
  - `--accent-color`: `#FAFAFA` (can be changed to an accent color anytime in `src/config.js`)
- **Typography**: 
  - Headings: `Space Grotesk` & `Sora`
  - Body: `Inter`
- **Shapes**: Angular cuts and rounded chamfers echoing the TS logo monogram, fine noise/grain overlay, subtle grid lines, and soft white glows.

---

## ⚙️ Rebrandable Configuration (`src/config.js`)

**All website content is centralized in `src/config.js`. No text is hardcoded in components.**

### 📍 Key Customization Spots:

1. **Founders Photos & Roles**:
   - Location: `src/config.js` -> `siteConfig.founders`
   - Place your real headshots in `public/images/founders/viraaj.jpg`, `ansh.jpg`, `suryansh.jpg`.
   - Update the `photo` field from `null` to your file path.
   - Adjust `role` and `bio` as you wish.

2. **Project Screenshots**:
   - Location: `src/config.js` -> `siteConfig.projects`
   - Place project screenshots in `public/images/projects/forge.webp`, `lumina.webp`, etc.
   - Update the `thumbnail` property from `null` to `"/images/projects/<name>.webp"`.

3. **Social Handles**:
   - Location: `src/config.js` -> `siteConfig.socialLinks`
   - Update the URLs for GitHub, LinkedIn, Twitter/X, and Instagram.

4. **Agency Email**:
   - Location: `src/config.js` -> `siteConfig.brand.email` (`techshoyo@techshoyo.me`).

---

## 📂 Project Structure

```
techshoyo/
├── public/
│   ├── favicon.svg             # Monogram SVG Favicon
│   ├── favicon.png             # PNG Favicon
│   ├── og-image.png            # Open Graph banner (1200x630)
│   ├── logo-transparent.png    # Transparent TS Monogram
│   └── techshoyo-monogram.svg  # Vector Monogram SVG
├── src/
│   ├── components/
│   │   ├── TSMonogram.jsx      # Vector SVG component with path animation
│   │   ├── Preloader.jsx       # <1s Monogram draw & wipe-up intro
│   │   ├── ProgressBar.jsx     # Top white scroll progress indicator
│   │   ├── CustomCursor.jsx    # Desktop magnetic dot cursor
│   │   ├── SmoothScroll.jsx    # Lenis smooth scrolling engine
│   │   ├── Navbar.jsx          # Frosted glass, scroll hide/show, magnetic button
│   │   ├── Hero.jsx            # Word-by-word reveal, faint parallax TS, CTAs
│   │   ├── Services.jsx        # 4 cards with border glow sweep
│   │   ├── Work.jsx            # 5 project cards + cursor view bubble
│   │   ├── Process.jsx         # Scroll-drawing timeline & illuminated nodes
│   │   ├── About.jsx           # Student story + 3 founder cards with tilt
│   │   ├── WhyUs.jsx           # Animated stats count-up + 4 pillars
│   │   ├── Contact.jsx         # Floating-label form + animated checkmark
│   │   └── Footer.jsx          # Giant wordmark reveal + navigation
│   ├── styles/
│   │   └── animations.js       # Shared Framer Motion transitions
│   ├── config.js               # Centralized rebrandable content & tokens
│   ├── App.jsx                 # Page layout & section assembly
│   ├── index.css               # Tailwind & design system utilities
│   └── main.jsx
├── tailwind.config.js
├── vercel.json                 # Vercel SPA routing & cache headers
└── package.json
```

---

## 🚢 Vercel Deployment Instructions

### Option A: Deploy via GitHub (Recommended)
1. Initialize Git in the project directory:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of TechShoyo website"
   ```
2. Push the repository to GitHub:
   ```bash
   git remote add origin https://github.com/techshoyo/website.git
   git branch -M main
   git push -u origin main
   ```
3. Go to [vercel.com](https://vercel.com/) and click **"Add New Project"**.
4. Import your repository. Vercel automatically detects **Vite**:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**.

### Option B: Deploy via Vercel CLI
```bash
npx vercel
```
Follow the interactive prompts to deploy directly from your terminal.

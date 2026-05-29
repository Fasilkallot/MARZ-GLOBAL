# MARZ GLOBAL UAE

**Marz Global Trading FZE** — Corporate industrial trading website.

## Tech Stack
- React + Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- React Helmet Async
- Lucide React

## Getting Started

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── assets/
│   ├── logo.png
│   └── products/      # Product category images
├── components/
│   ├── layout/        # Navbar, Footer, PageBanner, SectionContainer
│   ├── sections/      # HeroSection, AboutPreview, Products, Industries, etc.
│   └── ui/            # PrimaryButton, ProductCard, IndustryCard, etc.
├── data/
│   ├── companyInfo.js
│   ├── products.js
│   └── industries.js
├── pages/
│   ├── Home/
│   ├── About/
│   ├── Products/
│   ├── Industries/
│   ├── Contact/
│   ├── PrivacyPolicy/
│   └── CookiePolicy/
└── styles/
    └── global.css
```

## Contact Form Setup

The contact form uses **Web3Forms**. To activate:
1. Sign up at https://web3forms.com
2. Replace `YOUR_WEB3FORMS_KEY` in `src/pages/Contact/index.jsx` with your access key.

## Brand Colors
- Primary Blue: `#002E7A`
- Secondary Orange: `#F45A00`
- Dark: `#1A1A1A`
- Light: `#F8F9FB`

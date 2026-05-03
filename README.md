# AFIA EXPORT — Official Website

**Developed by [Alaa Younsi](https://github.com/alaayounsi) — Web Developer**

---

## About the Project

This is the official website for **AFIA EXPORT**, an Algerian company specializing in the international export of **cement and clinker**. The company supplies high-quality construction materials to markets across three continents — Europe, Africa, and the Middle East — operating under FOB maritime export conditions and holding EN 197-1 certification.

The website serves as a professional digital presence for AFIA EXPORT, covering the company's story, core activities, product catalog, target markets, certifications, and a direct contact channel for business inquiries. The site is fully multilingual, supporting **English**, **French**, and **Arabic**.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI component library |
| **TypeScript** | Static typing across the entire codebase |
| **Vite** | Build tool and development server |
| **Tailwind CSS** | Utility-first CSS framework for styling |
| **PostCSS + Autoprefixer** | CSS processing and cross-browser compatibility |
| **Nodemailer** | Server-side email handling for the contact form |
| **ESLint + typescript-eslint** | Code linting and quality enforcement |
| **Vercel** | Deployment and serverless API hosting |

---

## Project Structure

```
afiaexport-git/
├── api/
│   └── contact.js              # Serverless function — handles contact form emails
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/                 # Static assets (images, icons, etc.)
│   ├── components/
│   │   ├── About.tsx           # Company overview section
│   │   ├── Activities.tsx      # Core business activities section
│   │   ├── Contact.tsx         # Contact form and info section
│   │   ├── Documents.tsx       # Certificates and technical spec sheets
│   │   ├── Footer.tsx          # Site footer
│   │   ├── Hero.tsx            # Landing hero section
│   │   ├── Markets.tsx         # Target export markets section
│   │   ├── Mission.tsx         # Mission and vision section
│   │   ├── Navbar.tsx          # Navigation bar with language switcher
│   │   ├── Products.tsx        # Cement and clinker product catalog
│   │   ├── ScrollToTop.tsx     # Scroll-to-top utility component
│   │   ├── Strengths.tsx       # Company strengths section
│   │   └── WhyUs.tsx           # Why choose AFIA EXPORT section
│   ├── context/
│   │   ├── LanguageContext.tsx # Language context definition
│   │   ├── LanguageProvider.tsx# Language context provider (EN / FR / AR)
│   │   └── useLanguage.ts      # Custom hook for consuming language context
│   ├── i18n/
│   │   └── translations.ts     # All UI strings in English, French, and Arabic
│   ├── App.tsx                 # Root application component
│   ├── App.css                 # Global application styles
│   ├── index.css               # Base/reset styles
│   ├── main.tsx                # Application entry point
│   └── vite-env.d.ts           # Vite environment type declarations
├── index.html                  # HTML entry point
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── tsconfig.json               # Root TypeScript config
├── tsconfig.app.json           # App TypeScript config
├── tsconfig.node.json          # Node TypeScript config
├── eslint.config.js            # ESLint configuration
├── vercel.json                 # Vercel deployment configuration
└── package.json
```

---

## License & Usage Restrictions

**All rights reserved © Alaa Younsi.**

The source code, design, structure, and content of this project are the exclusive intellectual property of the developer. **No part of this project may be copied, reproduced, modified, distributed, or reused — in whole or in part — for any purpose, commercial or otherwise, without explicit written permission from the author.**

This repository is shared publicly for portfolio and reference purposes only.
    ...reactDom.configs.recommended.rules,
  },
})
```

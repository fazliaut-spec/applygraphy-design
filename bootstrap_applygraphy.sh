#!/usr/bin/env bash
set -euo pipefail

echo "==> Bootstrapping ApplyGraphy files..."

# پوشه‌ها
mkdir -p "app/(fa)" "app/(en)" app .github/workflows components lib public

# ---------- package.json ----------
cat > package.json <<'EOF'
{
  "name": "applygraphy",
  "private": true,
  "version": "0.1.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint . --max-warnings=0",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "next": "14.2.5",
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
  "devDependencies": {
    "@types/node": "20.12.12",
    "@types/react": "18.2.79",
    "@types/react-dom": "18.2.25",
    "autoprefixer": "10.4.19",
    "eslint": "9.8.0",
    "eslint-config-next": "14.2.5",
    "postcss": "8.4.38",
    "tailwindcss": "3.4.7",
    "typescript": "5.5.4"
  }
}
EOF

# ---------- next.config.mjs ----------
cat > next.config.mjs <<'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  i18n: {
    locales: ["fa", "en"],
    defaultLocale: "fa",
    localeDetection: true
  }
};
export default nextConfig;
EOF

# ---------- tailwind.config.ts ----------
cat > tailwind.config.ts <<'EOF'
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brandPink: "#EC4899",
        brandBlue: "#1E3A8A"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
} satisfies Config;
EOF

# ---------- postcss.config.cjs ----------
cat > postcss.config.cjs <<'EOF'
module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } };
EOF

# ---------- .eslintrc.cjs ----------
cat > .eslintrc.cjs <<'EOF'
module.exports = {
  root: true,
  extends: ["next/core-web-vitals"],
  rules: {
    "@next/next/no-img-element": "off"
  }
};
EOF

# ---------- prettier.config.cjs ----------
cat > prettier.config.cjs <<'EOF'
module.exports = { semi: true, singleQuote: false, printWidth: 100, tabWidth: 2 };
EOF

# ---------- app/globals.css ----------
cat > app/globals.css <<'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

:root { color-scheme: light dark; }
html, body { height: 100%; }
body { @apply bg-white text-gray-900 dark:bg-slate-950 dark:text-slate-100; }
.container { @apply max-w-6xl mx-auto px-4; }
.btn { @apply inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium shadow; }
.btn-primary { @apply btn bg-brandPink text-white hover:opacity-90; }
.btn-outline { @apply btn border border-gray-300 dark:border-slate-700; }
EOF

# ---------- app/layout.tsx ----------
cat > app/layout.tsx <<'EOF'
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "ApplyGraphy – Academic Migration Consulting",
  description: "Free consultation, tools, dashboards, and end-to-visa guidance."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
EOF

# ---------- components/Navbar.tsx ----------
cat > components/Navbar.tsx <<'EOF'
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isFA = pathname?.startsWith("/en") ? false : true;

  return (
    <header className="border-b border-gray-200 dark:border-slate-800">
      <div className="container h-16 flex items-center justify-between">
        <Link href={isFA ? "/" : "/en"} className="font-bold">
          ApplyGraphy
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href={isFA ? "/fa/tools" : "/en/tools"}>Tools</Link>
          <Link href={isFA ? "/fa/consult" : "/en/consult"} className="btn-primary">{isFA ? "مشاوره رایگان" : "Free Consultation"}</Link>
          <Link href={isFA ? "/en" : "/"} className="btn-outline">{isFA ? "EN" : "FA"}</Link>
        </nav>
      </div>
    </header>
  );
}
EOF

# ---------- app/(fa)/page.tsx ----------
cat > "app/(fa)/page.tsx" <<'EOF'
export default function PageFA() {
  return (
    <main className="container py-20">
      <h1 className="text-4xl font-bold mb-4">اپلای‌گرافی – مشاوره تحصیلی بین‌المللی</h1>
      <p className="text-lg opacity-80 mb-8">مشاوره رایگان، ابزار پذیرش، داشبورد کاربر و راهنمایی کامل تا ویزا.</p>
      <div className="flex gap-3">
        <a className="btn-primary" href="/fa/consult">مشاوره رایگان</a>
        <a className="btn-outline" href="/fa/tools">ابزارها</a>
      </div>
    </main>
  );
}
EOF

# ---------- app/(en)/page.tsx ----------
cat > "app/(en)/page.tsx" <<'EOF'
export default function PageEN() {
  return (
    <main className="container py-20">
      <h1 className="text-4xl font-bold mb-4">ApplyGraphy – Academic Migration Consulting</h1>
      <p className="text-lg opacity-80 mb-8">Free consultation, application tools, user dashboard, and end-to-visa guidance.</p>
      <div className="flex gap-3">
        <a className="btn-primary" href="/en/consult">Free Consultation</a>
        <a className="btn-outline" href="/en/tools">Tools</a>
      </div>
    </main>
  );
}
EOF

# ---------- app/robots.txt ----------
cat > app/robots.txt <<'EOF'
User-agent: *
Allow: /
Sitemap: https://applygraphy.com/sitemap.xml
EOF

# ---------- lib/config.ts ----------
cat > lib/config.ts <<'EOF'
export const SITE = {
  name: "ApplyGraphy",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  locales: ["fa", "en"],
  defaultLocale: "fa"
};
EOF

# ---------- public/logo.svg ----------
cat > public/logo.svg <<'EOF'
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5V6.5l8-3 8 3v13"/><path d="M12 3.5v17"/><path d="M4 19.5l8-3 8 3"/></svg>
EOF

# ---------- .github/workflows/ci.yml ----------
cat > .github/workflows/ci.yml <<'EOF'
name: CI
on:
  push:
    branches: [ main, develop ]
  pull_request:
jobs:
  ci:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - name: Install
        run: npm ci || npm i
      - name: Lint
        run: npm run lint
      - name: Type Check
        run: npm run typecheck
      - name: Build
        run: npm run build
EOF

# ---------- .gitignore ----------
cat > .gitignore <<'EOF'
node_modules
.next
out
dist
coverage
.env
.env.local
.env.*.local
.DS_Store
*.log
.vscode/*
!.vscode/extensions.json
.idea
EOF

# ---------- tsconfig.json ----------
cat > tsconfig.json <<'EOF'
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023", "DOM"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "preserve",
    "baseUrl": ".",
    "paths": { "@/*": ["./*"] },
    "strict": true,
    "noEmit": true
  },
  "exclude": ["node_modules", "dist", ".next"]
}
EOF

# ---------- README.md ----------
cat > README.md <<'EOF'
# ApplyGraphy – Design & Web App

A modern, bilingual (FA/EN) Next.js + Tailwind project for ApplyGraphy: academic migration consulting, tools, dashboards, and CMS-driven content.

## ✨ Features
- Next.js (App Router) + TypeScript + Tailwind CSS
- i18n (fa/en) with route-based locale
- CI via GitHub Actions (build, lint, typecheck)
- Ready for Vercel or Docker/VPS deploy
}
EOF
## 🚀 Getting Started
```bash
npm i
npm run dev


# MD Masum Reza Munna — Portfolio

Live: https://my-portfolio-nu-seven-i5850ht0pk.vercel.app

A professional portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS v3**, **Framer Motion**, and **GSAP**.

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS v3 | Styling |
| Framer Motion | UI animations & transitions |
| GSAP + ScrollTrigger | Hero parallax & floating effects |
| react-intersection-observer | Scroll-triggered reveals |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout + metadata
│   ├── page.tsx         # Main page assembling all sections
│   └── globals.css      # Tailwind + global styles
├── components/
│   ├── Navbar.tsx       # Responsive nav with framer-motion
│   ├── Hero.tsx         # GSAP parallax + animated photo ring
│   ├── About.tsx        # About section with cards
│   ├── Skills.tsx       # Animated skill bars
│   ├── Education.tsx    # Education cards
│   ├── Projects.tsx     # Project cards + modal detail view
│   ├── Contact.tsx      # Contact info + social links
│   ├── Footer.tsx       # Footer
│   ├── FadeIn.tsx       # Reusable scroll-reveal wrapper
│   ├── SectionLabel.tsx # Reusable section label
│   └── GridBackground.tsx
└── data/
    └── portfolio.ts     # All personal data (easy to update)
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open http://localhost:3000
```

## Adding Your Resume

Place your `resume.pdf` inside the `/public` folder:
```
public/
└── resume.pdf   ← put it here
```

## Deployment (Vercel — recommended)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Vercel auto-detects Next.js — click **Deploy**
4. You'll get a live URL like `https://your-portfolio.vercel.app`

## Deployment (Netlify)

```bash
npm run build
# Upload the `.next` folder or connect your GitHub repo on netlify.com
```

## Customization

All personal data lives in `src/data/portfolio.ts` — update that file to change any content, projects, skills, or links.

# Portfolio — Antonio Vita

Personal portfolio built with Next.js, Tailwind, and motion to showcase projects, timeline, and contact.

## Highlights

- Animated UI (Framer Motion + AOS) with a canvas star background.
- Stack, projects (Swiper), and timeline sections.
- Multilingual content (PT/EN/ES/IT/FR).
- Contact form integrated with EmailJS.

## Stack

- Next.js 15 + React 19
- Tailwind CSS
- Framer Motion, AOS, and Swiper
- EmailJS

## Structure

- `src/app/page.tsx`: landing page composition.
- `src/components`: reusable sections (hero, timeline, stack, projects, contact).
- `src/translations.ts`: copy and languages.
- `public/images`: assets and icons.

## Requirements

- Node.js 18+

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## EmailJS setup

The contact form uses EmailJS IDs directly in code. Replace them with your values in `src/components/contactsection.tsx`.

## Quick customization

- Text and languages: `src/translations.ts`
- Projects and images: `src/components/mywork.tsx` + `public/images/projects`
- Social links: `src/components/aboutsection.tsx`

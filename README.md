# Portfolio — Antonio Vita

Portfolio pessoal desenvolvido com Next.js, Tailwind e animações para apresentar projetos, trajetória e contato.

## Destaques

- Interface com animações (Framer Motion e AOS) e background em canvas.
- Seções de stack, projetos (Swiper) e timeline.
- Conteúdo multilíngue (PT/EN/ES/IT/FR).
- Formulário de contato integrado ao EmailJS.

## Stack

- Next.js 15 + React 19
- Tailwind CSS
- Framer Motion, AOS e Swiper
- EmailJS

## Estrutura

- `src/app/page.tsx`: composição da landing page.
- `src/components`: seções reutilizáveis (hero, timeline, stack, projetos, contato).
- `src/translations.ts`: textos e idiomas.
- `public/images`: assets e ícones.

## Requisitos

- Node.js 18+

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Configuração do EmailJS

O formulário de contato usa IDs do EmailJS direto no código. Troque pelos seus valores em `src/components/contactsection.tsx`.

## Customização rápida

- Textos e idiomas: `src/translations.ts`
- Projetos e imagens: `src/components/mywork.tsx` + `public/images/projects`
- Links sociais: `src/components/aboutsection.tsx`

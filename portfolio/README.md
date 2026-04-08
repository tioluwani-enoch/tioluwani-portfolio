# Portfolio

A bold, dark developer portfolio built with React, TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Personalising

All your content lives in one place:

```
src/data/content.ts
```

Edit that file to update:
- Your name, tagline, and bio (`personal`)
- Stats (years, projects, etc.)
- Projects (title, description, tags, URL)
- Skills and proficiency levels

## Project structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── content.ts       ← edit this
├── hooks/
│   └── useInView.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Deploying

### Netlify / Vercel
Connect your repo — both platforms auto-detect Vite.

### GitHub Pages
```bash
npm run build
# deploy the `dist/` folder
```

## Wiring up the contact form

The form in `Contact.tsx` currently shows an alert on submit.
Replace the `onSubmit` handler with your preferred service:
- [Formspree](https://formspree.io) — easiest, just swap the action URL
- [EmailJS](https://emailjs.com) — client-side email sending
- Your own API endpoint

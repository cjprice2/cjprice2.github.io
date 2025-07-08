# Colin Price – Portfolio Website

A modern, single-page portfolio built with **React**, **Vite**, and **Tailwind CSS**. It showcases my projects, skills, and lets visitors contact me via **EmailJS** all without a backend.

---

## Features

- **Single-page application** with instant navigation
- **Light / Dark theme** toggle
- **Glassmorphism UI** components
- **Toast notifications** powered by Radix UI
- **EmailJS integration** sends me a message and auto-replies to the visitor
- **Responsive & accessible** design

---

## Tech Stack

| Purpose | Library / Tool |
|---------|----------------|
| Framework & Build | React 19, Vite 7 |
| Styling | Tailwind CSS 4 |
| UI Primitives | @radix-ui/react-toast |
| Icons | Lucide-React |
| Email | @emailjs/browser |
| Linting | ESLint 9 |

---

## Quick Start

```bash
# Install dependencies
yarn   # or npm install / pnpm install

# (Optional) enable contact form – copy env template, only needed for EmailJS keys
# Site renders fine without them, the form will just show an error toast.
cp .env.example .env

# Run the dev server (http://localhost:5173)
npm run dev
```

## License & Credits

Released under the **MIT License** – fork, adapt, and enjoy.

Built with:
- [Radix UI](https://www.radix-ui.com/) toast primitives
- [Tailwind CSS](https://tailwindcss.com/) utility-first styling
- [Lucide](https://lucide.dev/) icons
- [EmailJS](https://www.emailjs.com/) serverless email

Special thanks to [PedroTech](https://www.youtube.com/@PedroTechnologies) for his [Beautiful React Tailwind Portfolio Website Tutorial](https://www.youtube.com/watch?v=ifOJ0R5UQOc). Here is the accompanying [GitHub repository](https://github.com/machadop1407/beautiful-react-tailwind-portfolio). My site's architecture was influenced by his example, but I made numerous design and code tweaks to match my own style and requirements. 
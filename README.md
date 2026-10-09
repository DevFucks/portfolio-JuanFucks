# Portfólio — Juan de Sousa Fucks

Site pessoal de **Juan de Sousa Fucks**, Desenvolvedor Full Stack com foco em frontend
(React, Next.js, TypeScript, React Native e Laravel).

**No ar:** https://portfolio-juan-fucks.vercel.app

## Stack

- React 19 + Create React App (via CRACO)
- Tailwind CSS 3 + CSS próprio (`src/index.css`) para o tema neon/terminal
- Framer Motion (animações de entrada) e canvas 2D (partículas do Hero)
- i18n próprio em PT-BR / EN / ES, sem biblioteca (`src/contexts/LangContext.jsx`)
- Deploy na Vercel (rewrite de SPA em `frontend/vercel.json`)

## Rodando localmente

```bash
cd frontend
npm install
npm start        # http://localhost:3000
npm run build    # build de produção em frontend/build
```

## Onde editar o conteúdo

| O que | Arquivo |
|---|---|
| Textos (hero, sobre, experiência, projetos, contato) nos 3 idiomas | `frontend/src/i18n/translations.js` |
| Lista, ordem e tags dos projetos | `frontend/src/data/projects.js` |
| Ilustração (capa) de cada projeto | `frontend/src/components/ProjectCover.jsx` |
| Skills por categoria | `frontend/src/data/skills.js` |
| E-mail, telefone, GitHub, LinkedIn, caminho do CV | `frontend/src/data/site.js` |
| CV em PDF para download | `frontend/public/cv/` |
| Título, descrição, Open Graph e JSON-LD | `frontend/public/index.html` |

### Adicionar um projeto

1. Inclua `{ key, kind, tags }` em `src/data/projects.js` (a posição define a ordem).
2. Adicione os textos em `projects.items[key]` nos **três** idiomas de `translations.js`.
3. Desenhe a capa em `ProjectCover.jsx` (objeto `ART`, mesma `key`).
4. Se passar de 8 projetos, acrescente uma classe de layout em `PROJECT_LAYOUTS`.

## Estrutura

```
frontend/
├── public/            # index.html (SEO), favicon, og-image, CV em PDF
└── src/
    ├── components/    # Header, Footer, Particles, CustomCursor, ProjectCover
    │   └── sections/  # Hero, About, Skills, Experience, Projects, Contact
    ├── contexts/      # LangContext (idioma, <html lang>, título)
    ├── data/          # site.js, projects.js, skills.js
    ├── i18n/          # translations.js
    └── index.css      # design system (cores, glitch, cards, botões)
design_guidelines.json # referência visual do tema
```

## Deploy

A branch `master` é a de produção na Vercel. Qualquer outra branch enviada ao GitHub
gera um deploy de preview — use isso para revisar antes do merge.

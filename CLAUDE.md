# Portfólio do Juan — guia para o Claude

Site de portfólio (React 19 + CRA/CRACO + Tailwind 3) em `frontend/`. Produção: branch `main` na Vercel
(https://portfolio-juan-fucks.vercel.app). Responder sempre em português brasileiro.

## Fonte dos fatos (não inventar)

Todo número, cargo, data e tecnologia do site vem do material do próprio Juan: o **banco de conquistas**
e o **CV mestre** (PT e EN). Este repositório é público — esses arquivos ficam fora dele.

Regras:

- Nunca publicar métrica, tecnologia ou projeto que não esteja nessas duas fontes. Dúvida → perguntar.
- O site tem de bater com o CV (cargo, datas, e-mail, cidade, nível de inglês): o recrutador compara.
- Projetos de clientes são descritos sem nome de cliente e sem screenshots (código proprietário).
- Não colocar neste repositório notas internas, dados pessoais além dos de contato ou arquivos de trabalho.

## Onde mexer

- Textos nos 3 idiomas: `frontend/src/i18n/translations.js` — mudou um idioma, muda os três.
- Projetos: `frontend/src/data/projects.js` (ordem/tags) + `translations.js` (textos) + `components/ProjectCover.jsx` (capa em SVG).
- Skills: `frontend/src/data/skills.js`. Contatos e links: `frontend/src/data/site.js`.
- SEO/Open Graph/JSON-LD: `frontend/public/index.html`.
- CV para download: `frontend/public/cv/` — recopiar do CV mestre sempre que ele mudar.

## Design

- Tema escuro neon/terminal descrito em `design_guidelines.json`; classes utilitárias próprias em `src/index.css`
  (`card-neon`, `btn-neon`, `btn-ghost`, `skill-pill`, `glitch`, `section-label`).
- Cores da paleta (`cyan`, `magenta`, `green-neon`, `charcoal`, `void`) estão registradas no `tailwind.config.js`.
- Fontes: Unbounded (títulos, muito larga — cuidado com overflow no mobile), JetBrains Mono, IBM Plex Sans.

## Antes de entregar

1. `cd frontend && CI=true npm run build` — tem de compilar sem warnings.
2. Conferir no navegador em 320, 390, 820, 1024 e 1440 px, nos 3 idiomas, sem scroll horizontal.
3. Não fazer push direto na `main`: subir uma branch, revisar o preview da Vercel e só então fazer o merge.

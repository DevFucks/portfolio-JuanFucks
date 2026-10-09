// Projetos em destaque — a ordem aqui é a ordem na tela (o primeiro é o card grande).
// Textos (título, descrição, métricas) ficam em src/i18n/translations.js -> projects.items[key].
// Regra: só entra métrica/tecnologia que está no banco de conquistas / CV mestre.

export const PROJECTS = [
  {
    key: "live-streaming",
    kind: "atmo",
    tags: ["React", "Laravel", "WebSocket", "Socket.IO"],
  },
  {
    key: "help-desk",
    kind: "atmo",
    tags: ["ReactJS", "PHP", "Laravel", "REST API"],
  },
  {
    key: "mailing",
    kind: "freelance",
    tags: ["Laravel", "PHP", "Queues & Jobs", "CSV / XLS"],
  },
  {
    key: "workplace",
    kind: "atmo",
    tags: ["React", "React Native", "Expo", "Redux", "MySQL"],
  },
  {
    key: "signage",
    kind: "atmo",
    tags: ["React", "Laravel", "REST API"],
  },
  {
    key: "live-commerce",
    kind: "atmo",
    tags: ["React", "Laravel", "VTEX FastStore"],
  },
  {
    key: "qr-meal",
    kind: "atmo",
    tags: ["React", "Python", "REST API", "QR Code"],
  },
  {
    key: "ai-pipelines",
    kind: "personal",
    tags: ["ComfyUI", "Python", "Linux"],
  },
];

// Layout bento (grid de 12 colunas) por posição
export const PROJECT_LAYOUTS = [
  "col-span-12 lg:col-span-8 lg:row-span-2",
  "col-span-12 md:col-span-6 lg:col-span-4",
  "col-span-12 md:col-span-6 lg:col-span-4",
  "col-span-12 md:col-span-6 lg:col-span-4",
  "col-span-12 md:col-span-6 lg:col-span-4",
  "col-span-12 md:col-span-6 lg:col-span-4",
  "col-span-12 md:col-span-6",
  "col-span-12 lg:col-span-6", // largura total no tablet para não sobrar meio grid vazio
];

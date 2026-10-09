// Stack — espelha as COMPETÊNCIAS TÉCNICAS do CV mestre.
// Só adicione o que já foi usado de verdade (ver banco de conquistas).

export const SKILL_GROUPS = [
  {
    keyCat: "frontend",
    items: [
      "ReactJS", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3",
      "Redux", "Context API", "React Query", "Tailwind CSS", "Styled-Components",
      "Vue.js", "VTEX FastStore",
    ],
  },
  {
    keyCat: "mobile",
    items: [
      "React Native", "Expo", "React Navigation", "Push Notifications",
      "Maps & Geolocation", "VoiceOver / TalkBack", "Electron",
    ],
  },
  {
    keyCat: "backend",
    items: [
      "PHP", "Laravel", "Laravel Sanctum", "Queues & Jobs", "Node.js", "NestJS",
      "REST APIs", "GraphQL (Apollo)", "WebSocket", "Socket.IO", "Python", "Nginx",
    ],
  },
  {
    keyCat: "data",
    items: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB", "Redis", "SQLite"],
  },
  {
    keyCat: "quality",
    items: [
      "Jest", "Vitest", "React Testing Library", "Code Review", "Git",
      "GitHub Actions", "CI/CD", "Docker", "Linux", "Cloudflare", "Vercel", "Scrum",
    ],
  },
  {
    keyCat: "ai",
    items: [
      "LLM APIs (OpenAI / Claude)", "AI Agents", "ComfyUI", "Claude Code", "Cursor",
    ],
  },
];

export const MARQUEE_WORDS = [
  "REACT", "NEXT.JS", "TYPESCRIPT", "REACT NATIVE", "LARAVEL",
  "SOCKET.IO", "NODE.JS", "TAILWIND", "GRAPHQL", "DOCKER",
  "REDIS", "MYSQL", "JEST", "GIT",
];

// Stack exibida ao lado da experiência principal
export const CORE_STACK = [
  "React", "Next.js", "React Native", "TypeScript", "Laravel",
  "Socket.IO", "MySQL", "Redis", "Docker",
];

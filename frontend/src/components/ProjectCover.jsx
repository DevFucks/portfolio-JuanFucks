import React from "react";

/**
 * Capas dos projetos em "blueprint" (SVG de linha), no lugar de fotos de banco de imagens.
 * Os produtos são proprietários, então em vez de screenshots cada capa esquematiza o que o
 * sistema faz. A cor principal vem de `currentColor` (controlada pelo card no hover).
 */

const MAGENTA = "#ff003c";
const GREEN = "#39ff14";
const DIM = "rgba(255,255,255,0.22)";

const ART = {
  // Player + chat em tempo real
  "live-streaming": (
    <>
      <rect x="40" y="30" width="210" height="130" rx="4" />
      <polygon points="134,78 134,112 162,95" fill="currentColor" fillOpacity="0.15" />
      <circle cx="58" cy="47" r="4" fill={MAGENTA} stroke="none" />
      <line x1="68" y1="47" x2="92" y2="47" stroke={MAGENTA} />
      <line x1="40" y1="176" x2="250" y2="176" stroke={DIM} />
      <line x1="40" y1="176" x2="172" y2="176" />
      <circle cx="172" cy="176" r="4" fill="currentColor" />
      {[42, 72, 102, 132].map((y, i) => (
        <g key={y}>
          <circle cx="280" cy={y} r="5" stroke={i === 1 ? GREEN : "currentColor"} />
          <line x1="293" y1={y - 3} x2={i % 2 ? 340 : 356} y2={y - 3} />
          <line x1="293" y1={y + 5} x2={i % 2 ? 326 : 334} y2={y + 5} stroke={DIM} />
        </g>
      ))}
      <rect x="272" y="156" width="88" height="20" rx="3" stroke={DIM} />
    </>
  ),

  // Fila de chamados com status e SLA
  "help-desk": (
    <>
      {[30, 72, 114, 156].map((y, i) => (
        <g key={y}>
          <rect x="50" y={y} width="300" height="32" rx="3" stroke={i === 0 ? "currentColor" : DIM} />
          <circle
            cx="68"
            cy={y + 16}
            r="4"
            stroke="none"
            fill={[GREEN, "currentColor", MAGENTA, DIM][i]}
          />
          <line x1="84" y1={y + 12} x2={[210, 180, 230, 160][i]} y2={y + 12} />
          <line x1="84" y1={y + 21} x2={[150, 140, 170, 120][i]} y2={y + 21} stroke={DIM} />
          <rect x="290" y={y + 9} width="46" height="14" rx="7" stroke={i === 2 ? MAGENTA : DIM} />
        </g>
      ))}
    </>
  ),

  // Vários arquivos -> filtro -> CSV único
  mailing: (
    <>
      {[32, 92, 152].map((y) => (
        <g key={y}>
          <path d={`M44 ${y} h32 l10 10 v28 h-42 z`} />
          <line x1="52" y1={y + 16} x2="78" y2={y + 16} stroke={DIM} />
          <line x1="52" y1={y + 24} x2="78" y2={y + 24} stroke={DIM} />
          <line x1="52" y1={y + 32} x2="70" y2={y + 32} stroke={DIM} />
          <path d={`M90 ${y + 19} C 130 ${y + 19}, 130 111, 168 111`} strokeDasharray="4 4" />
        </g>
      ))}
      <circle cx="198" cy="111" r="28" />
      <path d="M184 99 h28 l-10 12 v12 l-8 -4 v-8 z" fill="currentColor" fillOpacity="0.15" />
      <line x1="228" y1="111" x2="282" y2="111" />
      <polyline points="274,105 282,111 274,117" />
      <rect x="290" y="74" width="66" height="74" rx="3" />
      {[88, 100, 112, 124, 136].map((y, i) => (
        <line key={y} x1="300" y1={y} x2={i === 4 ? 330 : 346} y2={y} stroke={i === 0 ? GREEN : DIM} />
      ))}
      <line x1="316" y1="74" x2="316" y2="148" stroke={DIM} />
    </>
  ),

  // Web + app mobile
  workplace: (
    <>
      <rect x="36" y="32" width="216" height="150" rx="4" />
      <line x1="36" y1="50" x2="252" y2="50" />
      <circle cx="47" cy="41" r="2" fill={MAGENTA} stroke="none" />
      <circle cx="56" cy="41" r="2" fill="currentColor" stroke="none" />
      <circle cx="65" cy="41" r="2" fill={GREEN} stroke="none" />
      {[62, 110].map((y) => (
        <g key={y}>
          <rect x="50" y={y} width="120" height="38" rx="3" stroke={DIM} />
          <circle cx="64" cy={y + 13} r="6" />
          <line x1="78" y1={y + 10} x2="140" y2={y + 10} />
          <line x1="78" y1={y + 18} x2="120" y2={y + 18} stroke={DIM} />
          <line x1="58" y1={y + 30} x2="150" y2={y + 30} stroke={DIM} />
        </g>
      ))}
      {[66, 84, 102, 120].map((y, i) => (
        <line key={y} x1="186" y1={y} x2={238 - i * 12} y2={y} stroke={i === 0 ? GREEN : "currentColor"} strokeWidth="4" strokeOpacity={i === 0 ? 0.8 : 0.35} />
      ))}
      <rect x="278" y="26" width="86" height="168" rx="12" />
      <line x1="308" y1="36" x2="334" y2="36" stroke={DIM} />
      <circle cx="296" cy="60" r="7" />
      <line x1="310" y1="57" x2="348" y2="57" />
      <line x1="310" y1="65" x2="336" y2="65" stroke={DIM} />
      <rect x="290" y="80" width="62" height="40" rx="3" stroke={DIM} />
      <rect x="290" y="128" width="62" height="40" rx="3" stroke={DIM} />
      <circle cx="350" cy="34" r="5" fill={MAGENTA} stroke="none" />
    </>
  ),

  // Parque de telas monitoradas
  signage: (
    <>
      {[32, 108].map((y, row) =>
        [56, 164, 272].map((x, col) => {
          const offline = row === 1 && col === 1;
          return (
            <g key={`${x}-${y}`}>
              <rect x={x} y={y} width="72" height="44" rx="3" stroke={offline ? DIM : "currentColor"} />
              <line x1={x + 36} y1={y + 44} x2={x + 36} y2={y + 52} stroke={DIM} />
              <line x1={x + 24} y1={y + 52} x2={x + 48} y2={y + 52} stroke={DIM} />
              <circle cx={x + 62} cy={y + 9} r="3" stroke="none" fill={offline ? MAGENTA : GREEN} />
              {!offline && (
                <>
                  <line x1={x + 10} y1={y + 22} x2={x + 44} y2={y + 22} stroke={DIM} />
                  <line x1={x + 10} y1={y + 31} x2={x + 32} y2={y + 31} stroke={DIM} />
                </>
              )}
            </g>
          );
        })
      )}
      <line x1="56" y1="188" x2="344" y2="188" stroke={DIM} />
      <line x1="56" y1="188" x2="296" y2="188" />
      <circle cx="296" cy="188" r="4" fill="currentColor" />
    </>
  ),

  // Player + card de produto + etapas do checkout
  "live-commerce": (
    <>
      <rect x="36" y="30" width="190" height="116" rx="4" />
      <polygon points="120,72 120,104 146,88" fill="currentColor" fillOpacity="0.15" />
      <circle cx="54" cy="46" r="4" fill={MAGENTA} stroke="none" />
      <line x1="64" y1="46" x2="86" y2="46" stroke={MAGENTA} />
      <rect x="250" y="30" width="114" height="162" rx="4" />
      <rect x="262" y="42" width="90" height="62" rx="3" stroke={DIM} />
      <path d="M262 92 l24 -22 l20 16 l16 -12 l30 24" stroke={DIM} />
      <line x1="262" y1="118" x2="336" y2="118" />
      <line x1="262" y1="130" x2="306" y2="130" stroke={GREEN} />
      <rect x="262" y="154" width="90" height="24" rx="3" fill="currentColor" fillOpacity="0.15" />
      <line x1="290" y1="166" x2="324" y2="166" />
      <line x1="56" y1="176" x2="206" y2="176" stroke={DIM} />
      <line x1="56" y1="176" x2="131" y2="176" />
      <circle cx="56" cy="176" r="7" fill="currentColor" />
      <circle cx="131" cy="176" r="7" fill="currentColor" />
      <circle cx="206" cy="176" r="7" fill="#07070b" stroke={DIM} />
    </>
  ),

  // QR Code + leitura facial
  "qr-meal": (
    <>
      <rect x="50" y="36" width="140" height="140" rx="4" />
      {[
        [62, 48],
        [142, 48],
        [62, 128],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x} y={y} width="36" height="36" />
          <rect x={x + 11} y={y + 11} width="14" height="14" fill="currentColor" stroke="none" />
        </g>
      ))}
      {[
        [110, 52], [124, 66], [110, 80], [66, 96], [82, 110], [110, 104], [126, 118],
        [142, 96], [158, 110], [170, 96], [110, 134], [126, 150], [142, 134], [160, 150], [170, 126],
      ].map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="9" height="9" fill="currentColor" fillOpacity="0.55" stroke="none" />
      ))}
      <path d="M236 62 v-22 h22 M330 40 h22 v22 M352 150 v22 h-22 M258 172 h-22 v-22" />
      <circle cx="294" cy="92" r="24" />
      <path d="M254 164 c6 -32 74 -32 80 0" />
      <line x1="228" y1="112" x2="360" y2="112" stroke={GREEN} />
      <line x1="210" y1="106" x2="222" y2="106" stroke={DIM} strokeDasharray="3 3" />
    </>
  ),

  // Grafo de nós (pipeline)
  "ai-pipelines": (
    <>
      {[
        [36, 40, "currentColor"],
        [36, 132, "currentColor"],
        [160, 82, GREEN],
        [284, 40, "currentColor"],
        [284, 132, MAGENTA],
      ].map(([x, y, accent]) => (
        <g key={`${x}-${y}`}>
          <rect x={x} y={y} width="80" height="48" rx="4" />
          <line x1={x} y1={y + 14} x2={x + 80} y2={y + 14} stroke={accent} />
          <line x1={x + 10} y1={y + 26} x2={x + 56} y2={y + 26} stroke={DIM} />
          <line x1={x + 10} y1={y + 36} x2={x + 40} y2={y + 36} stroke={DIM} />
          <circle cx={x} cy={y + 30} r="3" fill="#07070b" />
          <circle cx={x + 80} cy={y + 30} r="3" fill="currentColor" />
        </g>
      ))}
      <path d="M116 70 C 140 70, 136 112, 160 112" />
      <path d="M116 162 C 140 162, 136 112, 160 112" />
      <path d="M240 112 C 264 112, 260 70, 284 70" />
      <path d="M240 112 C 264 112, 260 162, 284 162" />
    </>
  ),
};

export default function ProjectCover({ projectKey, className = "" }) {
  const art = ART[projectKey];
  if (!art) return null;
  return (
    // o posicionamento (absolute/relative) vem de quem usa, via className
    <div className={`project-cover overflow-hidden bg-[#07070b] ${className}`} aria-hidden="true">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <svg
        viewBox="0 0 400 220"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute inset-0 w-full h-full p-5 text-cyan/60 group-hover:text-cyan transition-colors duration-500"
      >
        {art}
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0c0c10] to-transparent" />
    </div>
  );
}

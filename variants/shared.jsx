// Shared tokens + components across the three variants
// All three use the navy + mint palette from the brief, but each variant
// can override the "feel" with its own type stack and accent treatment.

const PALETTE = {
  bg: '#0c1a2b',
  bgDeep: '#081320',
  surface: '#142436',
  surfaceAlt: '#1a2a3e',
  surfaceHi: '#1f3148',
  textHi: '#f1f6fa',
  textMid: '#b3c2cf',
  textLo: '#5a7088',
  mint: '#7eddc4',
  mintDim: '#4fa088',
  borderLo: 'rgba(126,220,200,0.10)',
  borderMd: 'rgba(126,220,200,0.20)',
  borderHi: 'rgba(126,220,200,0.40)',
  danger: '#e8896b',
  gold: '#d9b974',
};

// A blinking dot — used across variants for "online" / status states.
function PulseDot({ color = PALETTE.mint, size = 8 }) {
  const id = React.useId();
  return (
    <span style={{ position: 'relative', display: 'inline-block', width: size, height: size }}>
      <style>{`
        @keyframes pulse-${id.replace(/:/g, '')} {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.45; transform: scale(0.85); }
        }
        @keyframes ring-${id.replace(/:/g, '')} {
          0% { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>
      <span style={{
        position: 'absolute', inset: 0, borderRadius: '50%', background: color,
        animation: `pulse-${id.replace(/:/g, '')} 1.8s ease-in-out infinite`,
        boxShadow: `0 0 ${size * 1.5}px ${color}`,
      }} />
      <span style={{
        position: 'absolute', inset: 0, borderRadius: '50%', border: `1px solid ${color}`,
        animation: `ring-${id.replace(/:/g, '')} 2s ease-out infinite`,
      }} />
    </span>
  );
}

// Reusable striped placeholder for project thumbnails / portraits.
// "label" appears in mono at the top-left so the user knows what to slot here.
function StripedPlaceholder({ label, height = 200, ratio, color = PALETTE.textLo, bg = PALETTE.surfaceAlt, kind = 'image' }) {
  const stripe = `repeating-linear-gradient(135deg, transparent 0 14px, rgba(255,255,255,0.025) 14px 15px)`;
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: ratio ? undefined : height,
      aspectRatio: ratio,
      background: bg,
      backgroundImage: stripe,
      border: `1px dashed ${PALETTE.borderMd}`,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        position: 'absolute', top: 8, left: 10,
        fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: 0.5,
        color, textTransform: 'uppercase',
      }}>{kind} · {label}</div>
      {/* subtle center mark */}
      <div style={{
        width: 28, height: 28, border: `1px solid ${color}`, opacity: 0.35,
        borderRadius: kind === 'avatar' ? '50%' : 0,
      }} />
    </div>
  );
}

// Corner brackets used by the save-select and tactical variants.
function CornerBrackets({ color = PALETTE.mint, size = 14, thickness = 2, inset = 0 }) {
  const armStyle = { position: 'absolute', borderColor: color, borderStyle: 'solid' };
  return (
    <>
      <span style={{ ...armStyle, top: inset, left: inset, width: size, height: size, borderTopWidth: thickness, borderLeftWidth: thickness, borderRightWidth: 0, borderBottomWidth: 0 }} />
      <span style={{ ...armStyle, top: inset, right: inset, width: size, height: size, borderTopWidth: thickness, borderRightWidth: thickness, borderLeftWidth: 0, borderBottomWidth: 0 }} />
      <span style={{ ...armStyle, bottom: inset, left: inset, width: size, height: size, borderBottomWidth: thickness, borderLeftWidth: thickness, borderRightWidth: 0, borderTopWidth: 0 }} />
      <span style={{ ...armStyle, bottom: inset, right: inset, width: size, height: size, borderBottomWidth: thickness, borderRightWidth: thickness, borderLeftWidth: 0, borderTopWidth: 0 }} />
    </>
  );
}

// CRT scanline overlay (very subtle, fixed inside its parent)
function Scanlines({ opacity = 0.06 }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      backgroundImage: `repeating-linear-gradient(0deg, rgba(255,255,255,${opacity}) 0 1px, transparent 1px 3px)`,
      mixBlendMode: 'overlay',
    }} />
  );
}

// A blinking caret used for inputs / cursors.
function Caret({ color = PALETTE.mint }) {
  return (
    <span style={{ display: 'inline-block', width: '0.55em', height: '1em', background: color, verticalAlign: '-0.12em', animation: 'caret-blink 1.1s steps(2, end) infinite' }}>
      <style>{`@keyframes caret-blink { 50% { opacity: 0; } }`}</style>
    </span>
  );
}

// Sample data — Justin's actual content from the resume.
const JUSTIN = {
  name: 'Justin Wested',
  email: 'justwested@gmail.com',
  phone: '(412) 378-1354',
  github: 'github.com/JustinWested',
  linkedin: 'linkedin.com/in/justin-wested',
  site: 'justinwested.dev',
  roles: ['Builder', 'Designer', 'Player'],
  tagline: 'I make websites, games, and the visual identity around them.',
  current: {
    primary: 'Staff QA Engineer · Mercedes-Benz R&D',
    secondary: 'Senior Game Tester · Good Gamer Group',
  },
  stats: [
    { key: 'WEB', value: 14, max: 20, note: 'React · TS · WP · PHP' },
    { key: 'GAMES', value: 12, max: 20, note: 'Godot · GDScript · Roll20' },
    { key: 'DESIGN', value: 11, max: 20, note: 'Posters · Identity' },
    { key: 'QA', value: 19, max: 20, note: '6+ yrs · 4,000+ hrs' },
    { key: 'DM', value: 17, max: 20, note: 'Tables run since 2019' },
    { key: 'SHIP', value: 15, max: 20, note: 'Cross-team delivery' },
  ],
  experience: [
    { co: 'Mercedes-Benz R&D', role: 'Triage Engineer', span: '2023 – Now', tag: 'AV · Jira · SOP' },
    { co: 'Good Gamer Group', role: 'Senior Game Tester', span: '2023 – Now', tag: 'NDA · Pre-release' },
    { co: '100Devs', role: 'SWE Apprentice', span: '2022 – 2023', tag: 'Roll20 · React' },
    { co: 'Argo AI', role: 'Triage Engineer', span: '2017 – 2021', tag: '4,000+ hrs · AV' },
  ],
  webProjects: [
    { title: 'Shipping & Receiving App', tag: 'Client · 2023', note: 'Label scanning, payment matching, lightweight CRUD.' },
    { title: 'Roll20 Custom Plugins', tag: 'Personal · ongoing', note: 'Player-facing tools for tabletop sessions.' },
    { title: 'Small-business Marketing Site', tag: 'Client · 2024', note: 'WordPress, custom theme, perf-tuned.' },
  ],
  gameProjects: [
    { title: 'Untitled Godot Roguelike', tag: 'WIP · 2025', note: 'Top-down, GDScript, deterministic seed.', tags: ['GODOT', 'GDSCRIPT', 'SOLO'] },
    { title: 'NDA Title — Genre A', tag: 'Pre-release feedback', note: 'Senior tester engagement, multi-platform.', tags: ['NDA', 'QA', 'UX'] },
    { title: 'TTRPG Toolkit', tag: 'Roll20 · 2024', note: 'Plugins, macros, and DM screen scripts.', tags: ['ROLL20', 'PLUGIN', 'TTRPG'] },
    { title: 'Game Jam — 48hr', tag: 'Jam · 2024', note: 'Solo entry, ranked top quartile.', tags: ['JAM', 'SOLO'] },
  ],
  designProjects: [
    { title: 'Concert Poster Series', tag: 'Personal · 2024' },
    { title: 'Tabletop Module Cover', tag: 'Personal · 2023' },
    { title: 'Local Brand Identity', tag: 'Client · 2025' },
  ],
};

// A real-image slot with the same chrome as StripedPlaceholder. Used when
// we have an actual screenshot/portrait to drop in.
function ImageSlot({ src, alt, height = 200, ratio, label, kind = 'image' }) {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: ratio ? undefined : height,
      aspectRatio: ratio,
      background: PALETTE.surfaceAlt,
      overflow: 'hidden',
    }}>
      <img src={src} alt={alt}
        style={{
          width: '100%', height: '100%', objectFit: 'cover',
          objectPosition: 'center top',
        }}
      />
      {label && (
        <div style={{
          position: 'absolute', top: 8, left: 10,
          fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: 0.5,
          color: PALETTE.mint, textTransform: 'uppercase',
          padding: '2px 6px', background: 'rgba(8,19,32,0.7)',
          backdropFilter: 'blur(4px)',
        }}>{kind} · {label}</div>
      )}
    </div>
  );
}

Object.assign(window, {
  PALETTE, PulseDot, StripedPlaceholder, ImageSlot, CornerBrackets, Scanlines, Caret, JUSTIN,
});

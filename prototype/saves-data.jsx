// SAVES — the spine of the prototype. Each "save" is a section in the
// one-pager. Real metrics only (PROJECTS, SINCE, STATUS) — no fake LVL/playtime.

const SAVES = [
  {
    id: 'about', code: '00', anchor: '#about',
    name: 'PLAYER PROFILE',
    role: 'Multidisciplinary builder',
    metrics: [
      { k: 'ROLE', v: 'STAFF QA' },
      { k: 'BASED', v: 'LOS ANGELES' },
      { k: 'LAST SAVE', v: '2026.05.15' },
    ],
    status: 'ACTIVE',
    statusColor: 'mint',
    tags: ['BIO', 'INDEX'],
    thumb: 'JUSTIN · PORTRAIT',
    thumbImg: 'assets/justinwested.webp',
    summary: 'Who you\'re looking at.',
  },
  {
    id: 'web', code: '01', anchor: '#web',
    name: 'WEB DEVELOPMENT',
    role: 'Frontend Engineer',
    metrics: [
      { k: 'PROJECTS', v: '16 SHIPPED' },
      { k: 'SINCE', v: '2022' },
      { k: 'LAST SAVE', v: '2026.04.22' },
    ],
    status: 'ACCEPTING_WORK',
    statusColor: 'mint',
    tags: ['REACT', 'TS', 'WP', 'PHP'],
    thumb: 'WEB · HERO',
    thumbImg: 'assets/web/winnow.png',
    summary: 'Client work & personal builds.',
  },
  {
    id: 'games', code: '02', anchor: '#games',
    name: 'GAME DEVELOPMENT',
    role: 'Solo dev & senior game tester',
    metrics: [
      { k: 'BUILDS', v: '3 WIP' },
      { k: 'SINCE', v: '2023' },
      { k: 'LAST SAVE', v: '2026.05.10' },
    ],
    status: 'WIP_RUNNING',
    statusColor: 'gold',
    tags: ['GODOT', 'GDSCRIPT', 'NDA'],
    thumb: 'GAMES · SIZZLE',
    thumbImg: 'assets/games/kenneyjam.png',
    summary: 'Hobby builds & pre-release testing.',
  },
  {
    id: 'design', code: '03', anchor: '#design',
    name: 'GRAPHIC DESIGN',
    role: 'Film & stage poster design',
    metrics: [
      { k: 'PIECES', v: '11 SHIPPED' },
      { k: 'SINCE', v: '2018' },
      { k: 'LAST SAVE', v: '2026.03.30' },
    ],
    status: 'ARCHIVE',
    statusColor: 'mid',
    tags: ['FILM', 'STAGE', 'POSTERS'],
    thumb: 'DESIGN · POSTERS',
    thumbImg: 'assets/posters/butt-stuff.webp',
    summary: 'Posters for film & stage.',
  },
  {
    id: 'resume', code: '04', anchor: '#resume',
    name: 'QUEST LOG',
    role: 'Completed quests & active runs',
    metrics: [
      { k: 'YEARS', v: '13+' },
      { k: 'FORMAT', v: 'PDF · 218 KB' },
      { k: 'LAST SAVE', v: '2026.05.15' },
    ],
    status: 'PDF_READY',
    statusColor: 'mint',
    tags: ['CAREER', 'EXPORT'],
    thumb: 'RESUME · TIMELINE',
    thumbImg: 'assets/quest-log-thumb.svg',
    summary: 'The receipts.',
  },
  {
    id: 'contact', code: '05', anchor: '#contact',
    name: 'CO-OP INVITE',
    role: 'Open channel',
    metrics: [
      { k: 'REPLY', v: '~24H' },
      { k: 'TZ', v: 'PST' },
      { k: 'LAST SAVE', v: 'NOW' },
    ],
    status: 'OPEN',
    statusColor: 'mint',
    tags: ['EMAIL', 'GH', 'LI'],
    thumb: 'CONTACT · CHANNELS',
    thumbImg: 'assets/co-op-halo2.png',
    summary: 'How to reach me.',
  },
];

function statusToColor(s) {
  if (s === 'mint') return PALETTE.mint;
  if (s === 'gold') return PALETTE.gold;
  return PALETTE.textMid;
}

window.SAVES = SAVES;
window.statusToColor = statusToColor;

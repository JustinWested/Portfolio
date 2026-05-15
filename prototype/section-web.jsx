// WEB — Web Development. Project cards laid out like "artifact entries".

const WEB_PROJECTS = [
  {
    title: 'Winnow List',
    tag: 'PERSONAL · LIVE',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7457224018233049088/',
    urlLabel: 'READ THE WRITE-UP ↗',
    repo: null,
    img: 'assets/web/winnow.png',
    blurb: 'A social CRUD app for ranking movies — not rating them. Built on the premise that star ratings are how you avoid having an opinion.',
    decisions: [
      ['Ranked, not rated', 'because 3.5 stars isn\'t an opinion.'],
      ['Anchor-point inserts', 'so you slot films into a calibrated stack — never compare in a vacuum.'],
    ],
    stack: ['REACT', 'VITE', 'CRUD', 'SOCIAL'],
    rarity: 'LIVE',
    rarityColor: '#7eddc4',
  },
  {
    title: 'DCSMV',
    tag: 'CLIENT · LIVE',
    url: 'https://dcsmv.justwested.workers.dev/#home',
    urlLabel: null,
    repo: null,
    img: 'assets/web/dcsmv.png',
    blurb: 'Site for the Democratic Club of Santa Maria Valley — a 1968 chapter serving Santa Maria, Orcutt & Guadalupe. Bilingual (EN/ES), accessible, donor-ready.',
    decisions: [
      ['Bilingual from day one', 'because the chapter\'s outreach is.'],
      ['Cloudflare Workers', 'so a small chapter doesn\'t pay platform rent.'],
    ],
    stack: ['CLOUDFLARE', 'JS', 'I18N'],
    rarity: 'LIVE',
    rarityColor: '#7eddc4',
  },
  {
    title: 'April Yanko',
    tag: 'CLIENT · LIVE',
    url: 'https://www.aprilyanko.com/',
    urlLabel: null,
    repo: 'https://github.com/JustinWested/AprilSite',
    img: 'assets/web/aprilyanko.png',
    blurb: 'Portfolio for a filmmaker & actor. Dynamic video header with a poster fallback for browsers that block autoplay.',
    decisions: [
      ['Video-first header', 'because the client\'s reel is the brand.'],
      ['Image fallback', 'so it never breaks on iOS Low-Power mode.'],
    ],
    stack: ['HTML', 'CSS', 'JS'],
    rarity: 'LIVE',
    rarityColor: '#7eddc4',
  },
];

function WebProjectCard({ p, idx }) {
  const isMobile = useIsMobile();
  return (
    <div style={{
      border: `1px solid ${PALETTE.borderMd}`, background: PALETTE.surface,
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '380px 1fr',
      gap: 0, position: 'relative',
    }}>
      {/* Screenshot side */}
      <div style={{
        position: 'relative',
        borderRight: isMobile ? 'none' : `1px solid ${PALETTE.borderLo}`,
        borderBottom: isMobile ? `1px solid ${PALETTE.borderLo}` : 'none',
      }}>
        <ImageSlot src={p.img} alt={p.title} height={isMobile ? 220 : 320} />
        <div style={{
          position: 'absolute', top: 12, left: 12,
          padding: '3px 8px', background: 'rgba(8,19,32,0.85)',
          fontFamily: FONT_MONO, fontSize: 9, letterSpacing: 1.8,
          color: p.rarityColor, border: `1px solid ${p.rarityColor}`,
        }}>◆ {p.rarity}</div>
        {p.url && (
          <a href={p.url} target="_blank" rel="noreferrer" style={{
            position: 'absolute', bottom: 12, left: 12, right: 12,
            padding: '8px 10px', background: 'rgba(8,19,32,0.85)',
            backdropFilter: 'blur(8px)',
            fontFamily: FONT_MONO, fontSize: 10, color: PALETTE.textMid, letterSpacing: 1,
            display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none',
          }}>
            <PulseDot size={5} />
            LIVE · click to visit ↗
          </a>
        )}
      </div>

      {/* Body */}
      <div style={{
        padding: isMobile ? '18px 18px 20px' : '22px 26px 24px',
        display: 'flex', flexDirection: 'column', minWidth: 0,
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: isMobile ? 'flex-start' : 'baseline',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? 8 : 0,
          marginBottom: 4,
        }}>
          <div style={{ fontFamily: FONT_MONO, fontSize: 9, color: PALETTE.textLo, letterSpacing: 1.8 }}>
            ENTRY {String(idx + 1).padStart(2, '0')} · {p.tag}
          </div>
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
            {p.stack.map(t => (
              <span key={t} style={{
                fontFamily: FONT_MONO, fontSize: 9, letterSpacing: 1.4, color: PALETTE.mint,
                padding: '2px 7px', border: `1px solid ${PALETTE.borderHi}`,
              }}>{t}</span>
            ))}
          </div>
        </div>
        <h3 style={{
          fontFamily: FONT_DISPLAY,
          fontSize: isMobile ? 22 : 28,
          fontWeight: 700, color: PALETTE.textHi,
          letterSpacing: -0.4, margin: '4px 0 10px',
        }}>{p.title}</h3>
        <p style={{
          fontFamily: FONT_DISPLAY, fontSize: isMobile ? 14 : 15, lineHeight: 1.55,
          color: PALETTE.textMid, margin: '0 0 18px',
        }}>{p.blurb}</p>

        <div style={{
          fontFamily: FONT_MONO, fontSize: 10, color: PALETTE.mint, letterSpacing: 2, marginBottom: 8,
        }}>▸ KEY DECISIONS</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {p.decisions.map(([k, v], i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 10, alignItems: 'baseline' }}>
              <span style={{
                fontFamily: FONT_MONO, fontSize: 11, color: PALETTE.textHi, fontWeight: 600,
                whiteSpace: 'nowrap',
              }}>{k}</span>
              <span style={{
                fontFamily: FONT_DISPLAY, fontSize: 13, color: PALETTE.textMid, lineHeight: 1.5,
              }}>— {v}</span>
            </div>
          ))}
        </div>

        <div style={{ flex: 1 }} />
        <div style={{
          marginTop: 16, paddingTop: 12, borderTop: `1px solid ${PALETTE.borderLo}`,
          display: 'flex', alignItems: 'center', gap: 14,
          fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 1.5,
        }}>
          {p.url && <a href={p.url} target="_blank" rel="noreferrer" style={{ color: PALETTE.mint, textDecoration: 'none' }}>{p.urlLabel || 'OPEN ↗'}</a>}
          {p.repo && <>
            <span style={{ color: PALETTE.textLo }}>│</span>
            <a href={p.repo} target="_blank" rel="noreferrer" style={{ color: PALETTE.textMid, textDecoration: 'none' }}>SOURCE ◇</a>
          </>}
        </div>
      </div>
    </div>
  );
}

function SectionWeb() {
  const save = SAVES.find(s => s.id === 'web');
  const isMobile = useIsMobile();
  return (
    <SectionShell save={save}>
      <PanelTitle kicker="WEB · #web" code="01·INDEX">
        Client work, <span style={{ color: PALETTE.mint }}>shipped.</span>
      </PanelTitle>
      <p style={{
        fontFamily: FONT_DISPLAY, fontSize: 16, lineHeight: 1.55, color: PALETTE.textMid,
        maxWidth: 720, margin: '0 0 32px',
      }}>
        Six years in QA gave me a strong nose for what breaks. I build small
        & write the decisions down.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {WEB_PROJECTS.map((p, i) => <WebProjectCard key={p.title} p={p} idx={i} />)}
      </div>

      {/* Stack readout footer */}
      <div style={{
        marginTop: isMobile ? 24 : 36, padding: '18px 22px',
        border: `1px solid ${PALETTE.borderMd}`,
        background: 'linear-gradient(180deg, rgba(126,220,200,0.03), transparent)',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr 1fr' : '1fr 1fr 1fr 1fr',
        gap: isMobile ? 14 : 22,
      }}>
        {[
          ['CURRENT STACK', 'React · TypeScript · Next.js · Tailwind'],
          ['CMS', 'WordPress · custom themes · headless'],
          ['BACKEND', 'PHP · MySQL · Node · Postgres'],
          ['TOOLING', 'Git · Jira · Confluence · Vercel'],
        ].map(([k, v]) => (
          <div key={k}>
            <div style={{ fontFamily: FONT_MONO, fontSize: 9, color: PALETTE.textLo, letterSpacing: 2 }}>{k}</div>
            <div style={{ fontFamily: FONT_DISPLAY, fontSize: 13, color: PALETTE.textHi, marginTop: 4, lineHeight: 1.4 }}>{v}</div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

window.SectionWeb = SectionWeb;

// GAMES — Game Development. Artifact-card UI with rarity bands and a
// REDACTED treatment for NDA testing work.

const GAME_PROJECTS = [
  {
    title: 'Untitled Godot Roguelike',
    tag: 'WIP · SOLO · 2025',
    rarity: 'WIP',
    rarityColor: '#d9b974',
    blurb: 'Top-down pixel-art roguelike in Godot 4. Test bed for combat feel & procgen rooms.',
    stack: ['GODOT 4', 'GDSCRIPT', 'ASEPRITE'],
    img: 'assets/games/godot-roguelike.png',
    redacted: false,
    url: null,
  },
  {
    title: 'All Systems Go-Go-Go',
    tag: 'KENNEY JAM · 2025',
    rarity: 'JAM',
    rarityColor: '#7eddc4',
    blurb: 'Solo 48-hour entry for Kenney Jam 2025. Built on Kenney\'s KayKit asset pack.',
    stack: ['GODOT', '48HR', 'SOLO'],
    img: 'assets/games/kenneyjam.png',
    redacted: false,
    url: 'https://www.linkedin.com/pulse/i-made-game-48-hours-kenney-jam-2025-justin-wested-bynoc/',
    urlLabel: 'READ THE WRITE-UP ↗',
  },
  {
    title: 'NDA Title · Genre A',
    tag: 'PRE-RELEASE · SR. TESTER',
    rarity: 'CLASSIFIED',
    rarityColor: '#e8896b',
    blurb: 'Senior tester engagement under NDA. Authored structured feedback covering bugs & UX friction. Promoted for consistency.',
    stack: ['NDA', 'QA', 'PRE-RELEASE'],
    img: null,
    redacted: true,
    url: null,
  },
];

function GameCard({ p, idx }) {
  return (
    <div style={{
      border: `1px solid ${p.redacted ? p.rarityColor : PALETTE.borderMd}`,
      background: PALETTE.surface,
      position: 'relative', overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Rarity band */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, ${p.rarityColor}, transparent)`,
        zIndex: 2,
      }} />

      {/* Visual */}
      <div style={{ position: 'relative' }}>
        {p.img ? (
          <ImageSlot src={p.img} alt={p.title} height={220} />
        ) : (
          <StripedPlaceholder
            label={p.redacted ? 'REDACTED · NDA' : 'GAME · GIF/SCREEN'}
            height={220}
            bg={p.redacted ? '#2a1a1a' : PALETTE.surfaceAlt}
            color={p.rarityColor}
          />
        )}
        {p.redacted && (
          <>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'repeating-linear-gradient(45deg, transparent 0 10px, rgba(232,137,107,0.06) 10px 12px)',
            }} />
            <div style={{
              position: 'absolute', top: '50%', left: 0, right: 0, transform: 'translateY(-50%)',
              textAlign: 'center',
            }}>
              <div style={{
                fontFamily: FONT_MONO, fontSize: 24, letterSpacing: 6, color: p.rarityColor, fontWeight: 700,
              }}>REDACTED</div>
              <div style={{
                fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 2.5, color: p.rarityColor, marginTop: 4,
              }}>◆ NDA · WORK PRODUCT WITHHELD</div>
            </div>
          </>
        )}
        <div style={{
          position: 'absolute', top: 12, left: 12,
          padding: '4px 9px',
          background: 'rgba(8,19,32,0.85)',
          fontFamily: FONT_MONO, fontSize: 9, letterSpacing: 1.8,
          color: p.rarityColor, border: `1px solid ${p.rarityColor}`,
        }}>◆ {p.rarity}</div>
      </div>

      {/* Body */}
      <div style={{ padding: '18px 20px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 9, color: PALETTE.textLo, letterSpacing: 1.8, marginBottom: 4 }}>
          ARTIFACT {String(idx + 1).padStart(2, '0')} · {p.tag}
        </div>
        <h3 style={{
          fontFamily: FONT_DISPLAY, fontSize: 22, fontWeight: 700, color: PALETTE.textHi,
          letterSpacing: -0.4, margin: '0 0 8px', lineHeight: 1.1,
        }}>{p.title}</h3>
        <p style={{
          fontFamily: FONT_DISPLAY, fontSize: 14, lineHeight: 1.55,
          color: PALETTE.textMid, margin: '0 0 14px', flex: 1,
        }}>{p.blurb}</p>

        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
          {p.stack.map(t => (
            <span key={t} style={{
              fontFamily: FONT_MONO, fontSize: 9, letterSpacing: 1.4, color: PALETTE.mint,
              padding: '2px 7px', border: `1px solid ${PALETTE.borderHi}`,
              background: 'rgba(126,220,200,0.03)',
            }}>{t}</span>
          ))}
        </div>

        {p.url && (
          <a href={p.url} target="_blank" rel="noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            marginTop: 14, paddingTop: 12,
            borderTop: `1px solid ${PALETTE.borderLo}`,
            fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 1.5,
            color: PALETTE.mint, textDecoration: 'none',
          }}>
            {p.urlLabel || 'OPEN ↗'}
          </a>
        )}
      </div>
    </div>
  );
}

function SectionGames() {
  const save = SAVES.find(s => s.id === 'games');
  return (
    <SectionShell save={save}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 36, alignItems: 'start' }}>
        <div>
          <PanelTitle kicker="GAMES · #games" code="02·INDEX">
            Game-adjacent my whole career. <span style={{ color: PALETTE.mint }}>Now pivoting on purpose.</span>
          </PanelTitle>
          <p style={{
            fontFamily: FONT_DISPLAY, fontSize: 16, lineHeight: 1.55, color: PALETTE.textMid,
            maxWidth: 640, margin: 0,
          }}>
            Builds I can show & one I can't. Pre-release tester engagements stay
            behind a redaction bar — I can talk about process if you ask.
          </p>
        </div>

        <GameUIPanel title="WIP · LIVE" code="02·B" accentColor={PALETTE.gold}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <PulseDot size={6} color={PALETTE.gold} />
            <span style={{ fontFamily: FONT_MONO, fontSize: 10, color: PALETTE.gold, letterSpacing: 2 }}>CURRENT BUILD</span>
          </div>
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 17, fontWeight: 600, color: PALETTE.textHi, lineHeight: 1.2 }}>
            Untitled Godot Roguelike
          </div>
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 13, color: PALETTE.textMid, marginTop: 6, lineHeight: 1.5 }}>
            Top-down pixel art. Built solo in Godot 4.
          </div>
        </GameUIPanel>
      </div>

      <div style={{
        marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
      }}>
        {GAME_PROJECTS.map((p, i) => <GameCard key={p.title} p={p} idx={i} />)}
      </div>

      {/* Footer note */}
      <div style={{
        marginTop: 28, padding: '14px 20px',
        border: `1px solid ${PALETTE.borderMd}`, borderLeft: `2px solid ${PALETTE.gold}`,
        background: 'linear-gradient(90deg, rgba(217,185,116,0.06), transparent)',
        fontFamily: FONT_DISPLAY, fontSize: 14, color: PALETTE.textMid, lineHeight: 1.5,
      }}>
        <span style={{ color: PALETTE.gold, fontFamily: FONT_MONO, fontSize: 11, letterSpacing: 2 }}>◆ ON NDA WORK </span>
        — what's behind the redaction bar I can't show. The process behind it
        I can. Pull up the <a href="#contact" style={{ color: PALETTE.mint, textDecoration: 'none' }}>co-op invite</a> and ask.
      </div>
    </SectionShell>
  );
}

window.SectionGames = SectionGames;

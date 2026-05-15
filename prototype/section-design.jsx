// DESIGN — Film & stage poster design. Real posters, paid client work.

const DESIGN_PIECES = [
  {
    title: 'Butt Stuff',
    kind: 'FILM',
    tag: 'POSTER · 2023',
    logline: 'Jealousy always comes in from behind.',
    img: 'assets/posters/butt-stuff.webp',
  },
  {
    title: 'Raised In Captivity',
    kind: 'STAGE',
    tag: 'PLAY · NICKY SILVER',
    logline: null,
    img: 'assets/posters/captivity.png',
  },
  {
    title: 'Norman',
    kind: 'FILM',
    tag: 'POSTER',
    logline: null,
    img: 'assets/posters/norman.webp',
  },
  {
    title: 'Murder Is On The Table',
    kind: 'FILM',
    tag: 'POSTER',
    logline: 'A murder. Tee hee.',
    img: 'assets/posters/murder.webp',
  },
  {
    title: 'Pulling The Plug On Mom',
    kind: 'FILM',
    tag: 'POSTER',
    logline: 'Guess I\'ll die.',
    img: 'assets/posters/mom.webp',
  },
  {
    title: 'This Is A Garden',
    kind: 'FILM',
    tag: 'POSTER · FESTIVAL CIRCUIT',
    logline: null,
    img: 'assets/posters/garden.webp',
  },
  {
    title: 'Woodworking',
    kind: 'FILM',
    tag: 'POSTER',
    logline: 'Who left this fucking chair here?',
    img: 'assets/posters/woodworking.png',
  },
  {
    title: 'The Spark',
    kind: 'FILM',
    tag: 'POSTER',
    logline: null,
    img: 'assets/posters/spark.png',
  },
];

function DesignTile({ p, idx }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        border: `1px solid ${hover ? PALETTE.mint : PALETTE.borderMd}`,
        background: PALETTE.surface,
        overflow: 'hidden',
        transition: 'border 0.15s, transform 0.18s',
        transform: hover ? 'translateY(-2px)' : 'none',
        cursor: 'pointer',
      }}>
      {/* Poster — 2:3 portrait aspect */}
      <div style={{ position: 'relative', aspectRatio: '2 / 3', overflow: 'hidden' }}>
        <img src={p.img} alt={p.title}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.4s ease',
            transform: hover ? 'scale(1.03)' : 'scale(1)',
          }}
        />
        {/* kind chip */}
        <div style={{
          position: 'absolute', top: 10, left: 10,
          padding: '3px 8px',
          background: 'rgba(8,19,32,0.85)',
          backdropFilter: 'blur(4px)',
          fontFamily: FONT_MONO, fontSize: 9, letterSpacing: 1.5,
          color: PALETTE.mint, border: `1px solid ${PALETTE.borderHi}`,
        }}>{p.kind}</div>

        {/* hover overlay with logline */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, transparent 55%, rgba(8,19,32,0.96))',
          opacity: hover ? 1 : 0,
          transition: 'opacity 0.2s',
          display: 'flex', alignItems: 'flex-end', padding: 14,
        }}>
          {p.logline ? (
            <div style={{
              fontFamily: FONT_DISPLAY, fontSize: 13, fontStyle: 'italic',
              color: PALETTE.textHi, lineHeight: 1.35,
            }}>
              <span style={{ color: PALETTE.mint }}>“ </span>{p.logline}<span style={{ color: PALETTE.mint }}> ”</span>
            </div>
          ) : (
            <div style={{
              fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 2,
              color: PALETTE.mint,
            }}>▸ INSPECT</div>
          )}
        </div>

        {/* corner brackets on hover */}
        {hover && <CornerBrackets color={PALETTE.mint} size={10} thickness={1.5} inset={6} />}
      </div>

      {/* Caption strip */}
      <div style={{
        padding: '11px 13px 12px',
        borderTop: `1px solid ${PALETTE.borderLo}`,
        background: 'rgba(0,0,0,0.15)',
      }}>
        <div style={{
          fontFamily: FONT_DISPLAY, fontSize: 14, fontWeight: 600, color: PALETTE.textHi,
          lineHeight: 1.2, marginBottom: 2,
        }}>
          {p.title}
        </div>
        <div style={{ fontFamily: FONT_MONO, fontSize: 9, color: PALETTE.textLo, letterSpacing: 1.5 }}>
          {p.tag}
        </div>
      </div>
    </div>
  );
}

function SectionDesign() {
  const save = SAVES.find(s => s.id === 'design');
  const filmCount = DESIGN_PIECES.filter(p => p.kind === 'FILM').length;
  const stageCount = DESIGN_PIECES.filter(p => p.kind === 'STAGE').length;
  return (
    <SectionShell save={save}>
      <div style={{ marginBottom: 28 }}>
        <PanelTitle kicker="DESIGN · #design" code="03·INDEX">
          Posters for <span style={{ color: PALETTE.mint }}>film & stage.</span>
        </PanelTitle>
      </div>

      {/* Poster wall — uniform 4-col grid */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14,
      }}>
        {DESIGN_PIECES.map((p, i) => <DesignTile key={p.title} p={p} idx={i} />)}
      </div>

      {/* Inventory footer — kept (real counts) */}
      <div style={{
        marginTop: 24, padding: '10px 18px',
        border: `1px solid ${PALETTE.borderMd}`,
        background: 'rgba(0,0,0,0.18)',
        display: 'flex', alignItems: 'center', gap: 22,
        fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 1.4, color: PALETTE.textMid,
      }}>
        <span>INVENTORY · {DESIGN_PIECES.length} ITEMS</span>
        <span style={{ color: PALETTE.borderMd }}>│</span>
        <span>FILM · <span style={{ color: PALETTE.mint }}>{filmCount}</span></span>
        <span style={{ color: PALETTE.borderMd }}>│</span>
        <span>STAGE · <span style={{ color: PALETTE.mint }}>{stageCount}</span></span>
        <span style={{ flex: 1 }} />
        <span style={{ color: PALETTE.textLo }}>ALL PIECES PAID CLIENT WORK</span>
      </div>
    </SectionShell>
  );
}

window.SectionDesign = SectionDesign;

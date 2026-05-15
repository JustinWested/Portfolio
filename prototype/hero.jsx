// HERO — Save Select screen. Click a slot to scroll to that section.

function HeroSlot({ save, idx, onSelect, hovered, onHover }) {
  const accent = statusToColor(save.statusColor);
  const isHover = hovered === save.id;
  return (
    <div
      onClick={() => onSelect(save.id)}
      onMouseEnter={() => onHover(save.id)}
      onMouseLeave={() => onHover(null)}
      style={{
        position: 'relative', cursor: 'pointer',
        background: isHover
          ? 'linear-gradient(180deg, rgba(126,220,200,0.10), rgba(126,220,200,0.03))'
          : PALETTE.surface,
        border: `1px solid ${isHover ? PALETTE.mint : PALETTE.borderMd}`,
        transition: 'all 0.2s',
        animation: isHover ? 'slot-glow 2.2s ease-in-out infinite' : 'none',
      }}
    >
      {/* Active arrow indicator */}
      {isHover && (
        <div style={{
          position: 'absolute', left: -28, top: '50%',
          fontFamily: FONT_MONO, fontSize: 18, color: PALETTE.mint,
          animation: 'arrow-bounce 1.2s ease-in-out infinite',
        }}>▶</div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr 180px', alignItems: 'stretch' }}>
        {/* Thumbnail — real image if we have one, striped placeholder otherwise */}
        <div style={{ position: 'relative', borderRight: `1px solid ${PALETTE.borderLo}` }}>
          {save.thumbImg ? (
            <ImageSlot src={save.thumbImg} alt={save.name} height={130} />
          ) : (
            <StripedPlaceholder label={save.thumb} height={130} bg={PALETTE.bgDeep} />
          )}
          {isHover && <CornerBrackets color={accent} size={9} thickness={1.5} inset={5} />}
        </div>

        {/* Body */}
        <div style={{ padding: '14px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            <span style={{ fontFamily: FONT_PIXEL, fontSize: 24, lineHeight: 0.9, color: isHover ? PALETTE.mint : PALETTE.textLo, letterSpacing: 1 }}>
              SAVE_{save.code}
            </span>
            <span style={{ width: 6, height: 6, background: accent, transform: 'rotate(45deg)' }} />
            <span style={{ fontFamily: FONT_MONO, fontSize: 10, color: PALETTE.textLo, letterSpacing: 2 }}>{save.anchor}</span>
          </div>
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 22, fontWeight: 700, color: PALETTE.textHi, letterSpacing: -0.3, marginBottom: 2 }}>
            {save.name}
          </div>
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 13, color: PALETTE.textMid, fontStyle: 'italic', marginBottom: 9 }}>
            {save.role}
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {save.tags.map(t => (
              <span key={t} style={{
                fontFamily: FONT_MONO, fontSize: 9, letterSpacing: 1.2, color: PALETTE.textMid,
                padding: '2px 6px', background: 'rgba(126,220,200,0.04)', border: `1px solid ${PALETTE.borderLo}`,
              }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Right stat strip — real metrics only, no LVL/playtime */}
        <div style={{
          padding: '14px 18px', borderLeft: `1px solid ${PALETTE.borderLo}`,
          display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8,
          background: 'rgba(0,0,0,0.15)',
        }}>
          {save.metrics.slice(0, 2).map((m, i) => (
            <div key={m.k}>
              <div style={{ fontFamily: FONT_MONO, fontSize: 9, color: PALETTE.textLo, letterSpacing: 1.5 }}>{m.k}</div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 13, fontWeight: 600, color: i === 0 ? accent : PALETTE.textHi }}>{m.v}</div>
            </div>
          ))}
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 2, fontFamily: FONT_MONO, fontSize: 9, color: accent, letterSpacing: 1.4 }}>
            <PulseDot size={5} color={accent} /> {save.status}
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero({ onSelect }) {
  const [hovered, setHovered] = React.useState('about');
  return (
    <section id="home" style={{
      minHeight: '100vh', position: 'relative', display: 'flex', flexDirection: 'column',
      padding: '64px 56px 100px',
    }}>
      {/* World map backdrop — Justin's hand-drawn TTRPG world */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'url(assets/world-map.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        opacity: 0.18,
        filter: 'hue-rotate(170deg) saturate(0.65) brightness(0.85)',
        mixBlendMode: 'luminosity',
      }} />
      {/* Vignette to anchor the map into navy at edges */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, transparent 0%, rgba(12,26,43,0.55) 60%, rgba(12,26,43,0.95) 100%), linear-gradient(180deg, rgba(12,26,43,0.4) 0%, transparent 30%, transparent 70%, rgba(12,26,43,0.8) 100%)',
      }} />

      <Scanlines opacity={0.02} />

      {/* atmospheric gradient behind content */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 25% 0%, rgba(126,220,200,0.12), transparent 55%), radial-gradient(ellipse at 110% 90%, rgba(126,220,200,0.06), transparent 50%)',
      }} />

      {/* Top branding strip */}
      <div style={{
        position: 'relative', zIndex: 1,
        display: 'flex', alignItems: 'center', gap: 16, marginBottom: 60,
      }}>
        <img src="https://justinwested.pages.dev/images/helix.webp" alt=""
          style={{ width: 22, height: 22, objectFit: 'contain' }}
        />
        <div style={{
          fontFamily: FONT_MONO, fontSize: 11, letterSpacing: 4, color: PALETTE.mint,
        }}>JW//PORTFOLIO_v2026</div>
        <div style={{ width: 1, height: 18, background: PALETTE.borderMd }} />
        <div style={{ fontFamily: FONT_MONO, fontSize: 10, color: PALETTE.textLo, letterSpacing: 1.5 }}>
          BUILD 2026.05.15 · LOS ANGELES
        </div>
        <div style={{ flex: 1 }} />
        <SocialLinks size={22} />
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8, padding: '5px 11px',
          border: `1px solid ${PALETTE.borderHi}`, background: 'rgba(126,220,200,0.05)',
          fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 1.5, color: PALETTE.mint,
        }}>
          <PulseDot size={5} />
          STATUS: OPEN_TO_OPPORTUNITIES
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 60, alignItems: 'start' }}>
        {/* LEFT — name + tagline + account card */}
        <div>
          <div style={{
            fontFamily: FONT_MONO, fontSize: 11, letterSpacing: 4, color: PALETTE.mint, marginBottom: 18,
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <span style={{ width: 28, height: 1, background: PALETTE.mint }} />
            SELECT FILE TO CONTINUE
          </div>
          <h1 style={{
            fontFamily: FONT_DISPLAY, fontSize: 96, fontWeight: 800, lineHeight: 0.9,
            letterSpacing: -3.5, color: PALETTE.textHi, margin: 0,
          }}>
            JUSTIN<br />
            <span style={{ color: PALETTE.mint }}>WESTED</span>
            <span style={{ color: PALETTE.textLo, fontWeight: 300, animation: 'blink 1.1s steps(2,end) infinite' }}>_</span>
          </h1>
          <p style={{
            fontFamily: FONT_DISPLAY, fontSize: 21, color: PALETTE.textMid,
            marginTop: 18, marginBottom: 28, maxWidth: 540, lineHeight: 1.45,
          }}>
            Frontend developer & senior game tester.<br />
            <span style={{ color: PALETTE.textHi }}>Pick a save.</span>
          </p>

          {/* Account card — real meta only */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 20,
            border: `1px solid ${PALETTE.borderMd}`, background: PALETTE.surface,
            padding: '12px 20px',
          }}>
            <img src="https://justinwested.pages.dev/images/justinwested.webp" alt=""
              style={{
                width: 44, height: 44, objectFit: 'cover', objectPosition: 'center top',
                border: `1px solid ${PALETTE.mint}`,
              }}
            />
            <div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 9, color: PALETTE.textLo, letterSpacing: 2, marginBottom: 2 }}>
                ACCOUNT
              </div>
              <div style={{ fontFamily: FONT_DISPLAY, fontSize: 17, fontWeight: 600 }}>JustinWested_</div>
            </div>
            <div style={{ width: 1, height: 36, background: PALETTE.borderLo }} />
            <div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 9, color: PALETTE.textLo, letterSpacing: 2 }}>BASED</div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 13, color: PALETTE.textHi, fontWeight: 600 }}>Los Angeles</div>
            </div>
            <div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 9, color: PALETTE.textLo, letterSpacing: 2 }}>TIMEZONE</div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 13, color: PALETTE.mint, fontWeight: 600 }}>PST</div>
            </div>
          </div>

          {/* Hovered slot detail caption (small) */}
          <div style={{
            marginTop: 28, fontFamily: FONT_MONO, fontSize: 10, color: PALETTE.textLo, letterSpacing: 1.5,
            minHeight: 36,
          }}>
            {hovered ? (
              <div className="fade-up" key={hovered}>
                <div style={{ color: PALETTE.mint, marginBottom: 4 }}>▸ {hovered.toUpperCase()}</div>
                <div style={{ color: PALETTE.textMid }}>{SAVES.find(s => s.id === hovered)?.summary}</div>
              </div>
            ) : (
              <div style={{ color: PALETTE.textLo }}>▸ HOVER A SAVE TO PREVIEW</div>
            )}
          </div>
        </div>

        {/* RIGHT — save slot stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginLeft: 24 }}>
          {SAVES.map((s, i) => (
            <HeroSlot key={s.id} save={s} idx={i} onSelect={onSelect} hovered={hovered} onHover={setHovered} />
          ))}
        </div>
      </div>

      {/* Bottom scroll hint */}
      <div style={{
        position: 'absolute', bottom: 60, left: '50%', transform: 'translateX(-50%)',
        fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 2, color: PALETTE.textLo,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
      }}>
        <span>SCROLL / CLICK A SAVE</span>
        <span style={{ color: PALETTE.mint, fontSize: 14, animation: 'arrow-bounce 1.4s ease-in-out infinite', transform: 'rotate(90deg)' }}>▶</span>
      </div>
    </section>
  );
}

window.Hero = Hero;

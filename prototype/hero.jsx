// HERO — Save Select screen. Click a slot to scroll to that section.

function HeroSlot({ save, idx, onSelect, hovered, onHover }) {
  const accent = statusToColor(save.statusColor);
  const isHover = hovered === save.id;
  const isMobile = useIsMobile();
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
      {/* Active arrow indicator — desktop only (no hover state on touch) */}
      {isHover && !isMobile && (
        <div style={{
          position: 'absolute', left: -28, top: '50%',
          fontFamily: FONT_MONO, fontSize: 18, color: PALETTE.mint,
          animation: 'arrow-bounce 1.2s ease-in-out infinite',
        }}>▶</div>
      )}

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '96px 1fr' : '160px 1fr 180px',
        alignItems: 'stretch',
      }}>
        {/* Thumbnail */}
        <div style={{ position: 'relative', borderRight: `1px solid ${PALETTE.borderLo}` }}>
          {save.thumbImg ? (
            <ImageSlot src={save.thumbImg} alt={save.name} height={isMobile ? 110 : 130} />
          ) : (
            <StripedPlaceholder label={save.thumb} height={isMobile ? 110 : 130} bg={PALETTE.bgDeep} />
          )}
          {isHover && <CornerBrackets color={accent} size={9} thickness={1.5} inset={5} />}
        </div>

        {/* Body */}
        <div style={{
          padding: isMobile ? '11px 13px' : '14px 20px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          minWidth: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 7 : 10, marginBottom: 4 }}>
            <span style={{
              fontFamily: FONT_PIXEL, fontSize: isMobile ? 20 : 24, lineHeight: 0.9,
              color: isHover ? PALETTE.mint : PALETTE.textLo, letterSpacing: 1,
            }}>
              SAVE_{save.code}
            </span>
            <span style={{ width: 6, height: 6, background: accent, transform: 'rotate(45deg)' }} />
            <span style={{ fontFamily: FONT_MONO, fontSize: isMobile ? 9 : 10, color: PALETTE.textLo, letterSpacing: 2 }}>{save.anchor}</span>
          </div>
          <div style={{
            fontFamily: FONT_DISPLAY, fontSize: isMobile ? 16 : 22, fontWeight: 700,
            color: PALETTE.textHi, letterSpacing: -0.3, marginBottom: 2, lineHeight: 1.1,
          }}>
            {save.name}
          </div>
          <div style={{
            fontFamily: FONT_DISPLAY, fontSize: isMobile ? 11 : 13,
            color: PALETTE.textMid, fontStyle: 'italic', marginBottom: isMobile ? 7 : 9,
          }}>
            {save.role}
          </div>
          {/* Tags hidden on mobile to keep slot compact */}
          {!isMobile && (
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {save.tags.map(t => (
                <span key={t} style={{
                  fontFamily: FONT_MONO, fontSize: 9, letterSpacing: 1.2, color: PALETTE.textMid,
                  padding: '2px 6px', background: 'rgba(126,220,200,0.04)', border: `1px solid ${PALETTE.borderLo}`,
                }}>{t}</span>
              ))}
            </div>
          )}
          {/* On mobile, inline a compact status pulse in place of the right strip */}
          {isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: FONT_MONO, fontSize: 9, color: accent, letterSpacing: 1.4 }}>
              <PulseDot size={5} color={accent} /> {save.status}
            </div>
          )}
        </div>

        {/* Right stat strip — desktop only */}
        {!isMobile && (
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
        )}
      </div>
    </div>
  );
}

function Hero({ onSelect }) {
  const [hovered, setHovered] = React.useState('about');
  const isMobile = useIsMobile();
  return (
    <section id="home" style={{
      minHeight: '100vh', position: 'relative', display: 'flex', flexDirection: 'column',
      padding: isMobile ? '36px 16px 80px' : '64px 56px 100px',
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

      {/* Top branding strip — wraps to two rows on mobile so nothing clips */}
      <div style={{
        position: 'relative', zIndex: 1,
        display: 'flex', alignItems: 'center', gap: isMobile ? 10 : 16,
        marginBottom: isMobile ? 28 : 60,
        flexWrap: isMobile ? 'wrap' : 'nowrap',
      }}>
        <img src="assets/helix.webp" alt=""
          style={{ width: 22, height: 22, objectFit: 'contain' }}
        />
        <div style={{
          fontFamily: FONT_MONO, fontSize: isMobile ? 10 : 11, letterSpacing: isMobile ? 2.5 : 4, color: PALETTE.mint,
        }}>JW//PORTFOLIO_v2026</div>
        {!isMobile && <>
          <div style={{ width: 1, height: 18, background: PALETTE.borderMd }} />
          <div style={{ fontFamily: FONT_MONO, fontSize: 10, color: PALETTE.textLo, letterSpacing: 1.5 }}>
            BUILD 2026.05.15 · LOS ANGELES
          </div>
        </>}
        <div style={{ flex: 1 }} />
        <SocialLinks size={isMobile ? 26 : 22} />
        {!isMobile && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8, padding: '5px 11px',
            border: `1px solid ${PALETTE.borderHi}`, background: 'rgba(126,220,200,0.05)',
            fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 1.5, color: PALETTE.mint,
          }}>
            <PulseDot size={5} />
            STATUS: OPEN_TO_OPPORTUNITIES
          </div>
        )}
      </div>

      <div style={{
        position: 'relative', zIndex: 1, display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1.05fr 1fr',
        gap: isMobile ? 28 : 60, alignItems: 'start',
      }}>
        {/* LEFT — name + tagline + account card */}
        <div>
          <div style={{
            fontFamily: FONT_MONO, fontSize: isMobile ? 10 : 11,
            letterSpacing: isMobile ? 2.5 : 4, color: PALETTE.mint, marginBottom: isMobile ? 12 : 18,
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <span style={{ width: 28, height: 1, background: PALETTE.mint }} />
            SELECT FILE TO CONTINUE
          </div>
          <h1 style={{
            fontFamily: FONT_DISPLAY,
            fontSize: isMobile ? 56 : 96, fontWeight: 800, lineHeight: 0.9,
            letterSpacing: isMobile ? -2 : -3.5,
            color: PALETTE.textHi, margin: 0,
          }}>
            JUSTIN<br />
            <span style={{ color: PALETTE.mint }}>WESTED</span>
            <span style={{ color: PALETTE.textLo, fontWeight: 300, animation: 'blink 1.1s steps(2,end) infinite' }}>_</span>
          </h1>
          <p style={{
            fontFamily: FONT_DISPLAY, fontSize: isMobile ? 16 : 21, color: PALETTE.textMid,
            marginTop: isMobile ? 12 : 18, marginBottom: isMobile ? 18 : 28,
            maxWidth: 540, lineHeight: 1.45,
          }}>
            Software engineer & senior game tester.<br />
            <span style={{ color: PALETTE.textHi }}>Pick a save.</span>
          </p>

          {/* Account card — wraps on mobile so the 3 meta blocks stack under the portrait+name */}
          <div style={{
            display: isMobile ? 'flex' : 'inline-flex',
            alignItems: 'center', gap: isMobile ? 14 : 20,
            border: `1px solid ${PALETTE.borderMd}`, background: PALETTE.surface,
            padding: isMobile ? '10px 14px' : '12px 20px',
            flexWrap: isMobile ? 'wrap' : 'nowrap',
          }}>
            <img src="assets/justinwested.webp" alt=""
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
            {!isMobile && <div style={{ width: 1, height: 36, background: PALETTE.borderLo }} />}
            <div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 9, color: PALETTE.textLo, letterSpacing: 2 }}>BASED</div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 13, color: PALETTE.textHi, fontWeight: 600 }}>Los Angeles</div>
            </div>
            <div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 9, color: PALETTE.textLo, letterSpacing: 2 }}>TIMEZONE</div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 13, color: PALETTE.mint, fontWeight: 600 }}>PST</div>
            </div>
          </div>

          {/* Hovered slot preview — desktop only (no hover on touch) */}
          {!isMobile && (
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
          )}
        </div>

        {/* RIGHT — save slot stack. No left margin on mobile so slots use full width. */}
        <div style={{
          display: 'flex', flexDirection: 'column', gap: 10,
          marginLeft: isMobile ? 0 : 24,
        }}>
          {SAVES.map((s, i) => (
            <HeroSlot key={s.id} save={s} idx={i} onSelect={onSelect} hovered={hovered} onHover={setHovered} />
          ))}
        </div>
      </div>

      {/* Bottom scroll hint — desktop only; on mobile it can sit on top of slots */}
      {!isMobile && (
        <div style={{
          position: 'absolute', bottom: 60, left: '50%', transform: 'translateX(-50%)',
          fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 2, color: PALETTE.textLo,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        }}>
          <span>SCROLL / CLICK A SAVE</span>
          <span style={{ color: PALETTE.mint, fontSize: 14, animation: 'arrow-bounce 1.4s ease-in-out infinite', transform: 'rotate(90deg)' }}>▶</span>
        </div>
      )}
    </section>
  );
}

window.Hero = Hero;

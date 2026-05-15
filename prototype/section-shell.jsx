// SECTION SHELL — the "save file loaded" wrapper. Renders identical header
// chrome across every section so the metaphor stays consistent.

function SectionShell({ save, children, accentColor }) {
  const accent = accentColor || statusToColor(save.statusColor);
  const isMobile = useIsMobile();
  const pad = isMobile ? 16 : 56;
  return (
    <section id={save.id} style={{
      minHeight: '100vh',
      padding: isMobile ? '52px 16px 40px' : '80px 56px 60px',
      position: 'relative',
      borderTop: `1px solid ${PALETTE.borderLo}`,
    }}>
      {/* "FILE LOADED" loading bar — decorative */}
      <div style={{
        position: 'absolute', top: 0, left: pad, right: pad, height: 2,
        background: PALETTE.borderLo, overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, width: '40%',
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          animation: 'loadbar 3.2s linear infinite',
        }} />
      </div>

      {/* Save file header card */}
      <div style={{
        border: `1px solid ${PALETTE.borderMd}`,
        background: 'linear-gradient(180deg, rgba(126,220,200,0.04), rgba(0,0,0,0.05))',
        padding: isMobile ? '14px 16px' : '18px 22px',
        marginBottom: isMobile ? 24 : 36,
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'auto 1fr auto',
        gap: isMobile ? 14 : 24,
        alignItems: 'center',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 14 : 18 }}>
          <div style={{
            fontFamily: FONT_PIXEL,
            fontSize: isMobile ? 42 : 56,
            lineHeight: 0.85, color: accent, letterSpacing: 1,
          }}>
            {save.code}
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{
              fontFamily: FONT_MONO, fontSize: 10, color: PALETTE.textLo, letterSpacing: 2, marginBottom: 3,
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <PulseDot size={5} color={accent} />
              FILE LOADED · {save.anchor}
            </div>
            <div style={{
              fontFamily: FONT_DISPLAY,
              fontSize: isMobile ? 22 : 30,
              fontWeight: 700, color: PALETTE.textHi,
              letterSpacing: -0.5, lineHeight: 1.05,
            }}>{save.name}</div>
            <div style={{
              fontFamily: FONT_DISPLAY, fontSize: isMobile ? 13 : 14, color: PALETTE.textMid,
              fontStyle: 'italic', marginTop: 2,
            }}>{save.role}</div>
          </div>
        </div>

        {/* mid: tags */}
        <div style={{
          display: 'flex', gap: 5, flexWrap: 'wrap',
          alignSelf: isMobile ? 'flex-start' : 'flex-end',
          maxWidth: isMobile ? '100%' : 320,
        }}>
          {save.tags.map(t => (
            <span key={t} style={{
              fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 1.5,
              color: accent, padding: '3px 8px',
              border: `1px solid ${PALETTE.borderHi}`, background: 'rgba(126,220,200,0.04)',
            }}>{t}</span>
          ))}
        </div>

        {/* right: stats — 2 col on mobile, 4 col on desktop */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr 1fr' : 'auto auto auto auto',
          gap: isMobile ? '10px 14px' : '0 22px',
          borderLeft: isMobile ? 'none' : `1px solid ${PALETTE.borderLo}`,
          borderTop: isMobile ? `1px solid ${PALETTE.borderLo}` : 'none',
          paddingLeft: isMobile ? 0 : 22,
          paddingTop: isMobile ? 12 : 0,
        }}>
          {[
            ...save.metrics.map(m => [m.k, m.v, m.k === 'LAST SAVE' ? PALETTE.textMid : PALETTE.textHi]),
            ['STATUS', save.status, accent],
          ].map(([k, v, c]) => (
            <div key={k}>
              <div style={{ fontFamily: FONT_MONO, fontSize: 9, color: PALETTE.textLo, letterSpacing: 1.5 }}>{k}</div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 12, fontWeight: 600, color: c, marginTop: 2 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      {children}
    </section>
  );
}

// Small reusable building blocks for section bodies.

function PanelTitle({ kicker, children, code }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{
        fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 2.5, color: PALETTE.mint,
        display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6,
      }}>
        <span style={{ width: 4, height: 4, background: PALETTE.mint, transform: 'rotate(45deg)' }} />
        {kicker}
        {code && <span style={{ color: PALETTE.textLo, marginLeft: 6 }}>· {code}</span>}
      </div>
      <h2 style={{
        fontFamily: FONT_DISPLAY, fontSize: 36, fontWeight: 700, color: PALETTE.textHi,
        letterSpacing: -0.8, lineHeight: 1.05, margin: 0,
      }}>{children}</h2>
    </div>
  );
}

function GameUIPanel({ children, title, code, accentColor }) {
  // The bordered panel-with-tab look used everywhere in game UIs.
  const accent = accentColor || PALETTE.mint;
  return (
    <div style={{
      position: 'relative', padding: '20px 22px 22px',
      border: `1px solid ${PALETTE.borderMd}`,
      background: 'linear-gradient(180deg, rgba(126,220,200,0.025), transparent)',
    }}>
      <div style={{
        position: 'absolute', top: -1, left: 18, padding: '3px 9px',
        background: PALETTE.bg, fontFamily: FONT_MONO, fontSize: 9, letterSpacing: 2,
        color: accent, transform: 'translateY(-50%)',
        border: `1px solid ${PALETTE.borderMd}`,
      }}>{code} · {title}</div>
      {children}
    </div>
  );
}

Object.assign(window, { SectionShell, PanelTitle, GameUIPanel });

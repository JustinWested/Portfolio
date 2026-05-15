// VARIANT 2 — SAVE SELECT
// Pick your "playthrough": Web · Games · Design.
// Most committed-gamey of the three. Mono-heavy, big save slot cards,
// blinking cursor on the active slot, controller hint bar at the bottom.

const SS = {
  display: '"Geist", system-ui, sans-serif',
  mono: '"JetBrains Mono", monospace',
  pixel: '"VT323", monospace',
};

function SSCornerBadge({ children, color = PALETTE.mint }) {
  return (
    <div style={{
      position: 'absolute', top: 12, right: 12,
      fontFamily: SS.mono, fontSize: 9, letterSpacing: 1.5,
      color: color, padding: '3px 7px',
      border: `1px solid ${color}`,
      background: 'rgba(126,220,200,0.08)',
    }}>{children}</div>
  );
}

function SSSaveSlot({ idx, label, role, level, playtime, lastSave, status, tags, active, locked, thumb }) {
  const accentColor = locked ? PALETTE.textLo : active ? PALETTE.mint : PALETTE.textMid;
  return (
    <div style={{
      position: 'relative',
      background: active ? 'linear-gradient(180deg, rgba(126,220,200,0.06), rgba(126,220,200,0.02))' : PALETTE.surface,
      border: `1px solid ${active ? PALETTE.mint : PALETTE.borderMd}`,
      padding: 0, opacity: locked ? 0.6 : 1,
      transition: 'all 0.2s',
      boxShadow: active ? `0 0 0 1px ${PALETTE.mint}, 0 0 32px rgba(126,220,200,0.18)` : 'none',
    }}>
      {/* Active selector arrow on left */}
      {active && (
        <div style={{
          position: 'absolute', left: -32, top: '50%', transform: 'translateY(-50%)',
          fontFamily: SS.mono, fontSize: 22, color: PALETTE.mint,
          animation: 'bounce 1.2s ease-in-out infinite',
        }}>
          <style>{`@keyframes bounce { 0%,100% { transform: translateY(-50%) translateX(0); } 50% { transform: translateY(-50%) translateX(6px); } }`}</style>
          ▶
        </div>
      )}

      {/* Header strip */}
      <div style={{
        padding: '12px 18px',
        borderBottom: `1px solid ${active ? PALETTE.borderHi : PALETTE.borderLo}`,
        display: 'flex', alignItems: 'center', gap: 12,
        background: active ? 'rgba(126,220,200,0.06)' : 'rgba(0,0,0,0.15)',
      }}>
        <div style={{
          fontFamily: SS.pixel, fontSize: 28, lineHeight: 0.9,
          color: active ? PALETTE.mint : PALETTE.textLo, letterSpacing: 1,
        }}>0{idx}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: SS.mono, fontSize: 10, color: PALETTE.textLo, letterSpacing: 2 }}>
            SAVE FILE
          </div>
          <div style={{ fontFamily: SS.display, fontSize: 18, fontWeight: 600, color: PALETTE.textHi, letterSpacing: -0.2 }}>
            {label}
          </div>
        </div>
        {locked ? (
          <div style={{ fontFamily: SS.mono, fontSize: 10, color: PALETTE.textLo, letterSpacing: 1.5 }}>◇ LOCKED</div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: SS.mono, fontSize: 10, color: accentColor, letterSpacing: 1.5 }}>
            <PulseDot size={6} color={accentColor} />
            {status}
          </div>
        )}
      </div>

      {/* Body — screenshot + stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 0 }}>
        <div style={{ position: 'relative', borderRight: `1px solid ${PALETTE.borderLo}` }}>
          <StripedPlaceholder label={thumb} height={170} bg={PALETTE.bgDeep} />
          {!locked && <CornerBrackets color={accentColor} size={10} thickness={1.5} inset={6} />}
        </div>
        <div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column' }}>
          <div style={{
            fontFamily: SS.mono, fontSize: 10, letterSpacing: 1.5, color: PALETTE.textLo, marginBottom: 4,
          }}>
            CLASS
          </div>
          <div style={{ fontFamily: SS.display, fontSize: 17, color: PALETTE.textHi, fontStyle: 'italic', marginBottom: 12 }}>
            {role}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 18px', marginBottom: 12 }}>
            <div>
              <div style={{ fontFamily: SS.mono, fontSize: 9, color: PALETTE.textLo, letterSpacing: 1.5 }}>LEVEL</div>
              <div style={{ fontFamily: SS.mono, fontSize: 16, fontWeight: 600, color: accentColor }}>{level}</div>
            </div>
            <div>
              <div style={{ fontFamily: SS.mono, fontSize: 9, color: PALETTE.textLo, letterSpacing: 1.5 }}>PLAYTIME</div>
              <div style={{ fontFamily: SS.mono, fontSize: 16, fontWeight: 600, color: PALETTE.textHi }}>{playtime}</div>
            </div>
          </div>

          <div style={{ flex: 1 }} />
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginBottom: 10 }}>
            {tags.map(t => (
              <span key={t} style={{
                fontFamily: SS.mono, fontSize: 9, letterSpacing: 1.2,
                color: PALETTE.textMid, padding: '2px 6px',
                background: 'rgba(126,220,200,0.05)', border: `1px solid ${PALETTE.borderLo}`,
              }}>{t}</span>
            ))}
          </div>
          <div style={{
            fontFamily: SS.mono, fontSize: 10, color: PALETTE.textLo, letterSpacing: 1,
            display: 'flex', justifyContent: 'space-between',
          }}>
            <span>LAST SAVE</span>
            <span style={{ color: PALETTE.textMid }}>{lastSave}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SaveSelectVariant() {
  return (
    <div style={{
      width: '100%', minHeight: '100%', background: PALETTE.bg, color: PALETTE.textHi,
      fontFamily: SS.display, position: 'relative', overflow: 'hidden',
    }}>
      {/* atmospheric gradient */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 30% -10%, rgba(126,220,200,0.10), transparent 50%), radial-gradient(ellipse at 100% 100%, rgba(126,220,200,0.05), transparent 50%)',
      }} />
      <Scanlines opacity={0.025} />

      {/* TOP BAR — minimal, label only */}
      <div style={{
        padding: '20px 56px', display: 'flex', alignItems: 'center', gap: 18,
        borderBottom: `1px solid ${PALETTE.borderLo}`, position: 'relative', zIndex: 1,
      }}>
        <div style={{
          fontFamily: SS.mono, fontSize: 11, letterSpacing: 3, color: PALETTE.mint,
        }}>
          ▣ JW//PORTFOLIO_v2026
        </div>
        <div style={{ flex: 1 }} />
        <div style={{
          fontFamily: SS.mono, fontSize: 10, color: PALETTE.textLo, letterSpacing: 1.5,
          display: 'flex', alignItems: 'center', gap: 16,
        }}>
          <span>BUILD 2026.05.15</span>
          <span style={{ color: PALETTE.borderMd }}>│</span>
          <span>REGION: NA-EAST</span>
          <span style={{ color: PALETTE.borderMd }}>│</span>
          <span style={{ color: PALETTE.mint, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <PulseDot size={5} /> ONLINE
          </span>
        </div>
      </div>

      {/* HERO — title */}
      <div style={{ padding: '40px 56px 24px', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40 }}>
          <div>
            <div style={{
              fontFamily: SS.mono, fontSize: 11, letterSpacing: 4, color: PALETTE.mint, marginBottom: 14,
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <span style={{ width: 28, height: 1, background: PALETTE.mint }} />
              SELECT FILE TO CONTINUE
            </div>
            <div style={{
              fontFamily: SS.display, fontSize: 84, fontWeight: 800, lineHeight: 0.92,
              letterSpacing: -3, color: PALETTE.textHi,
            }}>
              JUSTIN<br />
              <span style={{ color: PALETTE.mint }}>WESTED</span>
              <span style={{ color: PALETTE.textLo, fontWeight: 300 }}>_</span>
            </div>
            <div style={{
              fontFamily: SS.display, fontSize: 19, color: PALETTE.textMid,
              marginTop: 14, maxWidth: 580, lineHeight: 1.4,
            }}>
              Builder, designer, player. I make websites, games, and the
              visual identity around them. <span style={{ color: PALETTE.textHi }}>Pick a save.</span>
            </div>
          </div>
          <div style={{
            border: `1px solid ${PALETTE.borderMd}`, padding: '14px 18px',
            minWidth: 240, background: PALETTE.surface,
          }}>
            <div style={{ fontFamily: SS.mono, fontSize: 9, color: PALETTE.textLo, letterSpacing: 2, marginBottom: 6 }}>
              ACCOUNT
            </div>
            <div style={{ fontFamily: SS.display, fontSize: 18, fontWeight: 600 }}>JustinWested_</div>
            <div style={{
              marginTop: 10, height: 1, background: PALETTE.borderLo,
            }} />
            <div style={{
              marginTop: 10, fontFamily: SS.mono, fontSize: 10, color: PALETTE.textMid, letterSpacing: 1,
              display: 'flex', justifyContent: 'space-between',
            }}>
              <span>SLOTS USED</span><span style={{ color: PALETTE.mint }}>3 / 4</span>
            </div>
            <div style={{
              marginTop: 6, fontFamily: SS.mono, fontSize: 10, color: PALETTE.textMid, letterSpacing: 1,
              display: 'flex', justifyContent: 'space-between',
            }}>
              <span>TOTAL PLAYTIME</span><span style={{ color: PALETTE.textHi }}>4,247 h</span>
            </div>
            <div style={{
              marginTop: 6, fontFamily: SS.mono, fontSize: 10, color: PALETTE.textMid, letterSpacing: 1,
              display: 'flex', justifyContent: 'space-between',
            }}>
              <span>STATUS</span>
              <span style={{ color: PALETTE.mint, display: 'inline-flex', gap: 5, alignItems: 'center' }}>
                <PulseDot size={5} /> OPEN
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SAVE SLOTS */}
      <div style={{ padding: '20px 56px 40px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginLeft: 32 }}>
          <SSSaveSlot
            idx={1}
            label="WEB DEVELOPMENT"
            role="Software Engineer · Builder"
            level="LVL 24"
            playtime="3,200 h"
            lastSave="2026.04.22"
            status="ACCEPTING_WORK"
            tags={['REACT', 'TS', 'WP', 'PHP', 'NODE']}
            thumb="WEB · HERO REEL"
            active
          />
          <SSSaveSlot
            idx={2}
            label="GAME DEVELOPMENT"
            role="Solo Dev · Gameplay Tester"
            level="LVL 18"
            playtime="847 h"
            lastSave="2026.05.10"
            status="WIP_RUNNING"
            tags={['GODOT', 'GDSCRIPT', 'ROLL20', 'NDA']}
            thumb="GAMES · SIZZLE"
          />
          <SSSaveSlot
            idx={3}
            label="GRAPHIC DESIGN"
            role="Illustrator · Identity"
            level="LVL 12"
            playtime="200 h"
            lastSave="2026.03.30"
            status="ARCHIVE"
            tags={['POSTERS', 'IDENTITY', 'MODULES']}
            thumb="DESIGN · POSTER GRID"
          />
        </div>

        {/* New Game / extras */}
        <div style={{
          marginLeft: 32, marginTop: 20,
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16,
        }}>
          <div style={{
            padding: '14px 18px', border: `1px dashed ${PALETTE.borderHi}`,
            display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer',
          }}>
            <div style={{ fontFamily: SS.pixel, fontSize: 24, color: PALETTE.mint, lineHeight: 0.9 }}>+</div>
            <div>
              <div style={{ fontFamily: SS.mono, fontSize: 9, color: PALETTE.textLo, letterSpacing: 2 }}>NEW GAME</div>
              <div style={{ fontFamily: SS.display, fontSize: 14, fontWeight: 600 }}>Start a project together →</div>
            </div>
          </div>
          <div style={{
            padding: '14px 18px', border: `1px solid ${PALETTE.borderMd}`,
            display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer',
            background: 'rgba(126,220,200,0.03)',
          }}>
            <div style={{ fontFamily: SS.pixel, fontSize: 24, color: PALETTE.mint, lineHeight: 0.9 }}>↓</div>
            <div>
              <div style={{ fontFamily: SS.mono, fontSize: 9, color: PALETTE.textLo, letterSpacing: 2 }}>LOAD</div>
              <div style={{ fontFamily: SS.display, fontSize: 14, fontWeight: 600 }}>Resume.pdf · download</div>
            </div>
          </div>
          <div style={{
            padding: '14px 18px', border: `1px solid ${PALETTE.borderMd}`,
            display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer',
            background: 'rgba(126,220,200,0.03)',
          }}>
            <div style={{ fontFamily: SS.pixel, fontSize: 24, color: PALETTE.mint, lineHeight: 0.9 }}>⌖</div>
            <div>
              <div style={{ fontFamily: SS.mono, fontSize: 9, color: PALETTE.textLo, letterSpacing: 2 }}>CO-OP</div>
              <div style={{ fontFamily: SS.display, fontSize: 14, fontWeight: 600 }}>justwested@gmail.com</div>
            </div>
          </div>
        </div>
      </div>

      {/* Controller hint bar (bottom) */}
      <div style={{
        background: PALETTE.bgDeep, borderTop: `1px solid ${PALETTE.borderLo}`,
        padding: '14px 56px', display: 'flex', alignItems: 'center', gap: 24,
        fontFamily: SS.mono, fontSize: 11, letterSpacing: 1.5, color: PALETTE.textMid,
      }}>
        {[
          ['▲▼', 'NAVIGATE'],
          ['↵', 'SELECT'],
          ['TAB', 'INVENTORY'],
          ['Q', 'QUEST LOG'],
          ['ESC', 'QUIT'],
        ].map(([k, l]) => (
          <span key={k} style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
            <span style={{
              padding: '2px 7px', border: `1px solid ${PALETTE.borderHi}`,
              color: PALETTE.mint, fontWeight: 600, minWidth: 24, textAlign: 'center',
            }}>{k}</span>
            {l}
          </span>
        ))}
        <span style={{ flex: 1 }} />
        <span style={{ color: PALETTE.textLo }}>justinwested.dev</span>
      </div>
    </div>
  );
}

window.SaveSelectVariant = SaveSelectVariant;

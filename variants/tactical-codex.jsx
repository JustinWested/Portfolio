// VARIANT 3 — TACTICAL CODEX
// Mass Effect codex / Disco Elysium dossier hybrid. Sidebar nav with an
// active-pulse indicator, dossier-style content cards. This is the most
// "could legit ship as a portfolio" of the three. Clickable sidebar.

const TC = {
  display: '"Spectral", Georgia, serif',
  ui: '"Geist", system-ui, sans-serif',
  mono: '"JetBrains Mono", monospace',
};

const TC_SECTIONS = [
  { id: 'home', code: '01', label: 'OVERVIEW', name: 'Personnel File' },
  { id: 'about', code: '02', label: 'DOSSIER', name: 'Background' },
  { id: 'web', code: '03', label: 'WEB.OPS', name: 'Web Operations' },
  { id: 'games', code: '04', label: 'GAMES.LAB', name: 'Game Projects' },
  { id: 'design', code: '05', label: 'VISUAL', name: 'Visual Output' },
  { id: 'resume', code: '06', label: 'RECORD', name: 'Service Record' },
  { id: 'contact', code: '07', label: 'COMMS', name: 'Channels' },
];

function TCSidebarItem({ section, active, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 12,
        padding: '11px 16px 11px 20px',
        cursor: 'pointer', position: 'relative',
        background: active ? 'linear-gradient(90deg, rgba(126,220,200,0.10), transparent)' : 'transparent',
        borderLeft: active ? `2px solid ${PALETTE.mint}` : '2px solid transparent',
        transition: 'background 0.15s',
      }}>
      <div style={{
        fontFamily: TC.mono, fontSize: 10, letterSpacing: 1, color: active ? PALETTE.mint : PALETTE.textLo,
        minWidth: 20,
      }}>{section.code}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: TC.mono, fontSize: 11, letterSpacing: 2,
          color: active ? PALETTE.mint : PALETTE.textMid, fontWeight: 500,
        }}>{section.label}</div>
        <div style={{
          fontFamily: TC.display, fontSize: 13, color: active ? PALETTE.textHi : PALETTE.textLo,
          fontStyle: 'italic', marginTop: 1,
        }}>{section.name}</div>
      </div>
      {active && <div style={{ color: PALETTE.mint, fontFamily: TC.mono, fontSize: 12 }}>◆</div>}
    </div>
  );
}

function TCField({ label, value, mono }) {
  return (
    <div>
      <div style={{
        fontFamily: TC.mono, fontSize: 9, letterSpacing: 2,
        color: PALETTE.textLo, marginBottom: 3,
      }}>{label}</div>
      <div style={{
        fontFamily: mono ? TC.mono : TC.display, fontSize: mono ? 13 : 16,
        color: PALETTE.textHi, fontWeight: mono ? 500 : 500,
      }}>{value}</div>
    </div>
  );
}

function TCDossierTab({ children, label, code }) {
  return (
    <div style={{
      border: `1px solid ${PALETTE.borderMd}`, padding: '20px 22px 22px',
      background: 'linear-gradient(180deg, rgba(126,220,200,0.025), transparent)',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', top: -1, left: 18, padding: '3px 9px',
        background: PALETTE.bg, fontFamily: TC.mono, fontSize: 9, letterSpacing: 2,
        color: PALETTE.mint, transform: 'translateY(-50%)',
        border: `1px solid ${PALETTE.borderMd}`,
      }}>{code} · {label}</div>
      {children}
    </div>
  );
}

function TCOverviewPanel() {
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 28, marginBottom: 24 }}>
        <div style={{ position: 'relative' }}>
          <StripedPlaceholder label="ID PHOTO" kind="portrait" height={260} />
          <CornerBrackets color={PALETTE.mint} size={12} thickness={1.5} inset={-1} />
          <div style={{
            position: 'absolute', bottom: -8, left: '50%', transform: 'translateX(-50%)',
            padding: '3px 9px', background: PALETTE.bg, color: PALETTE.mint,
            fontFamily: TC.mono, fontSize: 9, letterSpacing: 2, border: `1px solid ${PALETTE.borderHi}`,
          }}>VERIFIED</div>
        </div>
        <div>
          <div style={{
            fontFamily: TC.mono, fontSize: 11, letterSpacing: 4, color: PALETTE.mint, marginBottom: 12,
          }}>◆ PERSONNEL FILE · F-2026-0517</div>
          <h1 style={{
            fontFamily: TC.display, fontSize: 56, fontWeight: 500, lineHeight: 0.95,
            margin: '0 0 4px', letterSpacing: -1,
          }}>
            Wested, <span style={{ fontStyle: 'italic', color: PALETTE.mint }}>Justin</span>
          </h1>
          <div style={{
            fontFamily: TC.display, fontSize: 19, color: PALETTE.textMid,
            fontStyle: 'italic', marginBottom: 22,
          }}>
            Builder, designer, player.
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px 22px',
          }}>
            <TCField label="DESIGNATION" value="Multidisciplinary Builder" />
            <TCField label="CLEARANCE" value="Staff" />
            <TCField label="STATUS" value={
              <span style={{ color: PALETTE.mint, display: 'inline-flex', gap: 6, alignItems: 'center' }}>
                <PulseDot size={6} /> ACTIVE
              </span>
            } />
            <TCField label="LOCATION" value="Pittsburgh, PA" />
            <TCField label="TENURE" value="6+ yrs" mono />
            <TCField label="CHAPTER" value="VIII" />
          </div>
        </div>
      </div>

      <p style={{
        fontFamily: TC.display, fontSize: 17, lineHeight: 1.55,
        color: PALETTE.textMid, margin: '0 0 20px',
      }}>
        Currently <span style={{ color: PALETTE.textHi }}>Staff QA Engineer at Mercedes-Benz R&D</span>,
        triaging defects in autonomous vehicle systems. Also <span style={{ color: PALETTE.textHi }}>Senior Game Tester at Good Gamer Group</span>,
        evaluating unreleased titles under NDA. On nights and weekends I build for
        the web, prototype games in Godot, and draw posters that nobody asked for.
      </p>

      {/* specialization tags */}
      <div style={{ marginBottom: 20 }}>
        <div style={{
          fontFamily: TC.mono, fontSize: 9, letterSpacing: 2, color: PALETTE.textLo, marginBottom: 8,
        }}>SPECIALIZATION TAGS</div>
        <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
          {[
            'FRONTEND', 'REACT/TS', 'GODOT', 'GDSCRIPT', 'WORDPRESS',
            'ROLL20', 'TTRPG', 'QA·STAFF', 'POSTER', 'IDENTITY', 'PIVOT→GAMEPLAY',
          ].map(t => (
            <span key={t} style={{
              fontFamily: TC.mono, fontSize: 10, letterSpacing: 1.5, color: PALETTE.mint,
              padding: '4px 9px', border: `1px solid ${PALETTE.borderHi}`,
              background: 'rgba(126,220,200,0.04)',
            }}>{t}</span>
          ))}
        </div>
      </div>

      {/* operational stats — readout style */}
      <TCDossierTab label="OPERATIONAL READOUT" code="01·A">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {[
            ['4,000+', 'hours of professional QA logged'],
            ['30%', 'reduction in time-to-diagnosis at MB-R&D'],
            ['6+', 'years of receipts'],
            ['100%', 'NDAs honored to date'],
          ].map(([n, l], i) => (
            <div key={i}>
              <div style={{
                fontFamily: TC.display, fontSize: 38, fontWeight: 500, lineHeight: 1, color: PALETTE.mint,
              }}>{n}</div>
              <div style={{
                fontFamily: TC.mono, fontSize: 10, letterSpacing: 1, color: PALETTE.textMid,
                marginTop: 6, lineHeight: 1.4,
              }}>{l}</div>
            </div>
          ))}
        </div>
      </TCDossierTab>
    </>
  );
}

function TCGamesPanel() {
  return (
    <>
      <div style={{
        fontFamily: TC.mono, fontSize: 11, letterSpacing: 4, color: PALETTE.mint, marginBottom: 12,
      }}>◆ GAMES.LAB · #games</div>
      <h1 style={{
        fontFamily: TC.display, fontSize: 52, fontWeight: 500, lineHeight: 1,
        margin: '0 0 6px', letterSpacing: -1,
      }}>
        Game <span style={{ fontStyle: 'italic', color: PALETTE.mint }}>Projects</span>
      </h1>
      <div style={{ fontFamily: TC.display, fontSize: 17, fontStyle: 'italic', color: PALETTE.textMid, marginBottom: 26 }}>
        Jam entries, hobby builds, and NDA-bound testing engagements.
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {JUSTIN.gameProjects.map((p, i) => (
          <div key={i} style={{
            border: `1px solid ${PALETTE.borderMd}`, background: PALETTE.surface,
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'relative' }}>
              <StripedPlaceholder label={`GAME ${i + 1} · GIF/SCREEN`} height={160} bg={PALETTE.surfaceAlt} />
              <div style={{
                position: 'absolute', top: 10, left: 10, padding: '3px 8px',
                background: 'rgba(8,19,32,0.85)',
                fontFamily: TC.mono, fontSize: 9, letterSpacing: 1.5,
                color: PALETTE.mint, border: `1px solid ${PALETTE.borderHi}`,
              }}>0{i + 1} · ARTIFACT</div>
            </div>
            <div style={{ padding: '14px 16px 18px' }}>
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 6,
              }}>
                <div style={{ fontFamily: TC.display, fontSize: 22, fontWeight: 500, color: PALETTE.textHi, lineHeight: 1.1 }}>
                  {p.title}
                </div>
                <div style={{ fontFamily: TC.mono, fontSize: 9, color: PALETTE.textLo, letterSpacing: 1, whiteSpace: 'nowrap' }}>
                  {p.tag}
                </div>
              </div>
              <p style={{
                fontFamily: TC.display, fontSize: 14, lineHeight: 1.5,
                color: PALETTE.textMid, margin: '6px 0 12px',
              }}>{p.note}</p>
              <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                {p.tags && p.tags.map(t => (
                  <span key={t} style={{
                    fontFamily: TC.mono, fontSize: 9, letterSpacing: 1.5, color: PALETTE.mint,
                    padding: '2px 7px', border: `1px solid ${PALETTE.borderMd}`,
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function TCWebPanel() {
  return (
    <>
      <div style={{ fontFamily: TC.mono, fontSize: 11, letterSpacing: 4, color: PALETTE.mint, marginBottom: 12 }}>
        ◆ WEB.OPS · #web
      </div>
      <h1 style={{ fontFamily: TC.display, fontSize: 52, fontWeight: 500, lineHeight: 1, margin: '0 0 6px', letterSpacing: -1 }}>
        Web <span style={{ fontStyle: 'italic', color: PALETTE.mint }}>Operations</span>
      </h1>
      <div style={{ fontFamily: TC.display, fontSize: 17, fontStyle: 'italic', color: PALETTE.textMid, marginBottom: 26 }}>
        Client + personal builds shipped to production.
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {JUSTIN.webProjects.map((p, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '220px 1fr 100px', gap: 18, alignItems: 'center', border: `1px solid ${PALETTE.borderMd}`, background: PALETTE.surface, padding: 14 }}>
            <StripedPlaceholder label={`WEB ${i+1}`} height={88} bg={PALETTE.surfaceAlt} />
            <div>
              <div style={{ fontFamily: TC.display, fontSize: 20, fontWeight: 500 }}>{p.title}</div>
              <div style={{ fontFamily: TC.mono, fontSize: 10, color: PALETTE.textLo, letterSpacing: 1 }}>{p.tag}</div>
              <p style={{ fontFamily: TC.display, fontSize: 14, color: PALETTE.textMid, margin: '8px 0 0' }}>{p.note}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: TC.mono, fontSize: 10, color: PALETTE.mint, letterSpacing: 1.5 }}>OPEN ↗</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function TacticalCodexVariant() {
  const [active, setActive] = React.useState('home');
  const section = TC_SECTIONS.find(s => s.id === active);
  return (
    <div style={{
      width: '100%', minHeight: '100%', background: PALETTE.bg, color: PALETTE.textHi,
      fontFamily: TC.ui, display: 'grid', gridTemplateColumns: '280px 1fr',
      position: 'relative', overflow: 'hidden',
    }}>
      <Scanlines opacity={0.025} />

      {/* SIDEBAR */}
      <aside style={{
        background: PALETTE.bgDeep, borderRight: `1px solid ${PALETTE.borderMd}`,
        display: 'flex', flexDirection: 'column', position: 'relative',
      }}>
        {/* logo / id block */}
        <div style={{ padding: '24px 20px 18px', borderBottom: `1px solid ${PALETTE.borderLo}` }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14,
          }}>
            <div style={{
              width: 32, height: 32, border: `1px solid ${PALETTE.mint}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: TC.mono, fontWeight: 700, color: PALETTE.mint, fontSize: 14,
              position: 'relative',
            }}>
              JW
              <CornerBrackets color={PALETTE.mint} size={5} thickness={1.5} inset={-2} />
            </div>
            <div>
              <div style={{ fontFamily: TC.mono, fontSize: 10, letterSpacing: 2.5, color: PALETTE.mint }}>
                JW//CODEX
              </div>
              <div style={{ fontFamily: TC.mono, fontSize: 9, color: PALETTE.textLo, letterSpacing: 1.5, marginTop: 1 }}>
                v2026.05 · build 0517
              </div>
            </div>
          </div>
          <div style={{
            padding: '8px 10px', border: `1px solid ${PALETTE.borderHi}`,
            display: 'flex', alignItems: 'center', gap: 8,
            background: 'rgba(126,220,200,0.04)',
          }}>
            <PulseDot size={6} />
            <span style={{ fontFamily: TC.mono, fontSize: 10, letterSpacing: 1.5, color: PALETTE.mint }}>
              OPEN_TO_OPPORTUNITIES
            </span>
          </div>
        </div>

        {/* nav */}
        <div style={{
          padding: '14px 0', flex: 1,
        }}>
          <div style={{
            fontFamily: TC.mono, fontSize: 9, letterSpacing: 2.5,
            color: PALETTE.textLo, padding: '0 20px 8px',
          }}>INDEX</div>
          {TC_SECTIONS.map(s => (
            <TCSidebarItem
              key={s.id} section={s}
              active={s.id === active}
              onClick={() => setActive(s.id)}
            />
          ))}
        </div>

        {/* footer */}
        <div style={{ padding: '14px 20px', borderTop: `1px solid ${PALETTE.borderLo}` }}>
          <div style={{ fontFamily: TC.mono, fontSize: 9, color: PALETTE.textLo, letterSpacing: 1.5 }}>
            ENCRYPTED · CHANNEL ◇
          </div>
          <div style={{ fontFamily: TC.mono, fontSize: 11, color: PALETTE.textMid, marginTop: 6 }}>
            justwested@gmail.com
          </div>
          <div style={{ fontFamily: TC.mono, fontSize: 11, color: PALETTE.textMid, marginTop: 2 }}>
            github.com/JustinWested
          </div>
        </div>
      </aside>

      {/* MAIN PANEL */}
      <main style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
        {/* breadcrumb / chrome */}
        <div style={{
          padding: '16px 36px', display: 'flex', alignItems: 'center', gap: 14,
          borderBottom: `1px solid ${PALETTE.borderLo}`,
          fontFamily: TC.mono, fontSize: 10, letterSpacing: 2, color: PALETTE.textLo,
          background: 'rgba(8,19,32,0.5)',
        }}>
          <span>CODEX</span>
          <span style={{ color: PALETTE.borderMd }}>/</span>
          <span style={{ color: PALETTE.mint }}>{section.code} · {section.label}</span>
          <span style={{ color: PALETTE.borderMd }}>/</span>
          <span>#{section.id}</span>
          <span style={{ flex: 1 }} />
          <span>2026.05.15 · 14:23 LOCAL</span>
        </div>

        <div style={{ padding: '32px 40px 40px', flex: 1 }}>
          {active === 'home' && <TCOverviewPanel />}
          {active === 'web' && <TCWebPanel />}
          {active === 'games' && <TCGamesPanel />}
          {active !== 'home' && active !== 'web' && active !== 'games' && (
            <div style={{
              padding: 40, border: `1px dashed ${PALETTE.borderMd}`, textAlign: 'center',
              color: PALETTE.textLo, fontFamily: TC.mono, fontSize: 11, letterSpacing: 2,
            }}>
              <div style={{ fontFamily: TC.display, fontSize: 32, color: PALETTE.textMid, marginBottom: 6, fontStyle: 'italic' }}>
                {section.name}
              </div>
              CONTENT FOR ◆ {section.code} · {section.label} ◆ — Stub.
            </div>
          )}
        </div>

        {/* hint about click */}
        <div style={{
          position: 'absolute', top: 16, right: 36,
          fontFamily: TC.mono, fontSize: 9, letterSpacing: 1.5, color: PALETTE.gold,
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          <PulseDot size={5} color={PALETTE.gold} /> CLICK A SIDEBAR ITEM
        </div>
      </main>
    </div>
  );
}

window.TacticalCodexVariant = TacticalCodexVariant;

// VARIANT 1 — CHARACTER SHEET
// TTRPG / D&D stat-block aesthetic. The most editorial of the three.
// Lives at ~1280×1500. Hero is a fully-rendered character sheet,
// then a Games section header begins below the fold-line.

const CS = {
  font: '"Spectral", Georgia, serif',
  ui: '"Geist", system-ui, sans-serif',
  mono: '"JetBrains Mono", monospace',
};

function CSHairline({ vertical, color = PALETTE.borderMd, length = '100%' }) {
  return (
    <div style={{
      background: color,
      width: vertical ? 1 : length,
      height: vertical ? length : 1,
    }} />
  );
}

function CSDeco({ children }) {
  // Diamond-flanked section divider, like illuminated manuscripts.
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: PALETTE.mintDim }}>
      <div style={{ flex: 1, height: 1, background: PALETTE.borderMd }} />
      <span style={{ width: 5, height: 5, background: PALETTE.mint, transform: 'rotate(45deg)' }} />
      <span style={{
        fontFamily: CS.mono, fontSize: 10, letterSpacing: 2.5,
        textTransform: 'uppercase', color: PALETTE.mint,
      }}>{children}</span>
      <span style={{ width: 5, height: 5, background: PALETTE.mint, transform: 'rotate(45deg)' }} />
      <div style={{ flex: 1, height: 1, background: PALETTE.borderMd }} />
    </div>
  );
}

function CSStat({ stat }) {
  // STR/DEX style — big number, bordered box, label below.
  const pct = (stat.value / stat.max) * 100;
  return (
    <div style={{
      border: `1px solid ${PALETTE.borderMd}`,
      background: 'linear-gradient(180deg, rgba(126,220,200,0.04), transparent)',
      padding: '10px 14px 12px',
      position: 'relative',
    }}>
      <div style={{
        fontFamily: CS.mono, fontSize: 10, letterSpacing: 2,
        color: PALETTE.textLo, textAlign: 'center', marginBottom: 4,
      }}>{stat.key}</div>
      <div style={{
        fontFamily: CS.font, fontSize: 38, lineHeight: 1, color: PALETTE.textHi,
        textAlign: 'center', fontWeight: 500,
      }}>{stat.value}<span style={{ fontSize: 14, color: PALETTE.textLo }}>/{stat.max}</span></div>
      <div style={{
        marginTop: 8, height: 3, background: 'rgba(126,220,200,0.10)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, width: `${pct}%`, background: PALETTE.mint }} />
      </div>
      <div style={{
        fontFamily: CS.mono, fontSize: 9, color: PALETTE.textLo,
        marginTop: 6, textAlign: 'center', letterSpacing: 0.3,
      }}>{stat.note}</div>
    </div>
  );
}

function CSField({ label, value, mono }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
      <div style={{
        fontFamily: CS.mono, fontSize: 9, letterSpacing: 2,
        color: PALETTE.textLo, textTransform: 'uppercase',
      }}>{label}</div>
      <div style={{
        fontFamily: mono ? CS.mono : CS.font, fontSize: mono ? 13 : 16,
        color: PALETTE.textHi, fontWeight: mono ? 500 : 500,
        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
      }}>{value}</div>
    </div>
  );
}

function CSCheckbox({ checked, label, sub }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 9, padding: '5px 0' }}>
      <div style={{
        width: 13, height: 13, marginTop: 4, flexShrink: 0,
        border: `1px solid ${checked ? PALETTE.mint : PALETTE.borderHi}`,
        background: checked ? PALETTE.mint : 'transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {checked && <span style={{ color: PALETTE.bg, fontSize: 10, fontWeight: 700, lineHeight: 1 }}>✓</span>}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: CS.font, fontSize: 14, color: checked ? PALETTE.textMid : PALETTE.textHi,
          textDecoration: checked ? 'line-through' : 'none',
          textDecorationColor: PALETTE.textLo,
        }}>{label}</div>
        {sub && <div style={{ fontFamily: CS.mono, fontSize: 10, color: PALETTE.textLo, marginTop: 1 }}>{sub}</div>}
      </div>
    </div>
  );
}

function CharacterSheetVariant() {
  return (
    <div style={{
      width: '100%', minHeight: '100%', background: PALETTE.bg, color: PALETTE.textHi,
      fontFamily: CS.ui, position: 'relative', overflow: 'hidden',
    }}>
      {/* parchment-y faint texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.4,
        backgroundImage: `radial-gradient(ellipse at top, rgba(126,220,200,0.05), transparent 60%),
                          radial-gradient(ellipse at bottom right, rgba(217,185,116,0.04), transparent 50%)`,
      }} />

      {/* TOP NAV */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 24,
        padding: '18px 48px', borderBottom: `1px solid ${PALETTE.borderLo}`,
        position: 'relative', zIndex: 1,
      }}>
        <div style={{
          fontFamily: CS.mono, fontSize: 11, letterSpacing: 3, color: PALETTE.mint,
        }}>◆ JW</div>
        <div style={{ flex: 1, display: 'flex', gap: 28 }}>
          {['HOME', 'ABOUT', 'WEB', 'GAMES', 'DESIGN', 'RESUME', 'CONTACT'].map((l, i) => (
            <div key={l} style={{
              fontFamily: CS.mono, fontSize: 11, letterSpacing: 2,
              color: i === 0 ? PALETTE.mint : PALETTE.textMid, cursor: 'pointer',
              borderBottom: i === 0 ? `1px solid ${PALETTE.mint}` : '1px solid transparent',
              paddingBottom: 4,
            }}>0{i + 1} · {l}</div>
          ))}
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '5px 11px', border: `1px solid ${PALETTE.borderHi}`,
          fontFamily: CS.mono, fontSize: 10, letterSpacing: 1.5, color: PALETTE.mint,
        }}>
          <PulseDot size={6} />
          OPEN_TO_OPPORTUNITIES
        </div>
      </div>

      {/* HERO — Character Sheet */}
      <div style={{ padding: '36px 48px 24px' }}>
        {/* Sheet header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 6 }}>
          <div>
            <div style={{
              fontFamily: CS.mono, fontSize: 10, letterSpacing: 4,
              color: PALETTE.textLo, marginBottom: 6,
            }}>CHARACTER · SHEET · v2026.05</div>
            <h1 style={{
              fontFamily: CS.font, fontWeight: 500, fontSize: 72, lineHeight: 0.95,
              margin: 0, color: PALETTE.textHi, letterSpacing: -1,
            }}>
              Justin <span style={{ fontStyle: 'italic', color: PALETTE.mint }}>Wested</span>
            </h1>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: CS.mono, fontSize: 10, color: PALETTE.textLo, letterSpacing: 2 }}>CLASS</div>
            <div style={{ fontFamily: CS.font, fontSize: 22, color: PALETTE.textHi, fontStyle: 'italic' }}>
              Multidisciplinary Builder
            </div>
            <div style={{ fontFamily: CS.mono, fontSize: 11, color: PALETTE.textMid, marginTop: 2, letterSpacing: 1 }}>
              LVL 28 · ALIGNMENT: CHAOTIC GOOD
            </div>
          </div>
        </div>

        <div style={{ height: 1, background: PALETTE.borderMd, margin: '20px 0 22px' }} />

        {/* Main sheet grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '230px 1fr 280px', gap: 28 }}>
          {/* LEFT — portrait + bio */}
          <div>
            <div style={{ position: 'relative' }}>
              <StripedPlaceholder label="JUSTIN PORTRAIT" kind="portrait" height={260} />
              <CornerBrackets size={16} thickness={1.5} inset={-3} />
            </div>
            <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, rowGap: 12 }}>
              <CSField label="RACE" value="Human" />
              <CSField label="ORIGIN" value="Pittsburgh" />
              <CSField label="PRONOUNS" value="he/him" />
              <CSField label="EXP" value="6+ yrs" />
              <CSField label="LANG" value="EN · GDScript" />
              <CSField label="GUILD" value="100Devs" />
            </div>
            <div style={{ height: 1, background: PALETTE.borderLo, margin: '18px 0' }} />
            <div style={{ fontFamily: CS.mono, fontSize: 10, letterSpacing: 2, color: PALETTE.textLo, marginBottom: 8 }}>
              EQUIPPED
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{
                border: `1px solid ${PALETTE.borderMd}`, padding: '10px 12px',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <span style={{ width: 6, height: 6, background: PALETTE.mint, transform: 'rotate(45deg)' }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: CS.font, fontSize: 14 }}>Mercedes-Benz R&D</div>
                  <div style={{ fontFamily: CS.mono, fontSize: 10, color: PALETTE.textLo }}>main hand · staff QA</div>
                </div>
              </div>
              <div style={{
                border: `1px solid ${PALETTE.borderMd}`, padding: '10px 12px',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <span style={{ width: 6, height: 6, background: PALETTE.gold, transform: 'rotate(45deg)' }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: CS.font, fontSize: 14 }}>Good Gamer Group</div>
                  <div style={{ fontFamily: CS.mono, fontSize: 10, color: PALETTE.textLo }}>off-hand · sr. game tester</div>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER — stats + skills + bio */}
          <div>
            <CSDeco>ABILITY SCORES</CSDeco>
            <div style={{
              marginTop: 14, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 12,
            }}>
              {JUSTIN.stats.map(s => <CSStat key={s.key} stat={s} />)}
            </div>

            <div style={{ marginTop: 22 }}>
              <CSDeco>BACKSTORY</CSDeco>
              <p style={{
                fontFamily: CS.font, fontSize: 16, lineHeight: 1.55, color: PALETTE.textMid,
                marginTop: 14, marginBottom: 0,
              }}>
                <span style={{ fontFamily: CS.font, fontSize: 32, float: 'left', lineHeight: 0.9, marginRight: 6, marginTop: 4, color: PALETTE.mint }}>S</span>
                taff-level QA engineer with 6+ years across autonomous vehicles
                and unreleased game titles. Builds for the web on the side, draws
                posters for the wall, and runs a long-form D&D table on Sundays.
                Treats quality as a design problem, not a checklist.
              </p>
            </div>

            <div style={{ marginTop: 22 }}>
              <CSDeco>PROFICIENCIES</CSDeco>
              <div style={{
                marginTop: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 28px',
              }}>
                {[
                  { c: true, l: 'React · TypeScript · WordPress', s: 'web stack' },
                  { c: true, l: 'Godot Engine · GDScript', s: 'game stack' },
                  { c: true, l: 'Roll20 plugin authoring', s: 'tabletop tooling' },
                  { c: false, l: 'Three.js / WebGPU', s: 'in progress' },
                  { c: true, l: 'Jira · SOP · log analysis', s: 'qa discipline' },
                  { c: false, l: 'Unity / C#', s: 'planned' },
                ].map((x, i) => (
                  <CSCheckbox key={i} checked={x.c} label={x.l} sub={x.s} />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — quest log */}
          <div>
            <div style={{
              border: `1px solid ${PALETTE.borderMd}`,
              background: PALETTE.surface, padding: '16px 18px 18px',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: -10, left: 14,
                background: PALETTE.bg, padding: '0 8px',
                fontFamily: CS.mono, fontSize: 10, letterSpacing: 2.5, color: PALETTE.mint,
              }}>QUEST LOG</div>

              <div style={{ marginBottom: 14 }}>
                <div style={{ fontFamily: CS.mono, fontSize: 9, letterSpacing: 2, color: PALETTE.gold, marginBottom: 5 }}>
                  ▸ ACTIVE
                </div>
                <div style={{ fontFamily: CS.font, fontSize: 15, color: PALETTE.textHi, lineHeight: 1.3 }}>
                  Ship justinwested.dev
                </div>
                <div style={{ fontFamily: CS.mono, fontSize: 10, color: PALETTE.textLo, marginTop: 2 }}>
                  reward: a portfolio that earns its name
                </div>
              </div>

              <div style={{ height: 1, background: PALETTE.borderLo, margin: '10px 0' }} />

              <div style={{ marginBottom: 14 }}>
                <div style={{ fontFamily: CS.mono, fontSize: 9, letterSpacing: 2, color: PALETTE.mint, marginBottom: 5 }}>
                  ▸ MAIN
                </div>
                <div style={{ fontFamily: CS.font, fontSize: 15, color: PALETTE.textHi, lineHeight: 1.3 }}>
                  Pivot into gameplay engineering
                </div>
                <div style={{ fontFamily: CS.mono, fontSize: 10, color: PALETTE.textLo, marginTop: 2 }}>
                  progress: ████████░░ 80%
                </div>
              </div>

              <div style={{ height: 1, background: PALETTE.borderLo, margin: '10px 0' }} />

              <div>
                <div style={{ fontFamily: CS.mono, fontSize: 9, letterSpacing: 2, color: PALETTE.textLo, marginBottom: 5 }}>
                  ▸ SIDE
                </div>
                <div style={{ fontFamily: CS.font, fontSize: 15, color: PALETTE.textHi, lineHeight: 1.3 }}>
                  Finish CS degree · WGU
                </div>
                <div style={{ fontFamily: CS.mono, fontSize: 10, color: PALETTE.textLo, marginTop: 2 }}>
                  due: 2027
                </div>
              </div>
            </div>

            <div style={{
              marginTop: 18,
              border: `1px solid ${PALETTE.borderMd}`,
              padding: '14px 16px',
            }}>
              <div style={{ fontFamily: CS.mono, fontSize: 10, letterSpacing: 2, color: PALETTE.textLo, marginBottom: 8 }}>
                CHANNELS
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {[
                  ['GH', JUSTIN.github],
                  ['LI', 'linkedin'],
                  ['@', 'justwested'],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: CS.mono, fontSize: 11 }}>
                    <span style={{
                      width: 22, height: 22, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      border: `1px solid ${PALETTE.borderHi}`, color: PALETTE.mint, fontSize: 9, letterSpacing: 0.5,
                    }}>{k}</span>
                    <span style={{ color: PALETTE.textMid }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GAMES section header — peek of the next section */}
      <div style={{
        margin: '20px 48px 0',
        borderTop: `1px solid ${PALETTE.borderMd}`,
        paddingTop: 36,
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 22 }}>
          <div>
            <div style={{ fontFamily: CS.mono, fontSize: 10, letterSpacing: 3, color: PALETTE.mint, marginBottom: 6 }}>
              ◆ CHAPTER 04 · #games
            </div>
            <h2 style={{
              fontFamily: CS.font, fontSize: 48, margin: 0, fontWeight: 500, lineHeight: 1,
              color: PALETTE.textHi,
            }}>
              Tomes & <span style={{ fontStyle: 'italic', color: PALETTE.mint }}>Builds</span>
            </h2>
            <div style={{ fontFamily: CS.mono, fontSize: 11, color: PALETTE.textLo, marginTop: 6, letterSpacing: 1 }}>
              jam entries + hobby builds · all my own
            </div>
          </div>
          <div style={{ fontFamily: CS.mono, fontSize: 10, color: PALETTE.textLo, letterSpacing: 1.5 }}>
            04 / 07 ENTRIES
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {JUSTIN.gameProjects.slice(0, 3).map((p, i) => (
            <div key={i} style={{
              border: `1px solid ${PALETTE.borderMd}`,
              background: PALETTE.surface,
              padding: 0, position: 'relative',
            }}>
              <StripedPlaceholder label={`SCREENSHOT · ${i + 1}`} height={140} bg={PALETTE.surfaceAlt} />
              <div style={{ padding: '14px 16px 18px' }}>
                <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
                  {p.tags && p.tags.map(t => (
                    <span key={t} style={{
                      fontFamily: CS.mono, fontSize: 9, letterSpacing: 1.5,
                      color: PALETTE.mint, border: `1px solid ${PALETTE.borderHi}`,
                      padding: '2px 6px',
                    }}>{t}</span>
                  ))}
                </div>
                <div style={{ fontFamily: CS.font, fontSize: 20, fontWeight: 500, color: PALETTE.textHi }}>
                  {p.title}
                </div>
                <div style={{ fontFamily: CS.mono, fontSize: 10, color: PALETTE.textLo, marginTop: 4, letterSpacing: 0.5 }}>
                  {p.tag}
                </div>
                <p style={{
                  fontFamily: CS.font, fontSize: 14, lineHeight: 1.5,
                  color: PALETTE.textMid, marginTop: 10, marginBottom: 0,
                }}>{p.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* status bar — bottom */}
      <div style={{
        marginTop: 32, padding: '12px 48px',
        background: PALETTE.bgDeep, borderTop: `1px solid ${PALETTE.borderLo}`,
        display: 'flex', alignItems: 'center', gap: 20,
        fontFamily: CS.mono, fontSize: 10, letterSpacing: 1.5, color: PALETTE.textLo,
      }}>
        <span style={{ color: PALETTE.mint }}>◆</span>
        <span>SESSION · LIVE</span>
        <span style={{ color: PALETTE.borderMd }}>│</span>
        <span>HP 28/30 · MP 12/20</span>
        <span style={{ color: PALETTE.borderMd }}>│</span>
        <span>LOCATION: PITTSBURGH, PA</span>
        <span style={{ flex: 1 }} />
        <span>justinwested.dev</span>
      </div>
    </div>
  );
}

window.CharacterSheetVariant = CharacterSheetVariant;

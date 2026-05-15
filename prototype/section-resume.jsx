// QUEST LOG (#resume) — career timeline + skills inventory + PDF export.

const TIMELINE = [
  {
    span: '2023 – NOW',
    co: 'Mercedes-Benz R&D',
    role: 'Triage Engineer',
    badge: 'CURRENT',
    badgeColor: '#7eddc4',
    bullets: [
      'Triage and prioritize defects in complex autonomous vehicle systems.',
      'Manage Jira defect database; 30% reduction in time-to-diagnosis.',
      'Authored test plans and SOPs through a major AV generation transition.',
      'Primary triage-process knowledge resource across teams.',
    ],
  },
  {
    span: '2023 – NOW',
    co: 'Good Gamer Group',
    role: 'Senior Game Tester (Freelance)',
    badge: 'PROMOTED · 2024',
    badgeColor: '#d9b974',
    bullets: [
      'Test unreleased games across genres & platforms — under NDA.',
      'Author bug docs + UX friction analysis + balance observations.',
      'Promoted to Senior for consistent quality of feedback.',
      'NDA-bound reporting standards maintained across every engagement.',
    ],
  },
  {
    span: '2022 – 2023',
    co: '100Devs',
    role: 'Software Engineer Apprentice',
    badge: 'BOOTCAMP',
    badgeColor: '#b3c2cf',
    bullets: [
      'Built interactive web apps with a strong UX focus.',
      'Custom Roll20 plugins — tabletop RPG platform.',
      'Lightweight front-end systems for small businesses including a shipping & receiving app.',
    ],
  },
  {
    span: '2017 – 2021',
    co: 'Argo AI',
    role: 'Triage Engineer',
    badge: '4,000+ HOURS',
    badgeColor: '#b3c2cf',
    bullets: [
      '5+ years and 4,000+ hours of professional QA testing AV systems.',
      'Designed and executed test plans on closed course and public roads.',
      'Mentored new Test Technicians and Test Engineers.',
      'Translated diagnoses into clear, actionable reports for stakeholders.',
    ],
  },
];

function TimelineEntry({ e, idx, last }) {
  return (
    <div style={{
      position: 'relative', display: 'grid', gridTemplateColumns: '160px 1fr', gap: 28,
      paddingLeft: 18, paddingBottom: last ? 0 : 28,
    }}>
      {/* Vertical rail */}
      <div style={{
        position: 'absolute', left: 0, top: 6, bottom: -10,
        width: 2, background: PALETTE.borderMd,
        display: last ? 'none' : 'block',
      }} />
      {/* Node */}
      <div style={{
        position: 'absolute', left: -7, top: 4,
        width: 16, height: 16, border: `2px solid ${idx === 0 ? PALETTE.mint : PALETTE.borderHi}`,
        background: PALETTE.bg, transform: 'rotate(45deg)',
      }}>
        {idx === 0 && <div style={{ position: 'absolute', inset: 2, background: PALETTE.mint }} />}
      </div>

      <div style={{ paddingLeft: 22 }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: idx === 0 ? PALETTE.mint : PALETTE.textLo, letterSpacing: 1.5, fontWeight: 600 }}>
          {e.span}
        </div>
        <div style={{
          fontFamily: FONT_MONO, fontSize: 9, letterSpacing: 1.5, color: e.badgeColor,
          marginTop: 8, padding: '3px 8px', border: `1px solid ${e.badgeColor}`,
          display: 'inline-block',
        }}>{e.badge}</div>
      </div>

      <div style={{
        border: `1px solid ${PALETTE.borderMd}`, background: PALETTE.surface,
        padding: '18px 22px',
      }}>
        <div style={{ fontFamily: FONT_DISPLAY, fontSize: 22, fontWeight: 700, color: PALETTE.textHi, letterSpacing: -0.3, lineHeight: 1.1 }}>
          {e.co}
        </div>
        <div style={{ fontFamily: FONT_DISPLAY, fontSize: 14, color: PALETTE.textMid, fontStyle: 'italic', marginTop: 2 }}>
          {e.role}
        </div>
        <div style={{
          marginTop: 14, display: 'flex', flexDirection: 'column', gap: 6,
        }}>
          {e.bullets.map((b, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '14px 1fr', gap: 8 }}>
              <span style={{ color: PALETTE.mint, fontFamily: FONT_MONO, fontSize: 11 }}>›</span>
              <span style={{ fontFamily: FONT_DISPLAY, fontSize: 14, color: PALETTE.textMid, lineHeight: 1.5 }}>{b}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionResume() {
  const save = SAVES.find(s => s.id === 'resume');
  return (
    <SectionShell save={save}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 36, alignItems: 'start' }}>
        <div>
          <PanelTitle kicker="QUEST LOG · #resume" code="04·HISTORY">
            QA depth & a <span style={{ color: PALETTE.mint }}>gameplay engineering pivot.</span>
          </PanelTitle>
          <div style={{ marginBottom: 32 }} />

          {/* Timeline */}
          <div>
            {TIMELINE.map((e, i) => (
              <TimelineEntry key={e.co + e.span} e={e} idx={i} last={i === TIMELINE.length - 1} />
            ))}
          </div>

          {/* Education */}
          <div style={{ marginTop: 24, paddingTop: 22, borderTop: `1px solid ${PALETTE.borderLo}` }}>
            <div style={{ fontFamily: FONT_MONO, fontSize: 10, color: PALETTE.textLo, letterSpacing: 2.5, marginBottom: 10 }}>
              EDUCATION · TRAINING
            </div>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14,
            }}>
              {[
                ['Western Governors University', 'B.S. Computer Science', 'EXPECTED 2027'],
                ['100Devs', 'Software Engineering Bootcamp', 'COMPLETED 2023'],
              ].map(([s, p, w]) => (
                <div key={s} style={{
                  border: `1px solid ${PALETTE.borderMd}`, padding: '14px 16px',
                }}>
                  <div style={{ fontFamily: FONT_MONO, fontSize: 9, color: PALETTE.mint, letterSpacing: 1.5 }}>{w}</div>
                  <div style={{ fontFamily: FONT_DISPLAY, fontSize: 17, color: PALETTE.textHi, fontWeight: 600, marginTop: 4 }}>{s}</div>
                  <div style={{ fontFamily: FONT_DISPLAY, fontSize: 13, color: PALETTE.textMid, fontStyle: 'italic' }}>{p}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — export card + skill blocks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, position: 'sticky', top: 80 }}>
          <div style={{
            border: `1px solid ${PALETTE.mint}`,
            background: 'linear-gradient(180deg, rgba(126,220,200,0.10), rgba(126,220,200,0.03))',
            padding: '18px 20px 20px', position: 'relative',
          }}>
            <CornerBrackets color={PALETTE.mint} size={10} thickness={1.5} inset={6} />
            <div style={{ fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 2.5, color: PALETTE.mint, marginBottom: 8 }}>
              ▾ EXPORT SAVE
            </div>
            <div style={{ fontFamily: FONT_DISPLAY, fontSize: 19, fontWeight: 700, color: PALETTE.textHi }}>
              Resume.pdf
            </div>
            <div style={{ fontFamily: FONT_MONO, fontSize: 10, color: PALETTE.textLo, letterSpacing: 1, marginTop: 4 }}>
              v2026.05 · 218 KB · 2 pages
            </div>
            <a href="assets/Justin_Wested_Resume.pdf" download style={{
              display: 'block', textDecoration: 'none',
              marginTop: 14, padding: '11px 14px', background: PALETTE.mint,
              color: PALETTE.bg, fontFamily: FONT_MONO, fontSize: 11, fontWeight: 700,
              letterSpacing: 2, textAlign: 'center', cursor: 'pointer',
              border: `1px solid ${PALETTE.mint}`,
            }}>
              ↓ DOWNLOAD
            </a>
            <div style={{
              marginTop: 10, fontFamily: FONT_MONO, fontSize: 9, color: PALETTE.textMid, letterSpacing: 1, textAlign: 'center',
            }}>
              also: <span style={{ color: PALETTE.mint }}>copy as plain text</span> · <span style={{ color: PALETTE.mint }}>share link</span>
            </div>
          </div>

          {/* Skill chips */}
          <GameUIPanel title="SKILL TREE" code="04·B">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                ['QA · ENGINEERING', ['Test Plans', 'Regression', 'SOP', 'Jira Triage', 'Root Cause', 'Log Analysis']],
                ['WEB · STACK', ['React', 'TS', 'JS', 'PHP', 'WordPress', 'SQL']],
                ['GAMES · STACK', ['Godot', 'GDScript', 'Roll20 API', 'TTRPG']],
                ['SYSTEMS', ['Linux', 'CLI', 'AV Tooling', 'Confluence', 'Git']],
              ].map(([cat, items]) => (
                <div key={cat}>
                  <div style={{ fontFamily: FONT_MONO, fontSize: 9, color: PALETTE.textLo, letterSpacing: 1.8, marginBottom: 6 }}>
                    {cat}
                  </div>
                  <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                    {items.map(i => (
                      <span key={i} style={{
                        fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 0.8, color: PALETTE.textMid,
                        padding: '2px 7px', border: `1px solid ${PALETTE.borderLo}`,
                        background: 'rgba(126,220,200,0.03)',
                      }}>{i}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GameUIPanel>
        </div>
      </div>
    </SectionShell>
  );
}

window.SectionResume = SectionResume;

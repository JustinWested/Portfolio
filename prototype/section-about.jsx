// ABOUT — Player Profile. Bio + abilities + now-playing panel.

function SectionAbout() {
  const save = SAVES.find(s => s.id === 'about');
  return (
    <SectionShell save={save}>
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr 320px', gap: 32 }}>
        {/* LEFT — portrait + base info */}
        <div>
          <div style={{ position: 'relative' }}>
            <ImageSlot src="assets/justinwested.webp" alt="Justin Wested" height={360} />
            <CornerBrackets color={PALETTE.mint} size={14} thickness={1.5} inset={-3} />
            <div style={{
              position: 'absolute', bottom: -8, left: '50%', transform: 'translateX(-50%)',
              padding: '3px 9px', background: PALETTE.bg, color: PALETTE.mint,
              fontFamily: FONT_MONO, fontSize: 9, letterSpacing: 2,
              border: `1px solid ${PALETTE.borderHi}`,
            }}>VERIFIED</div>
          </div>

          <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 16px' }}>
            {[
              ['NAME', 'Justin Wested'],
              ['ROLE', 'Staff QA · MB R&D'],
              ['BASED', 'Los Angeles, CA'],
              ['EXP', '6+ years'],
              ['GUILD', '100Devs alum'],
              ['PRONOUNS', 'he/him'],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: FONT_MONO, fontSize: 9, color: PALETTE.textLo, letterSpacing: 2 }}>{k}</div>
                <div style={{ fontFamily: FONT_DISPLAY, fontSize: 15, color: PALETTE.textHi, marginTop: 2 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CENTER — bio + abilities */}
        <div>
          <PanelTitle kicker="ABOUT · #about" code="00·A">
            Frontend developer & <span style={{ color: PALETTE.mint }}>game tester.</span>
          </PanelTitle>

          <p style={{ fontFamily: FONT_DISPLAY, fontSize: 17, lineHeight: 1.6, color: PALETTE.textMid, margin: '0 0 14px' }}>
            <span style={{ color: PALETTE.textHi }}>Staff QA Engineer at Mercedes-Benz R&D.</span> Six
            years in autonomous vehicle software. I own quality across the
            SDLC — the unglamorous parts that ship products.
          </p>
          <p style={{ fontFamily: FONT_DISPLAY, fontSize: 17, lineHeight: 1.6, color: PALETTE.textMid, margin: '0 0 14px' }}>
            Pushing into <span style={{ color: PALETTE.textHi }}>game dev</span> on purpose. Godot
            & GDScript on weekends. Front end work on the side.
          </p>
          <p style={{ fontFamily: FONT_DISPLAY, fontSize: 17, lineHeight: 1.6, color: PALETTE.textMid, margin: '0 0 14px' }}>
            DM for a homebrew D&D table since 2019. Hobbyist indie filmmaker
            on the side — writing & editing. Both keep the engineering work
            sharper than they have any right to.
          </p>
          <p style={{ fontFamily: FONT_DISPLAY, fontSize: 17, lineHeight: 1.6, color: PALETTE.textHi, margin: '0 0 24px' }}>
            Always something on the workbench.
          </p>
        </div>

        {/* RIGHT — now playing / inventory */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <GameUIPanel title="NOW EQUIPPED" code="00·B">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                ['MAIN HAND', 'Mercedes-Benz R&D · Staff QA', PALETTE.mint],
                ['OFF HAND', 'Good Gamer Group · Sr. Tester', PALETTE.gold],
                ['BACK SLOT', 'WGU · CS degree (2027)', PALETTE.textMid],
              ].map(([slot, item, c]) => (
                <div key={slot} style={{ display: 'grid', gridTemplateColumns: '34px 1fr', gap: 11, alignItems: 'center' }}>
                  <div style={{
                    width: 34, height: 34, border: `1px solid ${c}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(126,220,200,0.05)',
                  }}>
                    <span style={{ width: 8, height: 8, background: c, transform: 'rotate(45deg)' }} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontFamily: FONT_MONO, fontSize: 9, color: PALETTE.textLo, letterSpacing: 1.5 }}>{slot}</div>
                    <div style={{ fontFamily: FONT_DISPLAY, fontSize: 13, color: PALETTE.textHi, fontWeight: 500 }}>{item}</div>
                  </div>
                </div>
              ))}
            </div>
          </GameUIPanel>

          <GameUIPanel title="NOW PLAYING" code="00·C">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                ['Monster Hunter World', 'iceborne · MR endgame grind'],
                ['Baldur\'s Gate 3', 'campaign · act 3'],
                ['Hades II', 'early access · 12 runs in'],
              ].map(([g, n]) => (
                <div key={g} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ color: PALETTE.mint, fontFamily: FONT_MONO, fontSize: 12 }}>▶</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: FONT_DISPLAY, fontSize: 14, color: PALETTE.textHi, fontWeight: 500 }}>{g}</div>
                    <div style={{ fontFamily: FONT_MONO, fontSize: 10, color: PALETTE.textLo, letterSpacing: 0.5 }}>{n}</div>
                  </div>
                </div>
              ))}
            </div>
          </GameUIPanel>

          <GameUIPanel title="DM SCREEN" code="00·D">
            <div style={{ fontFamily: FONT_DISPLAY, fontSize: 14, color: PALETTE.textMid, lineHeight: 1.5 }}>
              Currently running a homebrew D&D 5e campaign.
              <span style={{ color: PALETTE.mint }}> Session 47.</span> Party
              level 9. Theatre of the mind.
            </div>
          </GameUIPanel>
        </div>
      </div>
    </SectionShell>
  );
}

window.SectionAbout = SectionAbout;

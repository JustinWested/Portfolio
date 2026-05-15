// CONTACT — Co-op Invite. Channels presented as joinable, plus a message
// form that reads as a "send invite" panel.

function ChannelRow({ icon, kind, handle, label, status, statusColor }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '46px 1fr auto', gap: 16, alignItems: 'center',
      padding: '14px 18px', border: `1px solid ${PALETTE.borderMd}`, background: PALETTE.surface,
      cursor: 'pointer', transition: 'border 0.15s, background 0.15s',
    }}
    onMouseEnter={(e) => { e.currentTarget.style.borderColor = PALETTE.mint; e.currentTarget.style.background = 'rgba(126,220,200,0.05)'; }}
    onMouseLeave={(e) => { e.currentTarget.style.borderColor = PALETTE.borderMd; e.currentTarget.style.background = PALETTE.surface; }}
    >
      <div style={{
        width: 46, height: 46, border: `1px solid ${PALETTE.borderHi}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: FONT_MONO, fontSize: 13, fontWeight: 700, color: PALETTE.mint,
        background: 'rgba(126,220,200,0.04)',
      }}>{icon}</div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 9, color: PALETTE.textLo, letterSpacing: 2 }}>{kind}</div>
        <div style={{ fontFamily: FONT_DISPLAY, fontSize: 17, fontWeight: 600, color: PALETTE.textHi, lineHeight: 1.2 }}>{handle}</div>
        <div style={{ fontFamily: FONT_MONO, fontSize: 10, color: PALETTE.textMid, letterSpacing: 0.5, marginTop: 2 }}>{label}</div>
      </div>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 14,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: FONT_MONO, fontSize: 10, color: statusColor, letterSpacing: 1.5 }}>
          <PulseDot size={5} color={statusColor} /> {status}
        </div>
        <span style={{ color: PALETTE.mint, fontFamily: FONT_MONO, fontSize: 16 }}>↗</span>
      </div>
    </div>
  );
}

function SectionContact() {
  const save = SAVES.find(s => s.id === 'contact');
  const [name, setName] = React.useState('');
  const [msg, setMsg] = React.useState('');
  return (
    <SectionShell save={save}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 40, alignItems: 'start' }}>
        <div>
          <PanelTitle kicker="CONTACT · #contact" code="05·CHANNELS">
            Open the channel. <span style={{ color: PALETTE.mint }}>Let's co-op.</span>
          </PanelTitle>
          <p style={{
            fontFamily: FONT_DISPLAY, fontSize: 16, lineHeight: 1.55, color: PALETTE.textMid,
            margin: '0 0 24px', maxWidth: 560,
          }}>
            Reply within a day. Studio roles & freelance work both welcome.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <ChannelRow
              icon="✉" kind="PRIMARY" handle="justwested@gmail.com"
              label="best for studios & clients"
              status="ACTIVE" statusColor={PALETTE.mint}
            />
            <ChannelRow
              icon="GH" kind="REPOS" handle="github.com/JustinWested"
              label="open source & jam entries"
              status="DAILY" statusColor={PALETTE.mint}
            />
            <ChannelRow
              icon="LI" kind="PROFESSIONAL" handle="linkedin.com/in/justin-wested"
              label="full work history"
              status="WEEKLY" statusColor={PALETTE.gold}
            />
            <ChannelRow
              icon="☎" kind="DIRECT · ON REQUEST" handle="(412) 378-1354"
              label="reserved for active interviews"
              status="RING ONLY" statusColor={PALETTE.textMid}
            />
          </div>

          <div style={{
            marginTop: 22, padding: '14px 18px',
            border: `1px solid ${PALETTE.borderMd}`, borderLeft: `2px solid ${PALETTE.mint}`,
            background: 'linear-gradient(90deg, rgba(126,220,200,0.06), transparent)',
            display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <PulseDot size={7} />
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: FONT_MONO, fontSize: 10, color: PALETTE.mint, letterSpacing: 2 }}>CURRENT AVAILABILITY</div>
              <div style={{ fontFamily: FONT_DISPLAY, fontSize: 15, color: PALETTE.textHi, marginTop: 2 }}>
                Open to <span style={{ color: PALETTE.mint }}>gameplay engineering</span> roles
                & freelance web work. Based in Los Angeles · PST.
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Send Invite panel */}
        <div style={{
          border: `1px solid ${PALETTE.mint}`,
          background: 'linear-gradient(180deg, rgba(126,220,200,0.06), rgba(126,220,200,0.02))',
          padding: '24px 26px', position: 'relative',
        }}>
          <CornerBrackets color={PALETTE.mint} size={12} thickness={1.5} inset={8} />

          <div style={{ fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 3, color: PALETTE.mint, marginBottom: 10 }}>
            ◆ SEND CO-OP INVITE
          </div>
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 24, fontWeight: 700, color: PALETTE.textHi, letterSpacing: -0.3 }}>
            Quick message form
          </div>
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 13, color: PALETTE.textMid, marginTop: 4, fontStyle: 'italic' }}>
            Submits to inbox · ~24h reply
          </div>

          <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <FormField label="YOUR HANDLE" value={name} onChange={setName} placeholder="Player_2" />
            <FormField label="CHANNEL" value="" onChange={() => {}} placeholder="studio@..." />
            <FormField label="GAME MODE" value="" onChange={() => {}} placeholder="role / freelance / collab" />
            <FormField label="MESSAGE" textarea value={msg} onChange={setMsg} placeholder="What you're working on. What you need." />

            <div style={{
              marginTop: 4, padding: '12px 16px',
              background: PALETTE.mint, color: PALETTE.bg,
              fontFamily: FONT_MONO, fontSize: 12, fontWeight: 700, letterSpacing: 2.5,
              textAlign: 'center', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            }}>
              <span>↑</span> SEND_INVITE
            </div>
            <div style={{
              fontFamily: FONT_MONO, fontSize: 9, color: PALETTE.textLo, letterSpacing: 1.2, textAlign: 'center',
            }}>
              ◆ ENCRYPTED · NO MAILING LIST
            </div>
          </div>
        </div>
      </div>

      {/* Footer block */}
      <div style={{
        marginTop: 50, paddingTop: 24, borderTop: `1px solid ${PALETTE.borderMd}`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 28,
      }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 10, color: PALETTE.textLo, letterSpacing: 1.5 }}>
          ◆ END OF FILE · justinwested.dev
        </div>
        <a href="#home" style={{
          fontFamily: FONT_MONO, fontSize: 11, color: PALETTE.mint, letterSpacing: 2.5,
          textDecoration: 'none', border: `1px solid ${PALETTE.borderHi}`,
          padding: '7px 14px', background: 'rgba(126,220,200,0.04)',
        }}>↑ RETURN TO TITLE</a>
      </div>
    </SectionShell>
  );
}

function FormField({ label, value, onChange, placeholder, textarea }) {
  const [focus, setFocus] = React.useState(false);
  const Tag = textarea ? 'textarea' : 'input';
  return (
    <div>
      <div style={{
        fontFamily: FONT_MONO, fontSize: 9, color: focus ? PALETTE.mint : PALETTE.textLo,
        letterSpacing: 2, marginBottom: 5, transition: 'color 0.15s',
      }}>▸ {label}</div>
      <Tag
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={placeholder}
        rows={textarea ? 4 : undefined}
        style={{
          width: '100%', padding: textarea ? '10px 12px' : '8px 12px',
          background: 'rgba(8,19,32,0.65)',
          border: `1px solid ${focus ? PALETTE.mint : PALETTE.borderMd}`,
          color: PALETTE.textHi,
          fontFamily: textarea ? FONT_DISPLAY : FONT_MONO,
          fontSize: textarea ? 14 : 13,
          outline: 'none',
          resize: textarea ? 'vertical' : 'none',
          transition: 'border 0.15s, background 0.15s',
        }}
      />
    </div>
  );
}

window.SectionContact = SectionContact;

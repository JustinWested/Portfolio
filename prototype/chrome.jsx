// CHROME — sticky tab bar that appears after hero + persistent bottom status bar.

const FONT_DISPLAY = '"Geist", system-ui, sans-serif';
const FONT_MONO = '"JetBrains Mono", monospace';
const FONT_PIXEL = '"VT323", monospace';

// SocialLinks — persistent row of GH / LinkedIn / IMDb / Instagram.
// Used in the hero top strip, sticky tab bar, and bottom status bar so
// the user can always reach them.
const SOCIAL_LINKS = [
  {
    key: 'gh',
    label: 'GitHub',
    href: 'https://github.com/JustinWested',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    key: 'li',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/justin-wested',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    key: 'imdb',
    label: 'IMDb',
    href: 'https://www.imdb.com/name/nm8409802/',
    // IMDb wordmark, drawn as text since it's the most recognizable form.
    text: 'IMDb',
  },
  {
    key: 'ig',
    label: 'Instagram',
    href: 'https://www.instagram.com/justin.goes.west/',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

function SocialLinks({ size = 24, tone = 'default' }) {
  // tone: 'default' = mid-text default + mint hover. 'subtle' = lo-text default.
  const base = tone === 'subtle' ? PALETTE.textLo : PALETTE.textMid;
  return (
    <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
      {SOCIAL_LINKS.map(s => (
        <a key={s.key} href={s.href} target="_blank" rel="noreferrer" title={s.label}
          aria-label={s.label}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = PALETTE.mint;
            e.currentTarget.style.borderColor = PALETTE.mint;
            e.currentTarget.style.background = 'rgba(126,220,200,0.10)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = base;
            e.currentTarget.style.borderColor = PALETTE.borderLo;
            e.currentTarget.style.background = 'transparent';
          }}
          style={{
            width: size, height: size,
            border: `1px solid ${PALETTE.borderLo}`,
            color: base, background: 'transparent',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            textDecoration: 'none', transition: 'color 0.15s, border 0.15s, background 0.15s',
            padding: s.text ? 0 : size * 0.22,
            fontFamily: FONT_MONO, fontSize: Math.round(size * 0.38), fontWeight: 700, letterSpacing: 0.3,
          }}>
          {s.text || s.svg}
        </a>
      ))}
    </div>
  );
}

function StickyTabBar({ active, onSelect, visible }) {
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      transform: visible ? 'translateY(0)' : 'translateY(-100%)',
      transition: 'transform 0.4s cubic-bezier(.2,.7,.2,1)',
      background: 'rgba(8,19,32,0.92)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      borderBottom: `1px solid ${PALETTE.borderMd}`,
    }}>
      <div style={{
        maxWidth: 1440, margin: '0 auto',
        padding: '10px 56px',
        display: 'flex', alignItems: 'center', gap: 18,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <img src="assets/helix.webp" alt=""
            style={{ width: 22, height: 22, objectFit: 'contain' }}
          />
          <span style={{
            fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 3, color: PALETTE.mint,
          }}>
            JW//
          </span>
        </div>
        <div style={{ width: 1, height: 18, background: PALETTE.borderMd }} />

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 4, flex: 1, overflow: 'hidden' }}>
          {SAVES.map(s => {
            const isActive = active === s.id;
            const color = isActive ? statusToColor(s.statusColor) : PALETTE.textMid;
            return (
              <a key={s.id} href={s.anchor} onClick={(e) => { e.preventDefault(); onSelect(s.id); }}
                style={{
                  textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8,
                  padding: '7px 12px', cursor: 'pointer',
                  background: isActive ? 'rgba(126,220,200,0.10)' : 'transparent',
                  border: `1px solid ${isActive ? PALETTE.borderHi : 'transparent'}`,
                  transition: 'background 0.15s, border 0.15s',
                }}
              >
                <span style={{
                  fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 1.2, color: PALETTE.textLo,
                }}>{s.code}</span>
                <span style={{
                  fontFamily: FONT_DISPLAY, fontSize: 12, fontWeight: 600, color, letterSpacing: 0.3,
                }}>{s.name}</span>
                {isActive && <PulseDot size={5} color={color} />}
              </a>
            );
          })}
        </div>

        {/* Right stack — socials on top, invite below — keeps the bar narrow */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'stretch', flexShrink: 0 }}>
          <SocialLinks size={20} />
          <a href="#contact" onClick={(e) => { e.preventDefault(); onSelect('contact'); }}
            style={{
              textDecoration: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              padding: '4px 10px', border: `1px solid ${PALETTE.mint}`,
              background: 'rgba(126,220,200,0.08)',
              fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 1.5, color: PALETTE.mint,
              cursor: 'pointer',
            }}>
            <PulseDot size={5} />
            INVITE_TO_GAME ↗
          </a>
        </div>
      </div>
    </div>
  );
}

function PersistentStatusBar() {
  const [time, setTime] = React.useState('');
  React.useEffect(() => {
    const update = () => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, '0');
      const mm = String(d.getMinutes()).padStart(2, '0');
      const ss = String(d.getSeconds()).padStart(2, '0');
      setTime(`${hh}:${mm}:${ss}`);
    };
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);
  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50,
      background: PALETTE.bgDeep,
      borderTop: `1px solid ${PALETTE.borderMd}`,
      padding: '8px 56px',
      display: 'flex', alignItems: 'center', gap: 22,
      fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 1.4, color: PALETTE.textMid,
    }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: PALETTE.mint }}>
        <PulseDot size={5} /> ONLINE
      </span>
      <span style={{ color: PALETTE.borderMd }}>│</span>
      <span>REGION: LOS ANGELES</span>
      <span style={{ color: PALETTE.borderMd }}>│</span>
      <span>SLOT: <span style={{ color: PALETTE.textHi }}>JustinWested_</span></span>
      <span style={{ flex: 1 }} />
      <SocialLinks size={20} tone="subtle" />
      <span style={{ color: PALETTE.borderMd }}>│</span>
      <span style={{ color: PALETTE.textLo }}>{time} LOCAL</span>
      <span style={{ color: PALETTE.borderMd }}>│</span>
      <span style={{ color: PALETTE.mint }}>STATUS: OPEN_TO_OPPORTUNITIES</span>
    </div>
  );
}

Object.assign(window, { StickyTabBar, PersistentStatusBar, SocialLinks, FONT_DISPLAY, FONT_MONO, FONT_PIXEL });

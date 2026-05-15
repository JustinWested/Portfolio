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
  const isMobile = useIsMobile();
  const tabRowRef = React.useRef(null);

  // On mobile, scroll the active tab into view so it stays visible as the
  // user scrolls through sections.
  React.useEffect(() => {
    if (!isMobile || !tabRowRef.current) return;
    const el = tabRowRef.current.querySelector(`[data-tab="${active}"]`);
    if (el && el.scrollIntoView) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [active, isMobile]);

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
        padding: isMobile ? '8px 12px' : '10px 56px',
        display: 'flex', alignItems: 'center', gap: isMobile ? 10 : 18,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <img src="assets/helix.webp" alt=""
            style={{ width: isMobile ? 20 : 22, height: isMobile ? 20 : 22, objectFit: 'contain' }}
          />
          {!isMobile && (
            <span style={{
              fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 3, color: PALETTE.mint,
            }}>
              JW//
            </span>
          )}
        </div>
        {!isMobile && <div style={{ width: 1, height: 18, background: PALETTE.borderMd }} />}

        {/* Tabs — horizontally scrollable on mobile so all 6 stay reachable */}
        <div
          ref={tabRowRef}
          style={{
            display: 'flex', gap: 4, flex: 1,
            overflowX: isMobile ? 'auto' : 'hidden',
            overflowY: 'hidden',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {SAVES.map(s => {
            const isActive = active === s.id;
            const color = isActive ? statusToColor(s.statusColor) : PALETTE.textMid;
            return (
              <a key={s.id} href={s.anchor} data-tab={s.id}
                onClick={(e) => { e.preventDefault(); onSelect(s.id); }}
                style={{
                  textDecoration: 'none', display: 'flex', alignItems: 'center',
                  gap: isMobile ? 5 : 8,
                  padding: isMobile ? '6px 9px' : '7px 12px',
                  cursor: 'pointer', flexShrink: 0,
                  background: isActive ? 'rgba(126,220,200,0.10)' : 'transparent',
                  border: `1px solid ${isActive ? PALETTE.borderHi : 'transparent'}`,
                  transition: 'background 0.15s, border 0.15s',
                }}
              >
                <span style={{
                  fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 1.2, color: PALETTE.textLo,
                }}>{s.code}</span>
                {/* On mobile, only the active tab shows its name to save horizontal room */}
                {(!isMobile || isActive) && (
                  <span style={{
                    fontFamily: FONT_DISPLAY,
                    fontSize: isMobile ? 11 : 12,
                    fontWeight: 600, color, letterSpacing: 0.3,
                    whiteSpace: 'nowrap',
                  }}>{s.name}</span>
                )}
                {isActive && <PulseDot size={5} color={color} />}
              </a>
            );
          })}
        </div>

        {/* Right stack — desktop only. On mobile the bar stays single-row, and
            socials/invite are reachable from the hero, footer, and contact section. */}
        {!isMobile && (
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
        )}
      </div>
    </div>
  );
}

function PersistentStatusBar() {
  const [time, setTime] = React.useState('');
  const isMobile = useIsMobile();
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
  const sep = <span style={{ color: PALETTE.borderMd }}>│</span>;
  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50,
      background: PALETTE.bgDeep,
      borderTop: `1px solid ${PALETTE.borderMd}`,
      padding: isMobile ? '6px 12px' : '8px 56px',
      display: 'flex', alignItems: 'center', gap: isMobile ? 8 : 22,
      fontFamily: FONT_MONO, fontSize: isMobile ? 9 : 10, letterSpacing: 1.4, color: PALETTE.textMid,
    }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: PALETTE.mint }}>
        <PulseDot size={5} />{!isMobile && ' ONLINE'}
      </span>
      {!isMobile && <>
        {sep}
        <span>REGION: LOS ANGELES</span>
        {sep}
        <span>SLOT: <span style={{ color: PALETTE.textHi }}>JustinWested_</span></span>
      </>}
      {/* Socials — visible on mobile (smaller) and desktop (subtle) */}
      <SocialLinks size={isMobile ? 22 : 20} tone="subtle" />
      <span style={{ flex: 1 }} />
      {!isMobile && sep}
      <span style={{ color: PALETTE.textLo }}>{time}{!isMobile && ' LOCAL'}</span>
      {!isMobile && <>
        {sep}
        <span style={{ color: PALETTE.mint }}>STATUS: OPEN_TO_OPPORTUNITIES</span>
      </>}
    </div>
  );
}

// WINNOW PROMPT — small sticky "side quest" button above the status bar.
// Clicking opens a modal that pitches Winnow (justin's movie ranking app)
// in the same save-screen visual language as the rest of the site.
function WinnowPrompt() {
  const [open, setOpen] = React.useState(false);
  const isMobile = useIsMobile();

  // Esc to close + lock body scroll while open
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open Winnow side quest"
        style={{
          position: 'fixed',
          // Sit just above the persistent status bar (~30px tall on mobile, ~34px on desktop).
          bottom: isMobile ? 38 : 46,
          right: isMobile ? 12 : 24,
          zIndex: 55,
          padding: isMobile ? '7px 11px' : '9px 14px',
          background: 'rgba(8,19,32,0.92)',
          border: `1px solid ${PALETTE.mint}`,
          color: PALETTE.mint,
          fontFamily: FONT_MONO,
          fontSize: isMobile ? 10 : 11,
          letterSpacing: 1.8, fontWeight: 700,
          cursor: 'pointer',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', gap: 8,
          boxShadow: '0 0 18px rgba(126,220,200,0.22)',
          animation: 'slot-glow 3.4s ease-in-out infinite',
        }}
      >
        <PulseDot size={5} />
        {isMobile ? 'WINNOW' : 'DISCOVER WINNOW'}
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="winnow-prompt-title"
          style={{
            position: 'fixed', inset: 0, zIndex: 100,
            background: 'rgba(8,19,32,0.78)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 16,
            animation: 'fade-up 0.22s ease-out both',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: 380, width: '100%',
              padding: '26px 24px 22px',
              background: 'linear-gradient(180deg, rgba(126,220,200,0.08), rgba(126,220,200,0.02)), ' + PALETTE.bg,
              border: `1px solid ${PALETTE.mint}`,
              boxShadow: '0 10px 60px rgba(126,220,200,0.25), 0 4px 30px rgba(0,0,0,0.5)',
            }}
          >
            <CornerBrackets color={PALETTE.mint} size={14} thickness={1.5} inset={8} />

            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              style={{
                position: 'absolute', top: 6, right: 8,
                width: 30, height: 30, padding: 0,
                background: 'transparent', border: 'none', cursor: 'pointer',
                color: PALETTE.textMid,
                fontFamily: FONT_MONO, fontSize: 20, lineHeight: 1,
              }}
            >×</button>

            <div style={{
              fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 3,
              color: PALETTE.mint, marginBottom: 10,
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <PulseDot size={5} /> BONUS LEVEL
            </div>

            <div id="winnow-prompt-title" style={{
              fontFamily: FONT_DISPLAY, fontSize: 26, fontWeight: 700,
              color: PALETTE.textHi, letterSpacing: -0.4, lineHeight: 1.05,
              marginBottom: 10,
            }}>
              Like movies?
            </div>

            <p style={{
              fontFamily: FONT_DISPLAY, fontSize: 15, lineHeight: 1.55,
              color: PALETTE.textMid, margin: '0 0 18px',
            }}>
              Try <span style={{ color: PALETTE.mint, fontWeight: 600 }}>Winnow</span>{' '}
              — my movie ranking app. Rank films against each other instead
              of giving them stars. (Star ratings are how you avoid having
              an opinion.)
            </p>

            <a
              href="https://www.winnowlist.com"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: 10, padding: '12px 16px',
                background: PALETTE.mint, color: PALETTE.bg,
                textDecoration: 'none',
                fontFamily: FONT_MONO, fontSize: 12, fontWeight: 700,
                letterSpacing: 2.5,
                border: `1px solid ${PALETTE.mint}`,
              }}
            >
              ▶ OPEN WINNOWLIST.COM ↗
            </a>

            <div style={{
              marginTop: 12, fontFamily: FONT_MONO, fontSize: 9,
              color: PALETTE.textLo, letterSpacing: 1.4, textAlign: 'center',
            }}>
              ◆ ALSO BY JUSTIN · winnowlist.com
            </div>
          </div>
        </div>
      )}
    </>
  );
}

Object.assign(window, { StickyTabBar, PersistentStatusBar, WinnowPrompt, SocialLinks, FONT_DISPLAY, FONT_MONO, FONT_PIXEL });

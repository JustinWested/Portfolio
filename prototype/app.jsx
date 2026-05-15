// APP — wires hero + sections + sticky chrome.
// Tracks active section via a scroll listener (deterministic: always
// picks one section) and smooth-scrolls when a save slot or tab is clicked.

function App() {
  const [active, setActive] = React.useState('home');
  const [pastHero, setPastHero] = React.useState(false);

  React.useEffect(() => {
    const sectionIds = ['home', ...SAVES.map(s => s.id)];
    // Threshold line ~ where the sticky bar sits. A section becomes active
    // once its top edge crosses above this line.
    const ACTIVATION_OFFSET = 140;
    // Show the sticky bar as soon as the user starts scrolling.
    const STICKY_OFFSET = 60;

    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      setPastHero(y > STICKY_OFFSET);

      // Bottom-of-page safety: if we're within a screen of the bottom,
      // lock to the last section so the final entry can highlight even
      // if it's shorter than the activation offset.
      const nearBottom = y + window.innerHeight >= document.documentElement.scrollHeight - 4;
      if (nearBottom) {
        setActive(sectionIds[sectionIds.length - 1]);
        return;
      }

      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - ACTIVATION_OFFSET <= 0) {
          current = id;
        } else {
          break;
        }
      }
      setActive(current);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const handleSelect = React.useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update hash without causing a jump
      history.replaceState(null, '', `#${id}`);
    }
  }, []);

  // Allow hash on load to scroll directly to a section.
  React.useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && hash !== 'home') {
      setTimeout(() => handleSelect(hash), 200);
    }
  }, [handleSelect]);

  return (
    <div style={{ paddingBottom: 40 /* room for fixed status bar */ }}>
      <StickyTabBar active={active} onSelect={handleSelect} visible={pastHero} />

      <Hero onSelect={handleSelect} />
      <SectionAbout />
      <SectionWeb />
      <SectionGames />
      <SectionDesign />
      <SectionResume />
      <SectionContact />

      <PersistentStatusBar />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

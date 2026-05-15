// APP — wires hero + sections + sticky chrome.
// Tracks active section via IntersectionObserver and smooth-scrolls
// when a save slot or tab is clicked.

function App() {
  const [active, setActive] = React.useState('home');
  const [pastHero, setPastHero] = React.useState(false);

  React.useEffect(() => {
    const sectionIds = ['home', ...SAVES.map(s => s.id)];
    const els = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    const io = new IntersectionObserver((entries) => {
      // Pick the entry closest to top that's intersecting.
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible.length) {
        setActive(visible[0].target.id);
        setPastHero(visible[0].target.id !== 'home');
      }
    }, {
      rootMargin: '-30% 0px -55% 0px',
      threshold: [0, 0.1, 0.25, 0.5],
    });

    els.forEach(el => io.observe(el));
    return () => io.disconnect();
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

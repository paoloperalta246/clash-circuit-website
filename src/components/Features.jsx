import './Features.css'

const features = [
  {
    icon:  '⚔️',
    tag:   '// COMBAT_SYSTEM',
    title: 'Skill-Based Combat',
    desc:  'No button-mashing combos. Victory comes through precise timing, positioning, and movement. Master your attacks, block usage, and ultimate attacks to defeat your enemies.',
    pills: ['BASIC ATTACK', 'BLOCK ABILITY', 'ULTIMATE ATTACK'],
    extra: null,
  },
  {
    icon:  '🏟️',
    tag:   '// LEVEL_STRUCTURE',
    title: 'Arena Sector Battles',
    desc:  'Each level is divided into 3 combat sectors. Clear every enemy in a sector to unlock the next level. Survive all three to claim victory.',
    pills: ['SECTOR 1: BASIC', 'SECTOR 2: INTERMEDIATE', 'SECTOR 3: MASTER'],
    extra: null,
  },
  {
    icon:  '📈',
    tag:   '// PRE-BATTLE_SYSTEM',
    title: 'Strategic Upgrades',
    desc:  'Before entering the arena, choose 2 upgrades from four options to customize your combat approach for each specific encounter.',
    pills: null,
    extra: 'upgrades',
  },
  {
    icon:  '🏆',
    tag:   '// PERFORMANCE_SYSTEM',
    title: 'Performance Ranking',
    desc:  'After each battle, earn a rank based on HP remaining, damage taken, damage dealt, and match duration. Your playstyle is also evaluated and labeled.',
    pills: ['AGGRESSIVE FIGHTER', 'TACTICAL SURVIVOR', 'SKILL SPECIALIST', 'SWIFT END'],
    extra: 'ranks',
  },
]

export default function Features() {
  return (
    <section id="features" className="features-section">
      <div className="section-inner">
        <div className="section-label">// GAMEPLAY_FEATURES</div>
        <h2 className="section-title">
          CORE <span className="accent">MECHANICS</span>
        </h2>

        <div className="features-grid">
          {features.map((f) => (
            <div className="panel feature-card fade-in" key={f.title}>
              <span className="feature-icon">{f.icon}</span>
              <span className="feature-tag-label">{f.tag}</span>
              <div className="feature-title">{f.title}</div>
              <p className="feature-desc">{f.desc}</p>

              {f.extra === 'upgrades' && (
                <div className="upgrade-grid">
                  <div className="upgrade-pill">🛡️ <span>+30% HP boost</span></div>
                  <div className="upgrade-pill">🔃 <span>-20% CD reduction</span></div>
                  <div className="upgrade-pill">⚡ <span>+10% movement speed</span></div>
                  <div className="upgrade-pill">🔵 <span>+5% mana increase</span></div>
                </div>
              )}

              {f.extra === 'ranks' && (
                <div className="rank-row" style={{ marginBottom: '12px' }}>
                  <div className="rank-badge rank-s">S</div>
                  <div className="rank-badge rank-a">A</div>
                  <div className="rank-badge rank-b">B</div>
                  <div className="rank-badge rank-c">C</div>
                </div>
              )}

              {f.pills && (
                <div className="feature-pills">
                  {f.pills.map((p) => (
                    <div className="feature-pill" key={p}>{p}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

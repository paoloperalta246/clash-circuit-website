import './Overview.css'

const stats = [
  { num: '5', label: 'LEVELS + FINAL BOSS' },
  { num: '4',  label: 'ENEMY FACTIONS' },
  { num: '2',  label: 'GAME MODES' },
]

const levels = [
  { range: 'Level 1', name: 'CORPORATE ENFORCERS', theme: 'Industrial Streets',      cls: 'enforcer' },
  { range: 'Level 2', name: 'ROGUE HACKERS',        theme: 'Cyber Alleys',            cls: 'hacker'   },
  { range: 'Level 3', name: 'MILITARY CORPS',        theme: 'High-Security Facilities',cls: 'military' },
  { range: 'Level 4', name: 'DOMINION ELITES',       theme: 'Grand Neon Arena',        cls: 'dominion' },  
]

export default function Overview() {
  return (
    <section id="overview" className="overview-section">
      <div className="section-inner">
        <div className="section-label">// GAME_OVERVIEW</div>
        <h2 className="section-title">
          ABOUT <span className="accent">CLASH CIRCUIT</span>
        </h2>

        {/* Stats row */}
        <div className="overview-stats fade-in">
          {stats.map((s) => (
            <div className="panel overview-stat" key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Description cards */}
        <div className="overview-desc">
          <div className="panel overview-card fade-in">
            <h3>// WHAT IS CLASH CIRCUIT</h3>
            <p>
              Clash Circuit is a <strong>2D top-down arena fighting game</strong> set in a
              futuristic cyberpunk world. Combat takes place inside neon-lit, high-tech arenas
              controlled by a powerful corporation known as MegaCorp.
            </p>
            <p style={{ marginTop: '12px' }}>
              Unlike combo-heavy arcade fighters, Clash Circuit emphasizes{' '}
              <strong className="blue">tactical positioning, precise skill timing,
              and cooldown management</strong> — forcing players to outmaneuver and outthink
              every opponent.
            </p>
          </div>

          <div className="panel overview-card fade-in">
            <h3>// CORE GAMEPLAY</h3>
            <p>
              Each level is divided into <strong>3 Combat Sectors</strong> with increasing
              number of enemies each sector. Defeat all enemies to advance to the next level.
            </p>
            <div className="upgrade-grid">
              <div className="upgrade-pill">🛡️ <span>+30% </span> HP boost</div>
              <div className="upgrade-pill">🔃 <span>-20% </span> cooldown reduction</div>
              <div className="upgrade-pill">⚡ <span>+10% </span> movement speed</div>
              <div className="upgrade-pill">🔵 <span>+5% </span> mana increase</div>
            </div>
            <p className="choose-note">
              Choose <strong className="blue">2 upgrades</strong> before each battle. Earn
              S, A, B, or C rank based on performance.
            </p>
            <div className="rank-row">
              <div className="rank-badge rank-s">S</div>
              <div className="rank-badge rank-a">A</div>
              <div className="rank-badge rank-b">B</div>
              <div className="rank-badge rank-c">C</div>
            </div>
          </div>
        </div>

        {/* Level progression */}
        <div className="level-progress fade-in">
          {levels.map((l) => (
            <div className={`panel level-block ${l.cls}`} key={l.cls}>
              <div className="level-nums">{l.range}</div>
              <div className="level-name">{l.name}</div>
              <div className="level-theme">{l.theme}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

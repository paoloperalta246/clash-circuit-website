import './Screenshots.css'

const shots = [
  { label: 'ARENA_VIEW.jpg',   icon: '🏟️', caption: '[ GAMEPLAY OVERVIEW ]',   wide: true  },
  { label: 'COMBAT_01.jpg',    icon: '⚔️', caption: '[ COMBAT SCENE ]',         wide: false },
  { label: 'HUD_SCREEN.jpg',   icon: '🎮', caption: '[ HUD / UI ]',             wide: false },
  { label: 'ARENA_NEON.jpg',   icon: '🌆', caption: '[ CYBER ARENA ]',          wide: false },
  { label: 'ENEMIES_01.jpg',   icon: '👾', caption: '[ ENEMY ENCOUNTER ]',      wide: false },
  { label: 'RANK_SCREEN.jpg',  icon: '🏆', caption: '[ RANK SCREEN ]',          wide: false },
  { label: 'BOSS_FIGHT.jpg',   icon: '🤖', caption: '[ BOSS FIGHT ]',           wide: false },
]

export default function Screenshots() {
  return (
    <section id="screenshots" className="screenshots-section">
      <div className="section-inner">
        <div className="section-label">// MEDIA_GALLERY</div>
        <h2 className="section-title">
          GAME <span className="accent">SCREENSHOTS</span>
        </h2>

        <div className="screenshots-grid fade-in">
          {shots.map((s) => (
            <div
              className={`screenshot-item ${s.wide ? 'wide' : ''}`}
              key={s.label}
            >
              {/* Replace content with <img src="..." alt={s.caption} /> */}
              <span className="shot-icon">{s.icon}</span>
              <span className="shot-caption">{s.caption}</span>
              <span className="shot-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

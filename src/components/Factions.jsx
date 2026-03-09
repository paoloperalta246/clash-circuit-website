import './Factions.css'

const factions = [
  {
    cls:    'enforcer',
    icon:   '🚨',
    levels: 'LEVELS 1–2',
    name:   'CORPORATE ENFORCERS',
    desc:   "MegaCorp's security forces. Disciplined, organized police units equipped with batons, pistols, stun devices, and riot shields.",
    theme:  'CORPORATE LAW & ORDER',
  },
  {
    cls:    'hacker',
    icon:   '💻',
    levels: 'LEVELS 3–4',
    name:   'ROGUE HACKERS',
    desc:   'Agile cybercriminals wearing neon masks and wielding cyber gauntlets. Some deploy combat drones and holograms in battle.',
    theme:  'CHAOS & CYBERCRIME',
  },
  {
    cls:    'military',
    icon:   '🪖',
    levels: 'LEVELS 5–6',
    name:   'MILITARY CORPS',
    desc:   'Elite futuristic infantry in advanced armored combat suits with battle helmets and heavy tactical gear. Disciplined war units built for organized assault.',
    theme:  'DISCIPLINE & FORCE',
  },
  {
    cls:    'dominion',
    icon:   '⚔️',
    levels: 'LEVELS 7–8',
    name:   'DOMINION ELITES',
    desc:   'Regal armored champions in the Grand Arena. Knights bearing the Dominion crest — some wield greatswords, others carry tower shields or war hammers.',
    theme:  'GRAND CHAMPIONSHIP',
  },
]

export default function Factions() {
  return (
    <section id="factions" className="factions-section">
      <div className="section-inner">
        <div className="section-label">// ENEMY_DATABASE</div>
        <h2 className="section-title">
          ENEMY <span className="accent2">FACTIONS</span>
        </h2>

        <div className="factions-grid">
          {factions.map((f) => (
            <div className="panel faction-card fade-in" key={f.cls}>
              <div className={`faction-icon-wrap ${f.cls}`}>
                <span className="faction-emoji">{f.icon}</span>
              </div>
              <div className={`faction-levels ${f.cls}`}>{f.levels}</div>
              <div className="faction-name">{f.name}</div>
              <p className="faction-desc">{f.desc}</p>
              <div className={`faction-theme ${f.cls}`}>{f.theme}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

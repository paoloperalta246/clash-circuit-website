import './Characters.css'
import kaelImg from '../assets/kael-website-pic.png';
import magnusImg from '../assets/(no border)-magnus-website-pic.png';

const characters = [
  {
    id:       'kael',
    faction:  '// PROTAGONIST · AGE 22',
    name:     'KAEL "VOLT" ARDEN',
    alias:    'Underground Fighter · Rising Champion',
    icon:     '⚡',
    iconColor:'var(--neon-blue)',
    desc:     `A former industrial worker from the lower sectors who entered the underground fight
               scene seeking freedom. Tech-savvy, strategic, and disciplined — Kael fights not for
               fame, but to expose the corruption rotting the Circuit from within.`,
    palette:  'Expose MegaCorp’s corruption and to gain freedom.',
    paletteColor: 'var(--neon-blue)',
    artLabel: '[ KAEL CHARACTER ART ]',
    stats: [
      { label: 'AGILITY',  val: 90 },
      { label: 'STRATEGY', val: 85 },
      { label: 'TECH SKILL',val: 88 },
      { label: 'RAW POWER', val: 65 },
    ],
    fillClass: 'fill-blue',
    cardClass:  'card-protagonist',
  },
  {
    id:       'magnus',
    faction:  '// FINAL BOSS · AGE 35',
    name:     'MAGNUS "OVERLORD" VIREX',
    alias:    'Reigning Champion · MegaCorp Enforcer',
    icon:     '👑',
    iconColor:'var(--neon-red)',
    desc:     `Cold, calculating, and mercilessly powerful. Magnus rose from corporate enforcer to
               the undefeated Grand Arena champion. He is not just a fighter — he is the living
               symbol of MegaCorp's dominance and the final wall between Kael and the truth.`,
    palette:  'Maintain absolute control over the Circuit.',
    paletteColor: 'var(--neon-red)',
    artLabel: '[ MAGNUS CHARACTER ART ]',
    stats: [
      { label: 'AGILITY',   val: 70  },
      { label: 'STRATEGY',  val: 95  },
      { label: 'ARENA CTRL',val: 100 },
      { label: 'RAW POWER', val: 97  },
    ],
    fillClass: 'fill-red',
    cardClass:  'card-antagonist',
  },
]

export default function Characters() {
  return (
    <section id="characters" className="characters-section">
      <div className="section-inner">
        <div className="section-label">// CHARACTER_DATABASE</div>
        <h2 className="section-title">
          MAIN <span className="accent">CHARACTERS</span>
        </h2>

        <div className="characters-grid">
          {characters.map((c) => (
            <div className={`panel char-card ${c.cardClass} fade-in`} key={c.id}>
              <div className={`char-inner bg-${c.id}`}>
                {/* Portrait — replace div with <img src="..." /> */}
                <div className="char-portrait">
                  {c.id === 'kael' ? (
                    <img
                      src={kaelImg}
                      alt="Kael Character Art"
                      className="char-portrait-img"
                      style={{ width: '100%', borderRadius: '12px', objectFit: 'cover' }}
                    />
                  ) : c.id === 'magnus' ? (
                    <img
                      src={magnusImg}
                      alt="Magnus Character Art"
                      className="char-portrait-img"
                      style={{ width: '100%', borderRadius: '12px', objectFit: 'cover' }}
                    />
                  ) : (
                    <div className={`char-portrait-bg portrait-${c.id}`}>
                      <div className="char-portrait-scan" />
                      <span className="char-silhouette" style={{ color: c.iconColor }}>
                        {c.icon}
                      </span>
                      <span className="char-placeholder-note">{c.artLabel}</span>
                    </div>
                  )}
                </div>

                <div
                  className="char-faction"
                  style={{ color: c.id === 'kael' ? 'var(--neon-blue)' : 'var(--neon-red)' }}
                >
                  {c.faction}
                </div>
                <div
                  className="char-name"
                  style={{ color: c.id === 'kael' ? 'var(--neon-blue)' : 'var(--neon-red)' }}
                >
                  {c.name}
                </div>
                <div className="char-alias">{c.alias}</div>
                <p className="char-desc">{c.desc}</p>

                <div className="char-stats">
                  {c.stats.map((s) => (
                    <div className="char-stat-row" key={s.label}>
                      <div className="char-stat-label">{s.label}</div>
                      <div className="char-stat-bar">
                        <div
                          className={`char-stat-fill ${c.fillClass}`}
                          style={{ width: `${s.val}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="char-palette"
                  style={{ borderColor: `${c.paletteColor}33`, background: `${c.paletteColor}08` }}
                >
                  <strong style={{ color: c.paletteColor }}>Motivation / Goal:</strong>
                  &nbsp; {c.palette}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

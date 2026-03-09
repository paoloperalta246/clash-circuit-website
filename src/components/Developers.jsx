import './Developers.css'

// Replace these with your actual team members
const team = [
  {
    icon: '👨‍💻',
    name: 'Juan Paolo I. Peralta',
    role: 'LEAD DEVELOPER',
    image: '/assets/placeholder-profile.png', // Replace with actual image path later
  },
  {
    icon: '🎨',
    name: 'Louise Andrea Gonzales',
    role: 'GAME DESIGNER',
    image: '/assets/placeholder-profile.png', // Replace with actual image path later
  },
  {
    icon: '🖊️',
    name: 'Richthofen Jamakeo Santos',
    role: 'GRAPHIC ARTIST',
    image: '/assets/placeholder-profile.png', // Replace with actual image path later
  },
]

const stack = ['Unity Engine', 'C#', 'Android SDK', 'Bluetooth API']

export default function Developers() {
  return (
    <section id="developers" className="developers-section">
      <div className="section-inner">
        <div className="section-label">// DEVELOPMENT_TEAM</div>
        <h2 className="section-title">
          THE <span className="accent">TEAM</span>
        </h2>

        <div className="dev-header">
          {/* <div className="dev-team-label">DEVELOPED BY</div> */}
          <div className="dev-team-name">DEVELOPED BY</div>
          <div className="dev-team-sub">
            Bachelor of Science in Information Technology
          </div>
        </div>

        <div className="dev-grid">
          {team.map((m) => (
            <div className="panel dev-card fade-in" key={m.role}>
              {/* Replace div with <img src="..." /> for real portraits */}
              <div className="dev-avatar">{m.icon}</div>
              <div className="dev-name">{m.name}</div>
              <div className="dev-role">{m.role}</div>
            </div>
          ))}
        </div>

        <div className="dev-stack panel">
          <div className="stack-label">// BUILT WITH</div>
          <div className="stack-items">
            {stack.map((s, i) => (
              <>
                <span key={s} className="stack-item">{s}</span>
                {i < stack.length - 1 && (
                  <span key={`dot-${i}`} className="stack-dot">·</span>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

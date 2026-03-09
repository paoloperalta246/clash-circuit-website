import './Footer.css'

const navLinks = [
  { href: '#overview',    label: 'Overview'    },
  { href: '#story',       label: 'Story'       },
  { href: '#characters',  label: 'Characters'  },
  { href: '#features',    label: 'Features'    },
  { href: '#factions',    label: 'Factions'    },
  { href: '#modes',       label: 'Game Modes'  },
  { href: '#screenshots', label: 'Screenshots' },
  { href: '#download',    label: 'Download'    },
  { href: '#developers',  label: 'Developers'  },
]

const socials = [
  { label: 'GH', title: 'GitHub'  },
  { label: 'FB', title: 'Facebook'},
  { label: 'YT', title: 'YouTube' },
  { label: 'DC', title: 'Discord' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Top glow strip */}
      <div className="footer-glow-strip" />

      {/* Main footer body */}
      <div className="footer-body">
        <div className="footer-inner">

          {/* Brand column */}
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              CLASH<span>CIRCUIT</span>
            </a>
            <p className="footer-tagline">
              Fight for freedom inside<br />the neon arenas of the Clash Circuit.
            </p>
            <div className="footer-social">
              {socials.map((s) => (
                <a href="#" className="social-btn" title={s.title} key={s.label}>
                  {s.label}
                </a>
              ))}
            </div>
            <div className="footer-badge">
              <span className="badge-dot" /> ANDROID · FREE TO PLAY
            </div>
          </div>

          {/* Navigation column */}
          <div className="footer-nav-col">
            <div className="footer-col-title">// NAVIGATION</div>
            <ul className="footer-nav">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Game info column */}
          <div className="footer-info-col">
            <div className="footer-col-title">// GAME INFO</div>
            <div className="footer-info-grid">
              <div className="fi-item">
                <span className="fi-label">GENRE</span>
                <span className="fi-value">2D Arena Action</span>
              </div>
              <div className="fi-item">
                <span className="fi-label">PERSPECTIVE</span>
                <span className="fi-value">Top-Down</span>
              </div>
              <div className="fi-item">
                <span className="fi-label">PLATFORM</span>
                <span className="fi-value">Android</span>
              </div>
              <div className="fi-item">
                <span className="fi-label">VERSION</span>
                <span className="fi-value">1.0.0</span>
              </div>
              <div className="fi-item">
                <span className="fi-label">LEVELS</span>
                <span className="fi-value">8 + Final Boss</span>
              </div>
              <div className="fi-item">
                <span className="fi-label">PVP</span>
                <span className="fi-value">Bluetooth / Hotspot</span>
              </div>
            </div>

            <a href="#download" className="footer-download-btn">
              ⬇ DOWNLOAD APK
            </a>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <div className="footer-bottom-left">
            <span className="fb-logo">CC</span>
            <span>© 2025 CLASH CIRCUIT — ALL RIGHTS RESERVED</span>
          </div>
          <div className="footer-bottom-center">
            <span className="terminal-text" style={{ opacity: 0.4 }}>
              SYSTEM_OK &nbsp;|&nbsp; BUILD v1.0.0 &nbsp;|&nbsp;
              <span className="terminal-cursor" />
            </span>
          </div>
          <div className="footer-bottom-right">
            GAME DEVELOPMENT FINAL PROJECT · 2025
          </div>
        </div>
      </div>
    </footer>
  )
}

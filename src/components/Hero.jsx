import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-arena-bg" />
      <div className="hero-grid" />
      <div className="scanlines" />
      <div className="glitch-overlay" />

      {/* Ambient orbs */}
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="orb orb3" />

      {/* Character art placeholder — replace with <img src="..." /> */}
      <div className="hero-char-placeholder">
        {/* <div className="char-icon">⚡</div>
        <div className="char-placeholder-text">
          [ CHARACTER<br />ARTWORK<br />HERE ]
        </div> */}
      </div>

      <div className="hero-content">
        <div className="hero-badge">ANDROID · 2D ARENA COMBAT · 2025</div>

        <h1 className="hero-title">
          CLASH
          <span className="line2">CIRCUIT</span>
        </h1>

        <p className="hero-tagline">Fight for freedom inside the neon arenas</p>

        <p className="hero-desc">
          A skill-based 2D top-down arena fighting game set in a dystopian cyberpunk world.
          Master timing, movement, and cooldown management to rise through MegaCorp's
          controlled arenas — and expose the truth behind the Circuit.
        </p>

        <div className="hero-btns">
          <a href="#download" className="btn-primary">⬇ DOWNLOAD APK</a>
          <a href="#overview" className="btn-secondary">▶ LEARN MORE</a>
        </div>

        <div className="terminal-text" style={{ justifyContent: 'center', marginTop: '48px' }}>
          SYSTEM_STATUS: ONLINE &nbsp;|&nbsp; BUILD: v1.0.0 &nbsp;|&nbsp; TARGET: ANDROID
          <span className="terminal-cursor" />
        </div>
      </div>
    </section>
  )
}

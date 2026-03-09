import './Story.css'

export default function Story() {
  return (
    <section id="story" className="story-section">
      <div className="section-inner">
        <div className="section-label">// WORLDBUILDING</div>
        <h2 className="section-title">
          THE <span className="accent2">STORY</span>
        </h2>

        <div className="story-layout">
          {/* Left: text */}
          <div className="story-text fade-in">
            <div className="story-year">2145</div>
            <h3 className="story-heading">
              The World Under<br />MegaCorp's Control
            </h3>
            <p className="story-p">
              In the year <strong>2145</strong>, MegaCorp has achieved total dominance over
              society through advanced technology and absolute media control. To prevent open
              rebellion, they created the <strong className="blue">Clash Circuit</strong> — a
              massive televised combat system where disputes are settled inside controlled arenas.
            </p>
            <blockquote className="story-quote">
              "The Circuit was built for peace. In reality, it's the chain that keeps us still."
            </blockquote>
            <p className="story-p">
              Behind the spectacle lies a web of manipulation. Corporations rig outcomes.
              Fighters are controlled. Entire districts live under fear disguised as entertainment.
            </p>
            <p className="story-p">
              You play as <strong className="blue">Kael "Volt" Arden</strong>, a 22-year-old
              underground fighter from the lower sectors. His district was stripped of resources
              by corporate manipulation. The only way to challenge authority — to fight back —
              is to climb the Circuit ranks, defeat every faction that guards the system, and
              reach the Grand Arena at the top.
            </p>

            <div className="story-info-grid">
              <div className="panel story-info-card">
                <div className="info-label">// CONTROLLED BY</div>
                <div className="info-title">MegaCorp</div>
                <div className="info-sub">Tech &amp; energy conglomerate</div>
              </div>
              <div className="panel story-info-card">
                <div className="info-label">// ARENA TYPE</div>
                <div className="info-title">Clash Circuit</div>
                <div className="info-sub">Televised combat system</div>
              </div>
              <div className="panel story-info-card red">
                <div className="info-label red">// OBJECTIVE</div>
                <div className="info-title">Liberation</div>
                <div className="info-sub">Expose corruption &amp; break free</div>
              </div>
            </div>
          </div>

          {/* Right: holo panel */}
          <div className="fade-in">
            <div className="panel story-panel">
              <div className="corner-tl" />
              <div className="corner-tr" />
              <div className="corner-bl" />
              <div className="corner-br" />
              <div className="story-panel-header">▶ CITY_SCAN // NEO-DISTRICT_07</div>

              {/* Replace with <img src="..." alt="City" /> */}
              <div className="holo-img-placeholder">
                <div className="holo-icon">🌆</div>
                <div className="holo-label">[ CYBERPUNK CITY ART ]</div>
              </div>

              <div className="megacorp-badge">
                ⚠ MEGACORP ZONE — AUTHORIZED ACCESS ONLY
              </div>
              <div className="setting-note">
                <div className="setting-label">/// SETTING ///</div>
                <p>
                  Neon-lit cyber arenas · Digital billboards ·
                  Floating holograms
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

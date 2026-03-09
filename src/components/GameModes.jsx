import './GameModes.css'

const storySteps = [
  'Select a level from the map (unlocks sequentially)',
  'Choose your difficulty setting',
  'Select 2 pre-battle upgrades',
  'Fight through 3 arena sectors',
  'Earn your rank grade (S / A / B / C)',
]
const pvpSteps = [
  'Connect via Bluetooth or Mobile Hotspot',
  'Select your character',
  'Choose 2 pre-battle upgrades',
  'Fight in the Grand Arena — Best of 3 Rounds',
  'The stronger fighter takes the Circuit',
]

export default function GameModes() {
  return (
    <section id="modes" className="modes-section">
      <div className="section-inner">
        <div className="section-label">// GAME_MODES</div>
        <h2 className="section-title">
          CHOOSE YOUR <span className="accent">BATTLEGROUND</span>
        </h2>

        <div className="modes-grid">
          {/* Story */}
          <div className="panel mode-card fade-in">
            <div className="mode-badge story">// STORY_MODE</div>
            <div className="mode-title">CAMPAIGN</div>
            <div className="mode-subtitle">PvAI · 8 LEVELS + FINAL BOSS</div>
            <p className="mode-desc">
              Progress through 10 levels of increasingly dangerous factions, each guarding
              the path to the Clash Circuit Grand Arena. Defeat all four factions and confront
              Magnus "Overlord" Virex in the final battle.
            </p>
            <ol className="mode-steps">
              {storySteps.map((s, i) => (
                <li key={i}>
                  <div className="mode-step-num story">{i + 1}</div>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* PvP */}
          <div className="panel mode-card pvp-card fade-in">
            <div className="mode-badge pvp">// PVP_MODE</div>
            <div className="mode-title pvp-title">PvP ARENA</div>
            <div className="mode-subtitle">BLUETOOTH · HOTSPOT · BEST OF 3</div>
            <p className="mode-desc">
              Challenge a friend in the Clash Circuit Grand Arena. Connect via Bluetooth or
              Mobile Hotspot and face off in a best-of-3 rounds fight for supremacy.
            </p>
            <ol className="mode-steps">
              {pvpSteps.map((s, i) => (
                <li key={i}>
                  <div className="mode-step-num pvp">{i + 1}</div>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
            <div className="pvp-arena-badge">
              <div className="pvp-arena-label">// ARENA</div>
              <div className="pvp-arena-name">Grand Neon Clash Circuit Arena</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

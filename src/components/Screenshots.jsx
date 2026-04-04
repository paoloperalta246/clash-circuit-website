import './Screenshots.css'

import mainMenuImg from '../assets/main-menu.png';
import level1Img from '../assets/level 1.png';
import level2Img from '../assets/level 2.png';
import level3Img from '../assets/level 3.png';
import level4Img from '../assets/level 4.png';
import level5Img from '../assets/level 5.png';
import multiplayerImg from '../assets/multiplayer.png';

const shots = [
  { label: 'MAIN_MENU.jpg',   icon: '🏟️', caption: null,   wide: true  },
  { label: 'LEVEL_01.jpg',    icon: '⚔️', caption: '[ COMBAT SCENE ]',         wide: false },
  { label: 'LEVEL_02.jpg',   icon: '🎮', caption: '[ HUD / UI ]',             wide: false },
  { label: 'LEVEL_03.jpg',   icon: '🌆', caption: '[ CYBER ARENA ]',          wide: false },
  { label: 'LEVEL_04.jpg',   icon: '👾', caption: '[ ENEMY ENCOUNTER ]',      wide: false },
  { label: 'LEVEL_05.jpg',  icon: '🏆', caption: '[ RANK SCREEN ]',          wide: false },
  { label: 'MULTIPLAYER.jpg',   icon: '🤖', caption: '[ BOSS FIGHT ]',           wide: false },
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
              <span className="shot-icon">{s.icon}</span>
              {s.label === 'MAIN_MENU.jpg' ? (
                <img
                  src={mainMenuImg}
                  alt="Main Menu"
                  className="screenshot-img"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0, margin: 0, zIndex: 0, background: '#000' }}
                />
              ) : s.label === 'LEVEL_01.jpg' ? (
                <img
                  src={level1Img}
                  alt="Level 1"
                  className="screenshot-img"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0, margin: 0, zIndex: 0, background: '#000' }}
                />
              ) : s.label === 'LEVEL_02.jpg' ? (
                <img
                  src={level2Img}
                  alt="Level 2"
                  className="screenshot-img"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0, margin: 0, zIndex: 0, background: '#000' }}
                />
              ) : s.label === 'LEVEL_03.jpg' ? (
                <img
                  src={level3Img}
                  alt="Level 3"
                  className="screenshot-img"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0, margin: 0, zIndex: 0, background: '#000' }}
                />
              ) : s.label === 'LEVEL_04.jpg' ? (
                <img
                  src={level4Img}
                  alt="Level 4"
                  className="screenshot-img"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0, margin: 0, zIndex: 0, background: '#000' }}
                />
              ) : s.label === 'LEVEL_05.jpg' ? (
                <img
                  src={level5Img}
                  alt="Level 5"
                  className="screenshot-img"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0, margin: 0, zIndex: 0, background: '#000' }}
                />
              ) : s.label === 'MULTIPLAYER.jpg' ? (
                <img
                  src={multiplayerImg}
                  alt="Multiplayer"
                  className="screenshot-img"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0, margin: 0, zIndex: 0, background: '#000' }}
                />
              ) : (
                <span className="shot-caption">{s.caption}</span>
              )}
              <span className="shot-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

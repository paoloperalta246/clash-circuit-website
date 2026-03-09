import './Download.css'

const info = [
  { label: 'VERSION',     value: '1.0.0'      },
  { label: 'PLATFORM',    value: 'Android'     },
  { label: 'FILE SIZE',   value: '~150 MB'     },
  { label: 'MIN VERSION', value: 'Android 7+'  },
]

export default function Download() {
  return (
    <section id="download" className="download-section">
      <div className="section-inner" style={{ textAlign: 'center' }}>
        <div className="download-glow" />

        <div className="section-label" style={{ justifyContent: 'center' }}>
          // DISTRIBUTION
        </div>
        <h2 className="section-title">
          GET THE <span className="accent">GAME</span>
        </h2>

        <div className="download-panel fade-in">
          <div className="download-file-name">CLASH_CIRCUIT_v1.0.0.apk</div>
          <h3 className="download-heading">DOWNLOAD CLASH CIRCUIT</h3>
          <p className="download-subtext">Free to play · Android · No login required</p>

          <div className="download-info">
            {info.map((i) => (
              <div className="dv-item" key={i.label}>
                <span className="dv-label">{i.label}</span>
                <span className="dv-value">{i.value}</span>
              </div>
            ))}
          </div>

          {/* Replace href with your actual APK URL */}
          <a href="#" className="download-btn">⬇ DOWNLOAD APK</a>

          <p className="download-note">
            ENABLE "INSTALL FROM UNKNOWN SOURCES" IN DEVICE SETTINGS
          </p>
        </div>
      </div>
    </section>
  )
}

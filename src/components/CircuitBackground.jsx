import './CircuitBackground.css'

export default function CircuitBackground() {
  return (
    <div className="circuit-bg">
      <svg
        viewBox="0 0 1440 900"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="#00f0ff" strokeWidth="0.5" fill="none">
          <path d="M0,200 H300 V400 H600 V200 H900" />
          <path d="M1440,600 H1100 V300 H800 V600 H500" />
          <path d="M200,0 V150 H450 V350 H200 V500" />
          <path d="M1200,900 V700 H950 V500 H1200 V300" />
          <circle cx="300" cy="400" r="4" fill="#00f0ff" />
          <circle cx="600" cy="200" r="4" fill="#00f0ff" />
          <circle cx="800" cy="300" r="4" fill="#c800ff" />
          <circle cx="1100" cy="600" r="4" fill="#c800ff" />
          <path d="M0,450 H150 L250,350 H700 L800,450 H1440" opacity="0.5" />
          <path d="M0,700 H200 L300,600 H600 V700 H800 L900,600 H1440" opacity="0.3" />
        </g>
      </svg>
    </div>
  )
}

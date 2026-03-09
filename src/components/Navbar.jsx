import { useEffect, useState } from 'react'
import './Navbar.css'

const links = [
  { href: '#overview',    label: 'Overview'    },
  { href: '#story',       label: 'Story'       },
  { href: '#characters',  label: 'Characters'  },
  { href: '#features',    label: 'Features'    },
  { href: '#modes',       label: 'Modes'       },
  { href: '#screenshots', label: 'Screenshots' },
  { href: '#download',    label: 'Download'    },
]

export default function Navbar() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = document.querySelectorAll('section[id]')
      sections.forEach((sec) => {
        const top = sec.offsetTop - 120
        if (window.scrollY >= top && window.scrollY < top + sec.clientHeight) {
          setActive(sec.id)
        }
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#hero" className="nav-logo">CLASH<span>CIRCUIT</span></a>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={active === l.href.slice(1) ? 'active' : ''}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#download" className="nav-download">▼ Download APK</a>
        <button
          className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>
      <div className={`nav-mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={handleLinkClick}>{l.label}</a>
        ))}
        <a href="#download" className="nav-mobile-download" onClick={handleLinkClick}>
          ⬇ Download APK
        </a>
      </div>
    </>
  )
}

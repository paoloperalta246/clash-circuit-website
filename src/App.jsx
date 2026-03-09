import { useEffect } from 'react'
import CircuitBackground from './components/CircuitBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Story from './components/Story'
import Characters from './components/Characters'
import Features from './components/Features'
import Factions from './components/Factions'
import GameModes from './components/GameModes'
import Screenshots from './components/Screenshots'
import Download from './components/Download'
import Developers from './components/Developers'
import Footer from './components/Footer'

function App() {
  // Scroll-triggered fade-in observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    const elements = document.querySelectorAll('.fade-in')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <CircuitBackground />
      <Navbar />
      <main>
        <Hero />
        <div className="divider" />
        <Overview />
        <div className="divider" />
        <Story />
        <div className="divider" />
        <Characters />
        <div className="divider" />
        <Features />
        <div className="divider" />
        <Factions />
        <div className="divider" />
        <GameModes />
        <div className="divider" />
        <Screenshots />
        <div className="divider" />
        <Download />
        <div className="divider" />
        <Developers />
      </main>
      <Footer />
    </>
  )
}

export default App

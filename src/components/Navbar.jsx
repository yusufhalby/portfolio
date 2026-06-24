import { useEffect } from 'react'

export default function Navbar() {
  useEffect(() => {
    const nav = document.getElementById('nav')
    const handleScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav id="nav">
      <a href="#hero" className="nav-logo">YH<span>.</span></a>
      <ul className="nav-links">
        <li><a href="#about">about</a></li>
        <li><a href="#stack">stack</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#experience">experience</a></li>
      </ul>
      <a href="#contact" className="nav-cta">get in touch</a>
    </nav>
  )
}
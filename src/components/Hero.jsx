import { useTypewriter } from '../hooks/useTypewriter'

export default function Hero() {
  const text = useTypewriter()

  return (
    <section id="hero">
      <div className="hero-inner">
        <div className="hero-tag">available for remote work</div>
        <h1>Yusuf<br /><span className="last">Halby.</span></h1>
        <div className="hero-role">
          <span id="typewriter">{text}</span>
          <span className="cursor"></span>
        </div>
        <p className="hero-desc">
          I build the backend that powers your product — REST APIs, real-time systems,
          third-party integrations, and the Linux infrastructure to run them in production.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">view projects</a>
          <a href="#contact" className="btn-ghost">get in touch</a>
        </div>
      </div>
    </section>
  )
}
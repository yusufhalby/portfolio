import { projects } from '../data/projects'

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
  )
}

function ArrowExternalIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M18 13l-1.5 1.5-5-5L3 18m0 0h5m-5 0v-5" />
      <path d="M21 3l-6 6M21 3h-6M21 3v6" />
    </svg>
  )
}

export function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

const iconMap = {
  'github': GitHubIcon,
  'arrow-external': ArrowExternalIcon,
  'external-link': ExternalLinkIcon,
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-eyebrow fade-in">projects</div>
        <h2 className="section-title fade-in">What I've built</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="proj-card fade-in" key={project.id}>
              <div className="proj-terminal">
                <div className="term-dots">
                  <div className="term-dot r"></div>
                  <div className="term-dot y"></div>
                  <div className="term-dot g"></div>
                </div>
                <div className="term-path">
                  {project.termPath.map((part, i) =>
                    part.highlight ? <span key={i}>{part.text}</span> : part.text
                  )}
                </div>
              </div>
              <div className="proj-body">
                <span className={`proj-badge ${project.badge.className}`}>{project.badge.text}</span>
                <div className="proj-name">{project.name}</div>
                <div className="proj-desc">{project.desc}</div>
                <div className="proj-tags">
                  {project.tags.map((tag) => (
                    <span className="proj-tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="proj-links">
                  {project.links.map((link) => {
                    const Icon = iconMap[link.icon]
                    return (
                      <a href={link.href} target={link.target} className="proj-link" key={link.label}>
                        <Icon />
                        {link.label}
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
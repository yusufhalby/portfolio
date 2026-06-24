import { experiences } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-eyebrow fade-in">experience</div>
        <h2 className="section-title fade-in">Where I've worked</h2>
        <div className="exp-list">
          {experiences.map((exp, index) => (
            <div className="exp-item fade-in" key={index}>
              <div className="exp-meta">
                <div className="exp-dates">{exp.dates}</div>
                <div className="exp-loc">{exp.location}</div>
              </div>
              <div>
                <div className="exp-title">{exp.title}</div>
                <div className="exp-company">{exp.company}</div>
                <ul className="exp-bullets">
                  {exp.bullets.map((bullet, bi) => (
                    <li key={bi}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
import { ExternalLinkIcon } from './Projects.jsx'

export default function About() {
  return (
    <section id="about">
      <div className="container fade-in">
        <div className="section-eyebrow">about</div>
        <h2 className="section-title">Who I am</h2>
        <div className="grid">
          <div className="about-text">
            <p>
              I'm a backend developer based in Cairo, specialising in Node.js and TypeScript.
              My work covers the full backend lifecycle — API design, database modelling,
              third-party integrations, and deploying on Linux servers with Docker and Nginx.
            </p>
            <p>
              I've taken several projects from zero to production: domain setup, hosting,
              deployment, and post-launch support. Beyond the code, I spent four years
              building and leading the IEEE chapter at Aswan University as Chairman — where
              I learned how to own projects, communicate clearly, and ship things with a team.
            </p>
            <p>
              Currently working as an IT Specialist in Cairo while staying active in backend
              and infrastructure work. Open to remote roles across the Gulf and Europe.
            </p>
          </div>
          <div className="about-facts">
            <div className="fact">
              <div className="fact-dot"></div>
              <div>
                <div className="fact-label">Education</div>
                <div className="fact-val">B.Sc. Computer Engineering &amp; Control Systems<br />Aswan University, 2023 — Very Good with Honors</div>
              </div>
            </div>
            <div className="fact">
              <div className="fact-dot"></div>
              <div>
                <div className="fact-label">Achievement</div>
                <div className="fact-val">1st Place — Orange Development Center Programming Competition
                  <div className="proj-links">

                    <a href="https://drive.google.com/file/d/1tgg3YwWg_ftMlvFYz1mYDrzSaOX97BAJ/view?usp=sharing" target="_blank" className="proj-link" key="Certificate">
                      <ExternalLinkIcon />
                      Certificate
                    </a>

                  </div>
                </div>
              </div>
            </div>
            <div className="fact">
              <div className="fact-dot"></div>
              <div>
                <div className="fact-label">Leadership</div>
                <div className="fact-val">IEEE Aswan Student Branch — Chairman<br />Organised ~10 events, 4-year tenure</div>
              </div>
            </div>
            <div className="fact">
              <div className="fact-dot"></div>
              <div>
                <div className="fact-label">Location</div>
                <div className="fact-val">Cairo, Egypt · UTC+3<br />Available for remote work</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
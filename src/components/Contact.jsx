export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-eyebrow fade-in">contact</div>
        <h2 className="section-title fade-in">Get in touch</h2>
        <div className="contact-inner fade-in">
          <p>I'm open to backend, full-stack, and junior DevOps roles — remote preferred, but open to relocation for the right opportunity. If you're building something interesting, I'd like to hear about it.</p>
          <div className="contact-links">
            <a href="mailto:yousof289kh@gmail.com" className="contact-link">
              <span className="contact-link-icon">@</span>
              <span className="contact-link-label">Email</span>
              <span className="contact-link-val">yousof289kh@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/yousof289" target="_blank" className="contact-link">
              <span className="contact-link-icon">in</span>
              <span className="contact-link-label">LinkedIn</span>
              <span className="contact-link-val">linkedin.com/in/yousof289</span>
            </a>
            <a href="https://github.com/yusufhalby" target="_blank" className="contact-link">
              <span className="contact-link-icon">gh</span>
              <span className="contact-link-label">GitHub</span>
              <span className="contact-link-val">github.com/yusufhalby</span>
            </a>
            <a href="https://wa.me/201063301474" target="_blank" className="contact-link">
              <span className="contact-link-icon">#</span>
              <span className="contact-link-label">WhatsApp</span>
              <span className="contact-link-val">+20 106 330 1474</span>
            </a>
            <a href="tel:+201063301474" className="contact-link">
              <span className="contact-link-icon">#</span>
              <span className="contact-link-label">Phone</span>
              <span className="contact-link-val">+20 106 330 1474</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
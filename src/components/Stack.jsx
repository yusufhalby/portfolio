import { stackGroups } from '../data/stack'

export default function Stack() {
  return (
    <section id="stack">
      <div className="container fade-in" style={{ marginBottom: '32px' }}>
        <div className="section-eyebrow">stack</div>
        <h2 className="section-title" style={{ marginBottom: '0' }}>What I work with</h2>
      </div>
      <div className="stack-grid">
        {stackGroups.map((group) => (
          <div className="stack-group" key={group.label}>
            <div className="stack-group-label">{group.label}</div>
            <div className="stack-tags">
              {group.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
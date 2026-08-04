import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, X, Check, Eye } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'AI & Agentic Systems', 'Full-Stack Web', 'Open Source'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <span className="section-tag">Featured Portfolio</span>
          <h2 className="section-title">Projects & <span className="gradient-text">Creations</span></h2>
          <p className="section-desc">
            Highlighting recent engineering achievements, open source libraries, and agentic AI architectures.
          </p>

          {/* Filter Pills */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '0.45rem 1.15rem',
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  border: filter === cat ? '1px solid var(--accent-indigo)' : '1px solid var(--border-subtle)',
                  background: filter === cat ? 'rgba(99, 102, 241, 0.25)' : 'var(--bg-pill)',
                  color: filter === cat ? '#ffffff' : 'var(--text-muted)',
                  transition: 'var(--transition-fast)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="glass-card" 
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              {/* Card Header Gradient Banner */}
              <div style={{
                height: '140px',
                background: `linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(99, 102, 241, 0.2))`,
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderBottom: '1px solid var(--border-subtle)',
                position: 'relative'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="glass-pill" style={{ background: 'rgba(7, 9, 14, 0.7)', borderColor: 'rgba(255,255,255,0.15)', color: '#ffffff', fontSize: '0.75rem' }}>
                    <Sparkles size={12} style={{ color: 'var(--accent-cyan)' }} />
                    {project.badge}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: '600' }}>
                    {project.metrics}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  color: '#ffffff'
                }}>
                  {project.title}
                </h3>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: '1.6' }}>
                    {project.summary}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    {project.tags.map((tag, idx) => (
                      <span key={idx} style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '0.35rem',
                        padding: '0.2rem 0.5rem',
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        fontWeight: '500'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-subtle)'
                }}>
                  <button
                    onClick={() => setActiveModalProject(project)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--accent-cyan)',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    <Eye size={16} /> Details
                  </button>

                  <div style={{ display: 'flex', gap: '0.6rem' }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-pill"
                      style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem' }}
                      title="View Code"
                    >
                      <Github size={14} /> Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem', borderRadius: '9999px' }}
                    >
                      Live <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 100,
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}>
          <div className="glass-card" style={{
            maxWidth: '650px',
            width: '100%',
            padding: '2rem',
            position: 'relative',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <button
              onClick={() => setActiveModalProject(null)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: 'var(--text-main)',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={18} />
            </button>

            <span className="glass-pill" style={{ marginBottom: '1rem', color: 'var(--accent-cyan)' }}>
              {activeModalProject.category}
            </span>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.75rem' }}>
              {activeModalProject.title}
            </h3>

            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              {activeModalProject.description}
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>
                Key Metrics & Performance
              </h4>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.85rem 1.25rem', borderRadius: '0.75rem', border: '1px solid var(--border-subtle)', fontWeight: '600', color: 'var(--accent-cyan)' }}>
                ⚡ {activeModalProject.metrics}
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>
                Technologies Used
              </h4>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {activeModalProject.tags.map((t, idx) => (
                  <span key={idx} className="glass-pill" style={{ fontSize: '0.8rem' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
              <a href={activeModalProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <Github size={16} /> Repository
              </a>
              <a href={activeModalProject.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Launch App <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

import React from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2, Award, Rocket } from 'lucide-react';
import { experiences, personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <span className="section-tag">Background & Experience</span>
          <h2 className="section-title">About <span className="gradient-text">Andrea</span></h2>
          <p className="section-desc">
            Passionate about building scalable software applications, high-throughput systems, and user-centric agentic AI experiences.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2.5rem'
        }} className="about-grid">

          {/* Left Column: Bio & Core Values */}
          <div>
            <div className="glass-card" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem',
                fontWeight: '700',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem'
              }}>
                <Rocket style={{ color: 'var(--accent-cyan)' }} />
                Engineering Philosophy
              </h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: '1.7' }}>
                I believe that software should be both exceptionally fast under the hood and visually enchanting on the surface. Whether optimizing web app performance or orchestrating LLM agents, code quality and user experience are paramount.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '0.75rem', border: '1px solid var(--border-subtle)' }}>
                  <Award size={20} style={{ color: 'var(--accent-indigo)', marginBottom: '0.4rem' }} />
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-main)' }}>Clean Architecture</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Modular, maintainable, self-documenting codebases.</p>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '0.75rem', border: '1px solid var(--border-subtle)' }}>
                  <Rocket size={20} style={{ color: 'var(--accent-purple)', marginBottom: '0.4rem' }} />
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-main)' }}>Agentic Innovation</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Integrating LLMs into intuitive user workflows.</p>
                </div>
              </div>
            </div>

            {/* Quick Details List */}
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem' }}>
                Quick Snapshot
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                  <MapPin size={18} style={{ color: 'var(--accent-cyan)' }} />
                  <span>Location: <strong>{personalInfo.location}</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                  <GraduationCap size={18} style={{ color: 'var(--accent-indigo)' }} />
                  <span>B.S. in Computer Science & Artificial Intelligence</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                  <Briefcase size={18} style={{ color: 'var(--accent-emerald)' }} />
                  <span>Specialization: Full-Stack React + Agentic AI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Experience Timeline */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.4rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}>
              <Briefcase style={{ color: 'var(--accent-cyan)' }} />
              Career Journey
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {experiences.map((exp, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-main)' }}>
                        {exp.role}
                      </h4>
                      <div style={{ color: 'var(--accent-cyan)', fontWeight: '600', fontSize: '0.9rem' }}>
                        {exp.company}
                      </div>
                    </div>
                    <div className="glass-pill" style={{ fontSize: '0.75rem', padding: '0.25rem 0.65rem' }}>
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    {exp.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {exp.highlights.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        <CheckCircle2 size={14} style={{ color: 'var(--accent-emerald)', marginTop: '2px', flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

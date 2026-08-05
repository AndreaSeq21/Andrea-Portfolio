import React from 'react';
import { Briefcase, GraduationCap, MapPin, Award, CheckCircle2, Trophy, Phone, Mail } from 'lucide-react';
import { experiences, education, awardsData, personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <span className="section-tag">Background & Experience</span>
          <h2 className="section-title">About <span className="gradient-text">Andrea</span></h2>
          <p className="section-desc">
            {personalInfo.summary}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2.5rem'
        }} className="about-grid">

          {/* Left Column: Bio, Education & Awards */}
          <div>
            {/* Education Card */}
            <div className="glass-card" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.3rem',
                fontWeight: '700',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem'
              }}>
                <GraduationCap style={{ color: 'var(--accent-cyan)' }} />
                Education
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {education.map((edu, idx) => (
                  <div key={idx} style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    padding: '1rem 1.25rem',
                    borderRadius: '0.75rem',
                    border: '1px solid var(--border-subtle)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-main)' }}>
                        {edu.degree}
                      </h4>
                      <span className="glass-pill" style={{ fontSize: '0.75rem' }}>
                        {edu.period}
                      </span>
                    </div>
                    <div style={{ color: 'var(--accent-cyan)', fontWeight: '600', fontSize: '0.9rem', marginTop: '0.2rem' }}>
                      {edu.school} • <span style={{ color: 'var(--text-dim)' }}>{edu.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards & Recognition */}
            <div className="glass-card" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.3rem',
                fontWeight: '700',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem'
              }}>
                <Trophy style={{ color: 'var(--accent-indigo)' }} />
                Honors & Achievements
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {awardsData.map((award, idx) => (
                  <div key={idx} style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    padding: '0.9rem 1.1rem',
                    borderRadius: '0.75rem',
                    border: '1px solid var(--border-subtle)'
                  }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                      🏆 {award.title}
                    </div>
                    <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                      {award.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lifestyle Photo & Quick Contact Card */}
            <div className="glass-card" style={{ padding: '1.5rem', overflow: 'hidden' }}>
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                <img
                  src={personalInfo.avatarCasual}
                  alt="Andrea Joyce Sequeira"
                  style={{
                    width: '100px',
                    height: '110px',
                    borderRadius: '0.85rem',
                    objectFit: 'cover',
                    border: '1px solid var(--border-glow)',
                    flexShrink: 0
                  }}
                />
                <div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                    Contact & Base
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <MapPin size={14} style={{ color: 'var(--accent-cyan)' }} />
                      <span>{personalInfo.location}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Mail size={14} style={{ color: 'var(--accent-indigo)' }} />
                      <span>{personalInfo.email}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Phone size={14} style={{ color: 'var(--accent-emerald)' }} />
                      <span>{personalInfo.phone}</span>
                    </div>
                  </div>
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
              Professional Experience
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {experiences.map((exp, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <div>
                      <h4 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-main)' }}>
                        {exp.role}
                      </h4>
                      <div style={{ color: 'var(--accent-cyan)', fontWeight: '600', fontSize: '0.95rem' }}>
                        {exp.company} • <span style={{ color: 'var(--text-dim)', fontWeight: '400', fontSize: '0.85rem' }}>{exp.location}</span>
                      </div>
                    </div>
                    <span className="glass-pill" style={{ fontSize: '0.75rem', padding: '0.25rem 0.65rem' }}>
                      {exp.period}
                    </span>
                  </div>

                  {/* Tech stack badges */}
                  <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', margin: '0.75rem 0' }}>
                    {exp.stack.map((t, i) => (
                      <span key={i} style={{
                        fontSize: '0.7rem',
                        background: 'rgba(99, 102, 241, 0.12)',
                        border: '1px solid rgba(99, 102, 241, 0.25)',
                        borderRadius: '0.25rem',
                        padding: '0.15rem 0.45rem',
                        color: '#c7d2fe'
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.75rem' }}>
                    {exp.highlights.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                        <CheckCircle2 size={14} style={{ color: 'var(--accent-emerald)', marginTop: '3px', flexShrink: 0 }} />
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

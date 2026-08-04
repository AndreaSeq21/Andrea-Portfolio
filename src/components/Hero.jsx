import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Twitter, Sparkles, Terminal, Cpu, Code2, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const titles = [
  "Software Engineer",
  "AI Systems Architect",
  "Agentic Systems Specialist",
  "Full-Stack Developer"
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        if (displayText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="hero" className="section" style={{ paddingTop: '9rem', paddingBottom: '5rem', position: 'relative' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '3rem',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Main Hero Content */}
          <div>
            {/* Top Pill */}
            <div className="glass-pill" style={{ marginBottom: '1.5rem', background: 'rgba(99, 102, 241, 0.1)', borderColor: 'rgba(99, 102, 241, 0.25)' }}>
              <Sparkles size={16} style={{ color: 'var(--accent-cyan)' }} />
              <span style={{ color: 'var(--text-main)', fontSize: '0.85rem' }}>
                Building Next-Gen Web & Agentic AI
              </span>
            </div>

            {/* Main Greeting & Title */}
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '3.5rem',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: '1rem',
              letterSpacing: '-0.03em'
            }} className="hero-title">
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
              <br />
              <span style={{ fontSize: '2.5rem', color: 'var(--text-muted)', fontWeight: '600' }} className="hero-subtitle">
                I build as a{' '}
                <span style={{ color: 'var(--accent-cyan)', borderRight: '2px solid var(--accent-cyan)', paddingRight: '4px' }}>
                  {displayText}
                </span>
              </span>
            </h1>

            {/* Bio Paragraph */}
            <p style={{
              fontSize: '1.15rem',
              color: 'var(--text-muted)',
              marginBottom: '2rem',
              maxWidth: '600px',
              lineHeight: '1.7'
            }}>
              {personalInfo.bio}
            </p>

            {/* CTA Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <a href="#projects" className="btn btn-primary">
                Explore Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
              <a 
                href="#contact" 
                className="btn btn-secondary" 
                style={{ padding: '0.75rem 1rem' }}
                title="Download Resume"
              >
                <Download size={18} /> Resume
              </a>
            </div>

            {/* Social Links Bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Connect:
              </span>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="glass-pill" style={{ padding: '0.5rem', borderRadius: '0.5rem' }}>
                  <Github size={18} />
                </a>
                <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="glass-pill" style={{ padding: '0.5rem', borderRadius: '0.5rem' }}>
                  <Linkedin size={18} />
                </a>
                <a href={personalInfo.socials.twitter} target="_blank" rel="noopener noreferrer" className="glass-pill" style={{ padding: '0.5rem', borderRadius: '0.5rem' }}>
                  <Twitter size={18} />
                </a>
                <a href={personalInfo.socials.email} className="glass-pill" style={{ padding: '0.5rem', borderRadius: '0.5rem' }}>
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Card / Interactive Terminal Card */}
          <div className="glass-card" style={{ padding: '1.75rem', position: 'relative' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '1rem',
              marginBottom: '1.25rem',
              borderBottom: '1px solid var(--border-subtle)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }}></div>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308' }}></div>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }}></div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginLeft: '0.5rem', fontFamily: 'monospace' }}>
                  andrea@developer: ~/portfolio
                </span>
              </div>
              <Terminal size={16} style={{ color: 'var(--text-dim)' }} />
            </div>

            {/* Code Snippet Box */}
            <div style={{
              fontFamily: 'Consolas, Monaco, monospace',
              fontSize: '0.9rem',
              color: '#e2e8f0',
              lineHeight: '1.6',
              marginBottom: '1.75rem'
            }}>
              <p><span style={{ color: 'var(--accent-purple)' }}>const</span> <span style={{ color: 'var(--accent-cyan)' }}>engineer</span> = &#123;</p>
              <p style={{ paddingLeft: '1.25rem' }}>name: <span style={{ color: '#ce9178' }}>"{personalInfo.name}"</span>,</p>
              <p style={{ paddingLeft: '1.25rem' }}>specialties: [</p>
              <p style={{ paddingLeft: '2.5rem', color: '#ce9178' }}>"Agentic AI", "React/Vite", "Full-Stack"</p>
              <p style={{ paddingLeft: '1.25rem' }}>],</p>
              <p style={{ paddingLeft: '1.25rem' }}>status: <span style={{ color: '#4ec9b0' }}>"Ready for high impact"</span></p>
              <p>&#125;;</p>
            </div>

            {/* Grid Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid var(--border-subtle)'
            }}>
              {personalInfo.heroStats.map((stat, idx) => (
                <div key={idx} style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '0.85rem',
                  borderRadius: '0.75rem',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.6rem',
                    fontWeight: '800',
                    color: 'var(--accent-cyan)'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '500' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .hero-title { font-size: 2.75rem !important; }
          .hero-subtitle { font-size: 1.8rem !important; }
        }
      `}</style>
    </section>
  );
}

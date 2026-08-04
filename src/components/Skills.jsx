import React, { useState } from 'react';
import { 
  Bot, Cpu, Network, Sparkles, Database, Brain, 
  Code, FileCode, Palette, Layers, Zap, Box, 
  Server, Terminal, Flame, Cloud, Globe 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  Bot, Cpu, Network, Sparkles, Database, Brain,
  Code, FileCode, Palette, Layers, Zap, Box,
  Server, Terminal, Flame, Cloud, Globe
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillsData.map(c => c.category)];

  const filteredCategories = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter(c => c.category === selectedCategory);

  return (
    <section id="skills" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <span className="section-tag">Technical Competencies</span>
          <h2 className="section-title">Skills & <span className="gradient-text">Technologies</span></h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            A comprehensive overview of my technical stack across full-stack development, agentic AI frameworks, and cloud architecture.
          </p>

          {/* Filter Pills */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginTop: '2rem'
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  border: selectedCategory === cat ? '1px solid var(--accent-indigo)' : '1px solid var(--border-subtle)',
                  background: selectedCategory === cat ? 'rgba(99, 102, 241, 0.25)' : 'var(--bg-pill)',
                  color: selectedCategory === cat ? '#ffffff' : 'var(--text-muted)',
                  transition: 'var(--transition-fast)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {filteredCategories.map((catGroup, groupIdx) => (
            <div key={groupIdx}>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontWeight: '700',
                marginBottom: '1.25rem',
                color: 'var(--accent-cyan)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-cyan)' }}></span>
                {catGroup.category}
              </h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1.25rem'
              }}>
                {catGroup.skills.map((skill, idx) => {
                  const IconComponent = iconMap[skill.icon] || Code;
                  return (
                    <div key={idx} className="glass-card" style={{ padding: '1.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <div style={{
                            padding: '0.5rem',
                            borderRadius: '0.5rem',
                            background: 'rgba(99, 102, 241, 0.15)',
                            color: 'var(--accent-cyan)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            <IconComponent size={20} />
                          </div>
                          <span style={{ fontWeight: '600', fontSize: '1rem', color: 'var(--text-main)' }}>
                            {skill.name}
                          </span>
                        </div>
                        <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--accent-cyan)' }}>
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar Container */}
                      <div style={{
                        width: '100%',
                        height: '6px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        borderRadius: '3px',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          width: `${skill.level}%`,
                          height: '100%',
                          background: 'var(--gradient-primary)',
                          borderRadius: '3px',
                          transition: 'width 1s ease-in-out'
                        }}></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

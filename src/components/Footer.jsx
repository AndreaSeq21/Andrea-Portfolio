import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, Clock } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setTime(timeStr + ' PST');
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      background: 'rgba(7, 9, 14, 0.95)',
      padding: '3rem 0 2rem 0',
      position: 'relative',
      zIndex: 1
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'var(--gradient-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '0.85rem'
            }}>
              AS
            </div>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '1.1rem', color: 'var(--text-main)' }}>
              Andrea Sequeira
            </span>
          </div>

          {/* Local Clock */}
          <div className="glass-pill" style={{ fontSize: '0.8rem' }}>
            <Clock size={14} style={{ color: 'var(--accent-cyan)' }} />
            <span>Local Time: <strong>{time}</strong></span>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="glass-pill"
            style={{ cursor: 'pointer', padding: '0.5rem 1rem', fontSize: '0.85rem', color: 'var(--text-main)' }}
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          paddingTop: '1.5rem',
          fontSize: '0.85rem',
          color: 'var(--text-dim)'
        }}>
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            Designed & Built with React, Vite & <Heart size={14} style={{ color: 'var(--accent-rose)', display: 'inline' }} />
          </div>
        </div>
      </div>
    </footer>
  );
}

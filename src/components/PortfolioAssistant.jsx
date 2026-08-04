import React, { useState } from 'react';
import { Bot, Send, Sparkles, User, RefreshCw, MessageSquare } from 'lucide-react';
import { assistantKnowledge } from '../data/portfolioData';

export default function PortfolioAssistant() {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! I'm Andrea's AI Portfolio Assistant. Ask me anything about Andrea's technical skills, experience, or projects!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const suggestionChips = [
    "What are Andrea's main skills?",
    "Tell me about Agentic AI projects",
    "What is Andrea's current job role?",
    "How can I contact Andrea?"
  ];

  const handleSend = (queryText) => {
    const query = queryText || input;
    if (!query.trim()) return;

    // Add User Message
    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    if (!queryText) setInput('');
    setIsTyping(true);

    // Simulate AI inference & response search
    setTimeout(() => {
      const lower = query.toLowerCase();
      let matchedAnswer = null;

      for (const item of assistantKnowledge) {
        if (item.keywords.some(kw => lower.includes(kw))) {
          matchedAnswer = item.answer;
          break;
        }
      }

      if (!matchedAnswer) {
        matchedAnswer = "Andrea is a Senior Software Engineer specializing in React frontend development, high-throughput microservices, and Agentic AI systems. Feel free to explore the projects section or send a message in the contact form!";
      }

      setMessages(prev => [...prev, { sender: 'bot', text: matchedAnswer }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <section id="assistant" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <span className="section-tag">Interactive AI Feature</span>
          <h2 className="section-title">Portfolio <span className="gradient-text">AI Assistant</span></h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Test out an interactive demonstration of an AI assistant trained on Andrea's background and technical competencies.
          </p>
        </div>

        {/* Chatbot Interface Container */}
        <div className="glass-card" style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0',
          display: 'flex',
          flexDirection: 'column',
          height: '520px'
        }}>
          
          {/* Header Bar */}
          <div style={{
            padding: '1rem 1.5rem',
            borderBottom: '1px solid var(--border-subtle)',
            background: 'rgba(15, 23, 42, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'var(--gradient-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff'
              }}>
                <Bot size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-main)' }}>
                  Andrea Bot v2.4
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--accent-emerald)' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-emerald)' }}></span>
                  Active & Ready
                </div>
              </div>
            </div>

            <button
              onClick={() => setMessages([{
                sender: 'bot',
                text: "Chat history cleared. What would you like to know about Andrea?"
              }])}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-dim)',
                cursor: 'pointer',
                padding: '0.4rem',
                borderRadius: '0.4rem'
              }}
              title="Reset Chat"
            >
              <RefreshCw size={16} />
            </button>
          </div>

          {/* Messages Area */}
          <div style={{
            flexGrow: 1,
            padding: '1.5rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  gap: '0.75rem'
                }}
              >
                {msg.sender === 'bot' && (
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: 'rgba(99, 102, 241, 0.2)',
                    border: '1px solid rgba(99, 102, 241, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                    flexShrink: 0
                  }}>
                    <Bot size={16} />
                  </div>
                )}

                <div style={{
                  maxWidth: '75%',
                  padding: '0.85rem 1.15rem',
                  borderRadius: '1rem',
                  fontSize: '0.95rem',
                  lineHeight: '1.5',
                  background: msg.sender === 'user' 
                    ? 'var(--gradient-primary)' 
                    : 'rgba(255, 255, 255, 0.04)',
                  color: '#ffffff',
                  border: msg.sender === 'user' ? 'none' : '1px solid var(--border-subtle)',
                  boxShadow: msg.sender === 'user' ? '0 4px 14px rgba(99, 102, 241, 0.3)' : 'none'
                }}>
                  {msg.text}
                </div>

                {msg.sender === 'user' && (
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: 'rgba(56, 189, 248, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                    flexShrink: 0
                  }}>
                    <User size={16} />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dim)', fontSize: '0.85rem' }}>
                <Bot size={16} className="animate-spin" /> Thinking...
              </div>
            )}
          </div>

          {/* Quick Suggestion Chips */}
          <div style={{
            padding: '0.5rem 1.5rem',
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
            borderTop: '1px solid var(--border-subtle)'
          }}>
            {suggestionChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(chip)}
                style={{
                  whiteSpace: 'nowrap',
                  fontSize: '0.75rem',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '9999px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)'
                }}
              >
                💬 {chip}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            style={{
              padding: '1rem 1.5rem',
              borderTop: '1px solid var(--border-subtle)',
              background: 'rgba(7, 9, 14, 0.6)',
              display: 'flex',
              gap: '0.75rem'
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me a question about Andrea..."
              style={{
                flexGrow: 1,
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '0.75rem',
                padding: '0.75rem 1rem',
                color: 'var(--text-main)',
                fontSize: '0.95rem',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              className="btn btn-primary"
              style={{ padding: '0.75rem 1.25rem', borderRadius: '0.75rem' }}
            >
              <Send size={16} />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}

import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Floating confetti particles
    const items = [];
    const colors = ['#6366f1', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6'];
    for (let i = 0; i < 40; i++) {
      items.push({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 8 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 3,
        duration: Math.random() * 3 + 3,
      });
    }
    setParticles(items);
  }, []);

  return (
    <div className="congrats-container">
      {/* Background Orbs */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>

      {/* Confetti */}
      <div className="particles-wrapper">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Main Card */}
      <div className="congrats-card">
        <div className="badge">
          <span className="star-icon">✨</span> Outstanding Achievement <span className="star-icon">✨</span>
        </div>

        <h2 className="sub-heading">Congratulations</h2>
        <h1 className="name-heading">Vikash Kumawat</h1>

        <p className="congrats-message">
          🎉 Wishing you immense success, continuous growth, and great achievements ahead!
        </p>

        <div className="action-wrapper">
          <button className="celebrate-btn" onClick={() => window.location.reload()}>
            Celebrate Again 🎊
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

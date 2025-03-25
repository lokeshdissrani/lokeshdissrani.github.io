import React, { useState, useEffect } from 'react';
import './Mario.css';

const Mario = () => {
  const [world, setWorld] = useState(1);
  const [coins, setCoins] = useState(0);
  const [marioPosition, setMarioPosition] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogText, setDialogText] = useState('');

  const worlds = [
    {
      id: 1,
      name: 'Cloud Kingdom',
      description: 'AWS & Cloud Skills',
      completed: true,
      enemies: ['EC2', 'S3', 'Lambda'],
      boss: 'AWS Certified'
    },
    {
      id: 2,
      name: 'Python Plains',
      description: 'Python Development',
      completed: true,
      enemies: ['Pandas', 'NumPy', 'Flask'],
      boss: 'Data Science'
    },
    {
      id: 3,
      name: 'Database Dungeon',
      description: 'MySQL Expertise',
      completed: false,
      enemies: ['Queries', 'Indexes', 'Joins'],
      boss: 'Database Design'
    }
  ];

  const powerUps = [
    { name: 'Fire Flower', effect: 'Backend Power', icon: '🔥' },
    { name: 'Super Star', effect: 'Cloud Invincibility', icon: '⭐' },
    { name: '1-Up', effect: 'Career Growth', icon: '🍄' }
  ];

  const showMessage = (text) => {
    setDialogText(text);
    setShowDialog(true);
    setTimeout(() => setShowDialog(false), 3000);
  };

  useEffect(() => {
    const moveMario = setInterval(() => {
      setMarioPosition(prev => (prev >= 100 ? 0 : prev + 5));
    }, 200);

    return () => clearInterval(moveMario);
  }, []);

  const collectCoin = () => {
    setCoins(c => c + 1);
    showMessage('Coin collected!');
  };

  return (
    <div className={`mario-portfolio world-${world}`}>
      {/* Header with Stats */}
      <div className="header-bar">
        <div className="stats">
          <span className="coin-counter">Coins: {coins} <span className="coin-icon">🟡</span></span>
          <span className="world">World {world}-1</span>
          <span className="time">Time: {new Date().toLocaleTimeString()}</span>
        </div>
      </div>

      {/* Game Screen */}
      <div className="game-screen">
        {/* World Selection */}
        <div className="world-selection">
          {worlds.map(w => (
            <div 
              key={w.id} 
              className={`world-card ${w.completed ? 'completed' : ''} ${world === w.id ? 'active' : ''}`}
              onClick={() => setWorld(w.id)}
            >
              <h3>{w.name}</h3>
              <p>{w.description}</p>
              {w.completed && <span className="completed-badge">⭐</span>}
            </div>
          ))}
        </div>

        {/* Game World */}
        <div className="game-world">
          {/* Mario Character */}
          <div 
            className="mario-character" 
            style={{ left: `${marioPosition}%` }}
            onClick={collectCoin}
          >
            👨‍💻
          </div>

          {/* Ground and Blocks */}
          <div className="ground"></div>
          <div className="block" onClick={() => showMessage('It\'s a-me, Lokesh!')}>🟫</div>
          <div className="question-block" onClick={() => showMessage(powerUps[Math.floor(Math.random() * powerUps.length)].effect)}>❓</div>

          {/* Current World Info */}
          <div className="world-info">
            <h2>{worlds[world-1].name}</h2>
            <div className="enemies">
              <h3>Skills Mastered:</h3>
              <div className="enemy-list">
                {worlds[world-1].enemies.map((e, i) => (
                  <span key={i} className="enemy">{e}</span>
                ))}
              </div>
            </div>
            <div className="boss">
              <h3>Achievement Unlocked:</h3>
              <p>{worlds[world-1].boss}</p>
            </div>
          </div>
        </div>

        {/* Power Ups */}
        <div className="power-ups">
          <h3>Special Abilities:</h3>
          <div className="power-up-grid">
            {powerUps.map((p, i) => (
              <div key={i} className="power-up" onClick={() => showMessage(p.effect)}>
                <span className="power-up-icon">{p.icon}</span>
                <span>{p.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dialog Box */}
        {showDialog && (
          <div className="dialog-box">
            <p>{dialogText}</p>
          </div>
        )}
      </div>

      {/* Footer Menu */}
      <div className="footer-menu">
        <button className="menu-button" onClick={() => showMessage('Resume downloaded!')}>
          Download CV
        </button>
        <button className="menu-button" onClick={() => window.open('mailto:lokeshdissrani@gmail.com')}>
          Contact
        </button>
        <button className="menu-button" onClick={() => window.open('https://www.linkedin.com/in/lokeshdissrani')}>
          LinkedIn
        </button>
      </div>
    </div>
  );
};

export default Mario;
import React, { useState, useEffect } from 'react';
import './GamePortfolio.css';

const GamePortfolio = () => {
  const [activeTab, setActiveTab] = useState('character');
  const [health, setHealth] = useState(100);
  const [xp, setXp] = useState(1850);
  const [level, setLevel] = useState(5);
  const [inventory, setInventory] = useState([]);
  const [dialog, setDialog] = useState('');
  const [showDialog, setShowDialog] = useState(false);

  const skills = [
    { name: 'Python', level: 85, icon: '🐍' },
    { name: 'JavaScript', level: 80, icon: '🟨' },
    { name: 'TypeScript', level: 75, icon: '🔷' },
    { name: 'React', level: 85, icon: '⚛️' },
    { name: 'Node.js', level: 80, icon: '🌿' },
    { name: 'Express.js', level: 75, icon: '🚀' },
    { name: 'AWS', level: 90, icon: '☁️' },
    { name: 'Docker', level: 85, icon: '🐳' },
    { name: 'Kubernetes', level: 75, icon: '🚢' },
    { name: 'Terraform', level: 80, icon: '🛠️' },
    { name: 'CloudFormation', level: 70, icon: '🏗️' },
    { name: 'MySQL', level: 80, icon: '🗃️' },
    { name: 'PostgreSQL', level: 75, icon: '🐘' },
    { name: 'MongoDB', level: 78, icon: '🍃' },
    { name: 'GraphQL', level: 70, icon: '🔍' },
    { name: 'REST APIs', level: 85, icon: '🔌' },
    { name: 'API Dev', level: 85, icon: '📡' },
    { name: 'Microservices', level: 80, icon: '🔗' },
    { name: 'Data Analytics', level: 75, icon: '📊' },
    { name: 'Machine Learning', level: 70, icon: '🤖' },
    { name: 'CI/CD', level: 80, icon: '⚙️' },
    { name: 'Jenkins', level: 75, icon: '🛠️' },
    { name: 'Git', level: 90, icon: '🔗' },
    { name: 'Linux', level: 85, icon: '🐧' },
    { name: 'Bash Scripting', level: 80, icon: '📜' },
    { name: 'Agile & Scrum', level: 85, icon: '🏃' },
    { name: 'Serverless', level: 75, icon: '⚡' }
  ];


  const quests = [
    { title: 'Krowdit.com', completed: true, reward: 'Backend Systems' },
    { title: 'AmexDining.com', completed: true, reward: 'API Integration' },
    { title: 'Giftable.me', completed: false, reward: 'Payment Gateway' }
  ];

  const equipment = [
    { name: 'Laptop', type: 'Weapon', power: '+50 Coding' },
    { name: 'AWS Certified', type: 'Armor', defense: '+30 Cloud' },
    { name: 'Python Master', type: 'Skill', effect: '+25% Efficiency' }
  ];

  useEffect(() => {
    // Simulate character animation
    const interval = setInterval(() => {
      setHealth(h => Math.min(100, h + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const showMessage = (msg) => {
    setDialog(msg);
    setShowDialog(true);
    setTimeout(() => setShowDialog(false), 3000);
  };

  return (
    <div className="game-container">
      {/* Health/XP Bar */}
      <div className="status-bar">
        <div className="health-bar">
          <span>HP: {health}%</span>
          <div className="bar" style={{ width: `${health}%` }}></div>
        </div>
        <div className="xp-bar">
          <span>Lvl {level} - XP: {xp}/2000</span>
          <div className="bar" style={{ width: `${(xp/2000)*100}%` }}></div>
        </div>
      </div>

      {/* Main Game Screen */}
      <div className="game-screen">
        {/* Character View */}
        {activeTab === 'character' && (
          <div className="character-view">
            <div className="character-avatar">
              <div className="pixel-art">👨‍💻</div>
              <div className="character-stats">
                <h3>Lokesh the Engineer</h3>
                <p>Backend Developer</p>
                <p>Specialty: Cloud Architecture</p>
                <a href="https://www.linkedin.com/in/lokeshdissrani" target="_blank" rel="noopener noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" width="40" />
                </a>
                <a href="assets_management/" target="_blank" rel="noopener noreferrer"><h3> Assets Management</h3>
                  <img src="https://img.freepik.com/free-vector/people-taking-out-money-from-bank-concept-illustration_114360-13931.jpg?t=st=1743089182~exp=1743092782~hmac=2acce0a2c41dc95c73d3b400b8a7c5adec05a71b8a8f0be8d3e5f518942af4d3&w=826" alt="Bank" width="40" />
                </a>
                <br/>
                <button 
                  className="game-button"
                  onClick={() => showMessage("Ready for adventure!")}
                >
                  Battle Cry
                </button>
              </div>
            </div>
            <div className="character-skills">
              <h3>Skills</h3>
              {skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  <span className="skill-icon">{skill.icon}</span>
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <div className="skill-level">
                      <div style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quests View */}
        {activeTab === 'quests' && (
          <div className="quests-view">
            <h2>Current Quests</h2>
            {quests.map((quest, i) => (
              <div key={i} className={`quest-item ${quest.completed ? 'completed' : ''}`}>
                <h3>{quest.title}</h3>
                <p>Reward: {quest.reward}</p>
                <div className="quest-status">
                  {quest.completed ? '✅ Completed' : '🕒 In Progress'}
                </div>
              </div>
            ))}
            
            <h2>Work Experience</h2>
            <div className="quest-log">
              <div className="log-entry">
                <h3>Krowd (2023-Present)</h3>
                <p>Backend Engineer for financial data platforms</p>
              </div>
              <div className="log-entry">
                <h3>Coding Ninjas (2022)</h3>
                <p>TA for Data Analytics program</p>
              </div>
              <div className="log-entry">
                <h3>Bank of America (2021)</h3>
                <p>Lockbox Operations team member</p>
              </div>
            </div>
            <h2>Qualifications</h2>
            <div className="quest-log">
              <div className="log-entry">
                <h3>B.Tech (Computer Science)</h3>
                <p>8.23 CGPA</p>
              </div>
            </div>
          </div>
        )}

        {/* Equipment View */}
        {activeTab === 'equipment' && (
          <div className="equipment-view">
            <h2>Tech Stack & Tools</h2>
            <div className="equipment-grid">
              {equipment.map((item, i) => (
                <div key={i} className="equipment-item">
                  <h3>{item.name}</h3>
                  <p>Type: {item.type}</p>
                  <p>{item.power || item.defense || item.effect}</p>
                </div>
              ))}
              <div className="equipment-item">
                <h3>VS Code</h3>
                <p>Type: Tool</p>
                <p>+30% Productivity</p>
              </div>
              <div className="equipment-item">
                <h3>Git</h3>
                <p>Type: Skill</p>
                <p>Version Control Mastery</p>
              </div>
            </div>
          </div>
        )}

        {/* Dialog Box */}
        {showDialog && (
          <div className="dialog-box">
            <p>{dialog}</p>
          </div>
        )}
      </div>

      {/* Game Menu */}
      <div className="game-menu">
        <button 
          className={`menu-button ${activeTab === 'character' ? 'active' : ''}`}
          onClick={() => setActiveTab('character')}
        >
          Character
        </button>
        <button 
          className={`menu-button ${activeTab === 'quests' ? 'active' : ''}`}
          onClick={() => setActiveTab('quests')}
        >
          Quests
        </button>
        <button 
          className={`menu-button ${activeTab === 'equipment' ? 'active' : ''}`}
          onClick={() => setActiveTab('equipment')}
        >
          Equipment
        </button>
        <button 
          className="menu-button"
          onClick={() => window.open('mailto:lokeshdissrani@gmail.com')}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default GamePortfolio;
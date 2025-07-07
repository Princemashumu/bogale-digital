import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Prince Ngwako Mashumu",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
      bio: "Visionary leader with 8+ years in enterprise technology"
    },
    
  ];

  return (
    <div className="team">
      <div className="container">
        <div className="team-header">
          <h2>Meet The Director</h2>
          <p>Experienced professional committed to your success</p>
        </div>
        
        <div className="team-grid">
          {teamMembers.map(member => (
            <div key={member.id} className="team-card">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p className="position">{member.position}</p>
              <p className="bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

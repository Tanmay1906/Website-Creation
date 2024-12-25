// src/components/Team.jsx
import React, { useState, useEffect } from 'react';
import '../styles/Team.css';
import user1 from '../assets/User1.png'; // Import the image for the first team member
import user2 from '../assets/User2.png'; // Import the image for the first team member
import user3 from '../assets/User3.png'; // Import the image for the first team member
import user4 from '../assets/User4.png';

const teamMembers = [
    { id: 1, name: 'Member 1', image: user1, bio: 'Bio of Member 1' },
    { id: 2, name: 'Member 2', image: user2, bio: 'Bio of Member 2' },
    { id: 3, name: 'Member 3', image: user3, bio: 'Bio of Member 3' },
    { id: 4, name: 'Member 4', image: user4, bio: 'Bio of Member 4' },
    // Add more members as needed
];

const Team = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`team-page ${isVisible ? '' : 'hidden'}`}>
            <h1>Our Team</h1>
            <div className="team-members">
                {teamMembers.map(member => (
                    <div key={member.id} className="team-member">
                        <img src={member.image} alt={member.name} />
                        <div className="member-info">
                            <h2>{member.name}</h2>
                            <p>{member.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;

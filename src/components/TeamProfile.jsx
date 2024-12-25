// src/components/TeamProfile.jsx
import React from 'react';
import '../styles/TeamProfile.css'; // Ensure you have styles for the TeamProfile component
import { Link } from 'react-router-dom';
import user1 from '../assets/User1.png'; // Import the image for the first team member
import user2 from '../assets/User2.png'; // Import the image for the first team member
import user3 from '../assets/User3.png'; // Import the image for the first team member
import user4 from '../assets/User4.png'; // Import the image for the first team member
const teamMembers = [
    { id: 1, name: 'Member 1', image: user1 },
    { id: 2, name: 'Member 2', image: user2 },
    { id: 3, name: 'Member 3', image: user3 }, // Adjust the path to your new image
    { id: 4, name: 'Member 4', image: user4 }, // Adjust the path to your new image
    // Add more members as needed
];

const TeamProfile = () => {
    return (
        <div className="team-section">
            <div className="team-title">Our Team</div>
            <div className="team-subtitle">Meet the innovators behind ZIDIO development</div>
            <div className="team-carousel">
                {teamMembers.map(member => (
                    <img key={member.id} src={member.image} alt={member.name} />
                ))}
                <div className="more-members">+5</div>
                <Link to="/team" className="view-all">View All</Link>
            </div>
            
        </div>
    );
};

export default TeamProfile;

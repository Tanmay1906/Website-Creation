// src/components/Achievements.jsx
import React from 'react';
import './styles/Achievements.css';
import award1 from '../assets/award1.jpg';
import award2 from '../assets/award2.png';
import award3 from '../assets/award3.png';

const achievements = [
    { id: 1, title: 'Best Startup Award', image: award1, description: 'Awarded for the best startup in 2024.' },
    { id: 2, title: 'Innovation in Tech', image: award2, description: 'Recognized for innovative technology solutions.' },
    { id: 3, title: 'Top Employer', image: award3, description: 'Honored as a top employer for exceptional workplace culture.' },
    // Add more achievements as needed
];

const Achievements = () => {
    return (
        <div className="achievements-page">
            <h1>Our Achievements</h1>
            <div className="achievements-grid">
                {achievements.map((achievement) => (
                    <div key={achievement.id} className="achievement-item">
                        <img src={achievement.image} alt={achievement.title} />
                        <h3>{achievement.title}</h3>
                        <p>{achievement.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;

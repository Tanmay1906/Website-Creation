// src/components/LandingPage.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../styles/LandingPage.css';
import logo from '../assets/logo.png'; // Adjust the path to your logo image
import aboutImage from '../assets/aboutImage.jpeg'; // Adjust the path to your about image
import Timeline from './Timeline'; // Import the Timeline component
import TeamProfile from './TeamProfile';
import ViewGallery from './ViewGallery';

const LandingPage = () => {
    return (
        <div className="Home">
            <div className="landing-page">
                <img src={logo} alt="Logo" className="logo" />
                <h1>ZIDIO DEVELOPMENT</h1>
                <div className="typewriter">
                    <h4>Business Innovation Through Technology</h4>
                </div>
            </div>
            <div className="About">
                <h3 className="heading">Who we are and What we do?</h3>
                <div className="content">
                    <div className="text">
                        <p>Welcome to Zidio Development Pvt. Ltd. We are a trailblazing software development company where innovation meets expertise. Our team of skilled developers and creative thinkers specializes in turning complex ideas into user-friendly digital solutions. From custom software to cutting-edge mobile apps, we're dedicated to engineering excellence and pushing the boundaries of technology. At Zidio, we believe in the power of collaboration, continuous learning, and adapting to the ever-evolving digital landscape. We're not just developers; we're visionaries committed to delivering impactful software solutions that drive success for businesses globally. Stay connected with us for insights into our groundbreaking projects, tech trends, career opportunities, and our journey in shaping the future of technology.</p>
                    </div>
                    <div className="image">
                        <img src={aboutImage} alt="About Us" />
                    </div>
                </div>
            </div>
            <div className="timeline-container">
                <h1 className='Heading'>Our Timeline</h1>
                <Timeline /> {/* Add the Timeline component */}
            </div>
            <div className='Last'>
                <TeamProfile /> {/* Add the TeamProfile component */}
                <ViewGallery /> {/* Add the ViewGallery component */}
            </div>
        </div>
    );
};

export default LandingPage;

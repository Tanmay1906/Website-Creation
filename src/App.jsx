// src/App.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Team from './components/Team';
import Gallery from './components/Gallery';
import AchievementsGallery from './components/AchievementsGallery';
import JobListings from './components/JobListings';
import ClientReviews from './components/ClientReviews';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/achievements" element={<AchievementsGallery />} />
                <Route path="/team" element={<Team />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/jobs" element={<JobListings />} />
                <Route path="/reviews" element={<ClientReviews />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;

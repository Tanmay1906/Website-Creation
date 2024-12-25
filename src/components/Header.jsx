// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTrophy, faUsers, faBriefcase, faComments } from '@fortawesome/free-solid-svg-icons';
import '../styles/Header.css';
const Header = () => {
    return (
        <header className="navbar">
            <nav className="nav-list">
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faHome} className="fa-icon" /> Home
                    </Link>
                </li>
                <li>
                    <Link to="/achievements">
                        <FontAwesomeIcon icon={faTrophy} className="fa-icon" /> Achievements
                    </Link>
                </li>
                <li>
                    <Link to="/team">
                        <FontAwesomeIcon icon={faUsers} className="fa-icon" /> Team
                    </Link>
                </li>
                <li>
                    <Link to="/jobs">
                        <FontAwesomeIcon icon={faBriefcase} className="fa-icon" /> Jobs
                    </Link>
                </li>
                <li>
                    <Link to="/reviews">
                        <FontAwesomeIcon icon={faComments} className="fa-icon" /> Reviews
                    </Link>
                </li>
            </nav>
        </header>
    );
};

export default Header;

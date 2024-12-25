// src/components/ClientReview.jsx
import React, { useState } from 'react';
import './styles/ClientReview.css';

const ClientReview = () => {
    const [feedback, setFeedback] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [application, setApplication] = useState({
        type: 'internship',
        name: '',
        email: '',
        resume: null,
        domain: 'Artificial Intelligence',
        message: ''
    });

    const [statusMessage, setStatusMessage] = useState('');

    const handleFeedbackChange = (e) => {
        const { name, value } = e.target;
        setFeedback((prevFeedback) => ({
            ...prevFeedback,
            [name]: value
        }));
    };

    const handleApplicationChange = (e) => {
        const { name, value } = e.target;
        if (name === 'resume') {
            setApplication((prevApplication) => ({
                ...prevApplication,
                [name]: e.target.files[0]
            }));
        } else {
            setApplication((prevApplication) => ({
                ...prevApplication,
                [name]: value
            }));
        }
    };

    const handleSubmitFeedback = (e) => {
        e.preventDefault();
        // Display status message
        setStatusMessage('Feedback successfully submitted!');
        // Clear feedback state
        setFeedback({
            name: '',
            email: '',
            message: ''
        });
        // Reset message after 3 seconds
        setTimeout(() => setStatusMessage(''), 3000);
    };

    const handleSubmitApplication = (e) => {
        e.preventDefault();
        // Display status message
        setStatusMessage('Application successfully submitted!');
        // Clear application state
        setApplication({
            type: 'internship',
            name: '',
            email: '',
            resume: null,
            domain: '',
            message: ''
        });
        // Reset message after 3 seconds
        setTimeout(() => setStatusMessage(''), 3000);
    };

    return (
        <div className="client-review-page">
            <h1>Client Reviews & Applications</h1>
            {statusMessage && <div className="status-message">{statusMessage}</div>}
            <div className="sections-container">
                <div className="feedback-section">
                    <h2>Leave Your Feedback</h2>
                    <form onSubmit={handleSubmitFeedback}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={feedback.name}
                            onChange={handleFeedbackChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={feedback.email}
                            onChange={handleFeedbackChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Feedback"
                            value={feedback.message}
                            onChange={handleFeedbackChange}
                            required
                        />
                        <button type="submit">Submit Feedback</button>
                    </form>
                </div>
                <div className="application-section">
                    <h2>Apply for an Internship or Job</h2>
                    <form onSubmit={handleSubmitApplication}>
                        <select
                            name="type"
                            value={application.type}
                            onChange={handleApplicationChange}
                        >
                            <option value="internship">Internship</option>
                            <option value="job">Job</option>
                        </select>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={application.name}
                            onChange={handleApplicationChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={application.email}
                            onChange={handleApplicationChange}
                            required
                        />
                        <select
                            name="domain"
                            value={application.domain}
                            onChange={handleApplicationChange}
                            required
                        >
                            <option value="Artificial Intelligence">Artificial Intelligence</option>
                            <option value="IOT">IOT</option>
                            <option value="Ethical Hacking">Ethical Hacking</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Graphic Designing">Graphic Designing</option>
                        </select>
                        <input
                            type="file"
                            name="resume"
                            accept=".pdf,.doc,.docx"
                            onChange={handleApplicationChange}
                            placeholder="Upload your resume"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Why do you want to join us?"
                            value={application.message}
                            onChange={handleApplicationChange}
                        />
                        <button type="submit">Submit Application</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ClientReview;

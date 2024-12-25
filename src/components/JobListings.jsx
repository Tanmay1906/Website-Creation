// src/components/JobListing.jsx
import React from 'react';
import './styles/JobListing.css';

const jobListings = [
    { id: 1, title: 'Software Engineer', location: 'New York, NY', description: 'We are looking for a Software Engineer to join our team. Proficient in React and Node.js.' },
    { id: 2, title: 'Product Manager', location: 'San Francisco, CA', description: 'Seeking an experienced Product Manager to lead our product development team.' },
    { id: 3, title: 'Data Analyst', location: 'Remote', description: 'Looking for a Data Analyst with strong SQL and Python skills.' },
    // Add more job listings as needed
];

const internshipListings = [
    { id: 1, title: 'Software Development Intern', location: 'Remote', description: 'Looking for a software development intern with knowledge of JavaScript and Python.' },
    { id: 2, title: 'Marketing Intern', location: 'Los Angeles, CA', description: 'Seeking a marketing intern with strong communication skills and a passion for social media.' },
    // Add more internship listings as needed
];

const JobListing = () => {
    return (
        <div className="job-listing-page">
            <h1>Current Job Openings</h1>
            <div className="listings-container">
                <div className="job-listings">
                    <h2>Full-Time Positions</h2>
                    {jobListings.map((job) => (
                        <div key={job.id} className="job-item">
                            <h3>{job.title}</h3>
                            <p><strong>Location:</strong> {job.location}</p>
                            <p>{job.description}</p>
                        </div>
                    ))}
                </div>
                <div className="internship-listings">
                    <h2>Internship Positions</h2>
                    {internshipListings.map((internship) => (
                        <div key={internship.id} className="job-item">
                            <h3>{internship.title}</h3>
                            <p><strong>Location:</strong> {internship.location}</p>
                            <p>{internship.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobListing;

// src/components/Gallery.jsx
import React, { useState } from 'react';
import '../styles/Gallery.css';
import aboutbg from '../assets/Hack1.png';
import aboutbg1 from '../assets/Hack2.png';
import aboutbg2 from '../assets/Work1.png';
import aboutbg3 from '../assets/Work2.png';

const events = [
    { id: 1, name: 'Hackathon', images: [{ src: aboutbg1, alt: 'Gallery Image 1' }, { src: aboutbg, alt: 'Gallery Image 2' }] },
    { id: 2, name: 'Technical workshop', images: [{ src: aboutbg2, alt: 'Gallery Image 3' }, { src: aboutbg3, alt: 'Gallery Image 4' }] },
    // Add more events as needed
];

const Gallery = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleEventClick = (event) => {
        setSelectedEvent(event);
    };

    return (
        <div className="gallery-page">
            <h1>Gallery</h1>
            {!selectedEvent ? (
                <div className="event-list">
                    {events.map(event => (
                        <div key={event.id} className="event-item" onClick={() => handleEventClick(event)}>
                            <h2>{event.name}</h2>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="gallery-grid">
                    <button onClick={() => setSelectedEvent(null)}>Back to Events</button>
                    {selectedEvent.images.map((image, index) => (
                        <div key={index} className="gallery-item">
                            <img src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Gallery;

// src/components/ViewGallery.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import '../styles/ViewGallery.css';
import aboutbg from '../assets/Hack1.png';
import aboutbg1 from '../assets/Hack2.png';
import aboutbg2 from '../assets/Work1.png';
import aboutbg3 from '../assets/Work2.png';

const galleryImages = [
    { src: aboutbg, alt: 'Gallery Image 1' },
    { src: aboutbg1, alt: 'Gallery Image 2' },
    { src: aboutbg2, alt: 'Gallery Image 3' },
    { src: aboutbg3, alt: 'About Background' },
    // Add more images as needed
];

const ViewGallery = () => {
    return (
        <div className="view-gallery">
            <h2>View Our Gallery</h2>
            <p>Explore our curated collection</p>
            <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
                {galleryImages.map((image, index) => (
                    <div key={index}>
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </Carousel>
            <Link to="/gallery" className="view-all">View Full Gallery</Link>
        </div>
    );
};

export default ViewGallery;

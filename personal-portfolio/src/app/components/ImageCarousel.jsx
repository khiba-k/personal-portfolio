"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const ImageCarousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        // <div className="card-img" style={{ position: 'relative', border: '1px solid gold', borderRadius: '60px' }}>
        //     <Image className="project-image" src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
            <>
            {/* Popup Container */}
            <div className="image-popup">
                <div className="carousel-container">
                    {/* Left Arrow */}
                    <span className="arrow left" onClick={prevImage}>
                        &#10094;
                    </span>

                    {/* Carousel Images */}
                    <div className="carousel-images">
                        {images.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                alt={`Image ${index + 1}`}
                                className={index === currentImageIndex ? 'active' : ''}
                            />
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <span className="arrow right" onClick={nextImage}>
                        &#10095;
                    </span>

                    {/* Indicator Circles */}
                    <div className="carousel-indicators">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                                onClick={() => setCurrentImageIndex(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImageCarousel;

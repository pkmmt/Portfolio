'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '@/app/ui/centers/events.css';
const CenterCard = ({ center }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="center-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="image-container">
        <Image 
          src={center.image} 
          alt={center.name}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className={`content ${isHovered ? 'expanded' : ''}`}>
        <h2>{center.name}</h2>
        <p className="description">{center.info}</p>
        <Link href="#" className="learn-more">
          Learn More →
        </Link>
      </div>
    </div>
  );
};

const CentersPage = ({ centers }) => {
  return (
    <div className="centers-page">
      <h1>Our Care Centers</h1>
      <div className="centers-grid">
        {centers.map((center) => (
          <CenterCard key={center.name} center={center} />
        ))}
      </div>
    </div>
  );
};

export default CentersPage;
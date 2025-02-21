'use client'
import React, { useState } from 'react';

const MetricCard = ({ number, title, description, color = '#8cc63f' }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="metric-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      }}
    >
      <div className="metric-circle" style={{ borderColor: color }}>
        <span className="number">{number.toLocaleString()}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const ImpactMetrics = () => {
  const metrics = [
    {
      number: 848,
      title: "Children Protected",
      description: "Children in Places of Safety Programmes"
    },
    {
      number: 1607,
      title: "Gender Support",
      description: "Specialised Gender Based Violence Services"
    },
    {
      number: 4764,
      title: "Family Support",
      description: "Families Receiving Social Work Services"
    },
    {
      number: 154694,
      title: "Nutritional Aid",
      description: "Number of Meals & Food Parcels"
    },
    {
      number: 15694,
      title: "Education",
      description: "Training & Awareness"
    },
    {
      number: 41888,
      title: "Community Impact",
      description: "Empowered by JCW Services"
    }
  ];

  return (
    <div className="impact-container">
      <h2>What We Do</h2>
      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
      <style jsx>{`
        .impact-container {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        h2 {
          text-align: center;
          color: #1c4388;
          font-size: 2.5rem;
          margin-bottom: 2rem;
          position: relative;
        }
        
        h2:after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background-color: #8cc63f;
        }
        
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          padding: 1rem;
        }
        
        .metric-card {
          background: white;
          border-radius: 15px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }
        
        .metric-circle {
          width: 150px;
          height: 150px;
          border: 4px solid #8cc63f;
          border-radius: 50%;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
        }
        
        .number {
          font-size: 2rem;
          font-weight: bold;
          color: #1a365d;
        }
        
        h3 {
          color: #1a365d;
          margin: 1rem 0;
          font-size: 1.25rem;
        }
        
        p {
          color: #4a5568;
          font-size: 1rem;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
};

export default ImpactMetrics;
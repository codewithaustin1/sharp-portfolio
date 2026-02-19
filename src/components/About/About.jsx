import React from 'react';
import { FiCode, FiLayout, FiSmartphone, FiServer } from 'react-icons/fi';
import './About.css';

const About = () => {
  const specialties = [
    {
      icon: <FiCode />,
      title: 'Frontend Architecture',
      description: 'Engineering high-performance, conversion-focused interfaces using React, modern CSS systems, and scalable component architecture.',
    },
    {
      icon: <FiServer />,
      title: 'Backend & System Design',
      description: 'Designing structured APIs, CMS integrations, authentication systems, and database logic with production-ready backend architecture.',
    },
    {
      icon: <FiLayout />,
      title: 'Digital Product Engineering',
      description: 'Building scalable digital ecosystems — from storefronts to content systems — optimized for growth, automation, and monetization.',
    },
    {
      icon: <FiSmartphone />,
      title: 'Responsive & Mobile Systems',
      description: 'Creating mobile-first, adaptive systems that ensure performance, usability, and consistency across devices.',
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text fade-in">
            <h3>Full-Stack Software Developer & Digital Systems Architect</h3>
            <p>
              I design and build scalable digital systems that solve real business problems — not just websites.
            </p>
            <p>
              Where others focus on surface aesthetics, I engineer platforms that integrate performance, backend logic, user experience, and monetization into one cohesive architecture. The result is fast, reliable, production-ready infrastructure that supports growth from day one.
            </p>
            <p>
              My work spans frontend architecture, backend APIs, CMS integrations, authentication systems, analytics, and deployment pipelines. But the objective is never technical complexity for its own sake. It’s operational clarity — systems that automate workflows, reduce friction, and give founders full control over their digital assets.
            </p>
            <p>
              Every platform I build is structured for scalability, optimized for performance, and engineered for long-term sustainability.
            </p>
            <p>
              My mission is straightforward: transform ambitious ideas into robust, revenue-capable systems that empower creators, entrepreneurs, and small businesses to operate confidently — and competitively — in the digital economy.
            </p>
            
            <div className="stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Systems & Projects Built</span>
              </div>
              <div className="stat">
                <span className="stat-number">25+</span>
                <span className="stat-label">Clients & Digital Brands Served</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Building in Tech</span>
              </div>
            </div>
          </div>

          <div className="about-specialties">
            {specialties.map((specialty, index) => (
              <div
                key={specialty.title}
                className="specialty-card fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="specialty-icon">{specialty.icon}</div>
                <h4>{specialty.title}</h4>
                <p>{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

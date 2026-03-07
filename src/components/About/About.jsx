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
            I build scalable digital systems that go far beyond static pages—platforms engineered to solve real business problems and drive measurable growth.
            </p>
            <p>
              While most settle for surface-level design, I craft integrated architectures that combine performance, backend logic, user experience, and monetization into seamless, production-ready ecosystems. Systems that don’t just look good but work harder, smarter, and faster from day one.
            </p>
            <p>
            My expertise covers frontend frameworks, backend APIs, CMS integrations, authentication, analytics, and automated deployment pipelines. But complexity for complexity’s sake is not the goal. It’s about delivering operational clarity—automating workflows, removing friction, and giving founders full control over their digital assets.
            </p>
            <p>
            My mission? To turn ambitious ideas into robust, revenue-capable digital systems that empower creators, entrepreneurs, and small businesses to confidently compete and thrive in the digital economy of tomorrow.
            </p>
          
    
            <div className="stats">
              <div className="stat">
                <span className="stat-number">30+</span>
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

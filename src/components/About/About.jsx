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
              I've spent years watching brilliant ideas die on the launchpad. Not because the vision wasn't there—but because the digital foundation couldn't carry the weight.
            </p>
            <p>
              That's where I come in.
            </p>
            <p>
              I build the infrastructure that turns "what if" into "what's next." While everyone else is debating button colors and font choices, I'm engineering systems that actually move the needle. Payment flows that convert. User experiences that retain. Backend architecture that scales from your first customer to your millionth—without breaking a sweat.
            </p>
            <p>
              Every platform I build is structured for scalability, optimized for performance, and engineered for long-term sustainability.
            </p>
            <p>
              Here's what that looks like in practice: APIs that talk to each other like old friends. Authentication that keeps bad actors out without slowing real users down. CMS integrations that give you control without the headache. Analytics that don't just collect data—they deliver insights.
            </p>
            <p>
              But here's the part that matters most: I build for people who have something to lose.
            </p>
            <p>
              Founders who've poured everything into their vision. Creators whose reputation rides on every launch. Small businesses finally ready to compete with the giants. They don't need another pretty face for their website. They need infrastructure that works while they're sleeping. Systems that catch problems before they become crises. Architecture that grows faster than they do.
            </p>
            <p>
              The result isn't just another platform. It's operational peace of mind. Automated workflows that used to take hours. Digital assets you actually control, not rent from some template company. A foundation built to last through every pivot, every surge, every curveball the market throws at you.
            </p>
            <p>
              So if you're tired of developers who speak in buzzwords and deliver in disappointment—if you're ready to stop managing chaos and start building momentum—let's talk.
            </p>
            <p>
              I'll handle the machine. You focus on the mission.
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

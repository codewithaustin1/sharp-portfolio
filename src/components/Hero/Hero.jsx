import React, { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowRight } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  // Particle animation
  useEffect(() => {
    const particles = document.querySelector('.particles');
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.width = `${Math.random() * 3 + 1}px`;
      particle.style.height = particle.style.width;
      particle.style.animationDelay = `${Math.random() * 3}s`;
      particles.appendChild(particle);
    }

    // Mouse movement effect on particles
    const handleMouseMove = (e) => {
      const particles = document.querySelectorAll('.particle');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      particles.forEach((particle, index) => {
        const speed = 20 + (index * 0.5);
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        particle.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      // Clean up particles
      const particles = document.querySelector('.particles');
      if (particles) {
        particles.innerHTML = '';
      }
    };
  }, []);

  // Typing effect for code window
  useEffect(() => {
    const codeString = `const developer = {
  name: "Austin M.",
  role: "Applied Statistician & Software Developer",
  focus: [
    "Frontend Architecture",
    "Backend Systems",
    "CMS Integration",
    "Digital Product Engineering"
  ],
  stack: ["React", "Node.js", "Strapi", "Firebase", "Netlify"],
  mission: "Build scalable systems that drive digital growth"
};

function launchPlatform(idea) {
  return architect(idea)
    .engineer()
    .optimize()
    .deploy();
}`;

    if (isTyping) {
      let i = 0;
      const typing = setInterval(() => {
        if (i < codeString.length) {
          setDisplayedCode(codeString.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typing);
          setIsTyping(false);
        }
      }, 20);
      
      return () => clearInterval(typing);
    }
  }, [isTyping]);

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/codewithaustin1', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/austin-makachola-820a4a1a2/', label: 'LinkedIn' },
    { icon: <FiTwitter />, href: 'https://x.com/AustinMakachola', label: 'Twitter' },
  ];

  return (
    <section id="home" className="hero">
      <div className="particles"></div>
      <div className="container">
        <div className="hero-content fade-in">
          <h1 className="hero-title">
            <span className="gradient-text">Engineering Scalable</span>
            <br />
            Digital Systems for High-Growth Companies
          </h1>
          <p className="hero-subtitle">
            I'm Austin M. I partner with executives to solve a critical business problem: turning fleeting digital visits into lasting customer relationships. In a market saturated with noise, attention is your scarcest resource. I build the digital ecosystems that bridge the gap between a user's first click and their long-term loyalty—through performance that drives metrics and design that communicates value.
          </p>
          
          {/* Value Props with staggered animation */}
          <div className="hero-value-props">
            <div className="value-prop-item">
              <span>Performance</span>
              <p>Speed & stability that reduces bounce rates and improves conversions.</p>
            </div>
            <div className="value-prop-item">
              <span>Design</span>
              <p>Intuitive journeys that communicate value in seconds, not minutes.</p>
            </div>
            <div className="value-prop-item">
              <span>Scalability</span>
              <p>Systems that grow with your revenue targets, preventing technical debt.</p>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Case Studies <FiArrowRight />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Book a Discovery Call
            </a>
          </div>
          
          <div className="social-links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="social-link"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-image fade-in">
          <div className="code-window">
            <div className="window-header">
              <div className="window-controls">
                <span className="control red"></span>
                <span className="control yellow"></span>
                <span className="control green"></span>
              </div>
              <div className="window-title">system-architecture.js</div>
            </div>
            <div className="code-content">
              <pre>
                <code>{displayedCode || `const developer = {
  name: "Austin M.",
  role: "Applied Statistician & Software Developer",
  focus: [
    "Frontend Architecture",
    "Backend Systems",
    "CMS Integration",
    "Digital Product Engineering"
  ],
  stack: ["React", "Node.js", "Strapi", "Firebase", "Netlify"],
  mission: "Build scalable systems that drive digital growth"
};

function launchPlatform(idea) {
  return architect(idea)
    .engineer()
    .optimize()
    .deploy();
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
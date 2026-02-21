import React, { useEffect } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowRight } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
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
  }, []);

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
            Digital Systems for Growth
          </h1>
          <p className="hero-subtitle">
          I’m Austin, a Full-stack Software Developer based in Nairobi. I partner with businesses to turn complex challenges into digital assets. By bridging the gap between refined frontend experiences and robust backend architecture, I build blazing-fast, SEO-friendly platforms that aren't just ready for production—they're ready to scale.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn">
              Explore My Systems <FiArrowRight />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Ready to Build, Let's Talk
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
              <pre><code>{`const developer = {
  name: "Austin M.",
  role: "Full-stack Software Developer",
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
}`}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

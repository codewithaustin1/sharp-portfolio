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
          <h1 class="hero-title">
  <span class="gradient-text">Scalable Digital Systems</span><br />
  <span class="subhead">Built for Growth, Engineered for Retention</span>
</h1>

<p class="hero-subtitle">
  In a world where attention is the scarcest resource, your digital infrastructure must do more than function—it must perform. I partner with founders and executives to architect <strong>custom software solutions</strong> that eliminate friction, accelerate load times, and transform casual visitors into loyal advocates.
</p>

<ul class="hero-benefits">
  <li>⚡ <strong>Speed that converts:</strong> Sub-second response times that reduce bounce rates by up to 40%.</li>
  <li>🎯 <strong>Design that retains:</strong> Intuitive interfaces that guide users from "hello" to "hire."</li>
  <li>📈 <strong>Scale without sacrifice:</strong> Systems that flex as your revenue grows.</li>
</ul>

<div class="hero-buttons">
  <a href="#projects" class="btn btn-primary">View Case Studies →</a>
  <a href="#contact" class="btn btn-secondary">Book a Discovery Call</a>
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
}`}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiHeart, FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const quickLinks = [
    { label: 'Home', section: 'home' },
    { label: 'About', section: 'about' },
    { label: 'Projects', section: 'projects' },
    { label: 'Skills', section: 'skills' },
    { label: 'Contact', section: 'contact' },
  ];

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/codewithaustin1', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://linkedin.com/in/codewithaustin1', label: 'LinkedIn' },
    { icon: <FiTwitter />, href: 'https://twitter.com/codewithaustin1', label: 'Twitter' },
  ];

  return (
    <footer className="footer">
      <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
        <FiArrowUp />
      </button>

      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">SharpDev</h3>
            <p className="footer-description">
              Building the future one line of code at a time. 
              Passionate about creating digital experiences that make a difference.
            </p>
            <div className="footer-social">
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

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={`/#${link.section}`}
                    onClick={(e) => handleNavClick(e, link.section)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>UI/UX Design</li>
              <li>Consulting</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe to get updates on new projects and articles.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} SharpDev. Made with <FiHeart className="heart-icon" /> by Austin A.
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
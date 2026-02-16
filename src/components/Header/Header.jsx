import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiCode } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash links when coming from another page
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (location.pathname !== '/') {
      // If not on home page, navigate to home with hash
      navigate(`/#${sectionId}`);
    } else {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { label: 'Home', section: 'home' },
    { label: 'About', section: 'about' },
    { label: 'Projects', section: 'projects' },
    { label: 'Skills', section: 'skills' },
    { label: 'Contact', section: 'contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link 
          to="/" 
          className="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <FiCode className="logo-icon" />
          <span>SharpDev</span>
        </Link>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={`/#${item.section}`}
              className="nav-link"
              onClick={(e) => handleNavClick(e, item.section)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="/resume" 
            className="btn btn-small"
            onClick={(e) => {
              e.preventDefault();
              // Handle resume link - open PDF or navigate
              window.open('/resume.pdf', '_blank');
            }}
          >
            Resume
          </a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
};

export default Header;
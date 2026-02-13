import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiFileText, FiAlertCircle, FiCheckCircle, FiHelpCircle, FiUsers, FiCode, FiShield } from 'react-icons/fi';
import './Legal.css';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const terms = [
    {
      icon: <FiFileText />,
      title: "Acceptance of Terms",
      content: "By accessing or using SharpDev's portfolio website and services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service."
    },
    {
      icon: <FiUsers />,
      title: "User Responsibilities",
      content: "You are responsible for your use of the service and for any content you provide. You must not: Violate any laws; Infringe on intellectual property rights; Transmit malware or harmful code; Attempt to gain unauthorized access; Interfere with the proper functioning of the service."
    },
    {
      icon: <FiCode />,
      title: "Intellectual Property",
      content: "The service and its original content, features, and functionality are owned by SharpDev and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. This includes all code, designs, text, graphics, logos, and software."
    },
    {
      icon: <FiShield />,
      title: "Disclaimer of Warranties",
      content: "The service is provided on an 'AS IS' and 'AS AVAILABLE' basis. SharpDev makes no representations or warranties of any kind, express or implied, regarding the operation or availability of the service, or the information, content, and materials included therein."
    },
    {
      icon: <FiAlertCircle />,
      title: "Limitation of Liability",
      content: "To the fullest extent permitted by law, SharpDev shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service."
    },
    {
      icon: <FiHelpCircle />,
      title: "Third-Party Links",
      content: "Our service may contain links to third-party websites or services that are not owned or controlled by SharpDev. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites."
    },
    {
      icon: <FiCheckCircle />,
      title: "Termination",
      content: "We may terminate or suspend your access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive termination."
    }
  ];

  return (
    <div className="legal-page">
      <div className="legal-header">
        <div className="container">
          <Link to="/" className="back-button">
            <FiArrowLeft /> Back to Home
          </Link>
          <h1 className="legal-title">Terms of Service</h1>
          <p className="legal-subtitle">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </div>

      <div className="container">
        <div className="legal-content">
          <div className="legal-intro">
            <div className="intro-card">
              <FiFileText className="intro-icon" />
              <h2>Terms of Use Agreement</h2>
              <p>
                Welcome to Nexa Intel. By accessing our website and services, you agree to be bound 
                by these Terms of Service and all applicable laws and regulations. These terms 
                constitute a legally binding agreement between you and SharpDev.
              </p>
            </div>
          </div>

          <div className="legal-agreement">
            <h3>1. Agreement to Terms</h3>
            <p>
              These Terms of Service constitute a legally binding agreement made between you, 
              whether personally or on behalf of an entity, and Nexa Intel concerning your access 
              to and use of the website. You agree that by accessing the website, you have read, 
              understood, and agree to be bound by all of these Terms of Service.
            </p>

            <h3>2. Project Inquiries and Services</h3>
            <p>
              When you submit a project inquiry through our contact forms or email, you agree to provide 
              accurate and complete information. Nexa Intel reserves the right to refuse service to anyone 
              for any reason at any time. All project proposals, estimates, and agreements will be 
              governed by separate service agreements.
            </p>

            <h3>3. Portfolio Content</h3>
            <p>
              The projects showcased on this portfolio are representative of work completed by SharpDev 
              for various clients. These examples are provided for demonstration purposes only and do 
              not imply endorsement or partnership with the companies or organizations whose projects 
              are featured unless explicitly stated.
            </p>
          </div>

          <div className="sections-grid">
            {terms.map((term, index) => (
              <div key={index} className="legal-section-card">
                <div className="section-icon">{term.icon}</div>
                <h3>{term.title}</h3>
                <p>{term.content}</p>
              </div>
            ))}
          </div>

          <div className="legal-highlight">
            <h3>Governing Law</h3>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the State of 
              California, without regard to its conflict of law provisions. Our failure to enforce any 
              right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </div>

          <div className="legal-contact">
            <h3>Questions & Concerns</h3>
            <p>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="contact-details-legal">
              <p><strong>Email:</strong> legal@austinmakachola.com</p>
              <p><strong>Address:</strong> Nairobi, Kenya</p>
              <p><strong>Hours:</strong> Monday - Friday, 9am - 5pm PST</p>
            </div>
          </div>

          <div className="legal-footer-note">
            <p>These Terms of Service were last updated on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
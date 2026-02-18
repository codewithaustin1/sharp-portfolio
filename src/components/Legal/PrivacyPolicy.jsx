import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiShield, FiLock, FiEye, FiDatabase, FiMail, FiTrash2, FiGlobe } from 'react-icons/fi';
import './Legal.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: <FiShield />,
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you fill out contact forms, subscribe to newsletters, or communicate with us. This may include your name, email address, and any other information you choose to provide."
    },
    {
      icon: <FiDatabase />,
      title: "How We Use Your Information",
      content: "We use the information we collect to: Respond to your inquiries and provide customer support; Send you technical notices, updates, and administrative messages; Communicate with you about products, services, and events; Monitor and analyze trends, usage, and activities; Detect, investigate, and prevent fraudulent transactions and other illegal activities."
    },
    {
      icon: <FiLock />,
      title: "Data Security",
      content: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure."
    },
    {
      icon: <FiEye />,
      title: "Cookies and Tracking",
      content: "We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent."
    },
    {
      icon: <FiGlobe />,
      title: "Third-Party Services",
      content: "We may employ third-party companies and individuals due to the following reasons: To facilitate our Service; To provide the Service on our behalf; To perform Service-related services; or To assist us in analyzing how our Service is used. These third-parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose."
    },
    {
      icon: <FiMail />,
      title: "Email Communications",
      content: "We may send you emails about our services, updates, or other information. You can opt out of receiving marketing emails by following the unsubscribe instructions in those emails. We will never ask for sensitive information via email."
    },
    {
      icon: <FiTrash2 />,
      title: "Your Rights",
      content: "You have the right to: Access and receive a copy of your personal data; Rectify or update your personal data; Delete your personal data; Object to or restrict processing of your personal data; Data portability. To exercise these rights, please contact us using the information provided below."
    }
  ];

  return (
    <div className="legal-page">
      <div className="legal-header">
        <div className="container">
          <Link to="/" className="back-button">
            <FiArrowLeft /> Back to Home
          </Link>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-subtitle">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </div>

      <div className="container">
        <div className="legal-content">
          <div className="legal-intro">
            <div className="intro-card">
              <FiShield className="intro-icon" />
              <h2>Our Commitment to Privacy</h2>
              <p>
                At Nexa Intel, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website. Please read this 
                privacy policy carefully. If you do not agree with the terms of this privacy policy, 
                please do not access the site.
              </p>
            </div>
          </div>

          <div className="sections-grid">
            {sections.map((section, index) => (
              <div key={index} className="legal-section-card">
                <div className="section-icon">{section.icon}</div>
                <h3>{section.title}</h3>
                <p>{section.content}</p>
              </div>
            ))}
          </div>

          <div className="legal-highlight">
            <h3>Changes to This Privacy Policy</h3>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last Updated" date at the top. 
              You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </div>

          <div className="legal-contact">
            <h3>Contact Us</h3>
            <p>
              If you have questions or concerns about this Privacy Policy or our data practices, 
              please contact us at:
            </p>
            <div className="contact-details-legal">
              <p><strong>Email:</strong> privacy@austinmakachola.com</p>
              <p><strong>Address:Nairobi, Kenya</strong> </p>
              <p><strong>Phone:</strong> +254-740-463-021</p>
            </div>
          </div>

          <div className="legal-footer-note">
            <p>This Privacy Policy was last updated on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
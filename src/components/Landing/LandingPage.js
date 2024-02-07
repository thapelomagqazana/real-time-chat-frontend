import React from 'react';
import { Link } from 'react-router-dom';
import { faComments, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./LandingPage.css";

const LandingPage = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                <h1 className="hero-title">Welcome to Chit-Chat</h1>
                <h2 className="hero-description">Connect Instantly, Chat Seamlessly</h2>
                {/* <p className="hero-description">The future of real-time communication</p> */}
                <Link to="/signup" className="cta-button">Sign Up Now</Link>
                </div>
            </section>

            {/* Feature Showcase */}
            <section className="feature-showcase">
                <div className="feature-card">
                <FontAwesomeIcon icon={faComments} className="feature-icon" />
                <h3 className="feature-title">Real-time Chat</h3>
                <p className="feature-description">Chat instantly with friends and colleagues.</p>
                </div>
                <div className="feature-card">
                <FontAwesomeIcon icon={faUsers} className="feature-icon" />
                <h3 className="feature-title">Group Chat</h3>
                <p className="feature-description">Create group chats for effective collaboration.</p>
                </div>
                {/* Add more feature cards as needed */}
            </section>

            {/* Benefits Section */}
            {/* <section className="benefits">
                <div className="benefits-content">
                <h2 className="benefits-title">Why Choose Our App?</h2>
                <div className="benefits-list">
                    <div className="benefit">
                    <h3 className="benefit-title">Solves Common Pain Points</h3>
                    <p className="benefit-description">Address slow email communication and isolated remote work.</p>
                    </div>
                    <div className="benefit">
                    <h3 className="benefit-title">Emotional Connection</h3>
                    <p className="benefit-description">Experience joy of connection and increased productivity.</p>
                    </div>
                    <div className="benefit">
                    <h3 className="benefit-title">Unique Selling Proposition</h3>
                    <p className="benefit-description">Differentiate from competitors and offer something special.</p>
                    </div>
                </div>
                </div>
            </section> */}

            {/* Call to Action & Footer */}
            <footer className="footer">
                <div className="cta-section">
                <h2 className="cta-title">Ready to get started?</h2>
                <Link to="/signup" className="cta-button">Sign Up Now</Link>
                </div>
                <div className="footer-links">
                <Link to="/about">About Us</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/contact">Contact</Link>
                </div>
                <div className="social-icons">
                    {/* Add font awesome icons for social media */}
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
            </footer>
        </div>
      
    );
  }
  
  export default LandingPage;
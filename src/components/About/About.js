import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Your Questions Answered</h2>
            <p className="section-subtitle">Here are the most common questions customers ask before buying from us.</p>
            
            <div className="faq-list">
              <div className="faq-item">
                <h3 className="faq-question">How do digital items get delivered?</h3>
                <p className="faq-answer">After purchase, digital items are delivered instantly to your account. You'll receive a confirmation email with instructions on how to access your items in-game.</p>
              </div>
              
              <div className="faq-item">
                <h3 className="faq-question">Are your gaming accessories compatible with all platforms?</h3>
                <p className="faq-answer">Most of our accessories are designed to be cross-platform compatible. Each product page specifies compatibility with PC, PlayStation, Xbox, and other gaming platforms.</p>
              </div>
              
              <div className="faq-item">
                <h3 className="faq-question">What's your return policy?</h3>
                <p className="faq-answer">We offer a 30-day return policy for physical items in their original condition. Digital items cannot be returned once the code has been revealed or the item has been added to your account.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
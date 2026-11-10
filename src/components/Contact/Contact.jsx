import { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import './Contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, success, error

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear errors when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Validate form fields
  const validateForm = () => {
    const tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required.';
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required.';
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API request (easy to connect EmailJS or generic backend here)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' }); // reset form
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">Let&apos;s Connect</h2>
          <p className="section-desc">
            I&apos;m open to internship opportunities, projects, and software development opportunities.
          </p>
        </div>

        <div className="contact-container">
          {/* Contact Details Grid (Left) */}
          <div className="contact-info">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-desc">
              Feel free to reach out via email or connect with me on professional networks!
            </p>

            <div className="contact-details-list">
              <a href={`mailto:${personalInfo.email}`} className="contact-item-card">
                <div className="contact-item-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">Email</span>
                  <span className="contact-item-value">{personalInfo.email}</span>
                </div>
              </a>

              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-item-card"
              >
                <div className="contact-item-icon">
                  <FaGithub />
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">GitHub</span>
                  <span className="contact-item-value">{personalInfo.github}</span>
                </div>
              </a>

              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-item-card"
              >
                <div className="contact-item-icon">
                  <FaLinkedin />
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">LinkedIn</span>
                  <span className="contact-item-value">{personalInfo.linkedin}</span>
                </div>
              </a>
            </div>
          </div>

          {/* Validated Form (Right) */}
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input ${errors.name ? 'input-error' : ''}`}
                  placeholder="Your Name"
                  disabled={isSubmitting}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'input-error' : ''}`}
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`form-input form-textarea ${errors.message ? 'input-error' : ''}`}
                  placeholder="Hi Padma, I would like to discuss..."
                  disabled={isSubmitting}
                ></textarea>
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              {submitStatus === 'success' && (
                <div className="alert alert-success" role="alert">
                  Your message has been sent successfully! I will get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="alert alert-error" role="alert">
                  Something went wrong. Please try sending your message again.
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn-primary form-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <FaPaperPlane className="btn-icon-right" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

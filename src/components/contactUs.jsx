import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faHome, faInfoCircle, faPieChart, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import da_logo from '../assets/DA_Logo.png'
import bp_logo from '../assets/Bagong Pilipinas Logo.png'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  animation: ${fadeIn} 0.5s ease-out;
`;

const MainContent = styled.main`
  flex: 1;
  background-color: #f8f9fa;
`;

const ContactContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 30px;
  font-family: 'Poppins', sans-serif;
  color: #333;
`;

const Header = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 60px;
  background: linear-gradient(90deg, #0072ff, #00c6ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${slideUp} 0.5s ease-out;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-top: 40px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled.form`
  background-color: #ffffff;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: ${slideUp} 0.5s ease-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #444;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    border-color: #0072ff;
    box-shadow: 0 0 0 2px rgba(0, 114, 255, 0.2);
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #0072ff;
    box-shadow: 0 0 0 2px rgba(0, 114, 255, 0.2);
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(90deg, #0072ff, #00c6ff);
  color: #ffffff;
  padding: 15px 35px;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 114, 255, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 114, 255, 0.4);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const ContactInfo = styled.div`
  background-color: #ffffff;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  animation: ${slideUp} 0.5s ease-out;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }
`;

const ContactIcon = styled(FontAwesomeIcon)`
  font-size: 1.8rem;
  color: #0072ff;
  margin-right: 20px;
`;

const ContactText = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
`;

const MapContainer = styled.div`
  margin-top: 40px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

// Navbar component
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const isActive = (path) => {
      return location.pathname === path ? 'active' : '';
    };
  
    return (
        <nav className="navbar">
          <div className="navbar-logos">
            <img src={da_logo} alt="D.A. Logo" className="navbar-logo da-logo" />
            <img src={bp_logo} alt="Bagong Pilipinas Logo" className="navbar-logo bp-logo" />
          </div>
          <div className="navbar-title">
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/" className={`nav-link ${isActive('/')}`}>
              <FontAwesomeIcon icon={faHome} className="nav-icon" />
              Home
            </Link>
            <Link to="/dadospowerbiportal" className={`nav-link ${isActive('/dadospowerbiportal')}`}>
                <FontAwesomeIcon icon={faPieChart} className="nav-icon" />
                Analytics
              </Link>
            <Link to="/about" className={`nav-link ${isActive('/about')}`}>
              <FontAwesomeIcon icon={faInfoCircle} className="nav-icon" />
              About
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>
              <FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
              Contact Us
            </Link>
          </div>
        </nav>
      );
    };
  
// Footer component
const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h4>About Us</h4>
        <p>The Department of Agriculture Regional Field Office No. 02 is committed to empowering farmers and fishers through innovative agricultural practices and sustainable development.</p>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p><FontAwesomeIcon icon={faPhone} /> (078) 396-1328 / (078) 844-1031</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> ored.rfo2@da.gov.ph</p>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Nursery Compound, San Gabriel, Tuguegarao City, Cagayan 3500</p>
      </div>
      <div className="footer-section">
        <h4>Connect With Us</h4>
        <div className="social-icons">
          <a href="https://www.facebook.com/daregion2official" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 Department of Agriculture Regional Field Office No. 02 All rights reserved.</p>
    </div>
  </footer>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server)
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <PageWrapper>
      <Navbar />
      <MainContent>
        <ContactContainer>
          <Header>Contact Us</Header>
          <ContactGrid>
            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder='Enter your full Name'
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder='Enter you email address'
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <TextArea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder='How can we help you?'
                ></TextArea>
              </FormGroup>
              <SubmitButton type="submit">Send Message</SubmitButton>
            </ContactForm>
            <ContactInfo>
              <ContactItem>
                <ContactIcon icon={faPhone} />
                <ContactText>(078) 396-1328 / (078) 844-1031</ContactText>
              </ContactItem>
              <ContactItem>
                <ContactIcon icon={faEnvelope} />
                <ContactText>ored.rfo2@da.gov.ph</ContactText>
              </ContactItem>
              <ContactItem>
                <ContactIcon icon={faMapMarkerAlt} />
                <ContactText>Nursery Compound, San Gabriel, Tuguegarao City, Cagayan 3500</ContactText>
              </ContactItem>
              <MapContainer>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.0885870804584!2d121.71518731534764!3d17.62521757912382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33858678b4307301%3A0xe11b2a1378952efa!2sDepartment%20of%20Agriculture%2C%20Regional%20Field%20Unit%20II!5e0!3m2!1sen!2sph!4v1625574358792!5m2!1sen!2sph"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </MapContainer>
            </ContactInfo>
          </ContactGrid>
        </ContactContainer>
      </MainContent>
      <Footer />
    </PageWrapper>
  );
};

export default ContactPage;
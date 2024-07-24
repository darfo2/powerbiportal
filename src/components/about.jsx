import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faSeedling, faTractor, faChartLine } from '@fortawesome/free-solid-svg-icons';
import styled, { keyframes } from 'styled-components';
import { faPhone, faEnvelope, faMapMarkerAlt, faHome, faInfoCircle, faPieChart, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
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

const AboutContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;
  font-family: 'Poppins', sans-serif;
  color: #333;
  animation: ${slideUp} 0.5s ease-out;
`;

const Header = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 40px;
  background: linear-gradient(90deg, #0072ff, #00c6ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${slideUp} 0.5s ease-out;
`;

const SubHeader = styled.h2`
  font-size: 2.2rem;
  margin-top: 60px;
  margin-bottom: 30px;
  background: linear-gradient(90deg, #0072ff, #00c6ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  padding-bottom: 15px;

  &:after {
    content: '';
    display: block;
    width: 100%;
    background: linear-gradient(90deg, #0072ff, #00c6ff);
    height: 3px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 25px;
  color: #555;
`;

const MissionStatement = styled.blockquote`
  font-size: 1.4rem;
  font-style: italic;
  color: #4a8c34;
  border-left: 6px solid #4a8c34;
  padding: 30px;
  margin: 40px 0;
  background-color: #e8f5e9;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 50px;
  animation: ${fadeIn} 0.5s ease-out;
`;

const FeatureItem = styled.div`
  text-align: center;
  padding: 40px 20px;
  background-color: #ffffff;
  border-radius: 15px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const FeatureIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  color: #ffffff;
  background: linear-gradient(90deg, #0072ff, #00c6ff);
  padding: 20px;
  border-radius: 50%;
  margin-bottom: 25px;
  transition: all 0.3s ease;

  ${FeatureItem}:hover & {
    transform: scale(1.1);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.4rem;
  color: #2c5e1a;
  margin-bottom: 15px;
  background: linear-gradient(90deg, #0072ff, #00c6ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: linear-gradient(90deg, #0072ff, #00c6ff);
  color: #ffffff;
  padding: 15px 30px;
  border-radius: 30px;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: 40px;
  box-shadow: 0 5px 15px rgba(0, 114, 255, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 114, 255, 0.4);
  }
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
            <Link to="/contact" className={`nav-link ${isActive('/contactus')}`}>
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
            <li><a href="https://www.google.com/error">Contact Us</a></li>
            <li><a href="https://www.google.com/error">Privacy Policy</a></li>
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

  const AboutPage = () => {
    return (
      <PageWrapper>
        <Navbar />
        <MainContent>
          <AboutContainer>
            <Header>About DARFO2 PowerBI Portal</Header>
            <Paragraph>
              Welcome to the Department of Agriculture Regional Field Office No. 02 (DARFO2) PowerBI Portal. 
              Our platform is dedicated to transforming agricultural data into actionable insights through 
              interactive visualizations and comprehensive analytics.
            </Paragraph>
  
            <MissionStatement>
              "Empowering agricultural decision-making through data-driven insights and cutting-edge visualization technology."
            </MissionStatement>
  
            <SubHeader>Our Purpose</SubHeader>
            <Paragraph>
              The DARFO2 PowerBI Portal serves as a central hub for agricultural data analysis in Region 02. 
              We aim to support farmers, policymakers, and agricultural stakeholders by providing easy access 
              to crucial information, trends, and forecasts that drive informed decision-making in the agricultural sector.
            </Paragraph>
  
            <SubHeader>Key Features</SubHeader>
            <FeatureGrid>
              <FeatureItem>
                <FeatureIcon icon={faLeaf} />
                <FeatureTitle>Crop Analytics</FeatureTitle>
                <FeatureDescription>Detailed insights into crop production, yield, and market trends.</FeatureDescription>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon icon={faSeedling} />
                <FeatureTitle>Resource Management</FeatureTitle>
                <FeatureDescription>Tools for optimizing agricultural resources and inputs.</FeatureDescription>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon icon={faTractor} />
                <FeatureTitle>Farm Productivity</FeatureTitle>
                <FeatureDescription>Metrics and benchmarks for improving farm efficiency.</FeatureDescription>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon icon={faChartLine} />
                <FeatureTitle>Market Intelligence</FeatureTitle>
                <FeatureDescription>Up-to-date market data and price forecasts for informed selling decisions.</FeatureDescription>
              </FeatureItem>
            </FeatureGrid>
  
            <SubHeader>Our Commitment</SubHeader>
            <Paragraph>
              At DARFO2, we are committed to fostering sustainable agricultural practices, enhancing food security, 
              and improving the livelihoods of farmers in our region. Through this PowerBI Portal, we strive to 
              bridge the gap between data and action, enabling a more resilient and prosperous agricultural sector.
            </Paragraph>
  
            <Paragraph>
              Whether you're a farmer looking to optimize your crop production, a researcher analyzing agricultural trends, 
              or a policymaker shaping agricultural policies, our portal provides the insights you need to make 
              data-driven decisions that positively impact agriculture in Region 02 and beyond.
            </Paragraph>
  
            <CTAButton to="/dadospowerbiportal">Explore Our Analytics</CTAButton>
          </AboutContainer>
        </MainContent>
        <Footer />
      </PageWrapper>
    );
  };
  
  export default AboutPage;
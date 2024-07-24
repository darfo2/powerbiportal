import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from 'react-router-dom';
import { FaChartLine, FaDollarSign, FaClipboardCheck, FaAddressBook, FaFlask, FaChartBar, FaCalculator, FaCreditCard, FaHome } from 'react-icons/fa';
import { IoMdMenu } from 'react-icons/io';
import "../../styles/page.css";
import Footer from '../Footer'
import rad1 from '../../assets/rad1.PNG'
import rad2 from '../../assets/rad2.PNG'
import rad3 from '../../assets/rad3.PNG'
import rad4 from '../../assets/rad4.PNG'

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
  min-height: 100vh;
  animation: ${fadeIn} 0.5s ease-out;
`;

const MainContent = styled.main`
  flex: 1;
  background-color: #f8f9fa;
  transition: margin-left 0.3s ease-in-out;
  margin-left: ${props => props.isShifted ? '250px' : '0'};

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  animation: ${fadeIn} 0.5s ease-out;
  padding: 20px;

  @media (max-width: 969px) {
    justify-content: space-around;
  }
`;

const CardWrapper = styled.div`
  flex: 0 0 calc(33.33% - 20px);
  max-width: calc(33.33% - 20px);
  margin-bottom: 20px;
  animation: ${slideUp} 0.5s ease-out;

  @media (max-width: 969px) {
    flex: 0 0 calc(50% - 20px);
    max-width: calc(50% - 20px);
  }

  @media (max-width: 600px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const HeroSection = styled.div`
  background-color: #f8f9fa;
  color: #333;
  padding: 60px 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  animation: ${fadeIn} 0.5s ease-out;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  animation: ${slideUp} 0.5s ease-out;
`;

const HeroTitle = styled.h1`
  margin: 0;
  font-size: 50px;
  font-weight: 700;
  color: #0072ff;
  text-transform: none;
  letter-spacing: 1px;
  background: linear-gradient(180deg, #0072ff, #00c6ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
  animation: ${slideUp} 0.5s ease-out;
`;

const Sidebar = ({ isOpen }) => {
  const menuItems = [
    { title: 'Home', icon: <FaHome />, link: '/' },
    { title: 'Production Supply and Demand', icon: <FaChartLine />, link: '/ProductionSupplyandDemand' },
    { title: 'Price and Price Trends', icon: <FaDollarSign />, link: '/PriceandPriceTrends' },
    { title: 'Product Standards & Consumer Safety', icon: <FaClipboardCheck />, link: '/ProductStandards' },
    { title: 'Directory & Profiles', icon: <FaAddressBook />, link: '/Directory' },
    { title: 'Res.Info & Tech. Generated by R&D', icon: <FaFlask />, link: '/Research' },
    { title: 'Marketing Data & Forecast', icon: <FaChartBar />, link: '/Marketing' },
    { title: 'Resource Accounting Data', icon: <FaCalculator />, link: '/Resource' },
    { title: 'Credit Facilities & Programs', icon: <FaCreditCard />, link: '/Credit' },
  ];

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.link}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>Resource Accounting Data</HeroTitle>
      </HeroContent>
    </HeroSection>
  );
};

function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [cards] = useState([
    {
      title: "DARFO2 PREXC Accountability Report Card for CY 2024",
      text: "Prepared by Planning, Monitoring, and Evaluation Division",
      imageSrc: rad1,
      powerBIUrl:
        "https://app.powerbi.com/view?r=eyJrIjoiNmU2YTk2Y2ItNTc2OS00OGNhLTg5MDYtZjdhNWRlZWY3NTEwIiwidCI6IjY4OTgwNjFkLTFhNmItNGUzOS1hZGZjLWRjOGFmZTA3MjIwMSIsImMiOjEwfQ%3D%3D",
    },
    {
        title: "Implementation of Irigation Network Services (2015-2023) in Cagayan Valley",
        text: "Prepared by Regional Agricultural Engineering Division",
        imageSrc: rad2,
        powerBIUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiYjMzMmEzMmItNmI4ZS00MTNmLWJmNTAtYjY4MDk0OTc0ZmRlIiwidCI6IjY4OTgwNjFkLTFhNmItNGUzOS1hZGZjLWRjOGFmZTA3MjIwMSIsImMiOjEwfQ%3D%3D&fbclid=IwZXh0bgNhZW0CMTEAAR1XcA1-2hTF0oqkNRWSyJH9N_4IadnhzO3ERZWUCGH75dsLRc26w_xbr1Y_aem_RUg6R-adhnEapuQVaapduA",
      },
      {
        title: "Implementation of Farm-to-Market Road (2016-2023) in Cagayan Valley",
        text: "Prepared by Regional Agricultural Engineering Division",
        imageSrc: rad3,
        powerBIUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiNzRmYTMyNTUtNGE2MC00MDk0LWI3YTctNzk1OWExMGY2MjFlIiwidCI6IjY4OTgwNjFkLTFhNmItNGUzOS1hZGZjLWRjOGFmZTA3MjIwMSIsImMiOjEwfQ%3D%3D",
      },
      {
        title: "HRMO Monitoring Report",
        text: "Prepared by Finance and Administrative Division",
        imageSrc: rad4,
        powerBIUrl:
          "https://app.powerbi.com/reportEmbed?reportId=0cc71a2d-0648-4623-a3a2-b527020b57cf&autoAuth=true&ctid=6898061d-1a6b-4e39-adfc-dc8afe072201",
      }
  ]);

  const handleViewAnalytics = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <PageWrapper>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        <IoMdMenu />
      </button>
      <Sidebar isOpen={isOpen} />
      <MainContent isShifted={isOpen}>
        <Hero />
        <div className="container">
          <CardContainer>
            {cards.map((card, i) => (
              <CardWrapper key={i}>
                <div className="card">
                  <h3>{card.title}</h3>
                  <div className="image-container">
                    <img 
                      src={card.imageSrc} 
                      alt={card.title}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        display: "block",
                        margin: "0 auto",
                      }}
                    />
                  </div>
                  <p>{card.text}</p>
                  {card.powerBIUrl && (
                    <button
                      onClick={() => handleViewAnalytics(card.powerBIUrl)}
                      className="btn"
                    >
                      View Analytics
                    </button>
                  )}
                </div>
              </CardWrapper>
            ))}
          </CardContainer>
        </div>
        <Footer/>
      </MainContent>
    </PageWrapper>
  );
}

export default Page;
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLeaf,
	faChartLine,
	faShield,
	faAddressBook,
	faFlask,
	faChartBar,
	faCalculator,
	faPiggyBank,
	faHome,
	faInfoCircle,
	faPhone,
	faEnvelope,
	faMapMarkerAlt,
	faPieChart,
	faBars,
	faSeedling,
	faTractor,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import styled, { keyframes } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { ReactTyped } from "react-typed";
import da_logo from "../assets/DA_Logo.png";
import bp_logo from "../assets/Bagong Pilipinas Logo.png";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const MenuWrapper = styled.div`
	position: fixed;
	left: ${(props) => (props.isDocked ? "0" : "-250px")};
	top: 0;
	bottom: 0;
	width: 250px;
	background-color: #f8f9fa;
	transition: left 0.3s ease-in-out;
	box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
	z-index: 1000;
`;

const MenuToggle = styled.button`
	position: absolute;
	right: -40px;
	top: 10px;
	background: linear-gradient(180deg, #0072ff, #00c6ff);
	color: white;
	border: none;
	padding: 10px;
	cursor: pointer;
	border-radius: 0 5px 5px 0;
	transition: opacity 0.3s;

	&:hover {
		opacity: 0.8;
	}
`;

const MenuList = styled.ul`
	list-style-type: none;
	padding: 0;
	margin: 60px 0 0 0;
`;

const MenuItem = styled.li`
	padding: 15px 20px;
	cursor: pointer;
	transition: all 0.3s;
	display: flex;
	align-items: center;
	position: relative;
	overflow: hidden;

	&:before {
		content: "";
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, #0072ff, #00c6ff);
		transition: left 0.3s ease;
		z-index: -1;
	}

	&:hover {
		color: white;

		&:before {
			left: 0;
		}
	}
`;

const MenuIcon = styled(FontAwesomeIcon)`
	margin-right: 10px;
	color: #0072ff;
	transition: transform 0.3s, color 0.3s;

	${MenuItem}:hover & {
		transform: scale(1.2);
		color: white;
	}
`;

const MenuText = styled.span`
	transition: color 0.3s;
	position: relative;
	z-index: 1;

	${MenuItem}:hover & {
		color: white;
	}
`;

const MainContent = styled.main`
	margin-left: ${(props) => (props.isDocked ? "250px" : "0")};
	transition: margin-left 0.3s ease-in-out;
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

const ContentSection = styled.section`
	padding: 60px 20px;
	background-color: #ffffff;
`;

const SectionTitle = styled.h2`
	font-size: 2.5rem;
	text-align: center;
	margin-bottom: 40px;
	background: linear-gradient(90deg, #0072ff, #00c6ff);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const FeatureGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 40px;
	margin-top: 50px;
`;

const FeatureItem = styled.div`
	text-align: center;
	padding: 30px;
	background-color: #f8f9fa;
	border-radius: 10px;
	transition: all 0.3s ease;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

	&:hover {
		transform: translateY(-10px);
		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
	}
`;

const FeatureIcon = styled(FontAwesomeIcon)`
	font-size: 3rem;
	color: #0072ff;
	margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
	font-size: 1.4rem;
	margin-bottom: 15px;
	background: linear-gradient(90deg, #0072ff, #00c6ff);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const FeatureDescription = styled.p`
	font-size: 1rem;
	color: #666;
`;

const Hero = () => {
	return (
		<HeroSection>
			<HeroContent>
				<HeroTitle>DARFO2 PowerBI Portal</HeroTitle>
				<div className="hero-typed-container">
					<p className="hero-typed-prefix">Empowering</p>
					<ReactTyped
						className="hero-typed"
						strings={["Agriculture", "Decision-Making", "Efficiency"]}
						typeSpeed={80}
						backSpeed={50}
						loop
					/>
				</div>
				<p className="hero-description">
					Transform agricultural data into actionable insights with interactive
					visualizations.
				</p>
			</HeroContent>
		</HeroSection>
	);
};

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const isActive = (path) => {
		return location.pathname === path ? "active" : "";
	};

	return (
		<nav className="navbar">
			<div className="navbar-logos">
				<img src={da_logo} alt="D.A. Logo" className="navbar-logo da-logo" />
				<img
					src={bp_logo}
					alt="Bagong Pilipinas Logo"
					className="navbar-logo bp-logo"
				/>
			</div>
			<div className="navbar-title"></div>
			<div className="hamburger" onClick={toggleMenu}>
				<FontAwesomeIcon icon={faBars} />
			</div>
			<div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
				<Link to="/" className={`nav-link ${isActive("/")}`}>
					<FontAwesomeIcon icon={faHome} className="nav-icon" />
					Home
				</Link>
				<Link
					to="/dadospowerbiportal"
					className={`nav-link ${isActive("/dadospowerbiportal")}`}
				>
					<FontAwesomeIcon icon={faPieChart} className="nav-icon" />
					Analytics
				</Link>
				<Link to="/about" className={`nav-link ${isActive("/about")}`}>
					<FontAwesomeIcon icon={faInfoCircle} className="nav-icon" />
					About
				</Link>
				<Link to="/contact" className={`nav-link ${isActive("/contactus")}`}>
					<FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
					Contact Us
				</Link>
			</div>
		</nav>
	);
};

const Footer = () => (
	<footer className="footer">
		<div className="footer-content">
			<div className="footer-section">
				<h4>About Us</h4>
				<p>
					The Department of Agriculture Regional Field Office No. 02 is
					committed to empowering farmers and fishers through innovative
					agricultural practices and sustainable development.
				</p>
			</div>
			<div className="footer-section">
				<h4>Quick Links</h4>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<a href="https://www.google.com/error">Contact Us</a>
					</li>
					<li>
						<a href="https://www.google.com/error">Privacy Policy</a>
					</li>
				</ul>
			</div>
			<div className="footer-section">
				<h4>Contact Us</h4>
				<p>
					<FontAwesomeIcon icon={faPhone} /> (078) 396-1328 / (078) 844-1031
				</p>
				<p>
					<FontAwesomeIcon icon={faEnvelope} /> ored.rfo2@da.gov.ph
				</p>
				<p>
					<FontAwesomeIcon icon={faMapMarkerAlt} /> Nursery Compound, San
					Gabriel, Tuguegarao City, Cagayan 3500
				</p>
			</div>
			<div className="footer-section">
				<h4>Connect With Us</h4>
				<div className="social-icons">
					<a
						href="https://www.facebook.com/daregion2official"
						aria-label="Facebook"
					>
						<FontAwesomeIcon icon={faFacebook} />
					</a>
				</div>
			</div>
		</div>
		<div className="footer-bottom">
			<p>
				&copy; 2024 Department of Agriculture Regional Field Office No. 02 All
				rights reserved.
			</p>
		</div>
	</footer>
);

const MainMenu = ({ children }) => {
	const [isDocked, setIsDocked] = useState(true);

	const menuItems = [
		{ title: "Production Supply and Demand", icon: faLeaf },
		{ title: "Price and Price Trends", icon: faChartLine },
		{ title: "Product Standards & Consumer Safety", icon: faShield },
		{ title: "Directory and Profiles", icon: faAddressBook },
		{ title: "Research Info and Technology Generated by R&D", icon: faFlask },
		{ title: "Marketing Data and Forecast", icon: faChartBar },
		{ title: "Resource Accounting Data", icon: faCalculator },
		{ title: "Credit Facilities and Programs", icon: faPiggyBank },
	];

	const toggleMenu = () => {
		setIsDocked(!isDocked);
	};

	return (
		<>
			<Navbar />
			<MenuWrapper isDocked={isDocked}>
				<MenuToggle onClick={toggleMenu}>{isDocked ? "◀" : "▶"}</MenuToggle>
				<MenuList>
					{menuItems.map((item, index) => (
						<MenuItem key={index}>
							<MenuIcon icon={item.icon} />
							<MenuText>{item.title}</MenuText>
						</MenuItem>
					))}
				</MenuList>
			</MenuWrapper>
			<MainContent isDocked={isDocked}>
				<Hero />
				{children}
				<ContentSection></ContentSection>
			</MainContent>
			<Footer />
		</>
	);
};

export default MainMenu;

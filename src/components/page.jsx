import React from "react";
import { useState } from "react";
import Lottie from "react-lottie";
import "../styles/page.css";
import pmedAnimation from "../animations/pmed2.json";
import ildAnimation from "../animations/ild2.json";
import research from "../animations/research.json";
import raedAnimation from "../animations/raed.json";
import amadAnimation from "../animations/amad.json";
import hrAnimation from "../animations/hr.json";
import rafisAnimation from "../animations/rafis.json";
import regulatoryAnimation from "../animations/regulatory.json";
import rcesAnimation from "../animations/rces.json";
import styled, { keyframes } from "styled-components";
import { ReactTyped } from "react-typed";
import Navbar from "./Navbar";
import Footer from "./Footer";

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

const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	animation: ${fadeIn} 0.5s ease-out;

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

// Hero component
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

//function per card
function Page() {
	const [cards] = useState([
		{
			title: "PMED",
			text: `The Planning, Monitoring, and Evaluation Division (PMED) is a crucial component within organizations, especially in governmental and non-governmental entities, to ensure the effective implementation and success of projects and programs.`,
			animationOptions: {
				loop: true,
				autoplay: true,
				animationData: pmedAnimation,
				rendererSettings: {
					preserveAspectRatio: "xMidYMid slice",
				},
			},
			powerBIUrl:
				"https://app.powerbi.com/view?r=eyJrIjoiNmI1NDgyYzYtOTA0My00YjExLTg5ZGUtNTlhMmIyYWE3MDAzIiwidCI6IjY4OTgwNjFkLTFhNmItNGUzOS1hZGZjLWRjOGFmZTA3MjIwMSIsImMiOjEwfQ%3D%3D",
		},
		{
			title: "ILD",
			text: `The Integrated Laboratory Division (ILD) is an essential component within organizations, particularly in scientific, and industrial contexts. 
      This division centralizes various laboratory functions and services to enhance efficiency, collaboration, and resource utilization.`,
			animationOptions: {
				loop: true,
				autoplay: true,
				animationData: ildAnimation,
				rendererSettings: {
					preserveAspectRatio: "xMidYMid slice",
				},
			},
			powerBIUrl:
				"https://app.powerbi.com/view?r=eyJrIjoiYzA1MmVhNjQtYTJjOS00NmM3LTkxZjYtMDFkYWE5MDk4YjM0IiwidCI6IjY4OTgwNjFkLTFhNmItNGUzOS1hZGZjLWRjOGFmZTA3MjIwMSIsImMiOjEwfQ%3D%3D",
		},
		{
			title: "RESEARCH",
			text: `The Research Division is fundamental to the success and growth of organizations by 
      promoting innovation, ensuring evidence-based decision-making, and contributing to societal progress.`,
			animationOptions: {
				loop: true,
				autoplay: true,
				animationData: research,
				rendererSettings: {
					preserveAspectRatio: "xMidYMid slice",
				},
			},
			powerBIUrl:
				"https://app.powerbi.com/reportEmbed?reportId=0838f3e0-90bf-42a3-9c0b-28db213e8024&autoAuth=true&ctid=6898061d-1a6b-4e39-adfc-dc8afe072201",
		},
		{
			title: "RAED",
			text: `The Regional Agricultural Engineering Division (RAED) plays a vital role in transforming and modernizing regional 
      agriculture through the integration of engineering principles, advancing both economic and environmental sustainability.`,
			animationOptions: {
				loop: true,
				autoplay: true,
				animationData: raedAnimation,
				rendererSettings: {
					preserveAspectRatio: "xMidYMid slice",
				},
			},
			powerBIUrl:
				"https://app.powerbi.com/view?r=eyJrIjoiYjMzMmEzMmItNmI4ZS00MTNmLWJmNTAtYjY4MDk0OTc0ZmRlIiwidCI6IjY4OTgwNjFkLTFhNmItNGUzOS1hZGZjLWRjOGFmZTA3MjIwMSIsImMiOjEwfQ%3D%3D&fbclid=IwZXh0bgNhZW0CMTEAAR1XcA1-2hTF0oqkNRWSyJH9N_4IadnhzO3ERZWUCGH75dsLRc26w_xbr1Y_aem_RUg6R-adhnEapuQVaapduA",
		},
		{
			title: "AMAD",
			text: `Agribusiness and Marketing Assistance (AMAD) is essential for empowering agricultural enterprises to thrive
       in a competitive market, enhancing their business capabilities, and ensuring their long-term sustainability and growth.`,
			animationOptions: {
				loop: true,
				autoplay: true,
				animationData: amadAnimation,
				rendererSettings: {
					preserveAspectRatio: "xMidYMid slice",
				},
			},
			powerBIUrl: "PowerBIReportHere",
		},
		{
			title: "FAD",
			text: `FAD provides centralized administrative support through procurement, maintenance allocation 
      & development of FDC’s manpower and physical resources. It takes charge of the receipt, custody, allocation, 
      utilization of financial resources, and maintenance of accurate financial records.`,
			animationOptions: {
				loop: true,
				autoplay: true,
				animationData: hrAnimation,
				rendererSettings: {
					preserveAspectRatio: "xMidYMid slice",
				},
			},
			powerBIUrl: "PowerBIReportHere",
		},
		{
			title: "RAFIS",
			text: `The Regional Agriculture and Fisheries Information Section (RAFIS) plays a crucial role in bridging the gap between 
      the Department of Agriculture's initiatives and the stakeholders in the agriculture and fisheries sectors, 
      ensuring that important information reaches the intended audiences effectively.`,
			animationOptions: {
				loop: true,
				autoplay: true,
				animationData: rafisAnimation,
				rendererSettings: {
					preserveAspectRatio: "xMidYMid slice",
				},
			},
			powerBIUrl: "PowerBIReportHere",
		},
		{
			title: "REGULATORY",
			text: `The Regulatory Division in the Department of Agriculture is tasked with overseeing and ensuring compliance with agricultural laws, regulations, and standards. 
      This division plays a critical role in safeguarding the quality and safety of agricultural products and practices.`,
			animationOptions: {
				loop: true,
				autoplay: true,
				animationData: regulatoryAnimation,
				rendererSettings: {
					preserveAspectRatio: "xMidYMid slice",
				},
			},
			powerBIUrl:
				"https://app.powerbi.com/reportEmbed?reportId=8df25fb1-8726-4fc8-ad32-a63e15282704&autoAuth=true&ctid=6898061d-1a6b-4e39-adfc-dc8afe072201",
		},
		{
			title: "RCES",
			text: `These Research Centers and Experiment Stations (RCES) are integral to the continuous improvement 
      and modernization of agriculture, ensuring that farmers have access to the latest scientific knowledge and technologies to 
      enhance their productivity and sustainability.`,
			animationOptions: {
				loop: true,
				autoplay: true,
				animationData: rcesAnimation,
				rendererSettings: {
					preserveAspectRatio: "xMidYMid slice",
				},
			},
			powerBIUrl: "PowerBIReportHere",
		},
	]);

	//When "View Analytics" is clicked, it will open another link for the power bi page
	const handleViewAnalytics = (url) => {
		if (url) {
			window.open(url, "_blank", "noopener,noreferrer");
		}
	};

	//render part
	return (
		<PageWrapper>
			<Navbar />
			<Hero />
			<MainContent>
				<div className="container">
					<CardContainer>
						{cards.map((card, i) => (
							<CardWrapper key={i}>
								<div className="card">
									<h3>{card.title}</h3>
									<div className="lottie-container">
										{card.animationOptions && (
											<Lottie
												options={card.animationOptions}
												height="100%"
												width="100%"
												style={{
													maxWidth: "225px",
													maxHeight: "225px",
													margin: "0 auto",
												}}
											/>
										)}
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
			</MainContent>
			<Footer />
		</PageWrapper>
	);
}

export default Page;

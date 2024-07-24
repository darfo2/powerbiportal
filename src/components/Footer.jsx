import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPhone,
	faEnvelope,
	faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

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
				<h4>About Power BI</h4>
				<p>
				Power BI is a Microsoft service for visualizing and 
				sharing data insights through interactive dashboards 
				and reports. It connects to various data sources and helps with 
				data analysis and business intelligence.
				</p>
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
					<a href="https://www.facebook.com" aria-label="Facebook">
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

export default Footer;

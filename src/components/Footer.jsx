import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
	<footer className="footer" style={{ flexShrink: 0 }}>
    <div className="footer-content">
      <div className="footer-section">
        <h2 className="text-2xl font-bold">DA-DOS AYOS!</h2>
        <p className="text-sm">Dedicated Agency Delivering Outstanding Services</p>
      </div>
      <div className="footer-section">
        <h4>Vision</h4>
        <p>
        	Cagayan Valley as Modernized and Industrialized Consolidation hub
			for quality pre-processed and processed foods-feeds farm products.
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
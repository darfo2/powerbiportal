import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChartLine,
	faFlask,
	faMicroscope,
	faTractor,
	faStore,
	faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "./InteractiveMenu.css";

const InteractiveMenu = ({ onClose }) => {
	const menuItems = [
		{ name: "PMED", link: "/pmed", icon: faChartLine },
		{ name: "ILD", link: "/ild", icon: faFlask },
		{ name: "Research", link: "/research", icon: faMicroscope },
		{ name: "RAED", link: "/raed", icon: faTractor },
		{ name: "AMAD", link: "/amad", icon: faStore },
		{ name: "FAD", link: "/fad", icon: faUsers },
	];

	return (
		<div className="interactive-menu">
			<div className="menu-center" onClick={onClose}>
				Power
				<br />
				BI
			</div>
			{menuItems.map((item, index) => (
				<Link key={index} to={item.link} className={`menu-item item-${index}`}>
					<FontAwesomeIcon icon={item.icon} />
					<span className="item-name">{item.name}</span>
				</Link>
			))}
		</div>
	);
};

export default InteractiveMenu;

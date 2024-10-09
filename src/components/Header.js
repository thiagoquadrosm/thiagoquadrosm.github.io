import React from "react";
import {
	NavLink
} from "react-router-dom";

export default function Header() {
	return (
		<header className="header">
			<h1><NavLink to="/">thiago quadros</NavLink></h1>
			<div className="header-direita">
				<p><NavLink to="/sobre">sobre</NavLink></p>
				<p><NavLink to="/cv">cv</NavLink></p>
			</div>
		</header>
	)
}
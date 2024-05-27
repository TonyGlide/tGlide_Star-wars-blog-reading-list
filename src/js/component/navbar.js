import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
		
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
				<img
            src="https://seeklogo.com/images/S/Star_Wars-logo-97DD55947B-seeklogo.com.png"
            alt="Star Wars Logo"
            className="mr-2"
            style={{ height: "60px" }}
          />
				</span>
			</Link>
		

		
			
		</nav>
	);
};

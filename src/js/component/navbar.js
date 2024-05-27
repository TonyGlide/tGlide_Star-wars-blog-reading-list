import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';


export const Navbar = () => {
	const { store, actions } = useContext(Context);

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
			
			<Dropdown>
				<Dropdown.Toggle variant="light" id="dropdown-basic" >
					Favorites <Badge pill bg="light" text="dark">{store.favorites.length}</Badge>
				</Dropdown.Toggle>
				{store.favorites.length > 0 ? (
					<Dropdown.Menu>
						{store.favorites.map((favorite) => (
							<Link key={favorite.uid} className="d-flex gap-2 w-100 justify-content-between py-1 px-3" to={favorite.url}>
								{favorite.name}
								<div className="delete-task text-danger" onClick={(e) => actions.deleteFavorite(favorite)}>
									<FontAwesomeIcon icon={faX} />
								</div>
							</Link>
						))}
					</Dropdown.Menu>
				) : (
					<Dropdown.Menu className="py-2 px-3 w-100">There are no favorites!</Dropdown.Menu>
				)}
			</Dropdown>

		
			
		</nav>
	);
};

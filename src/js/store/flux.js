const getState = ({ getStore, getActions, setStore }) => {
	
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			getPeople: async () => {
			 	 const response = await fetch("https://www.swapi.tech/api/people/");
			if(!response.ok) {
				throw new Error(response.status, response.statusText);
			}	
				 const data = await response.json();
			 	 console.log(data.results);
				 setStore({people: data.results});
			
			},
			getPeopleDetails: () => {},
			getPlanets: async () => {
				 const response = await fetch("https://www.swapi.tech/api/planets/");
				if(!response.ok) {
					throw new Error(response.status, response.statusText);
			}	
				 const data = await response.json();
				 setStore({planets: data.results});
			},
			getPlanetsDetails: () => {},
			getVehicles: async () => {
				const response = await fetch("https://www.swapi.tech/api/vehicles/");
				if(!response.ok) {
					throw new Error(response.status, response.statusText);
			}	
				 const data = await response.json();
				 setStore({planets: data.results});
			},
			getVehiclesDetails: () => {},
			getFavorites: async () => {},
			getfavoritesDetails: () => {},

			}
		}
	};

	export default getState;

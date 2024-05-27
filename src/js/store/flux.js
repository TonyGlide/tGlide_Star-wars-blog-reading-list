import addFavorite  from '../store/addFavorites.jsx'
import deleteFavorite from '../store/deleteFavorites.jsx'

const getState = ({ getStore, getActions, setStore }) => {
	
	return {
		store: {
			people: [],
			personDetails: {
				description: "",
				properties: {}
			},
			planets: [],
			vehicles: [],
			favorites: [],
		},
		actions: {
			getPeople: async () => {
				const response = await fetch("https://www.swapi.tech/api/people/");
			if(!response.ok) {
				throw new Error(response.status, response.statusText);
			}	
				const data = await response.json();
				setStore({people: data.results});
			
			},
			getPersonDetails: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
				if(!response.ok) {
					throw new Error(response.status, response.statusText);
			}	
			 	const data = await response.json();
				const personDetails = {
					description: data.result.description,
					properties: {...data.result.properties}
				}
				setStore({personDetails: personDetails});


			},
			
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
				setStore({vehicles: data.results});
			},
			getVehiclesDetails: () => {},
			
			
			getFavorites: (name, uid) => {
				const newFavorite = addFavorite.getFavorites(name, uid, );
				setStore({ favorites: [...getStore().favorites, newFavorite] });
				              
            },
			deleteFavorites: (favorite) => {
				const newFavorites = deleteFavorite.deleteFavorite(favorite, getStore().favorites);
				setStore({ favorites: newFavorites });
			
			},
		
			
			getfavoritesDetails: () => {},

			}
		}
	};

	export default getState;

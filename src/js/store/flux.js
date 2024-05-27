import addFavorite  from '../store/addFavorites'
import deleteFavorite from '../store/deleteFavorites'

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
			favorites: []
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
			
			
			getFavorites: async () => {},
			
			addFavorite: (name, uid, ) => {
				const newFavorite = addFavoriteDispatcher.addFavorite(name, uid, );
				setStore({ favorites: [...getStore().favorites, newFavorite] });
				              
            },
			deleteFavorite: (favorite) => {
				const newFavorites = deleteFavoriteDispatcher.deleteFavorite(favorite, getStore().favorites);
				setStore({ favorites: newFavorites });
			
			},
		
			
			getfavoritesDetails: () => {},

			}
		}
	};

	export default getState;

const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		characters: [],
  
		planets: [],
  
		starships: [],
  
		characterDetail: {},
  
		planetDetail: {},
  
		starshipDetail: {},
  
			  favorites: [],
  
			 
		  },
		  actions: {
			 
			  getCharacters: () => {
				  fetch("https://www.swapi.tech/api/people")
					  .then(response => {
						  console.log(response);return response.json();
					  })
					  .then((data) => {
						  console.log("Data: ", data)
						  console.log(data.results)
						  setStore({ characters: data.results })
					  })
					  .catch((error) => {
						  console.log(error)
					  })
			  },
  
		favorites: [],
	  },
	  actions: {
		
		getCharacters: () => {
		  fetch("https://www.swapi.tech/api/people")
			.then((response) => {
			  
			  return response.json();
			})
			.then((data) => {
			 
			  setStore({ characters: data.results });
			})
			.catch((error) => {
			  console.log(error);
			});
		},
  	
		getPlanets: () => {
		  fetch("https://www.swapi.tech/api/planets")
			.then((response) => {
			 
			  return response.json();
			})
			.then((data) => {
			  
			  console.log(data.results);
			  setStore({ planets: data.results });
			})
			.catch((error) => {
			  console.log(error);
			});
		},
  
		getStarships: () => {
		  fetch("https://www.swapi.tech/api/starships")
			.then((response) => {
			  
			  return response.json();
			})
			.then((data) => {
			  			 
			  setStore({ starships: data.results });
			})
			.catch((error) => {
			  console.log(error);
			});
		},
  
		getCharacterDetail: (id) => {
		  fetch(`https://www.swapi.tech/api/people/${id}`)
			.then((response) => response.json())
			.then((data) => {
			  setStore({ characterDetail: data.result.properties });
			})
			.catch((error) => {
			  error;
			});
		},
  
		getPlanetDetail: (id) => {
		  fetch(`https://www.swapi.tech/api/planets/${id}`)
			.then((response) => response.json())
			.then((data) => {
			  setStore({ planetDetail: data.result.properties });
			})
			.catch((error) => {
			  error;
			});
		},
  
		getStarshipDetail: (id) => {
		  fetch(`https://www.swapi.tech/api/starships/${id}`)
			.then((response) => response.json())
			.then((data) => {
			  setStore({ starshipDetail: data.result.properties });
			})
			.catch((error) => {
			  error;
			});
		},
  
		addFavorite: (uid, name) => {
		  const favorite = {
			id: uid,
			name: name,
		  };
		  const index = getStore().favorites.findIndex((fav) => fav.name == name);
		  if (index == -1) {
			const newFavorite = [...getStore().favorites, favorite];
			setStore({ favorites: newFavorite });
		
		  } else {
			getActions().deleteFavorite(name);
		  }
		},
  
		deleteFavorite: (name) => {
		  const updateFavorite = getStore().favorites.filter(
			(favorite) => favorite.name != name
		  );
		  getStore().favorites = updateFavorite;
		  setStore({ favorites: updateFavorite });
		},
		  }
	  }
  };
  
  export default getState;
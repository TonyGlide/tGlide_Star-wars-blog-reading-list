const deleteFavorite = {
    deleteFavorite: (favorite, favorites) => {
        const newFavorites = favorites.filter((item) => item.name !== favorite.name);
    return newFavorites;
    }
}

export default deleteFavorite;
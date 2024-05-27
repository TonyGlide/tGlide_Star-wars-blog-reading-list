const addFavorite = {
    addFavorite: (name, uid) => {
        const newFavorite = {
            name: name,
            id: uid,
            url: '/' + '/' + uid            
        };
       
        return newFavorite;
    }
};

export default addFavorite;
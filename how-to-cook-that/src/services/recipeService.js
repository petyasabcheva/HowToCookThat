let url = 'http://localhost:56360/api/';

export const getAll = (category = '') => {
    let recipesUrl = url + ((category && category != 'all') ? `${category}` : 'Recipes');

    return fetch(recipesUrl, {
        headers: {
        }
    })
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const getMostLiked = () => {

    return fetch(`${url}Recipes/GetMostLikedRecipes`, {
        headers: {
            'Content-Type': 'text/plain'
        }
    })
        .then(res => res.json())
        .catch(error => console.log(error));
}
export const getNewest = () => {

    return fetch(`${url}Recipes/GetNewestRecipes`, {
        headers: {
            'Content-Type': 'text/plain'
        }
    })
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const getByUser = (userEmail) => {
    return fetch(`${url}Recipes/ByUser/${userEmail}`, {
        headers: {
            'Content-Type': 'text/plain'
        },
    })
        .then(res => res.json())
        .catch(error => console.log(error));
}


export const getOne = (id) => {
    return fetch(`${url}Recipes/${id}`)
        .then(res => res.json())
        .catch(error => console.log(error));
};

export const create = (recipe) => {
    return fetch(`${url}Recipes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipe)
    });
}

export const update = (recipe) => {
    return fetch(`${url}Recipes/${recipe.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipe)
    });
}

export const deleteRecipe = (id) => {
    return fetch(`${url}Recipes/${id}`, {
        method: 'DELETE'
    });
}


export const like = (id,email) => {
    return fetch(`${url}like/${id}/${email}`, {
        method: 'POST'
    });
}

export const dislike = (id,email) => {
    return fetch(`${url}dislike/${id}/${email}`, {
        method: 'POST'
    });
}

export const checkIfLiked = (id,email) => {
    return fetch(`${url}check/${id}/${email}`);
}
let url = 'http://localhost:56360/api/';

export const getAll = (category = '') => {
    let recipesUrl = url + ((category && category != 'all') ? `${category}` : 'Recipes');

    return fetch(recipesUrl, {
        headers: {
            'Content-Type': 'text/plain'
        }
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
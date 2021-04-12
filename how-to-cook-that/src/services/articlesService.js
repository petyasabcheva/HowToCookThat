let url = 'http://localhost:56360/api/Articles';

export const getAll = () => {
    return fetch(url, {
        headers: {
            'Content-Type': 'text/plain'
        }
    })
        .then(res => res.json())
        .catch(error => console.log(error));
}


export const getTop = () => {
    return fetch(`${url}/GetTop`,{
        headers: {
            'Content-Type': 'text/plain'
        }
    })
        .then(res => res.json())
        .catch(error => console.log(error));
}


export const create = (article) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(article)
    });
}


export const getOne = (id) => {
    return fetch(`${url}/${id}`)
        .then(res => res.json())
        .catch(error => console.log(error));
};

export const deleteArticle = (id) => {
    return fetch(`${url}/${id}`, {
        method: 'DELETE'
    });
}

export const update = (article) => {
    return fetch(`${url}/${article.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(article)
    });
}
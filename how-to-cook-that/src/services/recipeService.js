let url = 'http://localhost:56360/api/';

export const getAll = (category='') => {
    let recipesUrl = url + ((category && category != 'all') ? `${category}` : 'Recipes');
   
return fetch(recipesUrl, {
    headers: {
        'Content-Type': 'text/plain'
    }})
    .then(res => res.json())
    .catch(error => console.log(error));
}
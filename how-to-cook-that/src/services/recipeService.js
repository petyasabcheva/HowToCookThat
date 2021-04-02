export const getAll = () => {
    let url = 'http://localhost:56360/api/Recipes';
   
return fetch(url, {
    headers: {
        'Content-Type': 'text/plain'
    }})
    .then(res => res.json())
    .catch(error => console.log(error));
}
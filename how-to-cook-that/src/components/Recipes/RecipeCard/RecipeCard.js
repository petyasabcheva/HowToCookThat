import './RecipeCard.css'
import { Link } from 'react-router-dom';
import {useEffect,useState} from 'react';

const RecipeCard = (
    { id,
        name,
        imageUrl,
        likes }
) => {
    let[likesCount,setLikesCount]=useState(1);

    useEffect(()=>{
        setLikesCount(likes.length)
    },[likes]);

    return (
        <Link to={`/recipes/details/${id}`}>
            <li className="recipe-wrapper">
                <img src={imageUrl} alt="" />
                <h3 className="recipe-name">
                    {name}
                </h3>
                <span className="recipe-likes">{likesCount} likes</span>
            </li></Link>
    )
}

export default RecipeCard;
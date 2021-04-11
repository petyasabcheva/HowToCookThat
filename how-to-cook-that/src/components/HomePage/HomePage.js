import { useEffect, useState,useContext } from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';

import * as recipeService from '../../services/recipeService';
import RecipeCard from '../Recipes/RecipeCard/RecipeCard';
import './HomePage.css';

const HomePage = () => {
    const { isAuthenticated, email } = useContext(AuthContext);
    let [mostLikedRecipes, setMostLikedRecipes] = useState([]);
    let [newestRecipes, setNewestRecipes] = useState([]);

        useEffect(() => {
            recipeService.getMostLiked().then(res =>{
                setMostLikedRecipes(res)
            }).catch((error) => {
                console.log(error);
            });
            recipeService.getNewest().then(res =>{
                setNewestRecipes(res)
            }).catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="home-page">
            <section className="newest-recipes-section">
                <div className='newest-recipes-wrapper'>
                <h2>Explore our latest recipes</h2>
                    <ul className="newest-recipes-list">
                        {newestRecipes.map(x =>
                            <RecipeCard
                                key={x.id}
                                {...x}
                            />
                        )
                        }
                    </ul>
                </div>
            </section>
            <section className="register-now">
               {isAuthenticated
               ? <h2>Thank you for being part of our comunity. Make sure to <Link to='/recipe/create'>share</Link> your favourite recipes with everyone</h2> 
               : <h2><Link to='/register'>Register now</Link> and share your favourite recipes with the comunity</h2>}
            </section>
            <section className="top-rated-recipes-section">
                <h2>Our Most Liked Recipes</h2>
                <Link to='/recipes/all' className='view-all-btn'>View All Recipes</Link>
                <div className='top-rated-recipes-wrapper'>
                    <ul className="top-rated-recipes-list">
                        {mostLikedRecipes.map(x =>
                            <RecipeCard
                                key={x.id}
                                {...x}
                            />
                        )
                        }
                    </ul>
                </div>
            </section>
        </div>

    )
}


export default HomePage;
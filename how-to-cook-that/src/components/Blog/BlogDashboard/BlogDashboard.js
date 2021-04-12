import {useState,useEffect,useContext} from 'react';
import {Link} from 'react-router-dom'
import * as articlesSercive from '../../../services/articlesService'
import ArticleCard from '../ArticleCard/ArticleCard';
import './BlogDashboard.css'

const RecipeDashboard=()=>{

    let [articles,setArticles]=useState([]);

    
    useEffect(() => {
        articlesSercive.getAll()
        .then(res=>setArticles(res)).catch(error => console.log(error));;
    }, []);

    return(
        <section className="blog-dashboard-section">
            <ul className="articles-list">
                {articles.map(x =>
                    <ArticleCard 
                        key={x.id}
                        {...x}
                    />
                )
                }
            </ul>
        </section>
    )} 

export default RecipeDashboard;
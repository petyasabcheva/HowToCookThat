import { useEffect, useState, useContext } from 'react';
import AuthContext from '../../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import * as articlesService from '../../../services/articlesService';
import './ArticleDetails.css'


const ArticleDetails = ({
    history, match
}) => {
    let [article, setArticle] = useState({});
    const { isAuthenticated, email } = useContext(AuthContext);

    useEffect(() => {
        articlesService.getOne(match.params.id)
            .then(res => setArticle(res));
    }, []);

    const onDeleteClickHandler = (e) => {
        articlesService.deleteArticle(match.params.id)
            .then(() => {
                history.push('/')
            })
    }


    return (
        <section className="article-details-wrapper">
            <h3 >{article.title}</h3>
            <p className="img"><img src={article.imageUrl} alt="articlePhoto" /></p>
            <p className="description">{article.content}</p>
            <div className="controll-article-buttons">
                {isAuthenticated && article.userEmail == email ?
                    <div> <Link to={`/articles/edit/${article.id}`} className="button">Edit Article</Link>
                        <button className='button' onClick={onDeleteClickHandler}>Delete This Article</button></div>
                    : ''}
            </div>
        </section>
    );
};

export default ArticleDetails;
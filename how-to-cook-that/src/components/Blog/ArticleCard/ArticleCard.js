import './ArticleCard.css'
import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react';

const ArticleCard = (
    { id,
        title,
        imageUrl,
        content }
) => {
    var [shortContent,setShortContent]=useState('');

    useEffect(()=>{
        if (content.length > 100) {
            setShortContent(content.substring(0, 99) + "...")
          }
          else{
              setShortContent(content);
          }
          console.log(shortContent);
    },[content]);

    

    return (
        <Link to={`/articles/details/${id}`}>
            <li className="article-wrapper">
                <img src={imageUrl} alt="" />
                <h3 className="article-name">
                    {title}
                </h3>
                <p>{shortContent}</p>
            </li></Link>
    )
}

export default ArticleCard;
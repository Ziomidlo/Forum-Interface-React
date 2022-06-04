import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from 'axios';
import useFetch from "../useFetch";

const SingleArticle = () =>  {


    const { id } = useParams();
    const { data: article, error, isPending } = useFetch(`http://localhost:8000/articles/${id}`);
    console.log(id);
    console.log(article)

    return (
        <div className="article-delete">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { article && (
                <article>
                    <h2>{ article.title }</h2>
                    <p>Stworzony przez { article.user }</p>
                    <div>{ article.body }</div>
                </article>
            )}
        </div>
     );
     
}
 
export default SingleArticle;
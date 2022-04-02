import { useState, useEffect} from "react";
import ArticleList from "./ArticleList";


const ArticleSite = () => {
    const [articles, setArticles] = useState (null);
    const [isPending, setIsPending] = useState(true);


    useEffect (() => {
        fetch('http://localhost:8000/articles').then(res => {
            return res.json()
        }).then(data => {
            setArticles(data);
            setIsPending(false);
        })
    }, [])

    return (
        <div className="ArticleSite">
            { isPending && <div>Loading...</div> }
            {articles && <ArticleList articles = { articles }/>}
        </div>
    );
}
 
export default ArticleSite;